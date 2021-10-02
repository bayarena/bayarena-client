import React, { useState } from 'react';
import './index.css';
import axios from "axios";

function MainPage() {
        const [lectures, setLectures] = React.useState([])
        React.useEffect(
            function(){
                axios
                .get(
                    'https://1bb9c18e-7cd4-4da2-bd36-5fae32075ca7.mock.pstmn.io/products')
                .then(function(result){
                    const lectures = result.data.lectures;
                    setLectures(lectures);
                })
                .catch(function(error){
                    console.error('에러 발생: ', error);
                });
            }, []);

    return (
     <div>  
        <div id="header">
        <div id="header-area">
            <img src="images/icons/logo.png" />
        </div>
    </div>
    <div id="body">
        <div id="banner">
            <img src="images/banners/banner0.png" />
       </div>
       <h1>이번 주 가장 핫한 클래스!</h1>
        <div id="lecture-list">
            {lectures.map(function(lecture, index){
                    return (
                    <div className="lecture-card">
                        <div>
                            <img className="lecture-img" src={lecture.imageUrl}/>
                        </div>
                    <div className="lecture-contents">
                        <span className="lecture-name">
                            {lecture.name}
                        </span>
                        <span className="lecture-price">
                            {lecture.price}
                        </span>
                        <div className="lecture-motivator">
                            <img className="lecture-avatar" src="images/icons/avatar.png"/>
                            <span>{lecture.motivator}</span>
                        </div>
                    </div>
             </div>
                    );
                })
            }
        </div>
    </div>
    <div id="footer"></div>
    </div>  );
}

export default MainPage;