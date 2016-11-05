/**
* @Author: Patrick Wertal <wertalp>
* @Date:   24-Oct-2016
* @Email:  patrick.wertal@gmail.com
* @Last modified by:   wertalp
* @Last modified time: 25-Oct-2016
* @License: Licenced by PW @2016
*/

var path     = require('path');
var React    = require('react');
var ReactDOM = require('react-dom');
import { Form, InputGroup,FormGroup,FormControl, ControlLabel } from 'react-bootstrap';
import {Image, Grid, Col,Row, Button, MenuItem ,Input,Panel,Thumbnail} from 'react-bootstrap';
import { config , inputBox, messageBox } from '../lib/config.js' ;
import { Message } from './MessageBox';

  export class  FormInstance extends React.Component {

        constructor(props){
          super(props) ;
          this.state = {
              config: config,
              open: 'true'
            }
        };

        render() {
          var alldata = this.state.config ;

          return(

            <div style={inputBox}>
            <Button bsStyle="success" onClick={ ()=> this.setState({ open: !this.state.open })}>
              show
            </Button>
              <Panel collapsible expanded={this.state.open}>
              
             <h5> Modul: {this.props.jobs}</h5>
               <div style={messageBox}>
             <ul >
             {alldata.data.map( (item) =>  (<li  className="list-unstyled"> <Message feld={item}  /> </li> ))}
             </ul>
             </div>
             </Panel>
            </div>)

        }
  };
