// ./src/components/Skills.jsx
import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Skills</h2>
          <div className="flex flex-wrap gap-8">
            <div className="flex-1 p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Programming Languages</h3>
              <ul className="list-disc list-inside text-lg text-gray-800">
                <li className="mb-2">Python</li>
                <li className="mb-2">C++</li>
                <li className="mb-2">JavaScript</li>
                <li className="mb-2">Swift</li>
                <li>SQL</li>
              </ul>
            </div>
            <div className="flex-1 p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Development</h3>
              <h4 className="text-xl font-semibold mb-2 text-gray-800">Web Development</h4>
              <ul className="list-disc list-inside text-lg text-gray-800">
                <li className="mb-2">React</li>
                <li className="mb-2">Tailwind CSS</li>
                <li className="mb-2">HTML</li>
                <li className="mb-2">Node.js</li>
                <li className="mb-2">Express</li>
                <li className="mb-2">Flask</li>
                <li className="mb-2">HTTP Protocol</li>
              </ul>
              <h4 className="text-xl font-semibold mb-2 text-gray-800 mt-4">iOS Development</h4>
              <ul className="list-disc list-inside text-lg text-gray-800">
                <li className="mb-2">Swift and UIKit</li>
              </ul>
              <h4 className="text-xl font-semibold mb-2 text-gray-800 mt-4">Databases</h4>
              <ul className="list-disc list-inside text-lg text-gray-800">
                <li className="mb-2">MySQL</li>
                <li className="mb-2">Azure SQL</li>
                <li className="mb-2">Firestore</li>
                <li>MongoDB</li>
              </ul>
              <h4 className="text-xl font-semibold mb-2 text-gray-800 mt-4">Cloud Technologies</h4>
              <ul className="list-disc list-inside text-lg text-gray-800">
                <li>AWS (EC2, S3)</li>
              </ul>
            </div>
            <div className="flex-1 p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Soft Skills</h3>
              <ul className="list-disc list-inside text-lg text-gray-800">
                <li className="mb-2">Problem Solver</li>
                <li className="mb-2">Innovative</li>
                <li className="mb-2">Fast Learner</li>
                <li className="mb-2">Adaptable</li>
                <li>Communication</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
