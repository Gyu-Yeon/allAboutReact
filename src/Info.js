import { useReducer } from "react";
import { useState, useEffect } from "react";

const Info = () => {
  function reducer(state, action) {
    return {
      ...state,
      [action.name]: action.value,
    };
  }

  // const [name, setName] = useState("");
  // const [nickName, setNickName] = useState("");

  // const handleOnChange = (e) => {
  //   switch (e.target.name) {
  //     case "name":
  //       return setName(e.target.value);
  //     case "nickName":
  //       return setNickName(e.target.value);
  //   }
  // };

  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickName: "",
  });
  const { name, nickName } = state;
  const onChnage = (e) => {
    dispatch(e.target);
  };
  useEffect(() => {
    console.log("rendered");

    return () => {
      console.log("clean Up");
    };
  });

  return (
    <div>
      <input type="text" value={name} name="name" onChange={onChnage} />
      <input type="text" value={nickName} name="nickName" onChange={onChnage} />
      <h2>{name}</h2>
      <h2>{nickName}</h2>
    </div>
  );
};

export default Info;
