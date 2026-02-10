
import './App.css'
import Private from './components/auth/Private'
import Profile from './components/auth/Profile'
import Button from './components/Button'
import Child from './components/Child'
import Container from './components/Container'
import Box from './components/context/Box'
import { ThemContextProvider } from './components/context/ThemeContext'
import User from './components/context/User'
import { UserContextProvider } from './components/context/UserContext'
import List from './components/generics/List'
import Greet from './components/Greet'
import CustomButton from './components/html/CustomButton'
import Input from './components/Input'
import Parent from './components/Parent'
import Person from './components/Person'
import PersonList from './components/PersonList'
import Text from './components/polymorphic/Text'
import MutableRef from './components/ref/MutableRef'
import RandomNumber from './components/restiction/RandomNumber'
import Counter from './components/state/Counter'
import { LoggedIn } from './components/state/LoggedIn'
import Status from './components/Status'
import Toast from './components/templateLiterals/Toast'

function App() {
  const personName = {
    firstName: 'Satoru',
    lastName: 'Gojo',
    middlename: 'Don'
  }

  const personNameList = [
    {
      firstName: 'Satoru',
      lastName: 'Gojo'
    },
    {
      firstName: 'Itadori',
      lastName: 'Yuji'
    },
    {
      firstName: 'Megumi',
      lastName: 'Fushiguro'
    },
  ]

  return (
    <>
      {/* <Greet name={'Pratik'} messageCount={10} isLoggedIn={true} />
      <Greet name={'Pratik'} messageCount={10} />
      <Person name={personName} />
      <PersonList name={personNameList} />
      <Status status='error' />
      <Child>This is child component</Child>
      <Parent>
        <Child>This is Parent component</Child>
      </Parent>
      <Button handleClick={(e, id) => {
        console.log('Button Clicked!', e)
        console.log(id)
      }} />
      <Input value='' handleOnChange={(event) => {
        console.log(event.target.value)
      }} />
      <Container styles={{backgroundColor: 'purple'}} />
      <LoggedIn /> */}
      {/* <Counter /> */}
      {/* <ThemContextProvider>
        <Box />
      </ThemContextProvider> */}
      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}

      {/* <MutableRef /> */}
      {/* <Private isLoggedIn={true} Component={Profile}/> */}
      {/* <List 
        items={['Gojo', 'Yuji', 'Toji']}
        handleOnClick={(item) => console.log(item)}
      />
      <List 
        items={[1, 2, 3]}
        handleOnClick={(item) => console.log(item)}
      /> */}
      {/* <RandomNumber value={-10} isNegative  /> */}
      {/* <Toast position='center' /> */}
      {/* <CustomButton varient='primary' onClick={() => console.log('clicked')}>ThisButton</CustomButton> */}
      <Text as='h1' size='lg'>Heading 1</Text>
      <Text as='p' size='md'>Paragraph</Text>
      <Text as='label' htmlFor='someId' size='sm' color='secondary'>Label</Text>
    </>
  )
}

export default App
