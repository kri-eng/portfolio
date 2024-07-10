// ./src/components/Projects.jsx
import React from 'react';
import puzzleImage from '../assets/15-puzzle-solver.png';
import slaImage from '../assets/sla.png';
import fcaImage from '../assets/fca.png';
import hnImage from '../assets/hcknews.png';
import cddImage from '../assets/cdd.png';
import cmfyImage from '../assets/commUnify.webp';

const ProjectCard = ({ imageUrl, title, description, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 transform hover:shadow-purple hover:-translate-y-1 hover:scale-105">
      <div>
        <img className="w-full h-48 object-cover object-center" src={imageUrl} alt={title} />
        <div className="p-6">
          <h3 className="font-bold text-xl mb-2">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </a>
  );
};

const Projects = () => {
  const projects = [
    {
      imageUrl: slaImage,
      title: 'School List Application',
      description: 'A comprehensive iOS application designed to provide an interactive platform for accessing and exploring New York City school data. With its intuitive user interface and seamless functionality, application offers users a dynamic way to engage with school information.',
      link: 'https://github.com/kri-eng/EduScope', // Replace with your project link
    },
    {
      imageUrl: fcaImage,
      title: 'Chat Application',
      description: 'A user-friendly iOS application that enables real-time communication through chat messages. With Firebase integration for user authentication and data storage, users can register, log in, and exchange messages seamlessly.',
      link: 'https://github.com/kri-eng/Flash-Chat-App', // Replace with your project link
    },
    {
      imageUrl: hnImage,
      title: 'News List Application',
      description: 'A SwiftUI application presents a clean and organized user interface, featuring a table view displaying headlines and points for each news article. Additionally, the application includes a web view for viewing the URLs attached to each news article, ensuring a comprehensive browsing experience for users.',
      link: 'https://github.com/kri-eng/Hacker-News-SwiftUI', // Replace with your project link
    },
    {
      imageUrl: puzzleImage,
      title: '15 Puzzle Solver',
      description: 'A python program that can assist with solving any 15-puzzle board with the help of an AI agent that searches possible movements of blank space to get the finished puzzle solution. The project utilizes advance search algorithms like A* search, in order to find a solution efficiently.',
      link: 'https://github.com/kri-eng/15-Puzzle-Solver', // Replace with your project link
    },
    {
      imageUrl: cddImage,
      title: 'Cardiovascular Disease Detector',
      description: 'The Cardiovascular Disease Detection project aims to predict the likelihood of cardiovascular disease (CVD) using machine learning techniques on clinical patient data. The goal is to improve early detection and management of heart disease, which is a leading cause of mortality worldwide.',
      link: 'https://github.com/kri-eng/Cardiovascular-Disease-Detection', // Replace with your project link
    },
    {
      imageUrl: cmfyImage,
      title: 'CommUnify',
      description: 'Developed a student engagement application for college students. Providing a platform to showcase a bunch of events occuring in their university and stremiling the process of purchasing tickets, as well registering for the event. Architected the application using Flutter and Dart, integrating Firebase backend and Algolia search capabilities, while refining UI/UX design.',
      link: 'https://www.communifyy.com/',
    },
  ];

  return (
    <section id="projects" className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} imageUrl={project.imageUrl} title={project.title} description={project.description} link={project.link} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
