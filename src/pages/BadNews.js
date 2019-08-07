import React from 'react';
import Header from '../components/Header';
import robotGirderWorkers from '../images/robot-girder-workers.png';
import doubling from '../images/moores-law.png';
import Hero from '../components/Hero';

const BadNews = (props) => {
return (
  <div className="content">
    <Header />
    <h1>Bad News</h1>

    <p><span className="dropcap">T</span>here's an ill wind blowing &mdash; and it's headed for your job.</p>

    <p>The consulting firm, Price Waterhouse Coopers, recently released a study. It predicts that <b>38 percent of all jobs</b> in the United States are "at <b>high risk of automation</b>" by the <b>early 2030s</b>.</p>

    <Hero image={robotGirderWorkers} />

    <p>Perhaps you think of <em>robots</em> replacing humans. That will surely be a reality, but for most of us, the greater threat is invisible; it's the synthetic human brain that Artificial Researchers have been working on for decades. How are they doing?</p>

    <p>The U.S. Postal Service used to employ humans to read human handwriting in order to sort letters. No longer. In all but the rarest of cases, machines employing AI can read human handwriting and perform the sorting.</p>

    <p>When Watson famously won at Jeopardy against the two best human players, it required a computer the size of a bedroom. That was in 2011. Now it can be done on a phone.</p>

    <p> Last October, an Uber trucking subsidiary named Otto delivered 2,000 cases of Budweiser 120 miles from Fort Collins, Colorado, to Colorado Springs &mdash; without a driver at the wheel. Within a few years, this technology will go from prototype to full production: millions of truck drivers will be out of a job.</p>

    <p>But you're probably not a postal worker, Jeopardy champion, or truck driver. Is your job safe? Economists group jobs into four broad categories:
      <ul>
        <li><b>Routine physical</b>: digging ditches, driving trucks, forklift operators, heavy machine operators, welders, metal workers</li>
        <li><b>Routine cognitive</b>: accounts-payable clerks, telephone sales, retail sales, administrative assistant, secretaries, bookkeepers, filing clerks, bank tellers</li>
        <li><b>Nonroutine physical</b>: cooks, home health aide, janitors</li>
        <li><b>Nonroutine cognitive</b>: teacher, doctor, radiologist, surgeon, CEO, public relations, financial analyst</li>
      </ul>
    </p>
    <p>Most of the 38% of jobs that will be lost by the early 2030s will come from the first two groups: routine physical and routine cognitive. But the shift to artificial intelligence won't stop there. Already AI radiologists vastly outperform their human counterparts in identifying cancers. Many sober analysts believe that by 2060, <b>every job will be done by AI/robots</b>.</p>

    <p>Bill Gates and Elon Musk are both on record expressing grave concerns about what AI may mean for humans. Musk went so far as to say that AI represents a graver threat than nuclear weapons.</p>

    <h2>This Time It's Different?</h2>

    <p>But isn't all this a bit alarmist? This isn't the first time we've heard that machines were coming for our jobs. Why should we believe it's true this time?</p>

    <p>Computing power is measured by how many calculations a chip can perform in one second, called a "flop". The best estimates are that our brains can process roughly 10 trillion flops a second. Recently, an IBM computer at Lawrence Livermore National Laboratory clocked in at 16.3 trillion flops/second.</p>

    <p>Still, that supercomputer cost $250 million to build. Your employer isn't likely to spend that kind of money to replace you, right?</p>

    <p>Suppose a genie appears to you on the first of December and offers you a choice: he'll give you a cool million dollars today -- or a single penny today &mdash; which he'll then double every day until the end of the month. Which should you take?</p>

    <p>Let's say you figure the genie is probably a trickster and wants you to go for the easy million, but you decide to outsmart him and take the penny-doubling strategy. On December 2, he returns and gives you 2 cents, making your total 3 pennies. By December 15, you've only amassed $163.84. By December 20, you have a total of $5,242.88 and you're starting to think the genie actually did trick you. By Christmas, you've got a grand total of only $167,772.16. But the doubling continues and by the end of the month, you have a grand total of $10,737,418.24. <em>That's</em> what doubling looks like.</p>

    <p>Since silicon computer chips were first invented, their processing power has doubled about every 18 months. This has been so remarkably consistent that it's referred to as "Moore's Law". And just like your experience with the genie, the returns have been relatively modest.</p>

    <img src={doubling} class="aside" alt=""/>

    <p>When critics suggest that the concern over AI is overblown, they're looking at their calendar, seeing that it's already December 25 and confidently telling us there's little cause for concern. But the graph shows what you found with the genie: doubling really pays off only at the tail end. <br /><br />It's Christmas alright, and someone is about to get an amazing present &mdash; but it won't be us.</p>

    <p>With the increase of power from doubling, hardware designers will invent faster, more specialized chips. Google, for example, announced last spring that it had created a microchip called a Tensor Processing Unit, which was up to 30 times faster and 80 times more efficient for machine learning tasks than the Intel processor in your computer. Who will reap the benefits of robot/AI labor?</p>

    <p>William Gibson, noted futurist, once famously stated: <em>The future is already here &mdash; it's just not very evenly distributed.</em> He's right. Those with the capital and foresight to see until the end of the month are investing heavily in both robotics and AI. And the strategy is paying off. Jeff Bezos, CEO of Amazon, has been perhaps the most aggressive in putting Amazon's profits into AI and automation. It's made him the world's richest person.</p>

    <p>Andrew Yang, in his book, <em>The War on Normal People</em> points out that, in four years, 30% of American malls will be shut down. Amazon's low prices and fast delivery, driven by their enormous investment in both AI and robots, make it impossible for competitors who won't &mdash; or can't &mdash; make similar investments to survive. </p>

    <p>But even if you accept Wang's contention that we are entering a time of unprecedented economic transformation, surely this brave new world will produce new jobs &mdash; jobs we haven't even imagined. Yes &mdash; and those new jobs will increasingly be done by our new AI overlords.</p>

    <p>By the early 2030s unemployment begins to be an enormous problem. The scale and scope of the problem mean that it will take governments acting wisely and rapidly to solve the problem. Governments acting "wisely and rapidly"? I know...</p>

    <p>Maybe now would be some time for some Good News?</p>

  </div>
);
}

export default BadNews;