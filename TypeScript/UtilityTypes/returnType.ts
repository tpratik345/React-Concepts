{
  function getUser(id: string) {
    return { name: "abc", age: 12 };
  }

  type A = ReturnType<typeof getUser>;
  type B = Parameters<typeof getUser>; // Return a tuple

  // Gererally Parameters are usefull,
  //   when we want to link parameters of 2 function

  function getData(id: Parameters<typeof getUser>, uid: string) {
    return { name: "abc", age: 12 };
  }

  const x: B = ["123"];
}
