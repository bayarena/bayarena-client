import React, { useState } from "react";
import "./index.css";
import axios from "axios";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { API_URL } from "../config/constants.js";
dayjs.extend(relativeTime);

function MainPage() {
  const [lectures, setLectures] = React.useState([]);
  React.useEffect(function () {
    axios
      .get(`${API_URL}/lectures`)
      .then(function (result) {
        const lectures = result.data.lectures;
        setLectures(lectures);
      })
      .catch(function (error) {
        console.error("에러 발생: ", error);
      });
  }, []);

  return (
    <div>
      <div id="banner">
        <img src="images/banners/banner0.png" />
      </div>
      <h1 id="lecture-headline">이번 주 가장 핫한 클래스!</h1>
      <div id="lecture-list">
        {lectures.map(function (lecture, index) {
          return (
            <div className="lecture-card">
              <Link className="lecture-link" to={`/lectures/${lecture.id}`}>
                <div>
                  <img
                    className="lecture-img"
                    src={`${API_URL}/${lecture.imageUrl}`}
                  />
                </div>
                <div className="lecture-contents">
                  <span className="lecture-name">{lecture.name}</span>
                  <span className="lecture-price">{lecture.price}</span>
                  <div className="lecture-footer">
                    <div className="lecture-motivator">
                      <img
                        className="lecture-avatar"
                        src="images/icons/avatar.png"
                      />
                      <span>{lecture.motivator}</span>
                    </div>
                    <span className="lecture-date">
                      {dayjs(lecture.createdAt).fromNow()}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainPage;
