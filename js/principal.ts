let nome:string="Geovani"

let idade:number=20

console.log(nome, idade);

$("<p>", {
    text:`Olá ${nome}, você tem ${idade} anos`
}).appendTo("body")

function teste():number {
    

    return 0

}

function dados(nome:string, idade:number):boolean {
    
    if (nome == "Geovani" && idade == 20) {
        return true
    }else{
        return false
    }
}