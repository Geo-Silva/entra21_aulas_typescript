let nome = "Geovani";
let idade = 20;
console.log(nome, idade);
$("<p>", {
    text: `Olá ${nome}, você tem ${idade} anos`
}).appendTo("body");
function teste() {
    return 0;
}
function dados(nome, idade) {
    if (nome == "Geovani" && idade == 20) {
        return true;
    }
    else {
        return false;
    }
}
