import React from "react";
import { Link } from "react-router-dom";
import userPic from "../assets/userPic.png";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import app_adver from "../assets/app_adver.png";

function SideBar() {
  return (
    <div className="sidebar__container">
      <div className="sidebar__container__user">
        <img
          src={userPic}
          alt="User"
          className="sidebar__container__user__pic"
        />
        <div className="sidebar__container__heading">John Smith</div>
      </div>
      <div className="sidebar__container__content">
        <Link to="/dashboard" className="sidebar__container__entry">
          <svg
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.8571 26.2026V16.2642C27.8572 15.5728 27.7143 14.8886 27.4373 14.2536C27.1603 13.6186 26.755 13.0461 26.2461 12.5713L16.7665 3.72245C16.2891 3.27661 15.657 3.0282 15 3.0282C14.3429 3.0282 13.7108 3.27661 13.2334 3.72245L3.75382 12.5713C3.24497 13.0461 2.83962 13.6186 2.56261 14.2536C2.28559 14.8886 2.14275 15.5728 2.14282 16.2642V26.2026C2.14282 26.8762 2.41374 27.5223 2.89598 27.9986C3.37821 28.4749 4.03227 28.7425 4.71425 28.7425H25.2857C25.9677 28.7425 26.6217 28.4749 27.104 27.9986C27.5862 27.5223 27.8571 26.8762 27.8571 26.2026Z"
              stroke="#A4A3A8"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Dashboard</span>
        </Link>
        <Accordion>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="sidebar__container__entry">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 12.8853C14.7049 12.8853 16.3401 12.208 17.5457 11.0025C18.7512 9.79686 19.4285 8.16173 19.4285 6.45677C19.4285 4.75181 18.7512 3.11667 17.5457 1.91108C16.3401 0.705492 14.7049 0.0281982 13 0.0281982C11.295 0.0281982 9.65987 0.705492 8.45428 1.91108C7.24869 3.11667 6.57139 4.75181 6.57139 6.45677C6.57139 8.16173 7.24869 9.79686 8.45428 11.0025C9.65987 12.208 11.295 12.8853 13 12.8853V12.8853ZM17.2857 6.45677C17.2857 7.59341 16.8341 8.6835 16.0304 9.48723C15.2267 10.291 14.1366 10.7425 13 10.7425C11.8633 10.7425 10.7732 10.291 9.96951 9.48723C9.16578 8.6835 8.71425 7.59341 8.71425 6.45677C8.71425 5.32013 9.16578 4.23004 9.96951 3.42631C10.7732 2.62258 11.8633 2.17106 13 2.17106C14.1366 2.17106 15.2267 2.62258 16.0304 3.42631C16.8341 4.23004 17.2857 5.32013 17.2857 6.45677V6.45677ZM25.8571 23.5996C25.8571 25.7425 23.7143 25.7425 23.7143 25.7425H2.28568C2.28568 25.7425 0.142822 25.7425 0.142822 23.5996C0.142822 21.4568 2.28568 15.0282 13 15.0282C23.7143 15.0282 25.8571 21.4568 25.8571 23.5996ZM23.7143 23.5911C23.7121 23.0639 23.3843 21.4782 21.9314 20.0253C20.5343 18.6282 17.905 17.1711 13 17.1711C8.09282 17.1711 5.46568 18.6282 4.06854 20.0253C2.61568 21.4782 2.28997 23.0639 2.28568 23.5911H23.7143Z"
                      fill="#A4A3A8"
                    />
                  </svg>
                  <span>User</span>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel>
              <Link
                to="/manage-users"
                className="sidebar__container__entry__sub"
              >
                Manage Users
              </Link>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="sidebar__container__entry">
                  <svg
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 21.3853V6.03035C8.99993 5.43311 9.21367 4.85557 9.60254 4.40228C9.9914 3.94898 10.5297 3.64988 11.12 3.5591L22.37 1.82785C22.7263 1.77306 23.0902 1.79596 23.4368 1.89498C23.7834 1.994 24.1044 2.1668 24.378 2.40153C24.6516 2.63626 24.8711 2.92737 25.0216 3.2549C25.1721 3.58243 25.25 3.93864 25.25 4.2991V18.8853"
                      stroke="#A4A3A8"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 10.1353L25.25 7.63535"
                      stroke="#A4A3A8"
                      strokeWidth="2"
                    />
                    <path
                      d="M9 21.3853C9 22.3799 8.60491 23.3337 7.90165 24.037C7.19839 24.7403 6.24456 25.1353 5.25 25.1353C4.25544 25.1353 3.30161 24.7403 2.59835 24.037C1.89509 23.3337 1.5 22.3799 1.5 21.3853C1.5 19.3141 3.17875 18.8853 5.25 18.8853C7.32125 18.8853 9 19.3141 9 21.3853ZM25.25 18.8853C25.25 19.8799 24.8549 20.8337 24.1517 21.537C23.4484 22.2403 22.4946 22.6353 21.5 22.6353C20.5054 22.6353 19.5516 22.2403 18.8483 21.537C18.1451 20.8337 17.75 19.8799 17.75 18.8853C17.75 16.8141 19.4288 16.3853 21.5 16.3853C23.5712 16.3853 25.25 16.8141 25.25 18.8853Z"
                      stroke="#A4A3A8"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span>Songs</span>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel>
              <div className="sidebar__container__entry__sub__wrapper">
                <Link
                  to="/manage-songs"
                  className="sidebar__container__entry__sub"
                >
                  Manage Songs
                </Link>
                <Link
                  to="/submitted-songs"
                  className="sidebar__container__entry__sub"
                >
                  Submitted Songs
                </Link>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
      <a href="#" className="sidebar__container__app">
        <img
          src={app_adver}
          alt="app_adver"
          className="sidebar__container__app__image"
        />
      </a>
    </div>
  );
}

export default SideBar;
