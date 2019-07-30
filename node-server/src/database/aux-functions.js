export const withFilterAndSort = filterStr => (sortBy, sortOrder) => (
  ...args
) => fn => {
  const filter = filterStr === "" ? "" : `WHERE STATE='${filterStr}'`;
  const sortCol =
    sortBy === ""
      ? ""
      : `ORDER BY ${sortBy} ${
          sortOrder == null ? "" : sortOrder.toUpperCase()
        }`;
  return fn(filter, sortCol, ...args);
};
