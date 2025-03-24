import axios from "axios";

export default async function Products() {
  const { data: products } = await axios.get("https://fakestoreapi.com/products");

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">🛍️ Products</h1>
      <ul className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <li key={product.id} className="bg-white p-4 rounded shadow">
            <img src={product.image} className="size-40"></img>
            <a>
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-700">${product.price}</p>
            </a>
            <h3 className="mb-auto"><a href={`/products/${product.id}`}>Read More ⨠</a></h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
