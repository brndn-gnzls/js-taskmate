import React from 'react'

/*
    tasklist & showTaskList passed from App.js.
    task & setTask passed from App.js.
*/
const ShowTask = ({tasklist, setTasklist, task, setTask}) => {

    const handleDelete = (id) => {
        const updatedTaskList = tasklist.filter(todo => todo.id !== id)
        setTasklist(updatedTaskList)
    }

    const handleEdit = (id) => {
        const selectedTask = tasklist.find(todo => todo.id === id)
        setTask(selectedTask)
    }


    return (
        <section className='showTask'>
            <div className='head'>
                <div>
                    <span className='title'>Todo</span>
                    <span className='count'>{tasklist.length}</span>
                </div>
                <button className='clearAll' onClick={() => setTasklist([])}>Clear All</button>
            </div>
            <ul>
                {
                    // map from tasklist (App.js)
                    tasklist.map((todo) => (
                        <li key={todo.id}>
                            <p>
                                <span className='name'>{todo.name}</span>
                                <span className='time'>{todo.time}</span>
                            </p>
                            {/* passing task.id through arrow functions to easily grab element */}
                            <i onClick={() => handleEdit(todo.id)}className='bi bi-pencil-square'></i>
                            <i onClick={() => handleDelete(todo.id)} className='bi bi-trash'></i>
                        </li>
                    ))
                }
            </ul>
        </section>
  )
}

export default ShowTask