function rand(max, min){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') return reject('BAD VALUE');
        setTimeout(()=>{
            resolve(msg);
        }, tempo);
    });    
}


esperaAi("Conectando ao BD", rand(1, 3))
.then((resposta) => {
    console.log(resposta);
    return esperaAi("Buscando dado na base de dados", rand(1, 3))
})
.then((resposta)=>{
    console.log(resposta);
    return esperaAi("Retornando dados.", rand(1,3))
}).then((resposta)=>{
    console.log(resposta);
    return esperaAi("Fechando conexão", rand(1,3));
})
.then((resposta)=>{
    console.log(resposta)
    return esperaAi(2222, rand(1,3));
})
.then((resposta)=>{
    console.log(resposta);
    return esperaAi("Fim de operação", rand(1,2));
}).then((resposta)=>{
    console.log(resposta);
})
.catch((e)=>{
    console.error("Erro", e);
});

console.log("Operação de um banco de dados");
 
