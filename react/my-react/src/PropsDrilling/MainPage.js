import React from 'react'
import Content from './Content'

const MainPage = (props) => {
  return (
    <div>
      <h1>this is mainpage</h1>
        <Content name={props.name}/>
    </div>
  )
}

export default MainPage