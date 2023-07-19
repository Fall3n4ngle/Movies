# Movies

This project is dedicated to film lovers from all around the world. It allows guest users to search for new movies or TV series using a wide range of filters to satisfy their most specific preferences. Authorized users can mark films and shows as favorites, add them to playlists, and rate them. They also receive a list of recommendations based on their tastes.

## Technologies Used

- _[Vite.js](https://vitejs.dev/)_;
- _[React.js](https://react.dev/)_;
- _[Typescript](https://www.typescriptlang.org/)_;
- _[React-query](https://tanstack.com/query/v3/)_;
- _[React-router-dom](https://reactrouter.com/en/main)_;
- _[MantineUI](https://ui.mantine.dev/)_;

## Getting Started

To get started with the project, follow the steps below:

1. Clone the repository to your local machine.
2. Install the required dependencies using the following command:

```bash
npm install
```

## In the project directory, you can run the following scripts:

- **dev**: Starts the development server using Vite.js.
- **build**: Compiles the TypeScript code and creates a production build using Vite.js.
- **lint**: Lints the source code using ESLint.
- **lint:fix**: Automatically fixes linting issues in the source code using ESLint.
- **format**: Formats the source code using Prettier.
- **preview**: Previews the production build using Vite.js.

## Setting Up Environment Variables

In order to run the app on your local machine, you will need to set the environment variables, such as **VITE_API_KEY** and **VITE_API_TOKEN**. At first, you will have to retrieve them from **[tmdb website](https://www.themoviedb.org/)**. Here is a step-by-step guide on how to do that:

1. Sign up for an account: If you don't already have one, go to the TMDB website (https://www.themoviedb.org/) and sign up for a free account.

2. Log in to your account: Once you have created an account, log in to your TMDB account using your credentials.

3. Go to your account settings: After logging in, click on your account avatar or profile picture in the top right corner of the TMDB website. From the dropdown menu, select "Settings."

4. Navigate to the API section: In the settings page, click on the "API" tab in the left-hand sidebar.

5. Request an API key: On the API page, you will see a section titled "Create API Key." Click on the "Create" button to request a new API key.

6. Provide necessary information: TMDB will ask you to provide some information about your application, such as the name of your project and a brief description of how you plan to use the API. Fill in the required fields and click on the "Create" button.

7. Agree to the terms: Before generating the API key, you might need to agree to TMDB's terms and conditions of API usage.

8. Get your API key: Once you've completed the previous steps, TMDB will generate your API key. Copy the API key from the website. It is a long alphanumeric string that uniquely identifies your application and grants access to the TMDB API.

9. Retrieve API token: Depending on the API endpoint you plan to use, TMDB might require an additional API token. This is a different token used for specific endpoints and can be obtained in a similar manner as the API key. Navigate to the relevant section on the TMDB website, request the token, and provide any necessary information as instructed.

### To configure environment variables for different operating systems, follow these steps:

**macOS and Linux**

1. Open a terminal and navigate to the root directory of your project.
2. Run the setup-env.sh script to create a .env file and set up the environment variables:

```bash
./setup-env.sh
```

3. The script will prompt you to enter the values for **VITE_API_KEY** and **VITE_API_TOKEN**. Provide your actual API key and token values when prompted.
4. The script will create a .env file in the root directory of your project with the environment variables you entered. This file will be used by your React app during runtime.

**Windows**

1. Open Git Bash and navigate to the root directory of your project.
2. Run the setup-env.sh script to create a .env file and set up the environment variables:

```bash
sh setup-env.sh
```

3. Follow steps 3-4 from **macOS and Linux** section.