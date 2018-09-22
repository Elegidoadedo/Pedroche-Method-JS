function pdc(string){
  return string.replace(/[^a-zA-Z 0-9]+/g,'').split("").filter(function(letter){
    return letter !== ' ' ;
 }).join("");
}