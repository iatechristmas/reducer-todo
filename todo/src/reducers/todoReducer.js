export const initialState = {
	todos: [
		{
			item: 'first item',
			completed: false,
			id: new Date()
		},

		{
			item: 'second item',
			completed: false,
			id: new Date()
		}
	]
};

export const reducer = (state, action) => {
	switch (action.type) {
		case 'UPDATE_ITEMTEXT':
			return {
				todos: [
					...state.todos,
					{
						item: action.payload,
						completed: false,
						id: new Date()
					}
				]
			};
		case 'UPDATE_ITEMCOMPLETED':
			return {
				todos: [
					...state.todos.map((todo) => {
						console.log(todo.id === action.payload);
						if (todo.id === action.payload) {
							return {
								...todo,
								completed: !todo.completed
							};
						} else {
							return {
								...todo
							};
						}
					})
				]
			};
		case 'UPDATE_ITEMSCLEARED':
			return {
				todos: [ ...state.todos.filter((todo) => todo.completed === false) ]
			};
		default:
			return state;
	}
};
