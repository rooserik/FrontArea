import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AreaList from './AreaList';
import SingleArea from './SingleArea';
import PageNotFound from './PageNotFound';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={AreaList} />
      <Route path="/areas/:areaId" component={SingleArea}/>
      <Route path="*" component={PageNotFound}/>
    </Route>
  </Router>
), document.getElementById('root'));
