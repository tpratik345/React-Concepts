import './App.css'
import Counter from './components/Counter'
import Greeting from './components/Greeting'
import UserProfile from './components/UserProfile'

function App() {

  return (
    <>
      <Greeting name={'Pratik'}/>
      <Counter />
      <UserProfile userId={1}/>
    </>
  )
}

export default App
