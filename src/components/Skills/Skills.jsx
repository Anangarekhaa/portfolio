import React, { useEffect } from 'react';
import './Skills.css';
import PythonLogo from '../../assets/python_img.jpg';
import Reactlogo from '../../assets/React-icon.svg.png';
import awslogo from '../../assets/aws_logo.png';
import azurelogo from '../../assets/Microsoft_Azure.svg.png';
import dockerlogo from '../../assets/docker_img.png';
import htmllogo from '../../assets/html_img.png';
import csslogo from '../../assets/css.png';
import mysqllogo from '../../assets/MySQL-Logo.png';
import nodelogo from '../../assets/node-js.png';
import expresslogo from '../../assets/express.png';
import mongodblogo from '../../assets/mongodb.png';
import clogo from '../../assets/c-prog.png';
import flasklogo from '../../assets/flask.png';
import gitlogo from '../../assets/git.png';
import matplotliblogo from '../../assets/matplotlib.png';
import numpylogo from '../../assets/numpy.png';
import pandaslogo from '../../assets/pandas.png';
import visuallogo from '../../assets/visualcode.png';
import postmanlogo from '../../assets/postman.png';
import { FaPython, FaReact, FaNodeJs, FaDocker, FaGit, FaSeedling } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiMysql, SiFirebase, SiTailwindcss, SiPostgresql, SiCelery, SiRedis, SiElasticsearch, SiLangchain, SiHuggingface } from 'react-icons/si';
import AOS from 'aos';

const skills = [
  { name: 'Python', icon: <img src={PythonLogo} alt="Python" className="skillImg" /> },
  { name: 'Django', icon: <span className="skillIconText">🎜</span> },
  { name: 'FastAPI', icon: <span className="skillIconText">⚡</span> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="skillSvg" /> },
  { name: 'Celery', icon: <SiCelery className="skillSvg" /> },
  { name: 'Redis', icon: <SiRedis className="skillSvg" /> },
  { name: 'LangGraph', icon: <SiLangchain className="skillSvg" /> },
  { name: 'Pinecone', icon: <FaSeedling className="skillSvg" /> },
  { name: 'Sentence Transformers', icon: <SiHuggingface className="skillSvg" /> },
  { name: 'Elasticsearch', icon: <SiElasticsearch className="skillSvg" /> },
  { name: 'MySql', icon: <img src={mysqllogo} alt="mysql" className="skillImg" /> },
  { name: 'Azure', icon: <img src={azurelogo} alt="Azure" className="skillImg" /> },
  { name: 'AWS', icon: <img src={awslogo} alt="AWS" className="skillImg" /> },
  { name: 'Docker', icon: <img src={dockerlogo} alt="Docker" className="skillImg" /> },
  { name: 'HTML', icon: <img src={htmllogo} alt="HTML" className="skillImg" /> },
  { name: 'CSS', icon: <img src={csslogo} alt="CSS" className="skillImg" /> },
  { name: 'React.js', icon: <img src={Reactlogo} alt="React" className="skillImg" /> },
  { name: 'Node.js', icon: <img src={nodelogo} alt="node.js" className="skillImg" /> },
  { name: 'Express.js', icon: <img src={expresslogo} alt="express.js" className="skillImg" /> },
  { name: 'MongoDb', icon: <img src={mongodblogo} alt="mongodb" className="skillImg" /> },
  { name: 'C', icon: <img src={clogo} alt="C" className="skillImg" /> },
  { name: 'Flask', icon: <img src={flasklogo} alt="flask" className="skillImg" /> },
  { name: 'Git', icon: <img src={gitlogo} alt="Git" className="skillImg" /> },
  { name: 'Matplotlib', icon: <img src={matplotliblogo} alt="matplotlib" className="skillImg" /> },
  { name: 'Numpy', icon: <img src={numpylogo} alt="numpy" className="skillImg" /> },
  { name: 'Pandas', icon: <img src={pandaslogo} alt="pandas" className="skillImg" /> },
  { name: 'Visual Studio Code', icon: <img src={visuallogo} alt="visual" className="skillImg" /> },
  { name: 'Postman', icon: <img src={postmanlogo} alt="postman" className="skillImg" /> },
];

const Skills = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section className="skillsSection" data-aos="fade-up" data-aos-duration="800">
      <h2 className="skillsTitle" data-aos="fade-down">My Tech Stack</h2>
      
      <div className="skillsWrapper">
        {skills.map((skill, index) => (
          <div 
            className="skillPill" 
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 50}
            data-aos-duration="600"
          >
            <span className="skillIcon">{skill.icon}</span>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
