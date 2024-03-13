import React from 'react'

/*
    tasklist & setTasklist passed from App.js.
*/
const AddTask = ({tasklist, setTasklist}) => {

    const handleSubmit = (e) => {
        e.preventDefault()

        const date = new Date()
        const newTask = {
            id: date.getTime(),
            name: e.target.addTask.value, // addTask.value input name.
            time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` 
        }
        setTasklist([...tasklist, newTask])
        e.target.addTask.value = ""
    }

    return (
        <section className='addTask'>
            <form onSubmit={handleSubmit}>
                <input type="text" name="addTask" autoComplete='off' placeholder='add task' maxLength={25}/>
                <button type="submit">Add</button>
            </form>
        </section>
    )
}

export default AddTask