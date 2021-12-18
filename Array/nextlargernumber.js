const getNextlargernumber = (num) => {
  const getnextbigdigitarray = (arr, sv) => {
    for (let x of arr) {
      if (x > sv) {
        arr.splice(arr.indexOf(x), 1);
        return [x, ...arr];
      }
    }
  };

  let data = [...num.toString()];

  let finalarr = [];
  for (let i = data.length - 1; i > 0; i--) {
    if (data[i] > data[i - 1]) {
      let specialvar = data[i - 1];
      let newarr = data.splice(i - 1).sort((a, b) => a - b);
      finalarr.push(...data, ...getnextbigdigitarray(newarr, specialvar));
      return finalarr.join("");
    }
  }
  return "IMPOSSIBLE";
};
console.log(getNextlargernumber(167893));
