/**
* @Author: Patrick Wertal <wertalp>
* @Date:   04-Nov-2016
* @Email:  patrick.wertal@gmail.com
* @Last modified by:   wertalp
* @Last modified time: 04-Nov-2016
* @License: Licenced by PW @2016
*/

import { divStyle1, divStyleAlert, boardStyle, rowStyle } from '../lib/config';
import React from 'react';


export class CompDeleted extends React.Component {

render() {

  let lists = this.props.items.map( item => <div> <li> {item.name} </li> </div>)
  return (
    <div style={rowStyle}>
         <h5> Component for Deleted Items</h5>
         <ul>
           {lists}
         </ul>


    </div>

         )
  }
}
