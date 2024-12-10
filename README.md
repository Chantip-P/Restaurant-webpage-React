# Restaurant Webpage - React App

Welcome to the **Restaurant Webpage** project! This web application is built using **React** and **Vite** for fast development, and deployed on **GitHub Pages** for easy access and sharing. This project showcases a simple restaurant webpage with different sections, including a homepage, an about page, and a menu section with tabbed navigation.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Development](#development)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

---

## Project Overview

This project is a simple React app that features a restaurant webpage. The app includes:

- **Homepage**: A welcoming page with introductory text and images.
- **About Page**: A section about the restaurant.
- **Menu Section**: A tabbed menu showcasing different food items like Thai food, sushi, and desserts.

It uses **Vite** for building and serving the app during development, and **GitHub Pages** to deploy the app for online access.

---

## Features

- **Responsive Design**: The website is fully responsive and works on both desktop and mobile devices.
- **React Router**: Used for navigation between the homepage, about page, and menu section.
- **Image Assets**: Images are placed in the `public` directory for easy access in both development and production environments.
- **Deployment with GitHub Pages**: The app is hosted on GitHub Pages and is accessible via a live URL.

---

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A modern build tool that provides fast development and optimized production builds.
- **React Router**: For navigation between different views of the app.
- **GitHub Pages**: For deploying the app online.
- **HTML/CSS**: For structuring and styling the webpage.

---

## Setup and Installation

To get started with this project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/Chantip-P/Restaurant-webpage-React.git
```

### 2. Install dependencies
```bash
cd Restaurant-webpage-React
npm install
```
### 3. Run the development server
```bash
npm run dev
```

### Deployment
```bash
npm run build
npm run deploy
```
This will push the contents of the dist/ folder to the gh-pages branch of your repository, making the app live at (the URL)[https://chantip-p.github.io/Restaurant-webpage-React/
]:
https://chantip-p.github.io/Restaurant-webpage-React/

### Troubleshooting
Ensure that the base property is set correctly in vite.config.js:
```bash
base: '/Restaurant-webpage-React/', // GitHub Pages repository name
```
