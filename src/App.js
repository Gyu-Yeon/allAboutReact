import "./App.css";
import { useState } from "react";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice";
import ValidationSample from "./ValidationSample";
import IterationSample from "./IterationSample";
import Info from "./Info";
import Example from "./Example";
import Reducer from "./Reducer";
import Average from "./Average";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      {/* <MyComponent>리엑트</MyComponent>; */}

      {/* <Counter /> */}

      {/*<Say />
      
      <EventPractice />
      
      <ValidationSample /> */}

      {/* <IterationSample/> */}
      {/* <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <Info />} */}
      {/* <Reducer/> */}
      <Info />
      {/* <Average/> */}
    </div>
  );
}

export default App;

//삼항연산자 && 사용할 때, 주의점: React는 false를 렌더링할 때는 null과 마찬가지로 아무것도 나타나지 않지만,
// falsy한 값인 0은 예외적으로 화면에 나타난다. const name = 0; return <div>{name && <h1>리엑트입니다.</h1>}</div>;
