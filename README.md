# South Valley Vibes 🍽️

A modern restaurant review platform for discovering and reviewing the best dining spots in the South Valley. Built with Next.js and Tailwind CSS.

## Features

- 📱 Responsive design that works on desktop and mobile
- 🔍 Browse restaurants with detailed information
- ⭐ Rate and review restaurants
- 🖼️ Image showcase for each restaurant
- 💫 Modern UI with smooth transitions
- 🎨 Styled with Tailwind CSS

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Hero Icons](https://heroicons.com/) - Beautiful hand-crafted SVG icons

## Getting Started

### Prerequisites

- Node.js 14.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd SouthValleyVibes
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Add restaurant images:
   - Create a `/public/images` directory
   - Add the following images:
     - `valley-bistro.jpg`
     - `sushi-south.jpg`

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
SouthValleyVibes/
├── public/          # Static files (images, favicon)
├── src/
│   ├── components/  # Reusable UI components
│   │   ├── Header.js
│   │   └── RatingStars.js
│   ├── data/       # JSON data
│   │   └── restaurants.json
│   ├── pages/      # Next.js pages
│   │   ├── index.js
│   │   ├── restaurants/[id].js
│   │   ├── submit-review.js
│   │   └── _app.js
│   └── styles/     # Global styles
│       └── globals.css
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Features in Detail

### Homepage
- Grid layout of restaurant cards
- Quick view of ratings and cuisine type
- Smooth hover effects
- Responsive grid system

### Restaurant Details
- Large hero image
- Detailed restaurant information
- Rating display
- Review section
- Location information

### Submit Review
- User-friendly form
- Star rating selection
- Restaurant selection dropdown
- Form validation
- Smooth navigation after submission

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details 
