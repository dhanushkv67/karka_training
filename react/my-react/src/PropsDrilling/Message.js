import React, { useContext } from 'react'
import {userContext} from './PropsDrill'

const Message = (props) => {
    const contextEx = useContext(userContext)
  return (
    <div>
        <h1>Welcome {props.user}</h1>
       <h3>{contextEx}</h3>
    </div>
  ) 
}

export default Message