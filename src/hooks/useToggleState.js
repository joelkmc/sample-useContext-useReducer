import { useState } from 'react';

function useToggle(initialVaue = false) {
   const [state, setState] = useState(initialVaue);

   const toggle = () => {
      setState(!state);
   };
   return [state, toggle];
}

export default useToggle;
