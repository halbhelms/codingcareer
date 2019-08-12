import React from 'react';
import Header from '../components/Header';

const AboutMe = (props) => {

  return (
    <div className="content">
    <Header />
    <h1>About Me</h1>

    <p><span className="dropcap">M</span>y name is Hal Helms. I've been programming professionally for almost thirty years. For much of that time, I've been involved in teaching other programmers.</p>

    <p>Like you, I approached programming by a very unlikely route, studying theology for one year in college, then working as a woodworker for almost ten years. From both my own experience, and that of thousands of students I've taught, I have learned that programming is much more of a <i>mindset</i> than mere memorization of arcane syntax.</p>

    <p>I believe the discipline of programming has helped me in other areas, sharpening my thinking and problem-solving. And while the popular misconception is that programming is the domain of near genius-level intellects, almost all of the programmers I've had the pleasure of working with, and teaching, are quite normal people. What we might call the "programmer mindset" (and, yes, the arcane syntax) can be be learned.</p>

    <p>Because I am deeply concerned about what I perceive as the pernicious effects of automation and AI, I hope to convince as many people as I can that, for the next several decades, programming is likely to represent a safe haven from the oncoming storm.</p>

    <p>Moore's Law (the computing power of the tiny chips that power so many of our devices doubles every 18 months) will fuel an enormous increase in the ability of machines to do the work now reserved for humans.</p>

    <p>As more people look to programming as a way to delay the effects of what is arguably the greatest ever transformation in world economies, there will be no shortage of unscrupulous companies ready to exploit people's anxiety. Already, people are being sold on the idea that <i>in 4 short months</i> (at the cost of thousands of dollars), the programming world will open to them.</p> 
    
    <p>One prestigious university in Florida joined with a "programming bootcamp" promising a rosy future for only $14,000. Still others promise to teach you for free &mdash; in return for a claim on future earnings that can reach into the tens of thousands of dollars. On the other end of the spectrum, I recently saw that CNN was advertising a course that promised to teach you <i>everything</i> for the low cost of $49. As I said, there will be no shortage of companies wishing to take advantage of those who want a better life but lack the knowledge of how to approach such a career change.</p>

    <p>I hope you'll take advantage of these exercises to explore whether <i>you</i> might want to consider it as a new career. If you do, there are a number of possible onroads to the world of programming. I am creating an online <b>CareerChanger</b> course bolstered by one-on-one and group mentoring of students. You can check out the options available at <a href="http://codingcareer.org" target="newwin">codingcareer.org</a>.</p>

    <p>For students who wish to navigate the path alone, there are many free resources as well, some of which are excellent in teaching you the syntax of programming. I'll include links to these at <a href="http://codingcareer.org" target="newwin">codingcareer.org</a>. Whichever course you take, I wish you only the best. I only urge you to act soon. As Noah asked his neighbors, <q>Does it look like rain to you?</q></p>
    </div>
  );
}

export default AboutMe;