import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login' ;

export default class FaceBook extends Component{

  state={

    islogged:false,
    userId:'',
    name:'',
    email:'',
    picture:''

  }

  responseFacebook = response => {

    this.setState({
      islogged:true,
      userId:response.userID,
      name:response.name,
      email:response.email,
      picture:response.picture.data.url
    });

  };
  componentClicked=()=> console.log('Clicked');

  render(){

    let FbContent;

    if(this.state.islogged){

      FbContent=(
        <div>
        <h2>Hello {this.state.name}</h2>
        <img src={this.state.picture} />
        </div>
      );

    }else{

      FbContent=(
        <FacebookLogin
          appId="1149383278591295"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}/>
      );

    }

    return (
      <div>
      {FbContent}
      </div>
    )
  }


}
