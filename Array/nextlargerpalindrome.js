const nextlargerpalindrome = (num) => {
  const getarray = (val) => {
    return [...String(val)];
  };

  let givennumber = num;
  let temparr = [Number];

  let middledigit = Number();

  if (givennumber <= 9) {
    return 11;
  }
  if (getarray(givennumber).length % 2 == 0) {
    //even

    temparr = getarray(givennumber)
      .splice(0, getarray(givennumber).length / 2)
      .reverse()
      .join("");

    if (
      getarray(givennumber)
        .splice(getarray(givennumber).length / 2)
        .join("") < temparr
    ) {
      return String(getarray(temparr).reverse().join("")) + String(temparr);
    } else {
      temparr =
        Number(
          getarray(givennumber)
            .splice(0, getarray(givennumber).length / 2)
            .join("")
        ) + 1;

      return String(temparr) + getarray(temparr).reverse().join("");
    }
  } else {
    //odd case
    middledigit = getarray(givennumber)
      .splice(getarray(givennumber).length / 2, 1)
      .join("");

    temparr = getarray(givennumber).splice(0, getarray(givennumber).length / 2);
    if (
      temparr.reverse().join("") >
      getarray(givennumber)
        .splice(1 + getarray(givennumber).length / 2)
        .join("")
    ) {
      return (
        String(temparr.reverse().join("")) +
        String(middledigit) +
        temparr.reverse().join("")
      );
    } else {
      temparr = getarray(givennumber)
        .splice(0, getarray(givennumber).length / 2 + 1)
        .join("");

      let secarr = Number(temparr) + 1;

      return (
        secarr +
        getarray(secarr)
          .splice(0, getarray(givennumber).length / 2)
          .reverse()
          .join("")
      );
    }
  }
};
console.log(nextlargerpalindrome(1));
