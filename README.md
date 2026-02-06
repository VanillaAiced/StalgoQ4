# Backend

https://github.com/rchrdtrrs/Quiz4_Datastalgo.git

# Frontend Template

A simple starter template for building websites. No complicated setup required - just follow the steps below and you'll be up and running in minutes.

## Before You Start

You'll need to install Node.js on your computer first. Think of Node.js as the engine that powers this project.

### Installing Node.js

1. Go to [nodejs.org](https://nodejs.org/)
2. Download the LTS version (the one that says "Recommended for most users")
3. Run the installer and follow the steps
4. To check if it installed correctly, open your terminal/command prompt and type:
   ```bash
   node --version
   ```
   You should see a version number like `v20.x.x`

## Getting This Project Running

Once Node.js is installed, here's what to do:

### Step 1: Install Project Dependencies

Open your terminal in this project folder and run:

```bash
npm install
```

This downloads all the tools and libraries the project needs. It might take a minute or two.

### Step 2: Start the Development Server

Run this command:

```bash
npm run dev
```

The terminal will show you a local address (usually `http://localhost:5173`). Open that in your web browser and you'll see your site!

Any changes you make to the code will automatically show up in the browser - no need to refresh.

### Step 3 (Optional): Building for Production

When you're ready to put your site online, run:

```bash
npm run build
```

This creates an optimized version of your site in a `dist` folder. You can upload that folder to any web hosting service.

## What's in This Template?

```
├── src/
│   ├── main.js       # Your JavaScript code goes here
│   └── style.css     # Your styles go here
├── public/           # Put images and other files here
├── index.html        # The main HTML file
└── package.json      # Lists all the project dependencies
```

## Troubleshooting

**"npm is not recognized" error**: Node.js isn't installed correctly. Try reinstalling it.

**Port already in use**: Another program is using port 5173. Close other development servers or restart your computer.

**Changes not showing up**: Make sure the dev server is running (`npm run dev`). Check the terminal for errors.

## Need Help?

- [Vite Documentation](https://vitejs.dev/) - Learn about the build tool
- [MDN Web Docs](https://developer.mozilla.org/) - Learn HTML, CSS, and JavaScript

## License

MIT
