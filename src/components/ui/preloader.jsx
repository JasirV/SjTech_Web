import React from 'react';

const Preloader = () => {
  return (
    <div id="loading">
      <div id="loading-center">
        <div className="loading-icon">
          <div className="spinner"></div>
        </div>
      </div>
      <style jsx>{`
        #loading {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        #loading-center {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
        }

        .spinner {
          border: 8px solid blue; /* Blue color for the outer border */
          border-top: 8px solid yellow; /* Yellow for the rotating part */
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 600px) {
          .spinner {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
