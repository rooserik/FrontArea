import React from 'react';
import SingleArea from './SingleArea';
import { Link } from 'react-router';

class App extends React.Component {
    render() {
        return (
          <div className="container">
            <nav className="main">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/areas">Areas</Link></li>
              </ul>
            </nav>

            {this.props.children}
          </div>

        );
    }
}

export default App;
