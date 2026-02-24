import apiProjectImage from '../assets/api-project.webp';
import portfolioImage from '../assets/portfolio.webp';
import homeServicesImage from '../assets/home-services.webp';
const projectDetails = [
  {
    id: 1,
    title: 'Store Product Listing',
    description: 'React app that fetches and filters data from a public API.',
    image: apiProjectImage,
    type: 'React + API',
    highlights: [
      'Search & category filters',
      'Favorites with persistence',
      'Error & loading state',
    ],

    slug: 'api-project',
    liveLink: 'https://store-product-listing.netlify.app/',
    gitHubLink: 'https://github.com/radhikaudacity/store-product-listing',
    overview:
      'React-based product explorer that utilizes a public REST API to display a catalog of items and manage client-side state.',

    keyFeatures: [
      [
        'API Integration',
        'Asynchronous data fetching using the Fetch API with async/await, including structured loading states and defensive error handling.',
      ],
      [
        'Search & Filters',
        ' Users can search by title, filter by category, and toggle a “favourites only” view using efficient, readable filtering logic.',
      ],
      [
        'Favourites & Persistence',
        'Items can be marked as favourites. Favourites are persisted using localStorage with normalized numeric IDs to avoid type mismatches.',
      ],
      [
        'Loading & Error Handling',
        'Implemented conditional rendering to display loading indicators and user-friendly error fallbacks during failed network requests.',
      ],
      [
        'Responsive UI',
        'CSS Grid adapts automatically to screen size and centers content when only one or two items are available, preventing overly wide layouts.',
      ],
    ],
    tech: ['React', 'JavaScript (ES6)', 'Vite', 'REST API', 'CSS'],
    outcome:
      'Demonstrates practical API integration, state-driven rendering, client-side persistence, and resilient UI handling.',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description:
      'Portfolio website designed to present projects clearly with organized case studies and responsive layout.',
    image: portfolioImage,
    type: 'React',
    highlights: [
      'Clean, professional UI',
      'Responsive navigation',
      'Case-study driven project presentation',
      'Conditional rendering (Thank You state)',
      'Environment variable configuration',
    ],
    slug: 'portfolio',
    liveLink: 'https://portfolio-radhika-r.netlify.app/',
    gitHubLink: 'https://github.com/radhikaudacity/porfolio',
    overview:
      'A scalable portfolio platform designed to present projects through structured case studies, clear navigation, and conversion-focused layout. Built with reusable components and responsive architecture to ensure long-term maintainability.',

    keyFeatures: [
      [
        'Responsive Architecture',
        'Mobile-first layout built using CSS Grid and Flexbox to ensure seamless experience across devices.',
      ],
      [
        'Data-Driven Case Study Rendering',
        'Projects are dynamically rendered using structured data and route parameters, enabling scalable content expansion.',
      ],
      [
        'Component-Based Design',
        'Modular React components for scalability, maintainability, and clean code organization.',
      ],
      [
        'Performance Optimization',
        'Optimized images and minimal bundle configuration using Vite for fast load times.',
      ],
      [
        'Semantic Markup',
        'Semantic HTML elements to improve accessibility and SEO.',
      ],
      [
        'Interactive UI',
        'Subtle hover states, spacing hierarchy, and visual rhythm to create a modern user experience.',
      ],
      [
        'Form Integration & Validation',
        'Integrated Formspree for contact handling with client-side validation, error handling, and conditional success state rendering.',
      ],
      [
        'Production Deployment',
        'Configured environment variables and deployed via Netlify with optimized Vite production build for fast performance.',
      ],
    ],
    tech: ['React', 'React Router', 'Vite', 'CSS', 'Formspree', 'Netlify'],

    outcome:
      'Demonstrates scalable component architecture, dynamic routing, API integration, and production-ready deployment in a real-world React application.',
  },

  {
    id: 3,
    title: 'Ananya Home Services - Business Website',
    description:
      'Modern home services website with service categorization, clear CTAs, and mobile-first responsive design.',
    image: homeServicesImage,
    type: 'React',
    highlights: [
      'Service-oriented layout',
      'Clear call-to-actions',
      'Mobile-first design',
      'WhatsApp button integration',
    ],
    slug: 'home-services',
    liveLink: 'https://ananya-home-services.netlify.app/',
    gitHubLink: 'https://github.com/radhikaudacity/ananya-home-services',
    overview:
      'A service-based business website designed to present offerings clearly and guide users toward inquiry actions. Built with scalable component architecture and a responsive layout to support future expansion.',

    keyFeatures: [
      [
        'Dynamic Service Rendering',
        'Services generated from structured data using array mapping for scalability and maintainability.',
      ],
      [
        'Reusable Card Components',
        'Designed flexible card layouts that can scale across categories and service types.',
      ],
      [
        'Clear Call-to-Action Design',
        'Strategically placed buttons and visual hierarchy to improve user engagement and conversions.',
      ],
      [
        'Responsive Grid Layout',
        'Clean grid-based structure optimized for desktop and mobile users.',
      ],
      [
        'State-Driven UI Updates',
        'Managed component state to dynamically update content and interactions.',
      ],
      [
        'Scalable Frontend Foundation',
        'Architecture designed to easily integrate future backend APIs for booking and authentication.',
      ],
    ],

    tech: ['React', 'HTML', 'CSS', 'Vite'],
    outcome:
      'Demonstrates client-oriented UI design, reusable component architecture, and scalable frontend foundations suitable for real-world service platforms.',
  },
];
export default projectDetails;
