import React, { Component } from 'react'
import Users from './Users';

class Userlist extends Component {
  render() {
    const {userlist}=this.props;
    return (
      <div className="container">
        {
            userlist.map(x=>{
                return(
                    <Users
                    key={x.id}
                    id={x.id}
                    name={x.username}
                    age={x.age}
                    />
                )
            })
        }
      </div>
    )
  }
}

export default Userlist