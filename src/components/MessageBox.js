/**
* @Author: Patrick Wertal <wertalp>
* @Date:   17-Oct-2016
* @Email:  patrick.wertal@gmail.com
* @Last modified by:   wertalp
* @Last modified time: 02-Nov-2016
* @License: Licenced by PW @2016
*/


//  React componente
//  render()
//  messageItem
//  MessageBox

var path     = require('path');
var React    = require('react');
var ReactDOM = require('react-dom');

import {Button, Panel} from 'react-bootstrap';


var config = {
   title   : 'ControllBoard ',
   visible : true,
   width   : '180px',
   height  : '100px',
   color: 'green',
   anzahl:5,
   data:[{id:1 , name:"Patrick"},
        {id:2 , name:"Harry"},
        {id:3 , name:"Steffan"},
        {id:4 , name:"Marion"},
        {id:5 , name:"Lola"},
        {id:6 , name:"Max"},
        {id:7 , name:"Goxi"},
        {id:8 , name:"Timmy"}]
};


var divStyle = {
  border: '1px solid',
  width :  'auto',
  height:  'auto',
  backgroundColor:'#e8edf4',
  fontSize:'11px'
};

var messageBox = {
  border: '1px solid',
  width :  'auto',
  height:  'auto',
  textAlign: 'left',
  margin:'5px',
  backgroundColor:'white',
  fontSize:'11px',
  overflow: 'auto'
};

var outerMessageBox = {
  border: '1px solid',
  width :  'auto',
  height:  'auto',
  textAlign: 'auto',
  margin:'5px',
  padding:'5px',
  backgroundColor:'rgb(40, 80, 111)',
  fontSize:'11px',
  overflow: 'auto',
  fontFamily: 'Oswald',
  borderRadius:'10px'
};

export class  MessageBox extends React.Component {

      constructor(props){
        super(props) ;
        this.state = {
            config: config,
              open: 'true'
          }
      };

      render() {
        var alldata = this.props.comments ;

        return(

          <div style={outerMessageBox}>
          <Button bsStyle="success" onClick={ ()=> this.setState({ open: !this.state.open })}>
            show
          </Button>
            <Panel collapsible expanded={this.state.open}>

           <h5> Modul: {this.props.jobs.name}</h5>
             <div style={messageBox}>
           <ul >
           {alldata.map( (item) =>  (<li  className="list-unstyled"> <Message feld={item}  /> </li> ))}
           </ul>
           </div>
           <Button bsStyle="info" >Warning</Button>
           <Button bsStyle="alert">Warning</Button>
           </Panel>
          </div>)

      }
};


export class  Message extends React.Component {

  constructor(props){
    super(props) ;

    let emails = this.props.feld.email ;

  };

    render() {
      return (
      <div style={divStyle}>
         {this.props.feld.id} {this.props.feld.email}
      </div>)
    }

};
