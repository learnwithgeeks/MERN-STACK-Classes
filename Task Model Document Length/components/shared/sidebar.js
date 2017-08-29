import React from 'react';
import Head from '../head';
import Link from 'next/link';
export default class extends React.Component
{
  render()
  {
    return(
      <div id="sidebar">
      <div id="space"></div>
      <Link href='/AdminLoggedIn'><a><h3 className='item' id='itema'><span className='glyphicon glyphicon-home'>Dashboard</span></h3></a></Link>
      <div id='space'></div>
        <Link href='/AddAdmin'><a><h3 className='item' id='itemb'><span className='glyphicon glyphicon-globe'>Admin</span></h3></a></Link>
      <div id='space'></div>
        <Link href='/AddWebmaster'><a><h3 className='item' id='itemc'><span className='glyphicon glyphicon-user'>Webmaster</span></h3></a></Link>
      </div>
    )
  }
}
