const nome = prompt('qual seu nome?')
const cor = prompt("qual sua cor favorita?")
//concatenação
const resposta= ("a cor favorita do "+nome+" é "+cor)
console.log(resposta)
console.log("A cor favorita do "+nome+" é "+cor)
//templates string
const fraseTemplate = (`A cor favorita da ${nome} é ${cor}`)
console.log(fraseTemplate)
//citação
const citação = prompt("escreva uma citação.")
const fraseCitação = "\"" +citação + "\""
console.log(fraseCitação)
console.log(`Nome: ${nome} \nCor favorita: ${cor}`)

// Nome maiusculo
console.log(`Nome: ${nome.toUpperCase()} \nCor favorita: ${cor}`) 

console.log(nome.length)

const possuiA = nome.includes("a")
console.log (possuiA)

const nome1 = prompt("qual seu nome?")
const email = prompt("qual seu email?")

console.log(`O ${email} foi cadastrado com sucesso. Boas vindas, ${nome1}`)
const tamNome = nome1.length;

console.log(nome1.length)
console.log(`O ${email} foi cadastrado com sucesso. Boas vindas, ${nome1}, seu nome tem ${tamNome} marsletras`)

const temArroba = email.includes('@')

console.log(`O ${email} foi cadastrado com sucesso. Boas vindas, ${nome1}`.replaceAll("r","l"))



