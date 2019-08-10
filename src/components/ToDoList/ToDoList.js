import React, { useContext } from 'react';
import ToDo from './ToDo/ToDo';
import ToDosContext from '../../context/todos-context';

const ToDoList = (props) => {
	const { toDos } = useContext(ToDosContext);
	return (
		<ul>
			{toDos.map((toDo, i) => <ToDo key={toDo.id} toDo={toDo} />)}
		</ul>
	)
}

export default ToDoList;