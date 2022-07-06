import React,{useState, useReducer} from "react";


function reducer(state, action){
    switch (action.type) {
        case 'add':
            return [...state, action.payload]
        case 'sub':
            return state.filter((s)=>{ return s !== action.payload })
        default:
            return state;
    }
    
}

const Reducer = () =>{
    const [name, setName] = useState("");
    const [students, dispatch] = useReducer(reducer, [])
    
    return(
        <div>
            <h1>출석부</h1>
            <p>총 학생 수 : {students.length} </p>
            <input
            type="text"
            placeholder="이름을 입력해주세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <button onClick={()=>{
                dispatch({type: 'add' , payload: {name} })                
                setName("")
               
            }}>추가</button>
            {
            students.map((a,i)=>{
                return(
                    <div key={i}>
                    {a}
                    <button onClick={(e)=>{dispatch({type: 'sub', payload: a })}}>삭제</button>
                </div>
                )
                
            })}
        </div>
    )
}

export default Reducer