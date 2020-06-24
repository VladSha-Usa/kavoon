import { useState, useEffect } from 'react';

function useRx(signal) {
  let inital;
  signal.subscribe((value) => inital = value).unsubscribe();

  const [state, setState] = useState(inital);
  useEffect(() => {
    const subscription = signal.subscribe((value) => setState(value));
    return () => {
      subscription.unsubscribe();
    };
  });
  return state;
}

export default useRx;
