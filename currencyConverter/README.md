# Currency Converter App

A modern, responsive currency converter built with React and Vite. Convert between different currencies with real-time exchange rates and a beautiful, intuitive interface.

## Features

- **Real-time Exchange Rates**: Fetches live currency data from a reliable API
- **Bidirectional Conversion**: Convert from any currency to any other currency
- **Swap Functionality**: Quickly swap between "from" and "to" currencies
- **Responsive Design**: Beautiful UI with Tailwind CSS and backdrop blur effects
- **Auto-calculation**: Automatically updates conversion as you type
- **Currency Search**: Easy currency selection with searchable dropdown

## Tech Stack

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Custom Hooks** - Reusable logic for currency data fetching
- **ESLint** - Code linting and formatting

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd 06currencyconverter
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   └── Box.jsx          # Currency input/output component
├── hooks/
│   └── useCurrencyInfo.js # Custom hooks for API calls
├── App.jsx              # Main application component
├── main.jsx             # Application entry point
└── index.css            # Global styles
```

## API

This app uses the [@fawazahmed0/currency-api](https://github.com/fawazahmed0/currency-api) for real-time exchange rates. The API provides:

- Current exchange rates for 150+ currencies
- Historical data support
- Free usage with no API key required
- CDN-delivered for fast response times

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).
