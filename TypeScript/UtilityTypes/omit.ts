{
  type User = {
    id: number;
    name: string;
    age: number;
    address: {
      street: string;
      city: string;
    };
  };

  function createUser(user: Omit<User, "id">) {}

  createUser({ name: "abc", age: 12, address: { street: "asd", city: "asd" } });
}
