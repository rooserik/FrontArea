import React from 'react';
import jQuery from 'jquery';

class ReviewItem extends React.Component {
  constructor(){
    super();
  }

  componentDidMount() {
    this.setState({
      id: this.props.id,
      areaId: this.props.areaId,
      story: this.props.story,
      writer: this.props.writer
    })
  }

  render(){
    return(
      <div>
        <h2>{this.props.writer}</h2>
        <p>{this.props.story}</p>
      </div>
    );
  }
}

export default ReviewItem;
