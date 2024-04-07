import {useSelector, useDispatch} from 'react-redux'
import { removetodo } from '../features/todo/todoSlice';

const Todos = () => {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();


  return (
    <>
    <div>Todos</div>
    {todos.map( (todo) => (
        <li key={todo.id}>
            {todo.text}
            <button
            onClick={() => dispatch(removetodo(todo.id))}>
                Delete
            </button>
        </li>
    ))}
    </>
  );
};

export default Todos;