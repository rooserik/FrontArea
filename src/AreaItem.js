import jQuery from 'jquery';
import { Link } from 'react-router';
import React from 'react';

class AreaItem extends React.Component {
  constructor(){
    super();
  }

  componentDidMount() {
    this.setState({
      id: this.props.id,
      name: this.props.name,
      description: this.props.description,
    })
  }

  render(){
    return(
      <Link to={`/areas/${this.state.id}`}>
        <h2>{this.state.name}</h2>
        <p>{this.state.description}</p>
      </Link>
    );
  }
}

export default AreaItem;
