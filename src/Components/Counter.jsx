import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };
  const reset = () => setCount(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Counter: {count}</h2>
      <div className="space-x-4">
        <button
          onClick={increment}
          className="bg-pink-300 hover:bg-pink-400 text-white font-semibold py-2 px-4 rounded transition"
        >
          +1
        </button>
        <button
          onClick={decrement}
          className="bg-purple-400 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded transition disabled:opacity-50"
          disabled={count === 0}
        >
          -1
        </button>
        <button
          onClick={reset}
          className="bg-blue-300 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
