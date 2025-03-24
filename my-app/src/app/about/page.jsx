import Image from "next/image";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | E-Commerce</title>
      </Head>
      <div className="max-w-2xl mx-auto text-center p-6 bg-white shadow rounded">
        <h1 className="text-2xl font-bold text-blue-600">About Us</h1>
        <p className="text-gray-700 my-4">
          We are a leading online store providing high-quality products.
        </p>
        <img src="https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-20165.jpg" alt="About Us" width={400} height={250} className="mx-auto rounded-lg" />
      </div>
    </>
  );
}
