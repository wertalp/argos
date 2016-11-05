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
var dir      = path.resolve(".") ;

//var ReactBootstrap= require('react-bootstrap');
import { Button,Form, Label } from 'react-bootstrap';


var checkBoxContainer = {
 border:  "1px solid ",
 padding: "10px",
 margin: "10px"

}

export class PanelMatrix extends React.Component {

  constructor(){
    super();
  }

  changeHandler(e)  {

    if(e.target.id === "cb2"){
      this.props.onChange(2,2)
    };
    if(e.target.id === "cb3"){
      this.props.onChange(3,3)
    };
    if(e.target.id === "cb4"){
      this.props.onChange(4,4)
    };
    if(e.target.id === "cb5"){
      this.props.onChange(5,5)
    };

  }

render(){
return (
  <div style={checkBoxContainer}>
  <Form className="form-inline">
      <div className="checkbox">
          <input type="checkbox" value="checked" id="_cb2" onChange={this.changeHandler.bind(this)} />
        <Label>
            <input type="checkbox" value="checked" id="cb2" onChange={this.changeHandler.bind(this)} /> 2*2
        </Label>
      </div>
      <div className="checkbox">
        <Label>
            <input type="checkbox"  value="checked" id="cb3" onChange={this.changeHandler.bind(this)}  /> 3*3
        </Label>
      </div>
      <div className="checkbox">
        <Label>
            <input type="checkbox"  value="checked" id="cb4" onChange={this.changeHandler.bind(this)}  /> 4*4
        </Label>
      </div>
      <div className="checkbox">
        <Label>
            <input type="checkbox"  value="checked" id="cb5" onChange={this.changeHandler.bind(this)}  /> 5*5
        </Label>
      </div>
  </Form>

  </div>
)

}

}
