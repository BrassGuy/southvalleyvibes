import Link from 'next/link'
import Image from 'next/image'
import RatingStars from '@/components/RatingStars'
import restaurantsData from '@/data/restaurants.json'

export default function Home() {
  const { restaurants } = restaurantsData

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Discover South Valley&apos;s Best Restaurants
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant) => (
          <Link
            key={restaurant.id}
            href={`/restaurants/${restaurant.id}`}
            className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48">
              <Image
                src={restaurant.image}
                alt={restaurant.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900">{restaurant.name}</h2>
              <p className="text-gray-600">{restaurant.cuisine}</p>
              <div className="mt-2">
                <RatingStars rating={restaurant.rating} />
              </div>
              <p className="mt-2 text-gray-600">{restaurant.priceRange}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
} 