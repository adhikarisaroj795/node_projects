import React, { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">SLC</h3>
                <span className="qualification__subtitle">
                  Convent English School
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  -2016
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Higher Secondary Level (+2)
                </h3>
                <span className="qualification__subtitle">
                  Balmiki Providence
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2016 - 2018
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Bachelors In Information Technology(BIT)
                </h3>
                <span className="qualification__subtitle">Kist - College</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2018 - 2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">Kist - College</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2021 - 2024
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Frontend Web Development Internship
                </h3>
                <span className="qualification__subtitle">CodeSoft</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  2020 - 2021
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">IT Assistant</h3>
                <span className="qualification__subtitle">FCS - kathmandu</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  2021 - 2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Freelance Web Developer
                </h3>
                <span className="qualification__subtitle">Freelancer</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  2023 - present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
