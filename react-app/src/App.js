import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Subject extends Component{
  render(){
    return (
      <header>
        <h1><a href="/">{this.props.title}</a></h1>
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
    ],
    mode:'read'
  }
  render(){
    var _aTitle, _aDesc = '';
    if(this.state.mode === 'welcome'){
      _aTitle = 'Welcome';
      _aDesc = 'Hello, React';
    } else if(this.state.mode === 'read'){
      _aTitle = 'HTML';
      _aDesc = 'HTML is ...';
    }
    return (
      <div className="App">
        {/* <Subject title="WEB" sub="World!!"></Subject> */}
        <header>
          <h1><a onClick={
            function(_event){
              console.log(this);
              // this.state.mode = 'welcome';
              this.setState({mode:'welcome'});
              _event.preventDefault();
            }.bind(this)
          } href="/">WEB</a></h1>
          World!!
        </header>
        <TOC data={this.state.contents}></TOC>
        <Content title={_aTitle} desc={_aDesc}></Content>
      </div>
    );  
  }
}
export default App;