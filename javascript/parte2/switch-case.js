// Switch Case: usado quando sua variável possui valores específicos e você quer executar um bloco de código diferente para cada valor.

// switch(variavel) {
//     case
// }

const permissoes = 'aluno'; // 'aluno' || 'professor' || 'admin'

switch(permissoes) {
    case 'aluno':
        console.log('Você só tem acesso às aulas.');
        break;
    case 'professor':
        console.log('Você pode alterar as aulas e adicionar exercícios.');
        break;
    case 'admin':
        console.log('Você tem acesso total ao sistema.');
        break;
    default:
        console.log('Você não tem acesso ao sistema.');
        break;
}