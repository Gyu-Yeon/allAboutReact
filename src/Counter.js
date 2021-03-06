import { Component } from "react";
import { useReducer } from "react";

// class Counter extends Component{
//     // constructor(props){
//     //     super(props)
//     //     //state의 초깃값 설정하기
//     //     this.state = {
//     //         number: 0,
//     //         fixedNumber: 0
//     //     }
//     //

//     //2가지 방법으로 state 선언 가능
//     state ={
//         number: 0,
//         fixedNumber: 0
//     }
//     render(){
//         const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회합니다.
//         console.log(this.state)
//         return(
//             <div>
//                 <h1>{number}</h1>
//                 <h2>{fixedNumber}</h2>
//                 <button
//                 //onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
//                 onClick={()=>{
//                     //this.state를 사용하여 state에 새로운 값을 넣을 수 있습니다.
//                     this.setState(prevState => ({
//                         number:prevState.number+1
//                     }))

//                 }}
//                 >
//                 +1
//                 </button>
//             </div>
//         )
//     }
// }

// this.setState(prevState => ({
//     number:prevState.number+1
// }))

// this.setState(prevState =>{
//     return{
//         number: prevState.number +1
//     }
// });

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>
      </p>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        -1
      </button>
    </div>
  );
};

export default Counter;
