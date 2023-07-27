import React from "react";

const IterationSample = () => {

    const names = ['눈사람', '얼움', '눈', '바람'];
    const nameList = names.map((name, idx) => 
        <li key={"li-"+idx}>{name}</li>); // key 값은 예측 불가능한 값이 더 좋다
    console.log(nameList);
    return (
        <ul>
            {nameList}
        </ul>
    );

}

export default IterationSample;