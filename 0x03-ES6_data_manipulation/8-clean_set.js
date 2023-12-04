export default function cleanSet(set, startString) {
  if (
    !startString
    || !(set instanceof Set)
    || typeof startString !== 'string'
  ) return '';

  return Array.from(set)
    .filter((item) => item.startsWith(startString))
    .map((item) => String(item).substring(startString.length))
    .join('-');
}
