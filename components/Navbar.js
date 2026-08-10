import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-blue-400">
      <ul className="flex items-center gap-6">
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <Link href={"/posts"}>
          <li>Posts</li>
        </Link>
        <Link href={"/contact"}>
          <li>Contact</li>
        </Link>
        <input placeholder="Search..." />
      </ul>
    </nav>
  );
}

export default Navbar;