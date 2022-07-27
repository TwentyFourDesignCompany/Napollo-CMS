import React from "react";
import HomeChart from "../components/HomeChart";
import { Line } from "rc-progress";

function Dashboard() {
  return (
    <div className="main__wrapper">
      <div className="main__wrapper__header">
        <div className="main__wrapper__header__heading">Dashboard</div>
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
      <div className="main__wrapper__card__wrapper">
        <div className="main__wrapper__card">
          <span>Total Users</span>
          1,24,896
        </div>
        <div className="main__wrapper__card">
          <span>New Signups</span>
          1,24,896
        </div>
        <div className="main__wrapper__card">
          <span>Total Songs</span>
          1,24,896
        </div>
      </div>
      <div className="main__wrapper__bottom__row">
        <HomeChart />
        <div className="main__wrapper__bottom__right">
          <div className="main__wrapper__bottom__right__row">
            <div className="main__wrapper__bottom__right__row__card">
              560 <span>Deals</span>
            </div>
            <div className="main__wrapper__bottom__right__row__card">
              $21K <span>Other Value</span>
            </div>
          </div>
          <div className="main__wrapper__bottom__right__line">
            <span>Last Month Traffic</span>
            <Line percent={60} strokeWidth={4} strokeColor="#84E8F4" />
          </div>
          <div className="main__wrapper__bottom__right__line">
            <span>New Users</span>
            <Line percent={40} strokeWidth={4} strokeColor="#51459E" />
          </div>
          <div className="main__wrapper__bottom__right__line">
            <span>Revenue</span>
            <Line percent={90} strokeWidth={4} strokeColor="#ffffff" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
