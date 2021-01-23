exports.min = function min(array=[]) {
  let i = 0;
  for(let j of array) i = (j < i)? j : i;
  return i;
}

exports.max = function max(array=[]) {
  let i = 0;
  for(let j of array) i = (j > i)? j : i;
  return i;
}

exports.avg = function avg(array=[0]) {
  let i = 0;
  for(let j of array) i += j;
  return (array.length == 0) ? 0 : i / array.length;
}
