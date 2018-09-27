export const filterResponse = response => {
  if (!response.ok) throw response.json();

  return response.json();
}

export const getFilteredResponse = fn => err => {
  if (err instanceof Promise) {
    return err.then(fn)
  }

  return fn(err);
}
