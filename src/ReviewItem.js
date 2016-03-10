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
      story: story,
      writer: writer,
      rating: rating,
    };


    jQuery.ajax(
      {
        type: "POST",
        url: "https://arearate.herokuapp.com/areas/" + areaId + "/reviews",
        data: JSON.stringify({
          review: newReview
        }),
        contentType: "application/json",
        dataType: "json"
      }
    )

    .done(function(data) {
      component.props.onChange();
      component.refs.inputWriter.value = "";
      component.refs.inputStory.value = "";
      component.refs.inputRating.value = "";
    })
  }
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
        <h2>Review the area: </h2>
        <form role="form" onSubmit={this.createReview.bind(this)}>
          <div className="row">
            <label htmlFor="writer">Name:</label>
            <input id="writer"ref="inputWriter" className="form-control" />
          </div>
          <div className="row">
            <label htmlFor="story">Story:</label>
            <textarea id="story" ref="inputStory" className="form-control" />
          </div>
          <div>
            <label htmlFor="rating">Rating:</label>
            <select id="rating" ref="inputRating" className="form-control">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    );
  }
}

export default ReviewItem;
