# Discussion Website

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction
This project is a discussion website where registered users can submit various types of content including links, text posts, images, and videos. The content is organized by subject into user-created boards called "communities". Users can vote on posts, with the most upvoted content appearing at the top of its community and potentially on the site's front page. The project is built with Node.js, MySQL, and React, with advanced caching using Upstash Redis and modern data fetching with React Query.

## Features
- **User Registration and Authentication**: Secure user authentication with NextAuth.
- **Content Submission**: Users can submit links, text posts, images, and videos.
- **Voting System**: Users can upvote or downvote content.
- **Communities**: Content is organized into user-created communities.
- **Infinite Scrolling**: Seamless content loading as users scroll.
- **Advanced Caching**: Using Upstash Redis for efficient data retrieval.
- **Nested Comments**: Supports nested comments on posts.

## Technologies Used
- **Backend**: Node.js, Express.js, MySQL
- **Frontend**: React, React Query
- **Authentication**: NextAuth
- **Caching**: Upstash Redis
- **Other Tools**: Webpack, Babel, ESLint

## Getting Started

### Prerequisites
- Node.js
- MySQL
- Redis

### Installation
1. **Clone the repository**:
    ```bash
    git clone [https://github.com/your-username/discussion-website.git](https://github.com/Harsh-Mathur-1503/crill.git)
    cd crill
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Setup environment variables**:
    Create a `.env` file in the root directory and add the following variables:
    ```env
    DATABASE_URL=mysql://user:password@localhost:3306/database
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=your-secret
    REDIS_URL=redis://localhost:6379
    ```

4. **Run database migrations**:
    ```bash
    npx prisma migrate dev
    ```

5. **Start the development server**:
    ```bash
    npm run dev
    ```

6. **Access the application**:
    Open your browser and navigate to `http://localhost:3000`.

## Project Structure
- ├── public # Static files
├── src
│ ├── components # React components
│ ├── pages # Next.js pages
│ ├── styles # CSS/Sass files
│ ├── utils # Utility functions
│ └── services # API services
├── prisma
│ └── schema.prisma # Prisma schema
├── .env # Environment variables
├── package.json # NPM scripts and dependencies
└── README.md # Project documentation



## Usage
- **Register and login**: Create an account or login using the authentication system.
- **Create a community**: Organize your content by creating a new community.
- **Submit content**: Post links, text posts, images, or videos to a community.
- **Vote on content**: Upvote or downvote content to influence its ranking.
- **Comment on posts**: Engage with the community by commenting on posts.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request with your improvements.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
