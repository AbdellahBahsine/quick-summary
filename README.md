**QuickSummary** is a web application that allows users to log in and create concise summaries of their favorite books, save them in their account and see other users summaries.

## Features

**User Authentication:** Secure login and registration system for users using JWT.

**Book Summaries:** Users can create, edit, and delete summaries for each book.

**Search Functionality:** Quick search to find summaries by book title.

**Responsive Design:** Optimized for various devices, providing a seamless experience on mobile and desktop.

## Technologies Used

**Frontend:** Next.js with TypeScript for building the user interface.

**Backend:** Next.js API routes for the server-side logic.

**Database:** PostgreSQL for storing user information and book summaries.

**ORM:** Prisma for database interaction.

**Styling:** TailwindCSS for responsive and modern design.

**Docker:** For containerization of the app.

## Installation Instructions
To run QuickSummary locally, follow these steps:

1. Clone the repository:
```bash
git clone git@github.com:AbdellahBahsine/quick-summary.git
```

2. Navigate to the project directory:
```bash
cd quick-summary
```
3. Create a .env file in the root directory and add the necessary environment variables (database URI, JWT secret, and JWT refresh secret).

4. Build and run the Docker containers:
```bash
docker-compose up --build
```

5. Open your browser and navigate to http://localhost:3000 to view the app.

## Usage

Once the app is running, users can:

- Register for an account or log in with existing credentials.
- Create a new summary by entering the book title, author, a brief description, and content.
- Edit or delete existing summaries from their profile.
- View their own summaries and those of other users.
- Use the search feature to quickly find summaries.
