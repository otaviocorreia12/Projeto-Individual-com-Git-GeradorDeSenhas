// Gerador de Senhas
function gerarSenha(tamanho, incluirMaiusculas, incluirNumeros, incluirSimbolos) {
    const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()_+[]{}|;:,.<>?';

    let caracteres = letrasMinusculas;

    if (incluirMaiusculas) caracteres += letrasMaiusculas;
    if (incluirNumeros) caracteres += numeros;
    if (incluirSimbolos) caracteres += simbolos;

    let senha = '';
    for (let i = 0; i < tamanho; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[randomIndex];
    }

    return senha;
}

// Exemplo de uso:
const tamanho = 12; // tamanho da senha
const incluirMaiusculas = true; // incluir letras maiúsculas
const incluirNumeros = true; // incluir números
const incluirSimbolos = true; // incluir símbolos

const senhaGerada = gerarSenha(tamanho, incluirMaiusculas, incluirNumeros, incluirSimbolos);
console.log("Senha Gerada:", senhaGerada);
