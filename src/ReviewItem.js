import React from 'react';
import jQuery from 'jquery';

class ReviewItem extends React.Component {
  constructor(){
    super();
  }

  createReview(event){
    event.preventDefault();

    let component = this;
    let areaId = this.props.areaId;
    let writer = this.refs.inputWriter.value;
    let rating = this.refs.inputRating.value;
    let story = this.refs.inputStory.value;
    let newReview = {
      id: null,
      story: story
      writer: writer,
      rating: rating,
    };
  }

    jQuery.ajax(
      {
        type: "POST".
        url: "https://arearate.herokuapp.com/areas/" + areaId + "/reviews",
        data: JSON.stringify({
          review: newReview
        }),
        contentType: "application/json",
        dataType: "json"
      }
    );

    .done(function(data) {
      component.props.onChange();
      component.refs.inputWriter.value = "";
      component.refs.inputStory.value = "";
      component.refs.inputRating.value = "";
    })
  // componentDidMount() {
  //   this.setState({
  //     id: this.props.id,
  //     areaId: this.props.areaId,
  //     story: this.props.story,
  //     writer: this.props.writer
  //   })
  // }

  render(){
    return(
      <div>
        <h2>{this.props.story}</h2>
        <p>{this.props.writer}</p>
      </div>
    );
  }
}

export default ReviewItem;
