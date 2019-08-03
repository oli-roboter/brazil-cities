const filter = filterStr =>
  filterStr === "" ? "" : `WHERE CITY LIKE'%${filterStr}%'`;

const sort = (sortBy, sortOrder) => {
  return sortBy === ""
    ? ""
    : `ORDER BY ${sortBy} ${sortOrder == null ? "" : sortOrder.toUpperCase()}`;
};

export const withFilter = fn => (...filterArgs) => (...args) =>
  fn(filter(...filterArgs), ...args);

export const withFilterAndSort = fn => (...filterArgs) => (...sortArgs) => (
  ...args
) => fn(filter(...filterArgs), sort(...sortArgs), ...args);
