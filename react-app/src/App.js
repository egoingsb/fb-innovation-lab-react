import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Subject extends Component{
  render(){
    console.log('Subject render');
    return (
      <header>
        <h1><a onClick={
          function(_event){
            _event.preventDefault();
            this.props.onChangePage();
          }.bind(this)
        } href="/">{this.props.title}</a></h1>
        {this.props.sub}
      </header>
    )
  }
}

class Item extends Component{
  render(){
    return (
      <li>
        <a 
          onClick={
            function(event){
              event.preventDefault();
              this.props.onChangePage(this.props.id);
            }.bind(this)
          }
          href={this.props.id+'.html'}>
          {this.props.title}
        </a>
      </li>
    );
  }
}

class TOC extends Component{
  render(){
    console.log('TOC render');
    var tags = [];
    var con = this.props.data;
    var i = 0;
    while(i < con.length){
      tags.push(<Item 
          onChangePage={
            function(id){
              this.props.onChangePage(id);
            }.bind(this)
          }
          key={con[i].id} 
          id={con[i].id} 
          title={con[i].title}>
        </Item>
      );
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
class ContentCreate extends Component{
  render(){
    return (
      <form>
        hi
      </form>
    );
  } 
}
class ContentRead extends Component{
  render(){
    console.log('Content render');
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
      {id:2, title:'CSS', desc:'CSS is ...'},
      {id:3, title:'JavaScript', desc:'JavaScript is ...'}
    ],
    mode:'read',
    selected_id:2
  }
  render(){
    console.log('App render');
    var _aTitle, _aDesc = '';
    var _content = null;
    if(this.state.mode === 'welcome'){
      _aTitle = 'Welcome';
      _aDesc = 'Hello, React';
      _content = <ContentRead title={_aTitle} desc={_aDesc}></ContentRead>
    } else if(this.state.mode === 'read'){
      var i = 0;
      var con = this.state.contents;
      while( i < con.length){
        if(con[i].id === this.state.selected_id){
          _aTitle = con[i].title;
          _aDesc = con[i].desc;
          break;
        }
        i = i + 1;
      }
      _content = <ContentRead title={_aTitle} desc={_aDesc}></ContentRead>
    } else if(this.state.mode === 'create'){
      _content = <ContentCreate></ContentCreate>
    }
    return (
      <div className="App">
        <Subject title="WEB" sub="World!!" onChangePage={function(){
          this.setState({mode:'welcome'});  
        }.bind(this)}></Subject>
        <TOC onChangePage={
          function(id){
            this.setState({
              mode:'read',
              selected_id:id
            });
            // todo : 선택한 글 본문 표현
          }.bind(this)
        } data={this.state.contents}></TOC>
        <ul>
          <li><a
            onClick={
              function(event){
                event.preventDefault();
                this.setState({mode:'create'});
              }.bind(this)
            }
            href="/create">create</a></li>
          <li><a href="/update">update</a></li>
          <li><input type="button" value="delete"></input></li>
          </ul>
        {_content}
      </div>
    );  
  }
}
export default App;
