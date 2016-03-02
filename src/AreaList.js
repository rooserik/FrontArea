import React from 'react';
import jQuery from 'jquery';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import AreaItem from './AreaItem';

class AreaList extends React.Component{

  constructor(){
    super();

    this.state = {
      areas: []
    }
  }

  refresh(event) {
    let component = this;
    jQuery.getJSON("https://arearate.herokuapp.com/areas.json",
    function(data){
      component.setState({
        areas: data.areas
      });
    });
  }

  componentDidMount() {
    this.refresh();
  }

  render() {
    return(
      <div>
      <h1> Review your Neighbourhood: </h1>
         {this.state.areas.map(function(area, i) {
            return(
              <AreaItem id={area.id}
                name={area.name}
                description={area.description}
                />
            );
          })}
        </div>
    );
  }
}

export default AreaList;
