export const weakMap = new WeakMap();
export const queryAPI = (endpoint) => {
  let count = 1;

  if (weakMap.has(endpoint)) {
    count += weakMap.get(endpoint);
    if (count > 5) throw new Error('Endpoint load is high');
  }

  weakMap.set(endpoint, count);
};
