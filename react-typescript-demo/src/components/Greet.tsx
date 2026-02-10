
type GreetProps = {
    name: string
    messageCount: number
    isLoggedIn?: boolean
}

function Greet(props: GreetProps) {
  console.log(props.isLoggedIn)
  return (
    <div>Hii {props.name}! You Have {props.messageCount} messages. Is Logged in: {props?.isLoggedIn?.toString()}</div>
  )
}

export default Greet