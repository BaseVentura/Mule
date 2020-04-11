import React from 'react';
import style from './Organisation.module.css'

function organisation(props) {
    return (
        <div className ={style.Person}>
      
        <p  onClick={this.props.click}>I am {this.props.name} and i am {this.props.age} years old</p>
        <p >{this.props.children}</p>
        <input  type="text" onChange={this.props.changed} value={this.props.name}/>
      </div>
    );
}

export default organisation;