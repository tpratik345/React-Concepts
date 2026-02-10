
type ParentProps = {
    children : React.ReactNode
}
function Parent(props: ParentProps) {
  return (
    <div>{props.children}</div>
  )
}

export default Parent