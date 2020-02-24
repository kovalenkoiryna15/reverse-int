module.exports = function reverse (n) {
  if (n < 0) {
    let arr = String(n).split('');
    arr.splice(0, 1);
    let str = arr.reverse().join('');    
    return Number(str);
  } else {
    let arr = String(n).split('');
    let str = arr.reverse().join('');    
    return Number(str);
  };  
};
