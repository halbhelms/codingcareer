import React from 'react';
import Header from '../components/Header';

const Home = (props) => {

  return (
    <div className="content">
    <Header />
    <h1>Home</h1>

    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick" />
<input type="hidden" name="hosted_button_id" value="ALTZQJX49BV7Q" />
<table>
<tr><td><input type="hidden" name="on0" value="Amount" />Amount</td></tr><tr><td><input type="text" name="os0" maxlength="200" /></td></tr>
</table>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
</form>

<iframe title="sample" height="400px" width="100%" src="https://repl.it/@halbhelms/Sample-Web-Page?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>


    <p>In Charles Dickens' famous <em>Christmas Carol</em>, Scrooge is visited by the Ghost of Christmas Future, who shows him a bleak future. Horrified, Scrooge emplores the ghost to tell him that his fate is not sealed &mdash; that he may, "by an altered life", change that future.</p>
    </div>
  );
}

export default Home;