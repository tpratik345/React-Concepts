type User = { id: number; name: string; }
type ReadonlyUser = Readonly<User>
// ^= { readonly id: number; readonly name: string; }
type NamesArray = string[]
type ReadonlyNames = Readonly<NamesArray>
let list: ReadonlyNames = ['123', '7645']
    