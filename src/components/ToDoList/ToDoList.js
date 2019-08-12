import React, { useContext } from 'react';
import ToDo from './ToDo/ToDo';
import ToDosContext from '../../context/todos-context';

const ToDoList = (props) => {
	const { toDos, filter } = useContext(ToDosContext);
	return (
		<div className='list-container'>
			{toDos.map((toDo, i) => {
        if (toDo.isComplete !== filter) {
          return <ToDo key={toDo.id} toDo={toDo} />
        } else if (filter === undefined) {
          return <ToDo key={toDo.id} toDo={toDo} />
        }
      })}
		</div>
	)
}

export default ToDoList;