export const todoInput = () => {
    return (
        <>
        <h1>Todo Input</h1>
        <input value="text"placeholder="Enter The Task"onChange={(e) => setTodoText(e.target)}></input>
        </>
    )
}