#!/bin/bash

# Check if .env file already exists
if [ -f .env ]; then
  echo "The .env file already exists. Aborting setup."
  exit 1
fi

# Copy the .env.example file to .env
cp .env.example .env

# Prompt the user to fill in the environment variables
read -p "Enter the value for VITE_API_KEY: " VITE_API_KEY
echo "VITE_API_KEY=$VITE_API_KEY" >> .env

read -p "Enter the value for VITE_API_TOKEN: " VITE_API_TOKEN
echo "VITE_API_TOKEN=$VITE_API_TOKEN" >> .env

echo "Environment variables have been set up successfully!"