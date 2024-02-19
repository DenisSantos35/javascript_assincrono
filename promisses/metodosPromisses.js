function rand(max, min){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {       
        setTimeout(()=>{
            if(typeof msg !== 'string') return reject('BAD VALUE');
            resolve(msg.toUpperCase() + ' Passei na promisse');
        }, tempo);
    });    
}

//Promise.all, Promise.race, Promise.resolve Promise.reject


//resolve todas as promisses
/*const promises = [
    "Primeiro valor",
    esperaAi("Promisse 1",rand(1,3) ),
    esperaAi("Promisse 2",rand(1,3) ),
    esperaAi("Promisse 3",rand(1,3) ),
    esperaAi(1000, rand(1,3) ),
    "Outro valor"
];
Promise.all(promises).then((valor)=>{
    console.log(valor);
}).catch((e)=>{
    console.log("Error " + e)
})*/

// promisse race entrega sempre a primeira promisse resolvida

/*const promises = [
    esperaAi("Promisse 1",rand(1,3) ),
    esperaAi("Promisse 2",rand(1,3) ),
    esperaAi("Promisse 3",rand(1,3) ),
    esperaAi(1000, rand(1,3) ),
];

Promise.race(promises).then((valor)=>{
    console.log(valor);
}).catch((e)=>{
    console.log("Error " + e)
})*/

//Promisse resolve
function baixaPagina(){
    const emCache = rand(1,3) < 1500 ? true : false;
    if(emCache){
        return Promise.resolve('Pagina em cache');
    }else{
        return esperaAi("Baixei a  pagina", 3000);
    }
}

baixaPagina().then(dadosPagina => console.log(dadosPagina)).catch(e => console.log(e));
