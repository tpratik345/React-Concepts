{
  type O = {
    readonly name: string;
    age: number;
  };

  type New<T> = {
    -readonly [P in keyof T]: T[P];
  };

  const a: New<O> = {
    age: 123,
    name: "Pratik",
  };

  a.name = 'abc'
}
