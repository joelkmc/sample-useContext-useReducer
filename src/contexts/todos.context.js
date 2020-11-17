// todos
// all methods to interact w/ todos
import React, { createContext } from 'react';
import todoReducer from '../reducers/todo.reducer';
import { useLocalStorageReducer } from '../hooks/useLocalStorageReducer';

export const TodosContext = createContext();
export const DispatchContext = createContext();

const defaultTodos = [
   { id: 1, task: 'Clean House', completed: false },
   { id: 2, task: 'Throw garbase', completed: false },
];

export function TodosProvider(props) {
   const [todos, dispatch] = useLocalStorageReducer(
      'todos',
      defaultTodos,
      todoReducer
   );

   return (
      <TodosContext.Provider value={todos}>
         <DispatchContext.Provider value={dispatch}>
            {props.children}
         </DispatchContext.Provider>
      </TodosContext.Provider>
   );
}
