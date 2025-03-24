// components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-200" style={{ padding: "10px"}}>
      <Link href="/" style={{ marginRight: "15px" }}>Home</Link>
      <Link href="/products" style={{ marginRight: "15px" }}>Products</Link>
      <Link href="/about" style={{ marginRight: "15px" }}>About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
