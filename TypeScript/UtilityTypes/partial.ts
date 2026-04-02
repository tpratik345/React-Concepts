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

  function updateUser(user: Partial<User>) {}

  updateUser({ name: "abc" });
}
