/**
* @Author: Patrick Wertal <wertalp>
* @Date:   28-Oct-2016
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


export class formLogin extends React.Component {
   constructor(props){
     super(props);
   }
  render(){
    return (
      <div>
  <Form horizontal>
    <FormGroup controlId="formHorizontalEmail">
      <Col  sm={2}>
        Email
      </Col>
      <Col sm={10}>
        <FormControl type="email" placeholder="Email" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
      <Col sm={2}>
        Password
      </Col>
      <Col sm={10}>
        <FormControl type="password" placeholder="Password" />
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Checkbox>Remember me</Checkbox>
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Button type="submit">
          Sign in
        </Button>
      </Col>
    </FormGroup>
  </Form>
</div>
)
};};
