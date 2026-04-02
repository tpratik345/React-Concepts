{
  function getData() {
    return Promise.resolve({
      age: 12,
    });
  }

  type T = Awaited<ReturnType<typeof getData>>;
}
