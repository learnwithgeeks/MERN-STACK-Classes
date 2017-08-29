import React from 'react';
import Link from 'next/link';
import Dashboard from '../components/dashboard';
import axios from 'axios';
import Sidebar from '../components/shared/sidebar';
export default class extends React.Component{
  constructor(props)
  {
    super(props);
    this.state = {currentUser:'' ,greeting:''}
  }
  componentWillMount(){
    axios.get('/userdata').then((response)=>{
           this.setState({currentUser:JSON.stringify(response.data)})
       })
    var date=new Date();
       if(date.getHours() <= 6){
           this.setState({greeting:'Good Night'})
       }
       else if(date.getHours() <= 12){
           this.setState({greeting:'Good Morning'})
       }
       else if(date.getHours() <= 18){
           this.setState({greeting:'Good Afternoon'})
       }
       else if(date.getHours() <= 24){
           this.setState({greeting:'Good Evening'})
       }
}
    render(){
        return(
          <main>
            <Dashboard/>
            <div id='navbar'>
    <h2 id='hello'>Welcome Admin {this.state.currentUser}</h2>
    <form method='post' action='/logout'>
        <button type='submit' className='btn btn-success'>Logout</button>
    </form>
    <h3 id='greeting'>{this.state.greeting}</h3>
    </div>
<Sidebar/>
<div id='add'>
<h4>Create Webmaster Account</h4>
<form method='post' action='/AddWebmaster'>
<div className="input-group">
<span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
<input id="email" type="text" className="form-control" name="username" placeholder="Username" id='input'/>
</div>
<div className="input-group">
<span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
<input id="password" type="password" className="form-control" name="password" placeholder="Password" id='input'/>
</div>
<div id='space'></div>
    <button type='submit' className='btn btn-danger' id='input'>Add Webmaster</button>
</form>
</div>
            </main>
        )
    }
}
