function Cthird({ get }) {
  // console.log(get);
  const showMsg = () => {
    get('from child three');
  };
  return (
    <div className=" text-center border p-5">
      <p>hello form child three</p>
      <button
        className="px-2 py-1 bg-slate-600 mt-3 rounded-lg"
        onClick={showMsg}
      >
        Click
      </button>
    </div>
  );
}

export default Cthird;
