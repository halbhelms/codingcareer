import React from 'react';
import Header from '../components/Header';

const AboutMe = (props) => {

  return (
    <div className="content">
    <Header />
    <h1>About Me</h1>

    <p>In Charles Dickens' famous <em>Christmas Carol</em>, Scrooge is visited by the Ghost of Christmas Future, who shows him a bleak future. Horrified, Scrooge emplores the ghost to tell him that his fate is not sealed &mdash; that he may, "by an altered life", change that future.</p>
    </div>
  );
}

export default AboutMe;