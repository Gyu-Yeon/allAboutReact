import { useRef } from "react";
import { useCallback, useMemo, useState } from "react";

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  const getAverage = (numbers) => {
    console.log("평균값 계산 중");
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
  };

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);
  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber("");
      inputEl.current.focus();
    },
    [number, list]
  );

  const avg = useMemo(() => {
    return getAverage(list);
  }, [list]);

  console.log(inputEl.current);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, i) => {
          return <li key={i}>{value}</li>;
        })}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
