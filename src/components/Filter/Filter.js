import React, { useContext } from 'react';
import ToDosContext from '../../context/todos-context';

const Filter = ({ setFilter, filter }) => {
	const { toDos } = useContext(ToDosContext);
	return (
		<div className='footer'>
			<button className={filter === undefined ? 'filter-btn filter-btn-active':'filter-btn'} onClick={() => setFilter(undefined)} >All</button>
			<button className={filter === true ? 'filter-btn filter-btn-active':'filter-btn'} onClick={() => setFilter(true)} >Active</button>
			<button className={filter === false ? 'filter-btn filter-btn-active':'filter-btn'} onClick={() => setFilter(false)} >Complete</button>
		</div>
	)
}

export default Filter;