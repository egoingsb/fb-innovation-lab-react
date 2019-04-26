import React, {Component} from "react";
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

  export default TOC;