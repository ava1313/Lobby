// src/pages/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Import icons from react-icons
import { FaGoogle, FaDiscord, FaXbox, FaPlaystation, FaSteam, FaRegEnvelope } from 'react-icons/fa';

export default function Login() {
  const navigate = useNavigate();

  // State to store form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Example handler for form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log('Logging in with:', { email, password });
      // In a real app, you'd send a request to your backend API here.
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  // Example placeholders for social login handlers
  const handleGoogleLogin = () => {
    // e.g. window.location.href = 'http://localhost:5000/auth/google'
    console.log('Google login clicked');
  };

  const handleDiscordLogin = () => {
    console.log('Discord login clicked');
  };

  const handleXboxLogin = () => {
    console.log('Xbox login clicked');
  };

  const handlePlaystationLogin = () => {
    console.log('PlayStation login clicked');
  };

  const handleSteamLogin = () => {
    console.log('Steam login clicked');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {/* Email Field */}
        <label htmlFor="email" className="block mb-1 font-medium">
          Email:
        </label>
        <div className="flex items-center mb-4 border border-gray-300 rounded">
          <span className="px-2 text-gray-500">
            <FaRegEnvelope />
          </span>
          <input
            id="email"
            type="email"
            className="w-full p-2 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password Field */}
        <label htmlFor="password" className="block mb-1 font-medium">
          Password:
        </label>
        <input
          id="password"
          type="password"
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full font-semibold"
        >
          Login
        </button>

        {/* Separator */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-2 text-gray-500">OR</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-2">
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white py-2 px-4 w-full rounded"
          >
            <FaGoogle className="mr-2" />
            Sign in with Google
          </button>

          <button
            type="button"
            onClick={handleDiscordLogin}
            className="flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 w-full rounded"
          >
            <FaDiscord className="mr-2" />
            Sign in with Discord
          </button>

          <button
            type="button"
            onClick={handleXboxLogin}
            className="flex items-center justify-center bg-green-700 hover:bg-green-800 text-white py-2 px-4 w-full rounded"
          >
            <FaXbox className="mr-2" />
            Sign in with Xbox
          </button>

          <button
            type="button"
            onClick={handlePlaystationLogin}
            className="flex items-center justify-center bg-blue-800 hover:bg-blue-900 text-white py-2 px-4 w-full rounded"
          >
            <FaPlaystation className="mr-2" />
            Sign in with PlayStation
          </button>

          <button
            type="button"
            onClick={handleSteamLogin}
            className="flex items-center justify-center bg-gray-800 hover:bg-black text-white py-2 px-4 w-full rounded"
          >
            <FaSteam className="mr-2" />
            Sign in with Steam
          </button>
        </div>
      </form>
    </div>
  );
}
