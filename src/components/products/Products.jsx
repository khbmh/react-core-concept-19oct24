import Product from '../singleProduct/Product';

function Products({ info }) {
  return (
    <>
      <div className="text-center w-full h-fit my-3 p-5 bg-slate-950">
        <h1>I am from Products.</h1>
      </div>
      <Product data={info} />
    </>
  );
}

export default Products;
