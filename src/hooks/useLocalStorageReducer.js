import { useReducer, useEffect } from 'react';

function useLocalStorageReducer(key, defaultVal, reducer) {
   // make piece of stat, based off of value in locastorage
   const [state, dipatch] = useReducer(reducer, defaultVal, () => {
      let val;
      try {
         val = JSON.parse(
            window.localStorage.getItem(key) || String(defaultVal)
         );
      } catch (e) {
         val = defaultVal;
      }

      return val;
   });

   useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(state));
   }, [state]);

   return [state, dipatch];
}

export { useLocalStorageReducer };
