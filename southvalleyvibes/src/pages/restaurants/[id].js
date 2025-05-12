import { useRouter } from 'next/router'
import Image from 'next/image'
import RatingStars from '@/components/RatingStars'
import restaurantsData from '@/data/restaurants.json'

export default function RestaurantPage() {
  const router = useRouter()
  const { id } = router.query
  
  const restaurant = restaurantsData.restaurants.find(r => r.id === id)

  if (!restaurant) {
    return <div>Loading...</div>
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative h-96 mb-8">
        <Image
          src={restaurant.image}
          alt={restaurant.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{restaurant.name}</h1>
        
        <div className="flex items-center gap-4 mb-6">
          <RatingStars rating={restaurant.rating} />
          <span className="text-gray-600">{restaurant.priceRange}</span>
        </div>

        <div className="space-y-4">
          <p className="text-gray-600">{restaurant.description}</p>
          
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Location</h2>
            <p className="text-gray-600">{restaurant.address}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Reviews</h2>
            {restaurant.reviews.length > 0 ? (
              <div className="space-y-4">
                {restaurant.reviews.map((review, index) => (
                  <div key={index} className="border-b pb-4">
                    <RatingStars rating={review.rating} />
                    <p className="mt-2">{review.comment}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No reviews yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 