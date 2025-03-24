// src/App.jsx
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-6">Welcome to Lobby!</h1>
        <div className="flex space-x-4 justify-center">
          <Link
            to="/login"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
