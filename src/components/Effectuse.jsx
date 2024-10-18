import { useEffect, useState } from 'react';

function Effectuse() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('hello');
  }, [count]);

  const updateCount = ()=>{
    setCount(count +2)
  }
  return (
    <div className="my-5 text-center bg-[#4f2135]">
      <h1>Using Effect</h1>
      <p className="flex flex-col items-center gap-3 my-4 py-7">
        <span>button clicked {count}</span>
        <button
          className="px-4 py-1 bg-gray-700 rounded-full"
          onClick={updateCount}
        >
          click
        </button>
      </p>
    </div>
  );
}

export default Effectuse;
