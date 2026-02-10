import type { Name } from "./Person.types"

// type PersonListProps = {
//     name: {
//         firstName: string
//         lastName: string
//     }[]
// }

type PersonListProps = {
    name: Name[]
}

function PersonList(props: PersonListProps) {
  return (
    <div>
        {props.name.map(data => {
            return <div>{data.firstName} = {data.lastName}</div>
        })}
    </div>
  )
}

export default PersonList