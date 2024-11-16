import React from 'react'

const Preloader = () => {
    return (
        <div id="loading">
            <div id="loading-center">
                <div id="loading-center-absolute">
                    <div className="loading-icon text-center d-flex flex-column align-items-center justify-content-center">
                        <img className="loading-logo" src="/images/loadingg.gif" alt="icon"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preloader