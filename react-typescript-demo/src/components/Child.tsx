
type ChildProps = {
    children: string 
}

function Child(props: ChildProps) {
  return (
    <div>{props.children}</div>
  )
}

export default Child