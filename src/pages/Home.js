import React from 'react';
import Header from '../components/Header';
import styles from '../stylesheets/Home.module.css';
import { Link } from 'react-router-dom';

const Home = (props) => {

  return (
    <div className="content">
    <Header />
    <h1>Home</h1>

    {/* <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick" />
<input type="hidden" name="hosted_button_id" value="ALTZQJX49BV7Q" />
<table>
<tr><td><input type="hidden" name="on0" value="Amount" />Amount</td></tr><tr><td><input type="text" name="os0" maxlength="200" /></td></tr>
</table>/form> */}
    <p><span className="dropcap">I</span>'m going to try to convince you of some really <Link to="/badnews"><b>bad news</b></Link>. Then, I'm going to further try to convince you that there's some really <Link to="/goodnews"><b>good news</b></Link>. </p>

    <p>I've been a professional programmer for close to thirty years. I've taught programming to thousands of people through books, in-person training, and magazine articles. Most of these people did not have degrees in computer science or software engineering.</p>

    <p>One of my first students was a young man named Aaron. When I met him, he had only recently left his job as a pizza-delivery person. He had no technical training, but I saw potential in Aaron. I told him that if he followed my lead, I would teach him the skills needed to be a professional developer. He did &mdash; and he currently works as a technical lead (programmer) making in excess of $115K.</p>

    <p>Wes was an usher at an AMC movie theater. He had no idea what he wanted to do with his life when his Mom asked me to talk with him. I told Wes that if he would let me, I would help him become a professional software developer. He did &mdash; and he just left a job paying him $110K <i>for a higher-paying job</i>.</p>

    <p>I'm currently working with two women who are well on their way to getting their first jobs in programming. (They are the inspiration for one of the exercises involving custom t-shirts with the cheeky slogan emblazoned: <b>I'm a female coder. Try to keep up.)</b></p>

    <p>I convinced them &mdash; <b>but can I convince you?</b></p>

    <div className={styles['q']}>
    <q>Because of self-doubt, the fear of failure, or laziness, most people usually bite off way less than they can chew.</q> <i>&mdash;Mokokoma Mokhonoana</i>
    </div>

    <p>If you're like most of us, you probably think that the idea of becoming a professional programmer is <i>outrageous</i>! You're no good a math. You're not "technical". And you probably think you're not smart enough.</p>

    <p>My route to becoming a professional programming was...circuitous. In the only year of college I completed, I studied theology. That naturally led to a career in woodworking? I really stumbled into programming and I'm grateful that I knew a programming manager who took a chance and hired me when I knew absolutely nothing.</p>

    <p>I learned that programming isn't a natural talent like singing or drawing. It's a skill &mdash; a way of <i>thinking</i> really &mdash; that can be learned.</p>

    <p>But that probably isn't <i>nearly</i> enough to convince you. Maybe Aaron and Wes and I all had a recessive "programming gene" that just hadn't come to the fore yet. Maybe, despite none of us being particularly good at math, we had some nascent genius that only needed the right environment to express itself?</p>

    <p>Rather than try to convince you otherwise, I'm offering you <Link to="/exercises"><b>60 exercises</b></Link> to help <i>you</i> decide. They're all free. These aren't quizzes. They're actual coding exercises. They start simply and move up in complexity. Most importantly, they'll let you experience what it's like to be a programmer. They'll take you between 20 and 45 minutes to complete each one and there are answers provided if you really get stuck.</p>

    <p>But before you make up your mind, I've got <Link to="/badnews"><b>reasons</b></Link> that will help explain why I'm standing on this soapbox crying "The End is Nigh!"</p>
    </div>
  );
}

export default Home;