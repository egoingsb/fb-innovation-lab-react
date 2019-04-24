import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Subject extends Component{
  render(){
    return (
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    )
  }
}

class TOC extends Component{
  render(){
    return (
      <nav>
        <ol>
          <li><a href="1">HTML</a></li>
        </ol>
      </nav>
    );
  }
}

class Content extends Component{
  render(){
    return (
      <article>
        <h2>HTML</h2>
        HTML is ...
      </article>
    );
  }
}

class App extends Component{
  render(){
    return (
      <div className="App">
        <Subject title="WEB" sub="World!!"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is .."></Content>
      </div>
    );  
  }
}
export default App;
