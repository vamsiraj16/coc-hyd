# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/47e3e34d-5c9c-40f8-8f01-e5a9025744f6

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/47e3e34d-5c9c-40f8-8f01-e5a9025744f6) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/47e3e34d-5c9c-40f8-8f01-e5a9025744f6) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes it is!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

# Church of Christ Website

## Environment Setup

1. Copy the environment template file:
```bash
cp .env.example .env
```

2. Update the `.env` file with your actual values:
```env
VITE_YOUTUBE_API_KEY=your_youtube_api_key_here
VITE_YOUTUBE_CHANNEL_ID=your_channel_id_here
```

### Getting YouTube API Credentials

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the YouTube Data API v3
4. Create credentials (API key)
5. Copy your API key to the `.env` file

### Security Notes

- Never commit the `.env` file to version control
- Keep your API keys secure and rotate them regularly
- Use environment-specific API keys for development and production
- Consider implementing API key restrictions in Google Cloud Console

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Features

- Responsive design
- YouTube sermon integration
- Event management
- Contact form
- Ministry information
- Service schedules
