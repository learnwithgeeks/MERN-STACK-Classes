import React from 'react';
import Head from '../components/head';
import axios from 'axios';
export default class extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {Id:'',Number:''}
  }
  componentDidMount()
  { 
    axios.get('/login_success').then((response) => {
      this.setState({Id:JSON.stringify(response.data.id)})
      this.setState({Number:JSON.stringify(response.data.phone.number)})
    })
  }
  render()
  {
    return(    
        <main> 
        <Head/>
        <h1>Successfully Logged In</h1>
        <hr/>
        <h1>Your Id {this.state.Id}</h1>
        <h1>Your Number {this.state.Number}</h1>
        </main>
    )
  }
} 