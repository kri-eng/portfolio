// ./src/components/Contact.jsx
import React, { useState } from 'react';
import { AiFillYoutube, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    let formErrors = {};
    if (name.trim() === '') {
      formErrors.name = true;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      formErrors.email = true;
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setLoading(true);

    const formData = { name, email, message };

    try {
      // Add form data to Firestore
      await addDoc(collection(db, 'contacts'), formData);
      setLoading(false);
      setSubmitted(true);
      console.log("Form Submitted:", formData);
    } catch (error) {
      console.error("Error adding document: ", error);
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Get In Touch</h2>
        {!submitted ? (
          <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-md">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`mt-1 block w-full h-10 px-2 py-1 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none sm:text-sm`}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`mt-1 block w-full h-10 px-2 py-1 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none sm:text-sm`}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-1 block w-full h-28 px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="inline-flex justify-center w-full max-w-md py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    {loading ? (
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    ) : (
                      'Submit'
                    )}
                  </button>
                </div>
              </form>
            </div>
            <div className="w-full max-w-md mt-8 flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/krish-pat15/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700"
                >
                  <AiFillLinkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/kri-eng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700"
                >
                  <AiFillGithub className="w-6 h-6" />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700"
                >
                  <AiFillYoutube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full flex-col">
            <p className="text-lg text-gray-800 mb-4 text-center">
              Thanks for connecting! I'll reach out soon. In the meantime, follow me on social media to stay updated.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/krish-pat15/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700"
              >
                <AiFillLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/kri-eng"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700"
              >
                <AiFillGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700"
              >
                <AiFillYoutube className="w-6 h-6" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
