// "key: value" if we are getting key value pair as a string
{
  type KeyValueSplitter<T extends string> = T extends `${infer K}: ${infer V}`
    ? {
        key: K;
        value: V;
      }
    : never;

  let a: KeyValueSplitter<"name: Pratik"> = {
    key: "name",
    value: "Pratik",
  };
}
