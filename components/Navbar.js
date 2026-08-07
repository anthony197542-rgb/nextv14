import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-blue-400">
      <ul className="flex justify-center space-x-4 text-xl p-3">
          <li>
    <Link href="/">Home</Link>
  </li>
  <li>
    <Link href="/posts">Posts</Link>
  </li>
  <li>
    <Link href="/contact">Contact</Link>
    <input type="text" placeholder="Search..."/>
  </li>
</ul>
  
    </nav>
  );
}

export default Navbar;