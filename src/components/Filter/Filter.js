import React, { useContext } from 'react';
import ToDosContext from '../../context/todos-context';

const Filter = ({ setFilter }) => {
	const { toDos } = useContext(ToDosContext);
	return (
		<div className='footer'>
			<button className='filter-btn' onClick={() => setFilter(undefined)} >All</button>
			<button className='filter-btn' onClick={() => setFilter(true)} >Active</button>
			<button className='filter-btn' onClick={() => setFilter(false)} >Complete</button>
		</div>
	)
}

export default Filter;