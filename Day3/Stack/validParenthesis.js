function sol(s) {
    let ans = [];
    for (let char of s) {
      if (char === '(' || char === '{' || char === '[') {
        ans.push(char);
      } else if (char === ']') {
        if (ans.pop() !== '[') {
          return false;
        }
      } else if (char === '}') {
        if (ans.pop() !== '{') {
          return false;
        }
      } else if (char === ')') {
        if (ans.pop() !== '(') {
          return false;
        }
      }
    }
    if (ans.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  let s = "{()}";
  console.log(sol(s)); 