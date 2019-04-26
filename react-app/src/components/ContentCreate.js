import React, {Component} from "react";

class ContentCreate extends Component{
    render(){
      return (
        <form action="/create_process" method="post" onSubmit={
            function(event){
                event.preventDefault();
                // this.props.onSubmitCreate(title, desc);
            }.bind(this)
        }>
          <p>
              <input name="title" type="title" placeholder="title"></input>
          </p>
          <p>
              <textarea name="desc" placeholder="Description"></textarea>
          </p>
          <p>
              <input type="submit"></input>
          </p>
        </form>
      );
    } 
  }

export default ContentCreate;
