import React, { useState } from 'react';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted with:', { email, password });
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left side - Signup Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center">
              <svg viewBox="0 0 40 40" className="h-10 w-10 text-green-700" fill="currentColor">
                <path d="M20 3.33a16.67 16.67 0 1 0 0 33.34 16.67 16.67 0 0 0 0-33.34zm0 30a13.33 13.33 0 1 1 0-26.66 13.33 13.33 0 0 1 0 26.66z" />
                <path d="M20 10a3.33 3.33 0 0 0-3.33 3.33v13.34a3.33 3.33 0 1 0 6.66 0V13.33A3.33 3.33 0 0 0 20 10zm0 26.67a3.33 3.33 0 1 0 0-6.66 3.33 3.33 0 0 0 0 6.66z" />
              </svg>
              <span className="ml-2 text-xl font-semibold text-green-700">SkillRedi</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">Create an Account</h1>
          <p className="text-center text-gray-600 mb-8">Sign up to start your learning journey</p>

          {/* Google Sign Up */}
          <button 
            className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm bg-white mb-4"
            data-testid="google-signup"
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 mr-2">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Sign up with Google
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-300"></div>
            <div className="mx-4 text-gray-500">OR</div>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Email/Password Form (using div instead of form) */}
          <div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                data-testid="email-input"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="block text-gray-700">
                  Password
                </label>
                <a href="#" className="text-gray-600 hover:text-green-700 text-sm">
                  Forgot Password?
                </a>
              </div>
              <input
                type="password"
                id="password"
                data-testid="password-input"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              onClick={handleSubmit}
              data-testid="signup-button"
              className="w-full bg-gray-900 text-white py-3 px-4 rounded-md hover:bg-gray-800 transition-colors"
              type="button"
            >
              Sign up
            </button>
          </div>

          {/* Login Link */}
          <p className="text-center mt-6 text-gray-600">
            Already have an account?{' '}
            <a href="#" className="text-green-700 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>

      {/* Right side - Image with Testimonial */}
      <div className="hidden md:block md:w-1/2 bg-gray-100 relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/api/placeholder/1000/800')" }}>
          <div className="absolute bottom-16 right-8 max-w-sm">
            <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-2">
                "Skill Forge makes learning to code fun and personal. The AI tutor explains things in ways that actually click, and the badges and XP keep me motivated. I'm finally learning JavaScript!"
              </p>
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center overflow-hidden">
                  <span className="text-xs text-white">JC</span>
                </div>
                <div className="ml-2">
                  <p className="text-sm font-medium">Jemimah, CGH</p>
                  <p className="text-xs text-gray-600">Front-end Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
