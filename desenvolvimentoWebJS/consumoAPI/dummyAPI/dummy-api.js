async function getUsers() {
    const resposta = await fetch('https://dummyjson.com/users'); // , {headers: {"parametro": "valor"}});

    const users = await resposta.json();

    console.log(users);
}

getUsers();

async function getUser() {
    const resposta = await fetch('https://dummyjson.com/users/5'); // , {headers: {"parametro": "valor"}});

    const user = await resposta.json();

    console.log(user);
}

getUser();

async function createUser() {
    const userData = {
        firstName: 'Sara',
        lastName: 'Souza',
        age: 23,
        email: 'sara@email.com'
    };

    try {
        await fetch ('https://dummyjson.com/users/add', {
            method: 'POST',
            'Content-Type': 'application/json',
        })
    
        body: JSON.stringify(userData)
    } catch (erro) {
        console.erro('Erro ao criar usuário', error);
    }
}

createUser();