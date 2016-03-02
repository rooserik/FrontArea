import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AreaList from './AreaList';
import Area from './Area';
import PageNotFound from './PageNotFound';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={AreaList}/>
      <Route path="/areas/:areaId" component={Area}/>
      <Route path="*" component={PageNotFound}/>
    </Route>
  </Router>), document.getElementById('root'));
