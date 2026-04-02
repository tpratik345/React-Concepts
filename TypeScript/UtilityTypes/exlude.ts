{
    type Role = 'user' | 'guest' | 'moderator';

    type NewRoles = 'testing' | 'user' | 'guest';

    type A = Exclude<Role, NewRoles>;
    type B = Exclude<Role, 'user'>;

    // type b = Pick<Role, 'bold'>
}