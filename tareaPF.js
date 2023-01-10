function palabras(str) {
    var vocales = ["a","e","i","o","u","A","E","I","O","U"]
    return str.split("").filter (data => {
        return vocales.indexOf(data.toLowerCase())!=-1;
    }).join('');
}
const p1=palabras("EsmeraldAs");
console.log(p1); 

