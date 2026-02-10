type ContainerProps = {
    styles: React.CSSProperties
}

function Container(props: ContainerProps) {
  return (
    <div style={props.styles}>Styled Container!</div>
  )
}

export default Container