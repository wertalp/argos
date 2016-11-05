/**
* @Author: Patrick Wertal <wertalp>
* @Date:   19-Oct-2016
* @Email:  patrick.wertal@gmail.com
* @Last modified by:   wertalp
* @Last modified time: 04-Nov-2016
* @License: Licenced by PW @2016
*/



var path     = require('path');
var React    = require('react');
var ReactDOM = require('react-dom');
var dir      = path.resolve(".") ;



//var ReactBootstrap= require('react-bootstrap');
import { Navbar,Nav,ButtonToolbar,Button,Grid, Row, Col, Clearfix } from 'react-bootstrap';
import { NavItem,MenuItem,NavDropdown} from 'react-bootstrap';

let listElement = {
  backgroundColor:"white",
  border:'3px solid green'
};

let listHover = {
  backgroundColor:"red",
  border:'3px solid green'
};

export class NavComponent extends React.Component{
  constructor(props) {
    super();
  }
  render(){
    return(
      <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a style={{color:'#FF00FF'}} href="#">TMA MON</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Link</NavItem>
        <NavItem eventKey={2} href="#">Link</NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Link Right</NavItem>
        <NavItem eventKey={2} href="#">Link Right</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
  }
};

export class ListComponent extends React.Component{

  constructor(props){
    super();
      this.state= { onHover: false } ;
  }

  handleClick(item,e) {
  //  item.status = ! item.status ;
    this.props.onChange(item);
  }


  onHover(item,e){
  alert('onHover()');
  this.setState({onHover: true});

  }

  onHoverOut(item,e){
    alert('onHoverOut');
  this.setState({onHover: false});

  }
  render() {

    if(this.state.onHover === true){
      alert('changing state onHover: ' + this.state.onHover);
      listElement= listHover;
    };

    return(
      <div>
      <ul className='list-group'>
       {this.props.items.map( item => {
         let clicker = this.handleClick.bind(this, item) ;
         let onHover = this.onHover.bind(this,item);
         let onHoverOut = this.onHoverOut.bind(this,item);

         return <li style={listElement} className='list-group-item'  >
          <input type='checkbox' checked={item.status} onChange={clicker} ></input>  {item.id} {item.name}
          </li>
      })}
      </ul>
      </div>)
   }
}
