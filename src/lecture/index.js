import {useParams} from 'react-router-dom';

function LecturePage() {
    const {id} = useParams ();
    
    return <h1>강의 상세 페이지 {id} 상품 </h1>;
}

export default LecturePage;