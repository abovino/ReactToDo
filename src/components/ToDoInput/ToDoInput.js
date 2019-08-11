import React, { useState, useContext } from 'react';
import uuid from 'uuid';
import ToDosContext from '../../context/todos-context';

const ToDoInput = () => {
	const { dispatch } = useContext(ToDosContext)
	const [toDo, setText] = useState('');
	function addTodo(e) {
		e.preventDefault();
		if (toDo.length < 1) {
			return;
		}
		const id = uuid();
		const isComplete = false;
		dispatch({ 
			type: 'ADD_TODO',
			toDo,
			id,
			isComplete
		});
		setText('');
	}
	return (
		<div className='input-container'>
			<form onSubmit={(e) => addTodo(e)}>
				<input className='todo-input' type="text" value={toDo} onChange={(e) => setText(e.target.value)} placeholder="Do Things ..."/>
				<button 
					className='add-btn' 
					type='submit' 
					disabled={toDo.length < 1 ? true:false}
					>+</button>
				</form>
		</div>
	)
}

export default ToDoInput;