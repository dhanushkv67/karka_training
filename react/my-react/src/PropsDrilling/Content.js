import React from 'react'
import Message from './Message'

const Content = (props) => {
  return (
    <div>
        <h1>this is content</h1>
        <Message user={props.name}/>
    </div>
  )
}

export default Content