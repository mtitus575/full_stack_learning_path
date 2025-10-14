# Video Player Mini App

A responsive React video player application that demonstrates programming patterns and component communication.

## Features

- **Video Selection**: Choose from multiple video options via an interactive menu
- **Dynamic Playback**: Switch between videos without page reload
- **Responsive Design**: Clean, user-friendly interface that works on different screen sizes
- **Accessibility**: Keyboard navigation and proper labeling for controls
- **Error Handling**: Graceful handling of video loading failures

## Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and development server
- **CSS** - Styling
- **ESLint** - Code linting

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local development URL (typically `http://localhost:5173`)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/
│   ├── Containers/
│   │   └── App.jsx          # Main app component with state management
│   └── Presentationals/
│       ├── Menu.jsx         # Video selection menu
│       └── Video.jsx        # Video player component
├── styles/
│   ├── App.css
│   └── index.css
└── main.jsx                 # App entry point
```

## Component Architecture

This app follows the **Container/Presentational** pattern:

- **App (Container)**: Manages video source state and handles video selection
- **Menu (Presentational)**: Displays video options and triggers selection events
- **Video (Presentational)**: Renders the video player with provided source

## Key Learning Objectives

- React component communication via props
- State management and lifting state up
- Event handling between parent and child components
- Responsive design principles
- Accessibility best practices
