import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-indigo-600">
            South Valley Vibes
          </Link>
          <div className="space-x-6">
            <Link href="/" className="text-gray-600 hover:text-indigo-600">
              Home
            </Link>
            <Link href="/submit-review" className="text-gray-600 hover:text-indigo-600">
              Submit Review
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
} 