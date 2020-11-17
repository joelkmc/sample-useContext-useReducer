import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Todo from './Todo';
import { TodosContext } from './contexts/todos.context';

export default function TodoList() {
   const todos = useContext(TodosContext);
   if (todos.length)
      return (
         <Paper>
            <List>
               {todos.map((todo, i) => (
                  <div key={todo.id}>
                     <Todo
                        task={todo.task}
                        id={todo.id}
                        completed={todo.completed}
                     />
                     {i < todos.length - 1 && <Divider />}
                  </div>
               ))}
            </List>
         </Paper>
      );
   return null;
}
