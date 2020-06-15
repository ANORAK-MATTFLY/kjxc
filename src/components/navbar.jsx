import React, { Component } from 'react';
import {Segment, Menu, Input } from 'semantic-ui-react';
// import {theme_ui} from '../context/UiTheme';
import profile from '../images/molly.png'


class NavBar extends Component {
    // static contextType = theme_ui;
  
    render() {
      // console.log('this.context: ', this.context);
      return (
        <div class="ui large menu">       
        <div class="right menu">
          <div class="item">
            <div class="content">
              <div class="ui sub header">JOJO</div>
              Garde industrielle
          </div>
          <img class="ui mini circular image" src={profile} />
          </div>
        </div>
      </div>
      )
    }
  }
  export default NavBar;