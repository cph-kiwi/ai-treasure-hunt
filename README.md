# AI Treasure Hunt

An interactive treasure hunt generator built with React, TypeScript, and Mastra - an AI agent framework.

## 🎯 Overview

This project combines a modern React frontend with Mastra's AI agent capabilities to create dynamic treasure hunts. The application uses:

- **Frontend**: React 19 + TypeScript + Vite
- **AI Framework**: Mastra with OpenAI integration
- **Database**: LibSQL for data persistence
- **Styling**: Modern CSS with responsive design

## 🚀 Quick Start

### Prerequisites

- Node.js >= 20.9.0 (v20.17.0)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd ai-treasure-hunt
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables (create a `.env` file):

```bash
OPENAI_API_KEY=your_openai_api_key_here
```

### Development

Start the frontend development server:

```bash
npm run dev:frontend
```

The React app will be available at `http://localhost:5173`

Start the Mastra backend:

```bash
npm run dev
```

### Building for Production

Build the frontend:

```bash
npm run build:frontend
```

Build the Mastra backend:

```bash
npm run build
```

## 📁 Project Structure

```
ai-treasure-hunt/
├── src/
│   ├── App.tsx              # Main React component
│   ├── main.tsx             # React entry point
│   └── mastra/
│       ├── index.ts         # Mastra configuration
│       ├── agents/          # AI agents
│       ├── tools/           # Agent tools
│       └── workflows/       # Workflow definitions
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## 🛠️ Available Scripts

- `npm run dev:frontend` - Start Vite development server
- `npm run build:frontend` - Build frontend for production
- `npm run preview` - Preview production build
- `npm run dev` - Start Mastra development server
- `npm run build` - Build Mastra backend
- `npm run start` - Start Mastra production server

## 🎮 Features

- **AI-Powered Treasure Hunts**: Generate custom treasure hunts using AI
- **Weather Integration**: Current weather-based hunt customization
- **Modern UI**: Clean, responsive React interface
- **Type Safety**: Full TypeScript support
- **Real-time Updates**: Live development with hot reload

## 🔧 Configuration

The project uses:

- **Vite** for fast development and building
- **TypeScript** for type safety
- **Mastra** for AI agent orchestration
- **LibSQL** for data storage
- **Pino** for logging

## 📝 License

ISC License - see [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or issues, please open an issue on the repository.
