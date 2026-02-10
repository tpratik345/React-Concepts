import type { Name } from "./Person.types"

// type PersonName = {
//     name: {
//         firstName: string
//         lastName: string
//     }
// } 

type PersonName = {
    name: Name
} 


function Person(props: PersonName) {
  return (
    <div>{props.name.firstName} - {props.name.lastName}</div>
  )
}

export default Person