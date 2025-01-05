


import { useState } from 'react'
export const CounterApp = () => {
    const [count, setCount] = useState(0);



    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        if (count === 0) return;
        setCount(count - 1);
    }
  return (

            <div>
                <h1>Counter App</h1>
               <div className='flex justify-center items-center gap-4'>
               <button onClick={increment}>Increment</button>
                <p className='bg-blue-500 text-white p-2 rounded-md'>{count}</p>
                <button onClick={decrement}>Decrement</button>
               </div>
            </div>

  )
}