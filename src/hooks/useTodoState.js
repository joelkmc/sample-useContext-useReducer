import useLocalStorageState from './useLocalStorageState';
import { v4 as uuidv4 } from 'uuid';

export default (initialTodos) => {
   const [todos, setTodos] = useLocalStorageState('todos', initialTodos);

   return {
      todos,

      AddTodo: (newTodoText) => {
         setTodos([
            ...todos,
            { id: uuidv4(), task: newTodoText, completed: false },
         ]);
      },

      removeTodo: (todoId) => {
         const updatedTodos = todos.filter((todo) => todo.id !== todoId);

         setTodos(updatedTodos);
      },

      toggleTodo: (todoId) => {
         const updatedTodos = todos.map((todo) => {
            if (todo.id === todoId) {
               return { ...todo, completed: !todo.completed };
            } else {
               return todo;
            }
         });

         setTodos(updatedTodos);
      },

      editTodo: (todoId, newTask) => {
         const updatedTodos = todos.map((todo) => {
            if (todo.id === todoId) {
               return { ...todo, task: newTask };
            } else {
               return todo;
            }
         });

         setTodos(updatedTodos);
      },
   };
};
