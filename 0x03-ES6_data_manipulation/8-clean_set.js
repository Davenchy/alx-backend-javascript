export default function cleanSet(set, startString) {
  if (
    !(set instanceof Set)
    || typeof startString !== 'string'
    || !startString
  ) return '';

  const modifiedItems = [];
  for (const item of set.values()) {
    if (typeof item === 'string' && item.startsWith(startString)) {
      const sub = item.substring(startString.length);
      if (sub) modifiedItems.push(sub);
    }
  }

  return modifiedItems.join('-');
}
