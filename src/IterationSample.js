import { useState } from "react";

const IterationSample = () => {
  const [list, setList] = useState([
    { id: 1, name: "흙" },
    { id: 2, name: "꽃" },
    { id: 3, name: "불" },
    { id: 4, name: "물" },
  ]);
  const [newNumber, setNewNumber] = useState(5);
  const [inputValue, setInputValue] = useState("");
  const inputOnchange = (e) => {
    setInputValue(e.target.value);
  };

  const addList = () => {
    // let newList = [...list].concat({id:newNumber,name:inputValue})
    // setList(newList)
    setList((prevState) => {
      return [...prevState, { id: newNumber, name: inputValue }];
    });
    setNewNumber((prev) => {
      return prev + 1;
    });
    setInputValue("");
  };

  const removeList = (id) => {
    const removed = list.filter((a) => {
      return a.id !== id;
    });
    console.log(removed);
    console.log(id);
    setList(removed);
  };

  const showList = list.map((a, i) => (
    <div key={a.id}>
      {a.name}{" "}
      <button
        onClick={() => {
          removeList(a.id);
        }}
      >
        삭제
      </button>
    </div>
  ));
  // 삭제 버튼 안에다가 a.id를 만들어 버튼 마다 a.id를 갖고 있게 하는 방법 말고, 버튼이 눌리면 그 버튼의 부모 element의 키값을 갖고와서 삭제하는 방법.
  return (
    <div>
      <h1>{showList}</h1>
      <input value={inputValue} onChange={inputOnchange} />
      <button onClick={addList}>추가하기</button>
    </div>
  );
};

export default IterationSample;
