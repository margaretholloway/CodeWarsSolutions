/*Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, 
the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.*/
function longest(s1, s2) {
    // your code
    let a = [... new Set(s1.split(""))];
    let b = [... new Set(s2.split(""))];
    
    for (let i=0; i<b.length; i++){
      a.push(b[i]);
    }
     let init_combo = [... new Set(a)];
    let combo = init_combo.sort().join("");
    return combo;
}