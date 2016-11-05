/**
* @Author: Patrick Wertal <wertalp>
* @Date:   24-Oct-2016
* @Email:  patrick.wertal@gmail.com
* @Last modified by:   wertalp
* @Last modified time: 28-Oct-2016
* @License: Licenced by PW @2016
*/

var path     = require('path');
var React    = require('react');
var ReactDOM = require('react-dom');
import { Form, InputGroup,FormGroup,FormControl, ControlLabel } from 'react-bootstrap';
import {Image, Grid, Col,Row, Button, MenuItem ,Input,Panel,Thumbnail} from 'react-bootstrap';
import { config , inputBox, messageBox } from '../lib/config.js' ;
import { Message } from './MessageBox';

export class PostComponent extends React.Component{

constructor(props){
  super(props);
}

render(){

  return(
    <div style={inputBox}>
       <div style={messageBox}>
     <ul>
      {  this.props.posts.map((item) => <li> {item.title} </li>)}
     </ul>
     </div>
   </div>

  )

  }
}
