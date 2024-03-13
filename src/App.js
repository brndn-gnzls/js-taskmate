import { useEffect, useState } from 'react';

import AddTask from './components/AddTask';
import Header from './components/Header';
import ShowTask from './components/ShowTask';

import './App.css';

function App() {

	// Local storage or empty array.
	const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem("tasklist")) || [])
	const [task, setTask] = useState({})

	// Called everytime state is updated.
	useEffect(() => {
		localStorage.setItem("tasklist", JSON.stringify(tasklist))
	}, [tasklist])

	return (
		<div className="App">
			<Header />
			<AddTask
					tasklist={tasklist}
					setTasklist={setTasklist}
					task={task}
					setTask={setTask}
				/>
			<ShowTask
					tasklist={tasklist}
					setTasklist={setTasklist}
					task={task}
					setTask={setTask}
				/>
		</div>
	);
}

export default App;
