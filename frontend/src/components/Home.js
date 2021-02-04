import React from 'react';

const Home = (props) => {
  return (
    <div className="home">
      <div className="home-left">
        <img src="https://d31u1j2vbx6ya5.cloudfront.net/gei-assets/uploads/2019/08/pro-headshots-photography-tips.jpg" alt="Headshot"/>
        <div className="social">
          <h2>Riley Slayden</h2>
          <p>Missoula, MT</p>
          <h3>Gitub | LinkedIn</h3>
        </div>
      </div>

      <div className="home-right">
        <h1>Biography</h1>
        <p>
          Hello, my name is Riley Slayden! I am an (almost) graduate of
          Flatiron School's software engineering course. The technologies I use include
          Ruby on Rails, React/Redux. HTML/CSS/Javascript.</p>
        <p>
          Aside from coding, I am a huge outdoor enthusiast. Being raised in Montana, I was exposed
          to skiing, fly-fishing, hiking, camping, to mention a few.
        </p>
        <br/>
        <p></p>
      </div>
    </div>
  );
};

export default Home;
