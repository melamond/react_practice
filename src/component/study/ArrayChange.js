import React, { useState } from "react";

const ArrayChange = () => {
  // 사람 이름과 성적 키-밸류 쌍으로 집어넣는 객체 초기값으로 넣기
  const [humans, setHumans] = useState({ kim: 100, lee: 200 });

  const addScoreEvent = () => {
    //  setHumans를 이용해 park이라는 사람의 성적을 추가하려면?
    //  humans.park = 300; // 1. humans에 park:300 을 추가한다 (화면에 반영 안됨)
    //  setHumans(humans); // 2. setHumans로 추가된걸 화면에 반영
    console.log(humans);
    // 기본 humans 내부 요소 + park:300 추가, kim:1000으로 갱신
    setHumans({...humans, park:300, kim:1000});
  };

  // 스프레드 문법을 이용한 복사는 깊은 복사

  return (
    <>
      <button onClick={addScoreEvent}>성적추가하기</button>
      <div>성적 목록 : {humans.park}</div>
    </>
  );
};

export default ArrayChange;