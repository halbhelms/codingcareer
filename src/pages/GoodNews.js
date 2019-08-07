import React from 'react';
import Header from '../components/Header';
import noahsArk from '../images/noahs-ark.png';
import averageSalary from '../images/average-js-salary.jpg';
import currentJobs from '../images/current-jobs.png';
import salaryByState from '../images/salaries-by-state.png';
import styles from '../stylesheets/GoodNews.module.css';
import { Link } from 'react-router-dom';

const GoodNews = (props) => {

  return (
    <div className="content">
      <Header />
      <h1>Good News</h1>

      <p><span className="dropcap">I</span>n Charles Dickens' famous <em>Christmas Carol</em>, Scrooge is visited by the Ghost of Christmas Future, who shows him a bleak future. Horrified, Scrooge emplores the ghost to tell him that his fate is not sealed &mdash; that he may, "by an altered life", change that future.</p>

      <p>In the movie, "The Matrix", Morpheus tells Neo:</p>

      <blockquote><p className="quotation">This is your last chance. After this, there is no turning back. You take the blue pill—the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill—you stay in Wonderland, and I show you how deep the rabbit hole goes.</p></blockquote>

      <p>The future outlined in the Bad News is certainly grim. But there is good news.</p>

      <img src={noahsArk} alt=""/>

      <p>We can't do much about the large-scale, societal changes needed to deal with the oncoming wave of unemployment caused by robots and AI. But we can, like Noah, ensure that our families and we are safe.</p>

      <img className={styles['average-salary']} src={averageSalary} alt=""/>

      <p>The modern-day Noah's Ark is computer programming. In 2018, the average salary for a JavaScript programmer in the United States was almost $111,000. If you're like most people unfamiliar with programming, you might well think that I'm suggesting something akin to becoming a professional golfer. Sure, it pays great, but this is not a job for ordinary people. You need deep math skills and, just maybe, something we might call "the programming gene". Whatever that is, you're pretty sure you don't have it.</p>

      <p>We're going to get into how realistic becoming a programmer is for normal people in the <b>Me? Really?</b> section. For now, let's just explore why, apart from the salary, you might <em>want</em> to become a programmer.</p>

      <h2>Job Security</h2>
      <img src={currentJobs} alt="" className="aside"/>
      <p>Computer programmers are in high demand. As a computer programmer, you'll be in the coveted position of having recruiters track you down. There are hundreds of thousands &mdash; perhaps as much as a million &mdash; unfilled openings for computer programmers. And demand keeps growing.</p>

      <h2>Remote Work Opportunities</h2>
      <p>Managers in the last century often wanted to see "warm bodies in seats" so they could make sure everyone was working! But the shortage of programmers meant that they had to be more flexible in their demands. As a result, they ended up employing many remote developers.</p>
     
      <p>In my last job, I managed a group of developers. All of them worked remotely (and all of them made well in excess of $100K...). A good friend of mine employs over 200 developers, all of whom work remotely.</p>

      <p>Managers dragged into allowing remote work were astonished to find that employees were <em>more</em> productive when they worked from home. Now, it's becoming commonplace for companies to allow their developers to work remotely.</p>
      
      <h2>Formal Training is Seldom a Requirement</h2>
      <p>Again, "blame" this on the shortage of programmers. Employers commonly dispense with requirements for formal education. They're looking for people who can code, not who have a degree.</p>

      <p>Sadly, people interested in becoming a programmer are often told they need to attend a "bootcamp". These are intensive programs that purport to make you hiring-ready in 12-15 weeks. The cost? $12-20K. Some will offer you "free" training, getting their cut once you become a paid programmer where they can take as much of 30% of your salary for two years!</p>


      <img src={salaryByState} alt="" className="aside"/>

      <p>As someone who has hired many developers, I've interviewed some of these bootcamp graduates. I hesitate to paint with too broad a brush, but in my experience, these graduates' knowledge is broad, but very shallow. I've never hired any of them.</p>
   
      <h2>The Work is Fun!</h2>
      <p>I'll understand if you think I've slipped my mental moorings, but ask any working developer and they'll tell you that coding is highly creative. In fact, it's the rare developer who doesn't code in their off-hours, sheerly for the enjoyment of it.</p>

      <h2>Become AI-Proof</h2>
      <p>Well, this one comes with a caveat. By 2060, it's almost certain that most programming jobs will be done by machines. But that provides you with a very long runway, during which time (hopefully) governments will have figured out how to deal with massive unemployment.</p>

      <h2>A Progammer. Me?</h2>
      <p>Believe me, I understand your skepticism. So let's head over to <b><Link to="/really">Me? Really?</Link></b> to see if I can convince you that you actually do have what you need to become a successful, professional programmer.</p>
    </div>
  );
}

export default GoodNews;  