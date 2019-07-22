export function insertInitialData(tableHeaders) {
  const headerKeys = Object.keys(tableHeaders);
  const headerLength = headerKeys.length;
  const valueStr = Array(headerLength)
    .fill("?")
    .join();
  const headerStr = headerKeys.join();

  return { headerLength, headerStr, valueStr, headerKeys };
}

export function getTableFields(tableHeaders) {
  const headerKeyValuePairs = Object.entries(tableHeaders);
  console.log(headerKeyValuePairs);
  return headerKeyValuePairs;
}
