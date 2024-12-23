﻿# Projeto-Individual-com-Git-GeradorDeSenhas
# Gerador de Senhas em JavaScript

Este projeto é um **gerador de senhas seguro e personalizável** desenvolvido em JavaScript. Ele permite a criação de senhas fortes com base nas preferências do usuário, como o tamanho da senha e os tipos de caracteres que ela deve conter.

## Funcionalidades

- Gera senhas de qualquer comprimento (personalizável).
- Permite incluir:
  - Letras maiúsculas
  - Números
  - Símbolos especiais
- Fácil de usar e configurar.

## Como Funciona

1. O usuário define os parâmetros para a senha, incluindo:
   - Comprimento da senha.
   - Se deseja incluir letras maiúsculas, números e símbolos.
2. O gerador utiliza esses critérios para criar uma senha aleatória, garantindo segurança e personalização.

## Exemplo de Uso

```javascript
const tamanho = 12; // tamanho da senha
const incluirMaiusculas = true; // incluir letras maiúsculas
const incluirNumeros = true; // incluir números
const incluirSimbolos = true; // incluir símbolos

const senhaGerada = gerarSenha(tamanho, incluirMaiusculas, incluirNumeros, incluirSimbolos);
console.log("Senha Gerada:", senhaGerada);
