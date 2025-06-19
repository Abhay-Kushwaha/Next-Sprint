import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-8 py-4 bg-black/70 shadow-lg fixed top-0 left-0 z-50">
        <div className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          Next Sprint
        </div>
        <div className="flex gap-4">
          <Link href="/login">
            <button className="px-5 py-2 rounded-full bg-green-600 hover:bg-green-700 font-semibold transition-colors cursor-pointer">
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button className="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 font-semibold transition-colors cursor-pointer">
              Sign Up
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-[60vh] pt-10 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          Welcome to Next Sprint
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mb-8">
          Just giving my best in Learning Next.js. This is a simple project of Authentication and Authorization.
        </p>
        <div className="flex gap-6">
          <Link href="/signup">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-lg font-bold shadow-lg transition-all cursor-pointer">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Random Content Section */}
      <section className="max-w-4xl mx-auto px-6 py-10 bg-white/10 rounded-2xl shadow-xl backdrop-blur-md">
        <h2 className="text-3xl font-bold mb-4 text-yellow-300">Why Choose Next Sprint?</h2>
        <ul className="list-disc list-inside text-lg text-gray-200 space-y-2">
          <li>🔒 Authentication and User management</li>
          <li>🎨 Beautiful, responsive UI powered by Tailwind CSS</li>
          <li>🧠 Understanding of DB connection, Tokens, Cookies etc</li>
        </ul>
      </section>
    </div>
  );
}