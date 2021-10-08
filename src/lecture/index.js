import {useParams} from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import "./index.css";

function LecturePage() {
    const [lecture, setLecture] = useState(null);
    const { id } = useParams ();
    useEffect(function(){
        axios
        .get(`https://1bb9c18e-7cd4-4da2-bd36-5fae32075ca7.mock.pstmn.io/lectures/${id}`)
        .then(function(result){
        setLecture(result.data);
    })
        .catch(function(error){
        console.error(error);
    });
    },[]);

    if(lecture === null){
        return <h1>상품 정보를 받고 있습니다...</h1>
    }
   
    return (
        <div>
            <div id="image-box">
                <img src={"/"+lecture.imageUrl} />
            </div>
            <div id="profile-box">
                <img src="/images/icons/avatar.png" />
                <span>{lecture.motivator}</span>
            </div>
            <div id="content-box">
                <div id="motivator">{lecture.motivator}</div>
                <div id="price">{lecture.price}원</div>
                <div id="createdAt">2021년 10월 7일</div>
                <div id="description">{lecture.description}</div>
            </div>
        </div>
    );
}

export default LecturePage;