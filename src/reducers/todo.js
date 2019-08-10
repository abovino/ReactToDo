
const toDoReducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_TODOS':
      return action.toDos
    case 'ADD_TODO':
			return [ 
				...state, 
				{ toDo: action.toDo, 
					id: action.id, 
					isComplete: action.isComplete 
				}
		]
    case 'REMOVE_TODO':
			return state.filter(toDo => toDo.id !== action.id);
		case 'COMPLETE_TODO':
			return state.map(toDo => {
				if (toDo.id === action.id) {
					toDo.isComplete = !toDo.isComplete
				}
				return toDo;
			});
    default:
      return state;
  }
}

export default toDoReducer;
