![Integrando seu projeto React com APIs](thumbnail.png)

# Alfood

O Alfood é um site que lista restaurantes e pratos do menu. 
É um MVP que tá só começando e ainda tem muitas funcionalidades novas para serem desenvolvidas.

<img src="screencapture.png" alt="Imagem do Alfood" width="50%">


## 🔨 Funcionalidades do projeto

O Alfood começa com uma listagem estática de seu conteúdo e é esse o problema que queremos resolver.
No decorrer do curso, vamos implementar toda a camada de comunicação com a API.

## ✔️ Técnicas e tecnologias utilizadas

Se liga nessa lista de tudo que usaremos nesse treinamento:

- `React`
- `React Hooks`
- `TypeScript`
- `axios`

## 🛠️ Abrir e rodar o projeto

Para abrir e rodar o projeto, execute npm i para instalar as dependências e npm start para inicar o projeto.

Depois, acesse <a href="http://localhost:3000/">http://localhost:3000/</a> no seu navegador.

## Como isntalar, criar e inicializar o docker?

- Para inicializar o docker basta usar o comando: `docker-compose up` -- com o aplicativo aberto
- 

## Baixando a biblioteca Mui

Material UI é uma biblioteca de componentes React de código aberto que implementa o design do Google.
Ele inclui uma coleção abrangente de componentes pré-construídos que estão prontos para uso na produção imediata.

> Maneira de fazer a instalação

 - Link: https://mui.com/
 - Comando de instalação: npm install @mui/material @emotion/react @emotion/styled
 - componentes: https://mui.com/material-ui/react-progress/

## O método post

Esse método recebe por padrão dois parametros: 
- url
- body : que recebe o objeto com os valores a ser enviados para api

## Criando uma instância do axios

>O axios recebe um parametro chamado `create` com isso criamos uma base url

```
import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:8000/api/v2/"
})

export default htt
```
## Sobre componentes do MUI

Existem vários componentes incríveis disponíveis no MUI, olhe os exemplos:

>Tipografia
A tipografia apresenta o seu conteúdo da forma mais clara e eficiente possível.

>Links
O componente Link nos permite personalizar elementos de âncora (tags a). E até mesmo podemos utilizar em conjunto com o do react-router-dom.

>Paper
Nesse componente do Material Design, as propriedades físicas de um papel são traduzidas para a tela.

>Container
É o elemento de layout mais básico, que centraliza seu conteúdo horizontalmente.

>Box
O componente Box serve como um componente encapsulador (wrapper) para auxiliar na maioria das necessidades de uso com CSS.

## Códigos http

Quando consumimos uma API REST, temos vários códigos que identificam o status de cada requisição:

- 1xx para informação
- 2xx para sucesso
- 3xx para redirecionamento
- 4xx para erros de cliente
- 5xx para demais erros

## Enviando um arquivo de imagem para o banco de dados

- Para esse feito é preciso usar uma classe que se chama formData que é uma classe do própio javascript

### Exemplo:

```
    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        const formData = new FormData()

        formData.append('nome', nomePrato)
        formData.append('descricao', descricao)

        formData.append('tag', tag)
        formData.append('restaurante', restaurante)

        if(imagem) {
            formData.append('imagem', imagem)
        }


    }
```





