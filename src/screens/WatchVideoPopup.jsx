import React from "react";

function WatchVideoPopup({ setWatchVideo }) {
  return (
    <div className="popup__container">
      <div className="popup__container__wrapper">
        <button
          onClick={() => setWatchVideo(false)}
          className="popup__container__wrapper__btn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            class="feather feather-x"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <iframe
          width="420"
          height="315"
          className="popup__container__video"
          src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
        ></iframe>
      </div>
    </div>
  );
}

export default WatchVideoPopup;
