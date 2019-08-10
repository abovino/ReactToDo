import React, { useContext } from 'react';
import toDosContext from '../../../context/todos-context';

const ToDo = ({ toDo }) => {
	const { dispatch } = useContext(toDosContext);
	function completeTodo() {
		dispatch({ 
			type: 'COMPLETE_TODO', 
			id: toDo.id
		});
	}
	return (
		<li 
			onClick={completeTodo}
			className={toDo.isComplete ? 'complete':''}
			>
			{toDo.toDo}
		</li>
	)
}

export default ToDo;
