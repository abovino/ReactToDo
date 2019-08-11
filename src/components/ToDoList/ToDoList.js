import React, { useContext } from 'react';
import ToDo from './ToDo/ToDo';
import ToDosContext from '../../context/todos-context';

const ToDoList = (props) => {
	const { toDos } = useContext(ToDosContext);
	return (
		<div className='list-container'>
			{toDos.map((toDo, i) => <ToDo key={toDo.id} toDo={toDo} />)}
		</div>
	)
}

export default ToDoList;