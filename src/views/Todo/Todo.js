

const Todo = (props) => {
    // const todos = props.todos
    const { todos, title, deleteDataTodo } = props;


    const handleDelete = (id) => {
        deleteDataTodo(id)
    }
    return (
        <div className='todos-container'>
            <div className="title">
                {title}
            </div>
            {
                todos.map(todo => {
                    console.log('todo: ', todo)
                    return (
                        <div key={todo.id}>
                            <li className='todos-child'>{todo.title}
                                &nbsp;<span onClick={() => handleDelete(todo.id)}>x</span></li>
                        </div>
                    )
                })
            }

            <hr />
        </div>
    )
}

export default Todo;