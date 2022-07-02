import { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");

  const handleOnChange = (e) => {
    switch (e.target.name) {
      case "name":
        return setName(e.target.value);
      case "nickName":
        return setNickName(e.target.value);
    }
  };

  useEffect(() => {
    console.log("rendered");
    console.log(name);
    return () => {
      console.log("clean Up");
      console.log(name);
    };
  });

  return (
    <div>
      <input type="text" value={name} name="name" onChange={handleOnChange} />
      <input
        type="text"
        value={nickName}
        name="nickName"
        onChange={handleOnChange}
      />
      <h2>{name}</h2>
      <h2>{nickName}</h2>
    </div>
  );
};

export default Info;
