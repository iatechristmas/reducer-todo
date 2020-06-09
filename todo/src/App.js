import React, { useState, useReducer } from 'react';
import { initialState, reducer } from './reducers/todoReducer';
import { TodoList } from './components/form';
import './App.css';

function App() {
	const [ state, dispatch ] = useReducer(reducer, initialState);
	return (
		<div className="App">
			<header className="App-header">
				<h1> The List </h1>
				<TodoList state={state} dispatch={dispatch} />
			</header>
		</div>
	);
}

export default App;
