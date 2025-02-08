import TodoItem from "./TodoItem";
const Todoitems=({todoitems})=>{
return (
<>
<div className='todoitem-container'>
  {todoitems.map(item=>  <TodoItem todoname={item.name} tododate={item.dueDate}></TodoItem> )}
     

    </div>
</>
);

};

export default Todoitems;