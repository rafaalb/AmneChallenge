const fs = require('fs');

function calcWindow(daysN, windowK, array) {
  const max = daysN - windowK + 1;
  let result = 0;
  for(let i=0;i<max;i++) {
    let win = array.slice(i,windowK+i);
    result = subrange(win);
    console.log(result)
  }
}

function subrange(win) {
  if(win.length <= 1) {
    return 0;
  }
  const isIncremental = win.every((e,index,self) => {
     const next = self[index + 1];
     return next ? next > e : true;
  });
  const isDecremental = win.every((e,index,self) => {
     const next = self[index + 1];
     return next ? next < e : true;
  });

  let newRes = isIncremental ? 1 : -1;
  newRes = !isIncremental && !isDecremental ? 0 : newRes;
  return (
      newRes
      + subrange(win.slice(0, win.length - 1))
      + subrange(win.slice(1, win.length))
    );

}

fs.readFile('file.txt', 'utf8', function(err, data) {
    if (err) throw err;
    const lines = data.split('\n');
    const n = lines[0].split(' ')[0];
    const k = lines[0].split(' ')[1];
    const array = lines[1].split(' ').map(Number);
    // 1 ≤ N ≤ 200,000 days
    // 1 ≤ K ≤ N days
    if(n < 1 || n > 200000 || k < 1 || k > n) {
      console.log('Invalid parameters, n and k must be in range')
    } else {
      calcWindow(+n, +k, array);
    }
});
