import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
import { DispatchContext } from './contexts/todos.context';

export default function EditTodoForm({ task, id, toggleEditForm }) {
   const dispatch = useContext(DispatchContext);
   const [value, handleChange, reset] = useInputState(task);

   return (
      <form
         onSubmit={(e) => {
            e.preventDefault();
            dispatch({ type: 'EDIT', id: id, newTask: value });
            toggleEditForm();
            reset();
         }}
         style={{ marginLeft: '1rem', width: '50%' }}
      >
         <TextField
            margin='normal'
            defaultValue={task}
            onChange={handleChange}
            fullWidth
            autoFocus
         />
      </form>
   );
}
