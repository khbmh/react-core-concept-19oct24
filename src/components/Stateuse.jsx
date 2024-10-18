import { useState } from 'react';

function Stateuse() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const updateCount = () => {
    return setCount(count + 1);
  };
  return (
    <div className="my-5 text-center bg-[#233]">
      <h1>Using state</h1>
      <p className="flex flex-col items-center gap-3 my-4 py-7">
        <span>Clicked {count} times.</span>
        <button
          className="w-fit bg-rose-700 px-2 py-1 rounded-xl"
          onClick={updateCount}
        >
          Click me
        </button>
      </p>
      <p className="flex flex-col items-center gap-3 my-4 py-7">
        <span>Clicked {count2} times.</span>
        <button
          className="w-fit bg-pink-700 px-2 py-1 rounded-xl"
          onClick={() => {
            setCount2(count2 + 1);
          }}
        >
          Click me
        </button>
      </p>
    </div>
  );
}

export default Stateuse;
