const getSecret = (file, secretPassword) => {  // O objeto super secret é passado para a função getSecret e recebe o nome
    // do parâmetro file. Então utilizamos o nome do objeto e a notação para acessar o objeto. 
    file.opened = file.opened + 1;
    if (secretPassword == file.password) {
        return file.content;
    } else {
        return "Password inválido! sem segredo para você"
    }
}

const setSecret = (file, secretPassword, secret) => {
    if (secretPassword == file.password) {
        file.opened = 0
        file.content = secret
    }
}

const superSecretFile = {
    level: "classified",
    opened: 0,
    password: 2,
    content: "A próxima reunião do Dr. Avelino é em Detroit."
};

let secret = getSecret (superSecretFile, 2) // Passamos o objeto superSecretFile para as funçoes getSecret e setSecret
console.log(secret)

setSecret(superSecretFile, 2, "A próxima reunião do Dr. Avalino é na Philadelphia.")
secret = getSecret(superSecretFile, 2)
console.log(secret);


