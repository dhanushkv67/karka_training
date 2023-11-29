import React, { useState ,useContext,createContext} from 'react'
import MainPage from './MainPage'


export const userContext = createContext()
function Parent() {
  
  const [title, setTitle] = useState('Scaler Topics')
  const [user,setUser] = useState({name:"karka"})
  const [contextEx, setContextEx] = useState("contextExample")
  return (
    <>
      <div>Parent component</div>
      <br />
      {/* <ChildA title={title} /> */}
      {/* <MainPage name={user.name}/> */}

      {/* context example */}

        <userContext.Provider value={contextEx}>
            <MainPage/>
        </userContext.Provider>

    </>
  )
}

function ChildA({ title }) {
  return (
    <>
      <h1>ChildA</h1>
      <br />
      <ChildB title={title} />
    </>
  )
}

function ChildB({ title }) {
  return (
    <>
      <h1>ChildB</h1>
      <br />
      <ChildC title={title} />
    </>
  )
}

function ChildC({ title }) {
  return (
    <>
      <h1>ChildC</h1>
      <br />
      <h3> Welcome to</h3>
      <h4>{title}</h4>
    </>
  )
}

export default Parent
