import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | E-Commerce</title>
      </Head>
      <div className="text-center p-10">
        <h1 className="text-3xl font-bold">Welcome to Our E-Commerce Store</h1>
        <p className="mt-4 text-gray-600">Find the best products at the best prices.</p>
      </div>
    </>
  );
}
