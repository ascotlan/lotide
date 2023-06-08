function middle(arr) {
  const len = arr.length;
  let mid = 0;

  if (len <= 2) {
    return [];
  } else if (len % 2 !== 0) {
    mid = (len - 1) / 2;
    return [arr[mid]];
  } else {
    mid = Math.floor((len - 1) / 2);
    return [arr[mid], arr[mid + 1]];
  }
}

module.exports = middle;
