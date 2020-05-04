
import { useState, useEffect } from 'react'

function useRx( signal ){
  const [state, setState] = useState('');
  useEffect(() => {
    const subscription =signal.subscribe( value => setState(value) )
    return ()=>{ subscription.unsubscribe() }
  });
  return state
}

export default useRx;