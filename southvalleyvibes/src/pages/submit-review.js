import { useState } from 'react'
import { useRouter } from 'next/router'
import restaurantsData from '@/data/restaurants.json'

export default function SubmitReview() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    restaurantId: '',
    rating: 5,
    comment: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, this would make an API call to save the review
    console.log('Submitting review:', formData)
    router.push(`/restaurants/${formData.restaurantId}`)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Submit a Review</h1>
      
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <label htmlFor="restaurant" className="block text-gray-700 font-medium mb-2">
            Restaurant
          </label>
          <select
            id="restaurant"
            value={formData.restaurantId}
            onChange={(e) => setFormData({ ...formData, restaurantId: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          >
            <option value="">Select a restaurant</option>
            {restaurantsData.restaurants.map((restaurant) => (
              <option key={restaurant.id} value={restaurant.id}>
                {restaurant.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="rating" className="block text-gray-700 font-medium mb-2">
            Rating
          </label>
          <select
            id="rating"
            value={formData.rating}
            onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          >
            {[5, 4, 3, 2, 1].map((rating) => (
              <option key={rating} value={rating}>
                {rating} Stars
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="comment" className="block text-gray-700 font-medium mb-2">
            Your Review
          </label>
          <textarea
            id="comment"
            value={formData.comment}
            onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows="4"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Submit Review
        </button>
      </form>
    </div>
  )
} 