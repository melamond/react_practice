import React, { useState } from "react";

const EventPractice = () => {
    // 124 페이지 클래스형 컴포넌트로 진행되는 내용을 함수형 컴포넌트로 재구성
    // 128 페이지 message 변수에 대한 상태관리를 함수형 컴포넌트에 맞춰서 해주세요
    const [message, setMessage] = useState('');

    function handleClick() {
        alert(message);
        setMessage(''); // 제출 버튼 누르면 폼비우기
    }

    const handleChange = (e) => {
        setMessage(e.target.value); 
    }

    

    return (
        <>
            <h1>이벤트 연습</h1>
            <input 
            type="text" 
            name="message" 
            placeholder="아무거나 입력해보세요"
            value={message} // message 상태에 든 값으로 폼 내부 자료가 유지
            onChange={handleChange}/>
            <button onClick={handleClick}>제출하기</button>
        </>
    );

}

export default EventPractice;