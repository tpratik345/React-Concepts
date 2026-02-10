
type ListProps<T> = {
    items: T[]
    handleOnClick: (value: T) => void
}

function List <T extends string | number>({ items, handleOnClick }: ListProps<T>) {
    return (
        <div>
            <h2>List of items:</h2>
            {items.map((item, index) => {
                return (
                    <div key={index} onClick={() =>  handleOnClick(item)}>{item}</div>
                )
            })}
        </div>
    )
}

export default List