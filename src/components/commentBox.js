/**
* @Author: Patrick Wertal <wertalp>
* @Date:   24-Oct-2016
* @Email:  patrick.wertal@gmail.com
* @Last modified by:   wertalp
* @Last modified time: 24-Oct-2016
* @License: Licenced by PW @2016
*/



var path     = require('path');
var React    = require('react');
var ReactDOM = require('react-dom');
var dir      = path.resolve(".") ;

//var ReactBootstrap= require('react-bootstrap');
import { Button,Form, Label,textarea ,FormGroup,ControlLabel,FormControl} from 'react-bootstrap';

export class CommentBox extends React.Component {
constructor(){
  super();
  this.state =({ txtString: `Hallo hier gibt es eine Echtzeit Monitoring Lösung von THE SOFTWARE Company 24-Oct-2016 @PW

                             Folgende Techniken werden verwendet

                             NodesJS WEB-REST-API ReactJS`});
}

render(){
return (
  <div class="FormGroup">

  <FormGroup controlId="formControlsTextarea">
  <ControlLabel>
   </ControlLabel>
  <FormControl componentClass="textarea"  placeholder={this.state.txtString} />
</FormGroup>
  </div>
)

}

}
