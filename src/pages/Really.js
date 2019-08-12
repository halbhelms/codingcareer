import React from 'react';
import Header from '../components/Header';
import styles from '../stylesheets/Really.module.css';

const Really = (props) => {

  return (
     <div className="content">
      <Header />
      <h1>Me? Really?</h1>
      <p><span className="dropcap">I</span> know what you're thinking. "<em>There is no way I could become a programmer.</em>" Imagine that you are transported back to the Middle Ages. Like most people, you're an illiterate peasant. One day, someone approaches you and tells you that they can teach you to read.</p>

      <p>What's your reaction? It's probably <q>That's <i>ridiculous</i>!</q> Reading is only for very smart people, people who have a very special innate ability. Fast forward a few hundred years and it turns out that virtually everyone can be taught to read. No special genius or "reading gene" is required.</p>
      
      <p>Still, I understand that the notion of <i>you</i> becoming a professional programmer just seems so...unlikely. OK, let's explore why you might think that.</p>

      <p><span class={styles.objection}>I'm not smart enough.</span> I hear that <em>a lot</em>. You probably don't think you're <b>dumb</b>. It's just that to be a programmer, you have to be super-smart, right? There <em>are</em> some super-smart programmers &mdash; people like Linus Torvalds who wrote an entire operating system (Linux). I know those people exist, but in thirty years of programming, I've never worked with any of them. The truth is you just have to be smart <em>enough</em>. How smart is enough? That's what the Exercises are designed to help you find out.</p>

      <p><span className={styles.objection}>I'm not good at math.</span> You, too? No, seriously, my background is in woodworking. Want to know a secret? The great majority of math that programmers do is basic: addition, subtraction, multiplication, division. The super-smart programmers? Yeah, they do crazy math. All the rest of us? Not really.</p>

      <p><span className={styles.objection}>I'm a creative person.</span> You are? That's fantastic because programming is highly creative. No, it typically doesn't involve drawing, painting, sculpting, <em>etc.</em> but it's highly mentally stimulating. In fact, virtually all programmers would agree with me when I say that programming is just plain fun.</p>

      <p><span className={styles.objection}>I can't take 2 years to go back to school to get a degree.</span> Very few people can. And, really? Even if you had the time/money for that, I would encourage you <em>not</em> to do so. There are much better, faster, and cheaper ways to make the transition &mdash; and they don't require you to quit your current job.</p>

      <p><span className={styles.objection}>I'm right-brained.</span> Oh, well, if that's the case... But, just to make sure, let me ask you a few questions: 
      <ul className="">
        <li>Can you read?</li>
        <li>Can you make a to-do list?</li>
        <li>Do you know how much 3+ 4 is?</li>
        <li>Can you follow a recipe?</li>
      </ul>
        I'm taking a wild guess here that you answered "yes" to all those? Well, then you're not <em>really</em> right-brained, as all those activities are left-brained. The whole idea that people are either left-brained or right-brained was debunked years ago. It's junk science. We have two hemispheres that control different activities &mdash; and we go back and forth between them effortlessly. Do some people have more of an affinity for activities associated with the right hemisphere? Sure, but that doesn't preclude you from employing the left hemisphere when you need to.</p>

      <p><span className={styles.objection}>Typing all day? No thanks!</span> I've got news for you: programmers don't type all day. We talk with other people, we plan, we use Google (a lot!). The actual amount of typing is quite small. </p>

      <p><span className={styles.objection}>I'm too old to learn to program.</span> Ageism is real. The programming world isn't free of it. But in an environment where finding talent is rare, only a very stupid manager would exclude <em>any</em> person who can code. Are there some of those stupid managers out there? Sure &mdash; but you don't want to work for them anyway. There's plenty of smart managers who are looking for good people at any age.</p>

      <p><span className={styles.objection}>I don't have a good memory. I can't memorize all that syntax.</span> I hate to blow the whistle on my fellow programmers, but most of us don't have an encyclopedic memory either. Here's what things look like in real life: "Huh, I have to do <em>x</em>. I can't remember how to do <em>x</em>. Say, Google..."</p>

      <p><span className={styles.objection}>I don't type very quickly.</span>  You don't need to. In fact, in interviewing many, many candidates, it's never even occurred to me to ask how quickly they type.</p>

      <p><span className={styles.objection}>I'm a woman and I know programming is a male profession.</span> Do I have news for you! First, yes, programming is predominantly male. Employers (and shareholders) know this too &mdash; and they desperately want to change it. That means that if you're female, you will (a) move to the top of the candidate list and (b) command a higher salary. If you're a woman who's used to pervasive sexism, you might think I'm lying about this point. I'm not.</p>

      <p><span className={styles.objection}>The idea of becoming a programmer is scary!</span> Sure, it is! That's OK. It's a big change. What you need is a good teacher/mentor. More about that later...</p>
    </div>
  );
}

export default Really; 