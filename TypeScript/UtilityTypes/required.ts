{
  type User = {
    id: number;
    name: string;
    age: number;
    address?: {
      street: string;
      city: string;
    };
  };

  function updateAddress(user: Required<User>) {}

//   updateAddress({ name: "abc",address });
}
