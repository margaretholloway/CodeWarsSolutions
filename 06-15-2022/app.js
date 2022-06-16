/* Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. */
String.prototype.toAlternatingCase = function () {
    const reg = /[A-Z]/;
    let result = '';
    
    for(let i = 0; i < this.length; i += 1) {
      if(reg.test(this[i])) {
        result += this[i].toLowerCase();
      } else {
        result += this[i].toUpperCase();
      }
    }
    
    return result
  
    // Define your method here :)
  }