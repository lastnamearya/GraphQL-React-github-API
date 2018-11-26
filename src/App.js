import React, { Component } from 'react';
import './App.css';

const Title = 'React GraphQL Github Client';

class App extends Component {
  state = {
    path: 'the-road-to-learn-react/the-road-to-learn-react',
  };

  onChange = e => {
    this.setState({
      path: e.target.value,
    });
  };

  onSubmit = e => {
    // fetch Data

    e.preventDefault();
  };

  render() {
    const { path } = this.state;

    return (
      <div>
        <h1>{Title}</h1>

        <form onSubmit={this.onSubmit}>
          <label htmlFor="url">Show open issues for</label>

          <input
            onChange={this.onChange}
            type="text"
            id="url"
            value={path}
            style={{ width: '300px' }}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default App;
