import React from 'react';
import Header from '../components/Header';
import styles from '../stylesheets/Exercises.module.css';
import exerciseList from '../utils/exercise-list';

const Exercises = (props) => {
  const listOfExercises = exerciseList.map( exercise => {
    return(
      <div className={styles.exercise} key={exercise.number}>
      <h3 className={styles.exerciseNo}>Exercise {exercise.number}</h3>
      <div className={styles.link}>
        <p className={styles.linkTitle}>Explanatory video:</p>
        <p className={styles.linkText}>{exercise.video}</p>
      </div>
      <div className={styles.link}>
        <p className={styles.linkTitle}>Instructions:</p>
        <p className={styles.linkText}></p>
      </div>
      <div className={styles.link}>
        <p className={styles.linkTitle}>Starting code:</p>
        <p className={styles.linkText}><a href={`https://repl.it/@halbhelms/Exercise-${exercise.number}`} target="newwin">https://repl.it/@halbhelms/Exercise-{exercise.number}</a></p>
      </div>
    </div>
    ) 
  });
  return (
    <div className="content">
    <Header />
    <h1>Exercises</h1>
    <p><span className="dropcap">S</span>o, you're maybe interested in becoming a programmer, but you probably have at least three questions:</p>
    <ul className={styles.question}>
      <li>What <b>kind</b> of work does programming entail?</li>
      <li>Can I <b>do</b> the actual work?</li>
      <li>Would I <b>like</b> the actual work?</li>
    </ul>

    <p>The best &mdash; I would argue the <b>only</b> &mdash; way to answer these questions is to give you some actual <b>experience</b> programming.</p>

    <p>I've created 60 exercises that begin simply and gradually become more complex to give you that experience. These are <b>free</b>. They will teach you the basics of the three technologies in becoming a JavaScript programmer: <b>HTM, CSS, and JavaScript</b> itself.</p>

    <p>Why a JavaScript programmer (as opposed to the many other languages you might learn)? JavaScript programmers (also called <em>front-end</em> programmers are in <b>high demand</b>, the <b>pay is excellent</b>, and &mdash; perhaps most importantly &mdash; JavaScript programming is the <b>easiest to learn</b>.</p>

    <p>Each exercise comes in three parts:</p>

    <ul>
      <li><b>Introductory video</b>: a short video that introduces the exercise</li>
      <li><b>Explanation &amp; Instructions</b>: a PDF that explains the exercise and provides instructions on how to complete it</li>
      <li><b>Link to code</b>: a link to starter code you'll use to complete the exercise. In addition to the starter code, completed code showing my solution is provided.</li>
    </ul>

    <p>You won't finish these in a day or two. Each exercise can take between 20-60 minutes to complete, but if you really want to explore whether being a professional coder is realistic for you, I strongly encourage you to go through all of them.</p>

    {listOfExercises}
    
    </div>
  );
}

export default Exercises;