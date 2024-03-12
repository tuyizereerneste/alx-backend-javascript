export default function cleanSet(set, startString) {
  const strings = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (value.startsWith(startString)) {
      const remainedString = value.slice(startString.length);
      strings.push(remainedString);
    }
  }
  return strings.join('-');
}
