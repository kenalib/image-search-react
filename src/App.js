import React, { Component } from 'react';
import './App.css';
import ImageSearchDemo from './ImageSearchDemo';
import GitHubCorner from './GitHubCorner';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Image Search Demo</h1>
        </header>

        <GitHubCorner/>
        <ImageSearchDemo/>

        <p className="App-intro">
          Please refer<br/>
          <code>
            <a href="https://www.alibabacloud.com/product/imagesearch"
              target="_blank" rel="noopener noreferrer">
              Image Search Document
            </a>
          </code>
          <br/>
          for more details.
        </p>
      </div>
    );
  }
}

export default App;
