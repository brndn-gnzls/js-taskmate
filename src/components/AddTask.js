import React from 'react'

/*
    tasklist & setTasklist passed from App.js.
*/
const AddTask = ({ tasklist, setTasklist, task, setTask }) => {

    const handleSubmit = (e) => {
        e.preventDefault()

        // Information exists in task, edit.
        if (task.id) {
            const date = new Date()

            const updatedTaskList = tasklist.map((todo) => (
                todo.id === task.id ? {
                    id: task.id,
                    name: task.name,
                    time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
                } : todo
            ))
            setTasklist(updatedTaskList)
            setTask({})
        // No information in task, create.
        } else {
            const date = new Date()
            const newTask = {
                id: date.getTime(),
                name: e.target.addTask.value, // addTask.value input name.
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }
            setTasklist([...tasklist, newTask])
            setTask({})
        }
    }

    return (
        <section className='addTask'>
            <form onSubmit={handleSubmit}>
                {/* task value set in ShowTask.js */}
                <input type="text" name="addTask" value={task.name || ""} autoComplete='off' placeholder='add task' maxLength={25} onChange={e => setTask({...task, name: e.target.value})} />
                <button type="submit">{task.id ? "Update" : "Add"}</button>
            </form>
        </section>
    )
}

export default AddTask