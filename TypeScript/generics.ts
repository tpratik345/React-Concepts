type Generic<T> = {
    props: T extends string ? string : number
}

type Custom = string

const a: Generic<Custom> = {
    props: 'pdf',
};