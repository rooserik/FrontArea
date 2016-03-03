import React from 'react';
import jQuery from 'jquery';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import ReviewItem from './ReviewItem';

class ReviewList extends React.Component {

  constructor(){
    super();

    this.state = {
      reviews: []
    };
  }

  refreshList(event) {
    let component = this;
    let areaId = this.props.areaId;

    jQuery.getJSON("https://arearate.herokuapp.com/areas/" + areaId +"/reviews.json",
    function(data){
      component.setState({
        reviews: data.reviews
      });
    });
  }

  componentDidMount() {
    this.refreshList();
  }

  render() {
    return(
      <div>
        {this.state.reviews.map(function(review, i){
          return(
            <ReviewItem
              areaId={this.props.areaId}
              id={review.id}
              story={review.story}
              writer={review.writer}
              />
          );
        }, this)}
      </div>
    );

  }
}
export default ReviewList;
