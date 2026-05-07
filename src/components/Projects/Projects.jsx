import React, { useEffect } from 'react'
import './Projects.css'
import AOS from 'aos'

const Projects = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
     <section name="projects" className="projectbox" data-aos="fade-up" data-aos-duration="800">
      <h1 className="title" data-aos="fade-down">Projects</h1>

<div className="projectItem" data-aos="slide-up" data-aos-duration="800">
  <h2 className="projectTitle">
    🚌 Smart Bus Tracking & Fleet Management
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

  <p className="projectTech">
    Python · Flask · React · OpenCV · WebSocket 
  </p>

  <p className="projectDesc">
    Public bus fleet often operate without real-time visibility into what's happening in real time —
    no live location, no occupancy data, no way to know if a bus is full before
    it pulls in. This system was built to fix that. A CV pipeline using SSD
    MobileNet + Centroid Tracker detects and counts passengers from live feeds —
    webcam, video, or IP camera — and feeds that data into a Flask + WebSocket
    backend that broadcasts occupancy updates to all connected clients with
    sub-second latency. A React dashboard gives fleet admins a single-screen
    view of every bus — live location, current occupancy, and configurable
    capacity alerts that fire the moment a bus crosses its threshold.
  </p>
</div>


<div className="projectItem" data-aos="slide-up" data-aos-duration="800">
  <h2 className="projectTitle">
    Ticket Booking & Payment System
    <a
      href="https://github.com/Anangarekhaa/ticket-booking-system"
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

  <p className="projectTech">
    FastAPI · PostgreSQL · Celery · Redis 
  </p>

  <p className="projectDesc">
  Concurrent seat reservation is a classic distributed systems problem — two users book the same seat at the
   same millisecond and both get a confirmation. This project was built to solve exactly that.
    Seat allocation is made atomic using PostgreSQL row-level locking and serializable
     transactions, tested across 5 simultaneous users on the same seat. 
     Payment reliability is enforced through idempotency keys and automatic rollback — a retry
      never results in a double charge. Unpaid reservations auto-expire after 5 minutes via 
      Celery Beat + Redis, freeing up seats without manual intervention. 
  </p>
</div>


<div className="projectItem" data-aos="slide-up" data-aos-duration="800">
  <h2 className="projectTitle">
    LearnSphere RAG Platform
    <a
      href="https://github.com/Anangarekhaa/learnsphere-rag"
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

  <p className="projectTech">
    FastAPI · React · PostgreSQL · Sentence Transformers · Groq LLM 
  </p>

  <p className="projectDesc">
Vendor security questionnaires are long, repetitive, and mostly answerable from documents a 
company already has — but someone still has to read through everything and manually fill them
 in. This system automates that. Documents are uploaded as reference material, 
 and the RAG pipeline retrieves the most relevant chunks using cosine similarity, 
 passing them to Groq LLM to generate grounded answers. A confidence threshold of 0.40 ensures
  the system returns an explicit not-found rather than hallucinating an answer it isn't sure about. 
  Confidence is scored using the similarity gap between the top two retrieved chunks — giving users a clear High, Medium, or Low signal on every answer. 
  A React frontend lets users review, edit, and export the completed questionnaire as a .docx file. 
  </p>
</div>


<div className="projectItem" data-aos="slide-up" data-aos-duration="800">
  <h2 className="projectTitle">
    IPL RAG Bot
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

  <p className="projectTech">
    FastAPI · LangGraph · Pinecone · MySQL · BM25 · Redis
  </p>

  <p className="projectDesc">
IPL data spans decades of matches, players, and stats — and different questions need different
 retrieval strategies. A simple factual query shouldn't go anywhere near a vector database.
  This system uses LangGraph to route queries across 3 paths — direct SQL for simple facts,
   hybrid BM25 + Pinecone vector search for complex historical queries, and web search for
    current data. Simple queries never touch the LLM, cutting unnecessary API calls 
    significantly. For queries that do reach the LLM, confidence thresholds reject 
    low-confidence answers outright rather than passing them through. Redis caching sits
     across all paths so repeated queries skip retrieval entirely.
  </p>
</div>



 <div className="projectItem" data-aos="slide-up" data-aos-duration="800">
  <h2 className="projectTitle">
    Facial Emotion → Spotify Music Player
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

    <p className="projectTech">
    Python · OpenCV · Spotify API 
  </p>

  <p className="projectDesc">
Music and mood are deeply connected — but finding the right playlist for how you're actually feeling
 in the moment takes effort nobody wants to spend. This project removes that entirely. 
 The frontend captures live video from the webcam and runs it through a CV pipeline that
  detects and classifies facial expressions into mood categories — happy, sad, angry, neutral.
   That detected emotion maps to a music genre, which is sent to the Spotify API to pull a curated list of 
   matching songs. The results come back as a browsable list — the user picks what they want to play. 
   The whole flow from face to song list happens in real time, with the genre mapping updating as the detected emotion changes.
  </p>
</div>


      <div className="projectItem" data-aos="slide-up" data-aos-duration="800">
        <h2 className="projectTitle">
          Secure Online Code Executor
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
            <p className="projectTech">
            Python · Docker · Azure · React
          </p>

        <p className="projectDesc">
          Running untrusted user-submitted code on a server is a security problem — one poorly
           written script can consume all available resources or worse, access things it
            shouldn't. This project solves that with Docker-based sandboxing. Every code 
            submission — Python, C++, or Java — spins up its own isolated container, executes
             with strict CPU and memory limits, and gets killed if it runs past a set timeout.
              Nothing touches the host system. Output is captured cleanly via backend APIs and returned 
              to the user through a React interface. Each container is destroyed after execution, leaving no persistent
               state between runs.
        </p>
      </div>

    <div className="projectItem" data-aos="slide-up" data-aos-duration="800">
  <h2 className="projectTitle">
    Paragraph Analyzer
    <a
      href="https://github.com/Anangarekhaa/paragraph-analyzer"
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

    <p className="projectTech">
    Django · Celery · Elasticsearch · Redis · PostgreSQL
  </p>

  <p className="projectDesc">
Text analysis is computationally heavy — running NLP jobs synchronously inside a request cycle
 means the user waits, the server blocks, and everything slows down under load. This project 
 decouples all of that. Text comes in through a Django REST API, gets queued as a Celery task, 
 and processed asynchronously by workers while the request returns immediately. Results land
  in PostgreSQL and are indexed into Elasticsearch, making them instantly searchable across 
  large volumes of analyzed content. Redis serves as both the Celery broker and result backend,
   enabling task status polling without hitting the database. The pipeline — ingestion, async analysis,
    storage, search — is designed so each stage can scale independently.
  </p>
</div>

     <div className="projectItem" data-aos="slide-up" data-aos-duration="800">
  <h2 className="projectTitle">
    Finance Backend API
    <a
      href="https://github.com/Anangarekhaa/finance-backend-api"
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
      <p className="projectTech">
    FastAPI · PostgreSQL · Redis · Docker Compose · pytest
  </p>

  <p className="projectDesc">
   Financial APIs handle sensitive data across users with different levels of access — an analyst shouldn't be able to 
   do what an admin can, and nothing should disappear without a trace. This project is built 
   around those constraints. Role-based access control spans 3 user roles — Admin, Manager,
    User — with route-level permission enforcement so access is locked down at the API layer.
     A soft-delete pattern preserves full audit history across all entities, meaning no data is ever
      permanently lost, just marked inactive. Schema migrations are managed with Alembic, and the environment
       ships with 6 months of seed financial data for reproducible testing. A pytest suite covers authentication, RBAC logic, and financial workflows end-to-end.
  </p>
</div>



     

      </section>
  )
}

export default Projects