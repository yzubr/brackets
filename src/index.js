module.exports = function check(str, bracketsConfig) {
  let stack = [];
   
  

  for (let i = 0; i < str.length; i++) {
    let currentSmbl = str[i];
    let indexArr = 0;
    let indexSubArrElmnt = 0;

    for (let j = 0; j < bracketsConfig.length; j++) {

      if (bracketsConfig[j].includes(currentSmbl)) {
        indexArr = j;
        indexSubArrElmnt = bracketsConfig[j].indexOf(currentSmbl);
      };
    }
   
    if (indexSubArrElmnt === 0) {
      stack.push(currentSmbl)
    } else {
      if ((indexSubArrElmnt != 0) && (stack.length != 0)) {
        let topElements = stack[stack.length - 1];
        if (bracketsConfig[indexArr][0] === topElements) {
          stack.pop(currentSmbl);
        } else return false;
      } else return false;
    }  
  }
  
  return stack.length === 0;
}
