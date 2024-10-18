function Mapping({ name, price, inStock }) {
  return (
    <div className="bg-[#242833] space-y-2 m-3 p-4 rounded-xl max-w-[350px] h-[180px] flex flex-col justify-between">
      <p className="text-xl text-pink-300">{name}</p>
      <p>Price: ${price}</p>
      <p
        className={`w-fit px-4 py-1 rounded-xl cursor-default ${
          inStock ? 'bg-blue-600' : 'bg-red-600'
        }`}
      >
        {inStock ? 'Available' : 'Not Available'}
      </p>
    </div>
  );
}

export default Mapping;
