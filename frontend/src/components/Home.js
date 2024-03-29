import React from 'react';
import { Panel } from 'rsuite';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div className="home">
      <div className="home-left">
        <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
          <img src="https://i.imgur.com/o8oMm9i.jpg" height="240" />
            <Panel header="Riley Slayden">
              <p>Missoula, MT</p>
              <hr className="line"/>
              <h3><a target="_blank" rel="noreferrer" href="https://github.com/slaydenriley">GitHub</a> | <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/riley-slayden-9a82b8193/">LinkedIn</a></h3>
  
            </Panel>
        </Panel>
      </div>

      <div className="home-right">
        <h1>Biography</h1>
        <hr className="line"/>
        <p>
          Hello, my name is Riley Slayden! I am an (almost) graduate of
          Flatiron School's software engineering course. The technologies I use include
          Ruby on Rails, React/Redux. HTML/CSS/Javascript.</p>
        <p>
          Aside from coding, I am a huge outdoor enthusiast and musician. Being raised in Montana, I was exposed
          to skiing, fly-fishing, hiking, and camping. For a while, I toured the country as a professional banjo player
          with the band "National Park Radio."
        </p>
        <hr className="line"/>
        <div className="home-cards">
          <Link className="home-card" to="/projects">Projects</Link>
          <Link className="home-card" to="/posts">Blog</Link>
          <Link className="home-card" to="/resume">Resume</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
