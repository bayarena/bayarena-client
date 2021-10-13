import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";
import { API_URL } from "../config/constants.js";
import dayjs from "dayjs";

function LecturePage() {
  const [lecture, setLecture] = useState(null);
  const { id } = useParams();
  useEffect(function () {
    axios
      .get(`${API_URL}/lectures/${id}`)
      .then(function (result) {
        setLecture(result.data.lecture);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  if (lecture === null) {
    return <h1>상품 정보를 받고 있습니다...</h1>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={`${API_URL}/${lecture.imageUrl}`} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{lecture.motivator}</span>
      </div>
      <div id="content-box">
        <div id="motivator">{lecture.motivator}</div>
        <div id="price">{lecture.price}원</div>
        <div id="createdAt">
          {dayjs(lecture.createdAt).format("YYYY년 MM월 DD일")}
        </div>
        <pre id="description">{lecture.description}</pre>
      </div>
    </div>
  );
}

export default LecturePage;
