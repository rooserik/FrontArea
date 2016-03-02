import React from 'react';
import jQuery from 'jquery';
import area from './Model';

class SingleArea extends React.Component {
  constructor() {
    super();

  }
  componentDidMount() {
    this.setState({
      id: this.props.id
      name: this.props.name
      description: this.props.description
    })
  }

  render() {
    return (
      <div>
        <input name={this.props.name}/>
      </div>

    );
  }
}
