import React from "react";
import MyComponent from "./component/study/MyComponent";
import YourComponent from "./component/study/YourComponent";
import Say from "./component/study/Say";
import ArrayChange from "./component/study/ArrayChange";
import EventPractice from "./component/eventhandling/EventPractice";
import IterationSample from "./component/iteration/IterationSample";
import IterationSample2 from "./component/iteration/IterationSample2";
import Counter from "./component/hooks/Counter";

function App() {
  return (
    <>
      {/* propertie명은 자유롭게 지정해주시면 됩니다.
      다만 받는 쪽에서도 전달해줄떄 사용해준 명칭을 사용해야 연결됩니다. */}
      {/*<MyComponent name="리액트">사이에 적은 내용</MyComponent>*/}
      {/* 여러분들이 YourComponent에, country라는 명칭으로 나라이름을 넣어서
      전달해주시고, YourComponent.js에서 DIV태그 사이에 실제로 출력도 해 보세요.*/}
      {/*<YourComponent country="한국" />
      <Say msg="안녕하세요" />
      <ArrayChange />*/}
      
      {/*<EventPractice/>*/}
      {/*<IterationSample2/>*/}
      <Counter></Counter>
    </>
  );
}

export default App;
