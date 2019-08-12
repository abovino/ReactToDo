import React, { useState, useEffect, useReducer } from 'react';
import { hot } from 'react-hot-loader';
import ToDoInput from './ToDoInput/ToDoInput';
import ToDoList from './ToDoList/ToDoList';
import Filter from './Filter/Filter';

import ToDosContext from '../context/todos-context';
import toDoReducer from '../reducers/todo'; 
import './App.css';

const App = () => {
	const [toDos, dispatch] = useReducer(toDoReducer, []);
	const [filter, setFilter] = useState(undefined);
	useEffect(() => {
		const toDos = JSON.parse(localStorage.getItem('toDos'));
		if (toDos) {
			dispatch({ type: 'POPULATE_TODOS', toDos });
		}
	}, []);
	useEffect(() => {
		localStorage.setItem('toDos', JSON.stringify(toDos));
	}, [toDos]);
	console.log(filter);
	return (
		<ToDosContext.Provider value={{ toDos, filter, dispatch }}>
			<ToDoInput />
			<ToDoList />
			{toDos.length > 0 ? <Filter setFilter={setFilter} />:''}
		</ToDosContext.Provider>
	)
}

export default hot(module)(App);
