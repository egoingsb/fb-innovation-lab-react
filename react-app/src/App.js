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
    var tags = [];
    var con = this.props.data;
    var i = 0;
    while(i < con.length){
      tags.push(<li key={con[i].id}><a href="">{con[i].title}</a></li>);
      i = i + 1;
    }
    return (
      <nav>
        <ol>
          {tags}
        </ol>
      </nav>
    );
  }
}

class Content extends Component{
  render(){
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

class App extends Component{
  state = {
    contents:[
      {id:1, title:'HTML', desc:'HTML is ...'},
      {id:2, title:'  ', desc:'CSS is ...'}
    ]
  }
  render(){
    
    return (
      <div className="App">
        <Subject title="WEB" sub="World!!"></Subject>
        <TOC data={this.state.contents}></TOC>
        <TOC data={this.state.contents}></TOC>
        <TOC data={this.state.contents}></TOC>
        <TOC data={this.state.contents}></TOC>
        <TOC data={this.state.contents}></TOC>
        <Content title="HTML" desc="HTML is .."></Content>
      </div>
    );  
  }
}
export default App;
