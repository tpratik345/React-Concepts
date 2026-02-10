
type InputProps = {
    value: string
    handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function Input(props: InputProps) {
  return (
    <input type="text" value={props.value} onChange={(event) => props.handleOnChange(event)} />
  )
}

export default Input