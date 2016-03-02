import React from 'react';
import jQuery from 'jquery';
import area from './Model';

class SingleArea extends React.Component {
  constructor() {
    super();

  }
  componentDidMount() {
    this.findArea();
    }

  findArea(){
    let areaId = this.props.params.areaId;
    let component = this;
    jQuery.getJSON("https://arearate.herokuapp.com/areas/" + areaId + ".json",
    function(data){
      component.setState({
        area: data.area
      });
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.area.name}</h1>
        <p>{this.state.area.description}</p>
        <p>Reviews:</p>
      </div>

    );
  }
}

export default SingleArea;
