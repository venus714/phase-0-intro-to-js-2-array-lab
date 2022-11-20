// Write your solution here!
const cats =["Milo","Otis","Garfield"];
function destructivelyAppendCat(Ralph){
    cats.push(Ralph) 
}
function destructivelyPrependCat(Bob){
    cats.unshift(Bob)
}
function destructivelyRemoveLastCat(Garfield){
cats.pop(Garfield)
}
function destructivelyRemoveFirstCat(Milo){
    cats.shift(Milo)
}
function appendCat(Broom){
    let Namee=[...cats,Broom]
    return Namee;
}
function prependCat(Arnold){
    let Nameee=[Arnold,...cats];
    return Nameee;
}
function removeLastCat(){
    let caats=cats.slice(0,cats.length-1)
    return caats;
}
function removeFirstCat(){
    let caaats=cats.slice(1)
    return caaats;
}
