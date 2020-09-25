const minimumTime = (n, x, y) => {
  let t = 0;
  // go to the fastest Xerox and make the first copy
  t += Math.min(x, y);

  //go to a slower copier
  let slower = Math.max(x, y);
  // imitating the flow of time, t goes in steps of Math.min(x, y)
  for (let i = 1; i < n; i++) {
    // the slow copier has already printed some part of the document
    slower -= Math.min(x, y);

    // if the slow copier has already printed the document
    if (slower <= 0) {
      // then we count it
      i++;
      // and send another one to print
      slower = Math.max(x, y);
    }

    t += Math.min(x, y);
  }

  return t;
};

console.log(minimumTime(4, 1, 1));
console.log(minimumTime(5, 1, 2));

