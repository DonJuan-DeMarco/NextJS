import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="font-orbitron">
      <ul className="flex gap-2 text-teal-700">
        <li>
          <Link href="/" className="hover:text-cyan-600 font-bold">
            Indie Gamer
          </Link>
        </li>
        <li className="ml-auto">
          <Link href="/reviews" className="hover:text-cyan-600">
            Reviews
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-cyan-600">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
