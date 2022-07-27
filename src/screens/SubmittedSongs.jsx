import React from "react";
import userPic from "../assets/userPic.png";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function ManageUsersContentRow({ setWatchVideo }) {
  return (
    <div className="main__wrapper__table__container__row">
      <div className="main__wrapper__table__container__row__entry">
        <img
          src={userPic}
          alt="userPic"
          className="main__wrapper__table__container__row__entry__img"
        />
        @Musician 42
      </div>
      <div className="main__wrapper__table__container__row__entry">
        Drivers license
      </div>
      <div
        style={{ width: "50%" }}
        className="main__wrapper__table__container__row__entry"
      >
        <button
          onClick={() => {
            setWatchVideo(true);
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="main__wrapper__table__container__row__btn"
        >
          Watch Submitted Video
        </button>
        <button className="main__wrapper__table__container__row__btn">
          Accept
        </button>
        <button className="main__wrapper__table__container__row__btn">
          Deny
        </button>
      </div>
    </div>
  );
}

function SubmittedSongs({ setWatchVideo }) {
  return (
    <div className="main__wrapper">
      <div className="main__wrapper__header">
        <div className="main__wrapper__header__heading">
          Submitted Songs
          <span>You have total 842 Submitted Songs.</span>
        </div>
        <button className="main__wrapper__header__filter">
          Filters
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.1946 15.2717L21.1946 15.2717"
              stroke="#D0D0D4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.19458 15.2717H5.19458"
              stroke="#D0D0D4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.69458 17.7717C9.07529 17.7717 10.1946 16.6524 10.1946 15.2717C10.1946 13.891 9.07529 12.7717 7.69458 12.7717C6.31387 12.7717 5.19458 13.891 5.19458 15.2717C5.19458 16.6524 6.31387 17.7717 7.69458 17.7717Z"
              stroke="#D0D0D4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.1946 9.27167H21.1946"
              stroke="#D0D0D4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.19458 9.27167H10.1946"
              stroke="#D0D0D4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.6946 11.7717C18.0753 11.7717 19.1946 10.6524 19.1946 9.27167C19.1946 7.89096 18.0753 6.77167 16.6946 6.77167C15.3139 6.77167 14.1946 7.89096 14.1946 9.27167C14.1946 10.6524 15.3139 11.7717 16.6946 11.7717Z"
              stroke="#D0D0D4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="main__wrapper__table__container">
        <div className="main__wrapper__table__container__header">
          <div className="main__wrapper__table__container__header__entry">
            Username
          </div>
          <div className="main__wrapper__table__container__header__entry">
            Song Name
          </div>
          <div
            style={{
              width: "50%",
            }}
            className="main__wrapper__table__container__header__entry"
          ></div>
        </div>
        <ManageUsersContentRow setWatchVideo={setWatchVideo} />
        <ManageUsersContentRow setWatchVideo={setWatchVideo} />
        <ManageUsersContentRow setWatchVideo={setWatchVideo} />
        <ManageUsersContentRow setWatchVideo={setWatchVideo} />
        <ManageUsersContentRow setWatchVideo={setWatchVideo} />
        <ManageUsersContentRow setWatchVideo={setWatchVideo} />
        <ManageUsersContentRow setWatchVideo={setWatchVideo} />
        <ManageUsersContentRow setWatchVideo={setWatchVideo} />
        <ManageUsersContentRow setWatchVideo={setWatchVideo} />
        <ManageUsersContentRow setWatchVideo={setWatchVideo} />
      </div>
      <div className="pagination__container">
        <Stack spacing={2}>
          <Pagination count={10} variant="outlined" shape="rounded" />
        </Stack>
      </div>
    </div>
  );
}

export default SubmittedSongs;
