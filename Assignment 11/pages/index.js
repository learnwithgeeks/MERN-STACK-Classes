import React from 'react';
import Link from 'next/link';
import Head from '../components/head';
export default class extends React.Component{
      render(){
        return(
            <main>
            <Head/>
            <div id='indexlogin'>
            <form method='post' action='/loginUser'>
                <button type='submit' className='btn btn-primary btn-block'>Login As User</button>
            </form>
            <div id='space'></div>
            <form method='post' action='/loginWebmaster'>
                <button type='submit' className='btn btn-success btn-block'>Login As Webmaster</button>
            </form>
            <div id='space'></div>
            <form method='post' action='/loginAdmin'>
                <button type='submit' className='btn btn-danger btn-block'>Login As Admin</button>
            </form>
            <div id='space'></div>
            </div>
            </main>
        );
    }
}
