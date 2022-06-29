import { useState } from "react";

const IterationSample = ()=>{

    const [list, setList] = useState([
        {name: '흙'},
        {name: '꽃'},
        {name: '불'},
        {name: '물'},
    ])    
    const [inputValue, setInputValue] = useState("")
    const inputOnchange = (e) =>{
        setInputValue(e.target.value)                
    }
    const deleteList = () =>{
        
    }

    const addList = ()=>{
                // let newList = [...list].concat({id:newNumber,name:inputValue})
                // setList(newList)
                setList((prevState) => {            
                    return [
                        ...prevState,
                        {name:inputValue}
                    ]                       
                })               
                console.log(list)
            }


    const showList = list.map((a,i)=> {
        return  (
        <li        
        key={i}> 
        {a.name} 
        <button         
        onClick={()=>{
        let newList = list.splice(i, 1)
        setInputValue(newList)
        }}>
        삭제</button>
        </li>)
        
    })
// 삭제 버튼 안에다가 a.id를 만들어 버튼 마다 a.id를 갖고 있게 하는 방법 말고, 버튼이 눌리면 그 버튼의 부모 element의 키값을 갖고와서 삭제하는 방법.
return(
    <div>
        <h1>{showList}</h1>
        <input
        value={inputValue}
        onChange={inputOnchange}
        />
        <button
        onClick={addList}>추가하기</button>
    </div>
)
}







export default IterationSample