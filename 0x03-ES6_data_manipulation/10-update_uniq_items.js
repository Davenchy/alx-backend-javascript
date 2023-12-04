export default function updateUniqueItems(map) {
  try {
    map.forEach((value, key) => map.set(key, value === 1 ? 100 : value));
  } catch (_) {
    throw new Error('Cannot process');
  }

  return map;
}
