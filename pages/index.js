import React from 'react';
import Head from '../components/head' ;
export default class extends React.Component
{
  render()
  {
    return(
      <main>
      <Head/>
        <div className="main">
        <div className="element">
          <h3>20</h3>
          <p>New followers added this month</p>
        </div>
        <div className="elementa">
          <h3>$ 1250</h3>
          <p>Average Monthly Income</p>
        </div>
        <div className="elementa">
          <h3>$ 13865</h3>
          <p>Yearly Income Goal</p>
        </div>
        <div className="elementc">
          <h2>18*</h2>
          <p>Paris</p>
        </div>
        <div className="aside">
        <div className="elementd">
          <p>New Visitors</p>
          <h3>1.5K</h3>
          <div> </div>
        </div>
        <div className="elemente">
          <p>Bounce Rate</p>
          <h3>50%</h3>
          <div></div>
        </div>
        <div className="elementf">
          <p>Searches</p>
          <h3>28%</h3>
          <div></div>
        </div>
        <div className="elementg">
          <p>Traffic</p>
          <h3>104.5kb</h3>
          <div></div>
        </div>
        </div>
        <div className="sectiona">
          <div className="commentmain">
          <div className="comment">
            <h3>15080</h3>
            <p>Shot Views</p>
          </div>
          <div className="comment">
            <h3>12000</h3>
            <p>Likes</p>
          </div>
          <div className="comment">
            <h3>5100</h3>
            <p>Comments</p>
          </div>
          </div>
          </div>
          <div className="sectionb">
          <div className="commentmain">
          <div className="comment">
            <h3>15080</h3>
            <p>Shot Views</p>
          </div>
          <div className="comment">
            <h3>12000</h3>
            <p>Likes</p>
          </div>
          <div className="comment">
            <h3>5100</h3>
            <p>Comments</p>
          </div>
          </div>
          </div>
          </div>
      </main>
    );
  }
}
