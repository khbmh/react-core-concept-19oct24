function Csecond({ get }) {
  // console.log(get);
  const showMsg = () => {
    get('from child two');
  };
  return (
    <div className=" text-center border p-5">
      <p>hello form child two</p>
      <button
        className="px-2 py-1 bg-slate-600 mt-3 rounded-lg"
        onClick={showMsg}
      >
        Click
      </button>
    </div>
  );
}

export default Csecond;
