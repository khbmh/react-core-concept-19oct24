import { useState } from 'react';
import Effectuse from './components/Effectuse';
import Mapwrap from './components/Mapwrap';
import Products from './components/products/Products';
import Stateuse from './components/Stateuse';
import Cfirst from './components/Chtopr.jsx/Cfirst';
import Csecond from './components/Chtopr.jsx/Csecond';
import Cthird from './components/Chtopr.jsx/Cthird';

function App() {
  const information = {
    name: 'John Doe',
    age: 30,
    email: 'john@example.com',
  };
  const [clr, setClr] = useState(true);
  const changColor = () => {
    setClr(!clr);
  };

  const chtoP = (msg) => {
    alert(msg);
  };
  return (
    <>
      <div className="w-[96vw] mx-auto text-center">
        <p
          className={`p-2 ${
            clr ? 'text-black font-semibold' : 'text-rose-300'
          } text-3xl ${clr ? 'bg-rose-300' : 'bg-black'}`}
        >
          Conceptual Session
        </p>
        <button
          className="my-4 px-6 py-2 bg-slate-500 rounded-lg"
          onClick={changColor}
        >
          change title bg
        </button>
        <p className="h-[1px] bg-orange-200 my-2"></p>
      </div>
      <div className='space-y-4 p-4 text-center my-3'>
        <p>Data from child to parent using function parameter</p>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
      <Cfirst get={chtoP} />
      <Csecond get={chtoP} />
      <Cthird get={chtoP} />
      </div>
      </div>
      <Mapwrap />
      <Effectuse />
      <Stateuse />
      <Products info={information} />
    </>
  );
}

export default App;
