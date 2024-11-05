import { useState } from 'react'
import Card from './Components/Card'

function App() {
  const [name, setName] = useState("");

  return (
    <>
<Card title="Card1" name={name} setName={setName}/>
<Card title="Card2" name={name} setName={setName}/>
{/* <p>i am inside Parent Copmponent and value of name is {name}</p> */}
    </>
  )
}

export default App
