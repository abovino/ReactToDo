import React, { useContext } from 'react';
import ToDo from './ToDo/ToDo';
import ToDosContext from '../../context/todos-context';

import { CSSTransitionGroup } from 'react-transition-group';

const ToDoList = (props) => {
  const { toDos, filter } = useContext(ToDosContext);
  const items = toDos.map((toDo, i) => {
    if (toDo.isComplete !== filter) {
      return <ToDo key={toDo.id} toDo={toDo} />
    } else if (filter === undefined) {
      return <ToDo key={toDo.id} toDo={toDo} />
    }
  })
	return (
		<div>
      <CSSTransitionGroup
        transitionName="fade-todo"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        {items}
      </CSSTransitionGroup>
		</div>
	)
}

export default ToDoList;