// ./src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">About Me</h2>
        <div className="flex flex-col items-center">
          <div className="w-full md:w-2/3 space-y-12">
            <p className="text-lg text-gray-700">
              As a Computer Science graduate from the University of Illinois at Chicago and a current Master's student at the Georgia Institute of Technology, I possess a robust foundation in programming, problem-solving, and software development. My academic journey has been complemented by practical experiences and a passion for Artifical Intelligence, Machine Learning, and IOS Development.
            </p>
            <p className="text-lg text-gray-700">
              Through a comprehensive iOS development bootcamp, I gained hands-on experience in Swift, SwiftUI, API integration, JSON parsing, asynchronous communication, and local data persistence. My GitHub repositories showcase my proficiency in developing multi-screen iOS applications, implementing features like search, filtering, and mapping, and integrating third-party libraries and services such as Firebase.
            </p>
            <p className="text-lg text-gray-700">
              During my internship at American Pinball, I demonstrated my full-stack web development capabilities by engineering a web-based inventory management system. Leveraging HTML, CSS, JavaScript, Python, Flask, and SQL, I designed a user-friendly interface and migrated data from a legacy system, resulting in a 40% reduction in manual intervention. Additionally, I deployed the web application on Microsoft Azure, ensuring high availability and scalability, and created comprehensive documentation for end-users and developers.
            </p>
            <p className="text-lg text-gray-700">
              Beyond mobile and web development, I have explored Machine Learning and AI through projects like Cardiovascular Disease Detection and the 15 Puzzle Solver. These experiences have honed my ability to apply advanced algorithms, heuristics, and optimization techniques to solve complex problems, achieving notable results such as a 91% classification accuracy in cardiovascular disease prediction.
            </p>
            <p className="text-lg text-gray-700">
              With a keen interest in continuous learning and staying up-to-date with emerging technologies, I am actively seeking opportunities to contribute my skills and passion to innovative projects. My goal is to leverage my diverse technical skill set, from Python and Java to AWS and React, to build solutions that drive efficiency and enhance user experiences.
              <br />
              <br />
              Feel free to explore my work on GitHub and connect with me on LinkedIn. Let's collaborate and create something impactful together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
