// infer is used for getting the exact type from another type
// used inside conditional types only
// used with extends

type NewGeneric<T> = T extends Array<infer A> ? A : never;
let c: NewGeneric<["up", "down"]> = "up";

type CustomReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer R
  ? R
  : never;
function temp() {}
let d: CustomReturnType<typeof fetch>;

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
type X = UnwrapPromise<Promise<string>>; // string
type Y = UnwrapPromise<number>; // number
