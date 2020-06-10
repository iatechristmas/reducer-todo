import React, { useState, useReducer } from 'react';

export default function Todo(props) {
	return (
		<div onClick={() => props.dispatch({ type: 'UPDATE_ITEMCOMPLETED', payload: props.todo.id })}>
			<p>{props.todo.item}</p>
		</div>
	);
}
