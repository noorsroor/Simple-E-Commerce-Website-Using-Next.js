import axios from "axios";

export default async function ProductDetails({ params }) {
  const { data: product } = await axios.get(`https://fakestoreapi.com/products/${params.id}`);

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <img src={product.image}></img>
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p className="text-yellow-600 my-2">{product.rating.rate}⭐</p>
      <p className="text-gray-600 my-2">${product.price}</p>
      <p className="text-gray-700">{product.description}</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
    </div>
  );
}
