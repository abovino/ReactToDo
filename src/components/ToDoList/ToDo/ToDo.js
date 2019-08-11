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
	function removeToDo() {
		dispatch({
			type: 'REMOVE_TODO',
			id: toDo.id
		})
	}
	return (
		<section className='list-item' onClick={completeTodo}>
			<p className={toDo.isComplete ? 'complete':''}>
				{toDo.toDo}
			</p>
			<div onClick={removeToDo}>x</div>
		</section>
	)
}

export default ToDo;
