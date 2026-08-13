import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-400 p-3">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center gap-8 text-xl font-medium text-black">
          <Link href="/" className="no-underline text-black hover:opacity-80">
            Home
          </Link>
          <Link href="/posts" className="no-underline text-black hover:opacity-80">
            Posts
          </Link>
          <Link href="/contact" className="no-underline text-black hover:opacity-80">
            Contact
          </Link>
        </div>

        <input
          type="text"
          placeholder="search"
          className="w-52 rounded-md border border-blue-300 bg-blue-100 px-3 py-1 text-base text-black outline-none"
        />
      </div>
    </nav>
  );
}