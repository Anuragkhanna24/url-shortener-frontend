import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      <Link to="/" className="text-xl font-bold tracking-wide hover:text-blue-400 transition">
        URL Shortener
      </Link>
      <div className="flex gap-6">
        <Link to="/" className="hover:text-blue-400 transition">Home</Link>
        <Link to="/admin" className="hover:text-blue-400 transition">Admin</Link>
      </div>
    </nav>
  );
}
