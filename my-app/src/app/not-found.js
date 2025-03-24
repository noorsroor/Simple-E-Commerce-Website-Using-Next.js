import Link from "next/link";

export default function NotFound() {
    return (
      <div className="text-center">
        <h1 className="text-3xl font-bold text-red-600">404 - Page Not Found</h1>
        <p className="text-gray-600 mt-4">Sorry, we could not find what you were looking for.</p>
        <Link href="/" className="text-blue-500 mt-4 inline-block">Go back home</Link>
      </div>
    );
  }
  