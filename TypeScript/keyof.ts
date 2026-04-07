{

    // type User = {
    //     id: number
    //     name: string
    // }
    let user = {
        id: 123,
        name: 'Pratik'
    }

    // type NewUser = keyof User;
    type NewUser = keyof typeof user;

    let a: NewUser = "id"


    function getUser<T, U extends keyof T>(obj: T, key: U) {
        console.log(obj[key]);
    }

    getUser(user, "name");
    getUser(user, "id");
    // getUser(user, "age"); // Error since not present in user obj
}