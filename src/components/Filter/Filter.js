import React, { useContext } from 'react';
import ToDosContext from '../../context/todos-context';

const Filter = () => {
	const { toDos } = useContext(ToDosContext);
	return (
		<div className='footer'>
			<button className='filter-btn'>All</button>
			<button className='filter-btn'>Active</button>
			<button className='filter-btn'>Complete</button>
		</div>
	)
}

export default Filter;