import { useState } from "react";

const EventPractice = () => {
  const [form, setForm] = useState({
    userName: "",
    message: "",
  });
  const { userName, message } = form;
  const handleOnChange = (e) => {
    console.log(e.target.value);
    setForm((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onClick = () => {
    alert(userName + ":" + message);
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="userName"
        placeholder="사용자명"
        value={userName}
        onChange={handleOnChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={handleOnChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
