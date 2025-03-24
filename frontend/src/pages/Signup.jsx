// src/pages/Signup.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegEnvelope } from 'react-icons/fa';

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    try {
      console.log('Signing up with:', { email, password });
      // In real life, you'd call your backend signup endpoint here.
      navigate('/login');
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSignup}
        className="bg-white p-8 rounded shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

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

        <label htmlFor="confirmPassword" className="block mb-1 font-medium">
          Confirm Password:
        </label>
        <input
          id="confirmPassword"
          type="password"
          className="w-full p-2 mb-6 border border-gray-300 rounded focus:outline-none"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 w-full font-semibold"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
