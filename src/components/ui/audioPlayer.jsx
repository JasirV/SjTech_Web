import React, { useRef, useState, useEffect } from "react";
import { FaVolumeHigh } from "react-icons/fa6";

const AudioPlayer = () => {
    const audioPlayer = useRef(null);
    const audio = useRef(new Audio("/images/music/1.mp3"));
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(0.75);

    useEffect(() => {
        audio.current.addEventListener("loadeddata", () => {
            setDuration(audio.current.duration);
            audio.current.volume = volume;
        });

        const updateProgress = () => {
            setCurrentTime(audio.current.currentTime);
        };

        const intervalId = setInterval(updateProgress, 500);

        return () => clearInterval(intervalId);
    }, [volume]);

    const getTimeCodeFromNum = (num) => {
        let seconds = parseInt(num);
        let minutes = parseInt(seconds / 60);
        seconds -= minutes * 60;
        const hours = parseInt(minutes / 60);
        minutes -= hours * 60;

        if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, "0")}`;
        return `${String(hours).padStart(2, "0")}:${minutes}:${String(seconds % 60).padStart(2, "0")}`;
    };

    const handlePlayPause = () => {
        if (audio.current.paused) {
            audio.current.play();
            setIsPlaying(true);
        } else {
            audio.current.pause();
            setIsPlaying(false);
        }
    };

    const handleTimelineClick = (e) => {
        const timelineWidth = audioPlayer.current.querySelector(".timeline").offsetWidth;
        const timeToSeek = (e.nativeEvent.offsetX / timelineWidth) * audio.current.duration;
        audio.current.currentTime = timeToSeek;
    };

    const handleVolumeChange = (e) => {
        const sliderWidth = audioPlayer.current.querySelector(".volume-slider").offsetWidth;
        const newVolume = e.nativeEvent.offsetX / sliderWidth;
        audio.current.volume = newVolume;
        setVolume(newVolume);
    };

    return (
        <div className="audio-sounds mb-30">
            <div className="audio-player" ref={audioPlayer}>
                <div className="timeline" onClick={handleTimelineClick}>
                    <div
                        className="progress"
                        style={{ width: `${(currentTime / duration) * 100}%` }}
                    ></div>
                </div>
                <div className="controls">
                    <div className="play-container">
                        <div
                            className={`toggle-play ${isPlaying ? "pause" : "play"}`}
                            onClick={handlePlayPause}
                        ></div>
                    </div>
                    <div className="time">
                        <div className="current">{getTimeCodeFromNum(currentTime)}</div>
                        <div className="divider">/</div>
                        <div className="length">{getTimeCodeFromNum(duration)}</div>
                    </div>
                    <div className="volume-container">
                        <div className="volume-button">
                            <FaVolumeHigh />
                        </div>
                        <div className="volume-slider" onClick={handleVolumeChange}>
                            <div
                                className="volume-percentage"
                                style={{ width: `${volume * 100}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AudioPlayer;
