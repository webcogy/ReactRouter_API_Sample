import React from 'react';
import qs from 'qs';

function About({ location }){
    const query = qs.parse(location.search,{
        ignoreQueryPrefix:true, // 제일앞에 물음표없애는 옵션
    });
    const detail = query.detail === 'true'; // 문자열로 비교ㅠ해야함
    
    console.log(query);

    return (
        <div>  
            <h1>소개</h1>
            <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트입니다.</p>
            {detail && <p>detail값이 true입니다!</p>}
        </div>
    )
}

export default About;