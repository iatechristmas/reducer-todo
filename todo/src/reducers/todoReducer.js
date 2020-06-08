export const initialState = {
	todos: [
		{
			item: 'Learn about reducers',
			completed: false,
			id: 3892987589
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

		default:
			return state;
	}
};
