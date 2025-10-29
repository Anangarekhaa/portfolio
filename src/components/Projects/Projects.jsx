import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
     <section className="projectbox">
      <h1 className="title">Projects</h1>

          <div className="projectItem">
        <h2 className="projectTitle">
          🚌 Smart Bus Tracking & Fleet Management Platform
          <a
            href="https://github.com/Anangarekhaa/people-count-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="githubIconLink"
            title="View GitHub Repository"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#00ffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="externalIcon"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </h2>

        <p className="projectDesc">
          Real-time bus tracking system using GPS and OpenCV for vehicle detection. Backend built with Python and Flask manages drivers, routes, and tracking. React.js frontend visualizes bus locations dynamically, Firebase handles real-time updates, and a dynamic scheduling algorithm optimizes routes for efficiency.
        </p>
      </div>


      <div className="projectItem">
        <h2 className="projectTitle">
          🔒 Secure Online Code Executor
          <a
            href="https://github.com/Anangarekhaa/cloudPod"
            target="_blank"
            rel="noopener noreferrer"
            className="githubIconLink"
            title="View GitHub Repository"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#00ffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="externalIcon"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </h2>

        <p className="projectDesc">
          Secure sandboxed code execution for Python, C++, and Java. Containerized with Docker and deployed on Azure Web App, with images managed via Azure Container Registry (ACR). Ensures isolated, scalable execution for multiple users, providing a safe runtime environment.
        </p>
      </div>



     <div className="projectItem">
  <h2 className="projectTitle">
    🏏 IPL RAG Bot
    <a
      href="https://github.com/Anangarekhaa/ipl-rag-bot"
      target="_blank"
      rel="noopener noreferrer"
      className="githubIconLink"
      title="View GitHub Repository"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#00ffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="externalIcon"
      >
        <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </svg>
    </a>
  </h2>

  <p className="projectDesc">
    Built an IPL-focused chatbot that scrapes season and player data from Wikipedia and ESPNcricinfo. 
    Data is embedded in Pinecone for semantic search with Cohere fallback, and structured SQL queries 
    are used for precise information retrieval. Backend powered by Python and Flask.
  </p>
</div>


      <div className="projectItem">
  <h2 className="projectTitle">
    🎵 Facial Emotion Recognition with Song Recommendation
    <a
      href="https://github.com/Anangarekhaa/facial-emotion-app"
      target="_blank"
      rel="noopener noreferrer"
      className="githubIconLink"
      title="View GitHub Repository"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#00ffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="externalIcon"
      >
        <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </svg>
    </a>
  </h2>

  <p className="projectDesc">
    A smart system that captures facial expressions via webcam and uses a CNN trained on FER-2013 to detect emotions. Detected emotions are mapped to music genres to recommend mood-based songs via the Spotify API. Built with Python, OpenCV, Flask, and React for real-time interactivity.
  </p>
</div>

      </section>
  )
}

export default Projects