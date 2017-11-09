import React from 'react';
import Head from '../components/head';
import axios from 'axios';
export default class extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {VIEW:[]}
    this.smsLogin = this.smsLogin.bind(this);
    this.emailLogin = this.emailLogin.bind(this);
  }
  componentDidMount()
  { 
    axios.get('/view').then((response) => {
      this.setState({VIEW:response.data});
       // initialize Account Kit with CSRF protection
       AccountKit.init(
        {
          appId:response.data.appId, 
          state:response.data.csrf, 
          version:response.data.version,
          fbAppEventsEnabled:true
        }
      );
    })
  }
  smsLogin() {
    AccountKit.login(
      'PHONE',{},function loginCallback(response) {
        console.log(response);
        if (response.status === "PARTIALLY_AUTHENTICATED") {
         document.getElementById("code").value = response.code;
         document.getElementById("csrf").value = response.state;
         document.getElementById("login_success").submit();
        }
        else if (response.status === "NOT_AUTHENTICATED") {
         // handle authentication failure
        }
        else if (response.status === "BAD_PARAMS") {
         // handle bad parameters
        }
       }
    )
  }

  emailLogin() {
      AccountKit.login(
        'EMAIL',{},function loginCallback(response) {
          console.log(response);
          if (response.status === "PARTIALLY_AUTHENTICATED") {
           document.getElementById("code").value = response.code;
           document.getElementById("csrf").value = response.state;
           document.getElementById("login_success").submit();
          }
          else if (response.status === "NOT_AUTHENTICATED") {
           // handle authentication failure
          }
          else if (response.status === "BAD_PARAMS") {
           // handle bad parameters
          }
         }
      );
    }

  render()
  {
    return(    
        <main> 
        <Head/>
        <button onClick={this.smsLogin}>Login via SMS</button>
        <div>OR</div>
        <button onClick={this.emailLogin}>Login via Email</button>
        <form id="login_success" method="post" action="/login_success">
        <input id="csrf" type="hidden" name="csrf" />
        <input id="code" type="hidden" name="code" />
        </form>
        </main>
    )
  }
} 