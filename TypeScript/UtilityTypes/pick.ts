{
  type User = {
    name: string;
    age: number;
    address: {
      street: string;
      city: string;
    };
  };

  function renderUserDetails(user: Pick<User, "name" | "age">) {
    console.log(user.name, user.age);
  }
  renderUserDetails({ name: "abc", age: 12 });
}
