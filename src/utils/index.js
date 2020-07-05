const setValuesStorage = (name, id) => {
  if (!name) return;
  if (!id) return;
  const result = [];
  const savedValues = JSON.parse(localStorage.getItem('last5Searches')) || [];

  if (savedValues.length < 5) {
    result.push([name, id]);
    if (savedValues) result.push(...savedValues);
    localStorage.setItem('last5Searches', JSON.stringify(result));
  }
  if (savedValues.length === 5) {
    savedValues.pop();
    result.push([name, id]);
    result.push(...savedValues);
  }

  localStorage.setItem('last5Searches', JSON.stringify(result));
};

export default setValuesStorage;
