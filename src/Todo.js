import React, { useContext, memo } from 'react';
import {
   ListItem,
   ListItemText,
   Checkbox,
   IconButton,
   ListItemSecondaryAction,
} from '@material-ui/core';
import { Delete as DeleteIcon, Edit as EditIcon } from '@material-ui/icons';
import EditTodoForm from './EditTodoForm';
import useToggleState from './hooks/useToggleState';
import { DispatchContext } from './contexts/todos.context';

const Todo = ({ task, completed, id }) => {
   const dispatch = useContext(DispatchContext);

   const [isEditing, toggle] = useToggleState(false);

   return (
      <ListItem style={{ height: '64px' }}>
         {isEditing ? (
            <EditTodoForm task={task} id={id} toggleEditForm={toggle} />
         ) : (
            <>
               <Checkbox
                  tabIndex={-1}
                  checked={completed}
                  onClick={() => dispatch({ type: 'TOGGLE', id: id })}
               />
               <ListItemText
                  style={{
                     textDecoration: completed ? 'line-through' : 'none',
                  }}
               >
                  {task}
               </ListItemText>
               <ListItemSecondaryAction>
                  <IconButton aria-label='Edit' onClick={toggle}>
                     <EditIcon />
                  </IconButton>
                  <IconButton
                     aria-label='Delete'
                     onClick={() => dispatch({ type: 'REMOVE', id: id })}
                  >
                     <DeleteIcon />
                  </IconButton>
               </ListItemSecondaryAction>
            </>
         )}
      </ListItem>
   );
};

export default memo(Todo);
