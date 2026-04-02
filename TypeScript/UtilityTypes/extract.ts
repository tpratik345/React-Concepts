{
    type Role = 'user' | 'guest' | 'moderator';

    type NewRoles = 'testing' | 'user' | 'guest';

    type A = Extract<Role, NewRoles>;
    type B = Extract<Role, 'user'>;

    // type b = Pick<Role, 'bold'>
}