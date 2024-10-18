function Product({ data }) {
  const { name, age, email } = data;
  return (
    <div>
      <p>
        I am {name}. I am {age} years old. my email is {email}.
      </p>
    </div>
  );
}

export default Product;
