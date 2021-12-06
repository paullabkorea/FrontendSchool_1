data = [20, 10, 1, 2, 3, 6, 4, 22, 33, 11]
(10) [20, 10, 1, 2, 3, 6, 4, 22, 33, 11]
data.sort(function (a, b) {
  if (a > b) {
      return 1;
  }
  if (a < b) {
     return -1;
  }
  return 0;
});
(10) [1, 2, 3, 4, 6, 10, 11, 20, 22, 33]
data
(10) [1, 2, 3, 4, 6, 10, 11, 20, 22, 33]
data.sort(function (a, b) {
  if (a < b) {
      return 1;
  }
  if (a > b) {
     return -1;
  }
  return 0;
});
(10) [33, 22, 20, 11, 10, 6, 4, 3, 2, 1]
data
(10) [33, 22, 20, 11, 10, 6, 4, 3, 2, 1]
