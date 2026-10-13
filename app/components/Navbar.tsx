
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">MyWebsite</div>

      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
