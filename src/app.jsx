/**
* @Author: Patrick Wertal <wertalp>
* @Date:   14-Oct-2016
* @Email:  patrick.wertal@gmail.com
* @Last modified by:   wertalp
* @Last modified time: 04-Nov-2016
* @License: Licenced by PW @2016
*/

// Script Author Patrick Wertal CADT 2016

var path     = require('path');
var React    = require('react');
var ReactDOM = require('react-dom');
var dir      = path.resolve(".") ;

var axios = require('axios') ;
import { MessageBox } from './components/MessageBox' ;
import { NavComponent , ListComponent} from './components/NavComponent' ;
import { FormInstance } from './components/form' ;
import { divStyle1, divStyleAlert, boardStyle, rowStyle } from './lib/config';
import { Grid, Col,Row, Button, MenuItem ,Input} from 'react-bootstrap';
import { Panel , ButtonToolbar, DropdownButton, Dropdown} from 'react-bootstrap';
import { PanelMatrix } from './components/panelmatrix' ;
import { CommentBox } from './components/CommentBox' ;
import {formLogin} from './components/form2';
import {PostComponent} from './components/PostComponents';
import {CompDeleted} from './components/componentsDeleted';

//let jobs=['RIH2','PRIH','PRBILL','UPROC','RLH','CAS','TIBCO','FLUX','AIH','TAP5','MAXWELL'];
var anzRows = 3;
var anzCols = 2;


class Layouter extends React.Component{

  constructor(props){
    super(props);
    this.state = {
    open: true,
    matrix : {rows:2,cols:3},
    //jobs: ['ROH','UPROC','AIH','LHS','MONSTER','GOXI','MAXI','RLH','PRLH'],
    jobs: [ {id: 0, name: 'CAS20', status: true}, {id: 1, name: 'RIH',     status: true},
            {id: 2, name: 'PRIH',  status: true}, {id: 3, name: 'PRBILL',  status: true},
            {id: 4, name: 'UPROC', status: true}, {id: 5, name: 'RLH',     status: true},
            {id: 6, name: 'CAS' , status:  true},
            {id: 7, name: 'TIBCO', status: true}, {id: 8, name: 'FLUX',    status: true},
            {id: 9, name: 'AIH',   status: true}, {id:10, name: 'TAP9',    status: true},
            {id:11, name: 'MAXWELL', status: true},
            {id:12, name: 'Goxi',  status: true}, {id:13, name: 'Franz',   status: true},
            {id:14, name: 'Frank', status: true}, {id:15, name: 'Rene',    status: true},
            {id:16, name: 'Just',  status: true},
            {id:17, name: 'Hanno', status: true}, {id:18, name: 'Maggi',   status: true},
            {id:19, name: 'Boby',  status: true}, {id:20, name: 'Florina', status: true} ],
    jobsDeleted: [{id:19, name: 'Boby',  status: true}],
    colors : ['red','green','blue','yellow','grey'],
    _posts : [{id:1,title:'Erster Streich'},{id:2,title:'Zweiter Streich'},{id:3,title:'Dritter Streich'}],
    posts  : [{id:1,title:'Erster Streich'},{id:2,title:'Zweiter Streich'}],
    comments : [{id:1,email:'Erster email'},{id:2,email:'Zweiter email'}],
    currentId : 1
    };

     this.closeHandler = this.closeHandler.bind(this);
     this.changeMatrix = this.changeMatrix.bind(this);
     this.setState = this.setState.bind(this);
     this.updateFlix = this.updateFlix.bind(this);
     this.changeListHandler = this.changeListHandler.bind(this);
      setInterval( this.updateFlix ,200000);

   }

 updateFlix(){
    this.setState( { currentId : Math.floor((Math.random() * 100) + 1)}  );
    this.getPosts();
 }

   componentDidMount() {
     this.getPosts();
   }

   getStateColor (){
     return this.state.colors[Math.floor((Math.random() * this.state.colors.length) + 1)]
   }

   cleanComments(item, index) {
     console.log('Clean comments: ' + item.email + ' : '+ item.email.length);

     if ( item.email.length >=  15 ) {
        item.email = item.email.substr(1,15);
     }


     return (item.email.length <= 26)  ? item : null
   }

   getPosts(){
     let i =0;
     console.log('Update Nummer: ' + i++);
     axios.get('https://jsonplaceholder.typicode.com/posts')
     .then( (response) =>  response.data )
     .then( (posts)   =>  this.setState({posts: posts}));

     axios.get('https://jsonplaceholder.typicode.com/comments',{ params: {postId: this.state.currentId}})
     .then( (response) =>      response.data )
     .then( (comments) =>      comments)
     .then( (comments) =>      this.setState({ comments: comments.map(this.cleanComments) }));
    }

     //this.setState({posts: [{id:4,title:'Vierter Streich'}]});
      //return  axios.get('https://jsonplaceholder.typicode.com/posts')
     //.then((response) =>  response.json() )
     //.then((data) => this.setState({ posts: [{id:1,title:'Erster Streich'},{id:2,title:'Zweiter Streich'},{id:3,title:'Dritter Streich'}]  }))
     //.catch((error) => { console.error(error); });

   closeHandler(){
    this.setState({open: !this.state.open});
  }


  changeMatrix(n,m){
   this.setState({matrix : {rows: n , cols: m } });
  }

  changeListHandler(item) {

   this.state.jobsDeleted.push(item);
   let lefty = this.state.jobs.filter(itm => itm.name !== item.name );
   lefty.map( itm => console.log('lefty:' + itm.name));
   this.setState({jobs: lefty});
   this.setState({jobsDeleted: this.state.jobsDeleted});
  }


  getcorrektPanels() {

    console.log('hello ' + this.state.data);
     let panelHtml =[];
      let i =0;
     Array.from(new Array(this.state.matrix.rows)  , (x) => {
      Array.from(new Array(this.state.matrix.cols), (y) => {

       panelHtml.push(<Col sm={6} md={3}> <MessageBox  comments={this.state.comments} jobs={this.state.jobs[i]}></MessageBox> </Col> )
       i++
       });
       panelHtml.push(<Row style={rowStyle}/> );

     });

      return panelHtml;
   }

  render(){

    return (
      <Grid>
        <Row className="show-grid">
        <NavComponent> </NavComponent>
        </Row>
        <Row sm={6} md={10}>  <CommentBox></CommentBox></Row>
        <Row>
          <Panel collapsible expanded="true">
        <Col sm={6} md={3}>  <FormInstance></FormInstance></Col>
        <Col sm={6} md={3}>  <FormInstance></FormInstance></Col>
        <Col sm={6} md={3}>  <FormInstance></FormInstance></Col>
        <Col sm={6} md={3}>
        <div>
        <PostComponent posts={this.state.posts}></PostComponent>
        <PostComponent posts={this.state.posts}></PostComponent>
        <CompDeleted items={this.state.jobsDeleted}/>
        </div></Col>
        </Panel>
        </Row>
        <Row>
          <PanelMatrix onChange={this.changeMatrix}></PanelMatrix>
        </Row>
        <Row>
          <Button onClick={this.closeHandler}>
            SHOW
          </Button>
            <Panel collapsible expanded={this.state.open}>
        <Col md={11}>

         <input className="mainInput" value='Some something'></input>
        <Row className="show-grid">
        {this.getcorrektPanels()}
        </Row>
        </Col>

        <Col md={1}>
          <ButtonToolbar>
            <DropdownButton title="Processe" id="dropdown-size-medium">
               <ListComponent items={this.state.jobs} onChange={this.changeListHandler}>  </ListComponent>
            </DropdownButton>
        </ButtonToolbar>

        </Col>
          </Panel>
     </Row>
      </Grid>
    )
  }
}



class SquareBox extends React.Component{

 constructor(props) {
   super(props);
 }

  render()  {
    var divStyle = {};
    var colIndex = this.props.feld ;
        divStyle = divStyle1;

     if ( colIndex % 2) {
         divStyle = divStyleAlert ;
       }

    return (

      <div style={divStyle}   onClick={this.handlerClick}>
         <p> {colIndex} </p>
      </div>
    );
  }

  handlerClick() {
  console.log('You clicked ');
  }
};



class Board extends React.Component {

constructor(props){
  super(props);
  this.state = {
    squares : Array.from(new Array(64))
}
}

  render() {
    return (
        <div style={boardStyle}>
          {this.state.squares.map((item,key) => ( <SquareBox feld={key}  /> )) }
       </div>)
}
};

function paint() {
    console.log('start render Component ');
  ReactDOM.render(<Layouter />,
     document.getElementById('container'));
};

paint();
