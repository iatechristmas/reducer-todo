import React, { useState, useReducer } from 'react';
import { reducer, initialState } from '../reducers/todoReducer';

export const List = () => {
	const [ state, dispatch ] = useReducer(reducer, initialState);

	const [ newItemText, setNewItemText ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
	};
	const handleChanges = (e) => {
		setNewItemText(e.target.value);
	};
	console.log(state);
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="text" name="task" placeholder="Add an item" value={newItemText} onChange={handleChanges} />
				<button
					onClick={() => {
						dispatch({ type: 'UPDATE_ITEMTEXT', payload: newItemText });
						setNewItemText('');
					}}
				>
					{' '}
					Add item
				</button>
			</form>
			<p>{state.todos.map((todo) => todo.item)}</p>
		</div>
	);
};
