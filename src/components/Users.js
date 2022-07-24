import React, { Component } from 'react'

class Users extends Component {
  render() {
    const{id,name,age}=this.props;
    return (
      <ul>
        <li>Id: {id}</li>
        <li>Username: {name}</li>
        <li>Age: {age}</li>
      </ul>
    )
  }
}

export default Users