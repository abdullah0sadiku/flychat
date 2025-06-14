# FlyChat

FlyChat is a real-time chat application built with React and Firebase. It allows users to sign up, log in, and chat instantly with others in a global chat room. The project demonstrates the use of React hooks, Firebase Authentication, and Firebase Realtime Database for seamless, live messaging.

## Features

- User authentication (sign up, log in, log out) using Firebase Auth
- Real-time messaging with Firebase Realtime Database
- Responsive and clean user interface with React
- Displays user avatars and timestamps for messages

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/abdullah0sadiku/flychat.git
    cd flychat
    ```

2. **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Set up Firebase:**

    - Go to [Firebase Console](https://console.firebase.google.com/) and create a new project.
    - Enable **Authentication** (Email/Password).
    - Create a **Realtime Database** and set its rules as needed.
    - In your project settings, get your Firebase config object.

4. **Configure Firebase in the project:**

    - Create a file named `.env` in the root directory.
    - Add your Firebase configuration like this:

        ```
        REACT_APP_API_KEY=your_api_key
        REACT_APP_AUTH_DOMAIN=your_auth_domain
        REACT_APP_DATABASE_URL=your_database_url
        REACT_APP_PROJECT_ID=your_project_id
        REACT_APP_STORAGE_BUCKET=your_storage_bucket
        REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
        REACT_APP_APP_ID=your_app_id
        ```

5. **Start the development server:**

    ```bash
    npm start
    # or
    yarn start
    ```

6. **Open your browser:**

    Visit [http://localhost:3000](http://localhost:3000) to use FlyChat locally.

## Folder Structure
flychat/ ├── public/ ├── src/ │ ├── components/ │ ├── firebase.js │ ├── App.js │ └── index.js ├── .env ├── package.json └── README.md


## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
