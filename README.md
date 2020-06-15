![Wallpaper Bootcamp 10 0 - 2560x1080](https://user-images.githubusercontent.com/59901617/82763228-7d5f8780-9ddc-11ea-8704-ef6edf6c88ca.png)

# Desafio-Conceitos-Nodejs
Desafio-Conceitos-Nodejs / GoStack 11


#🚀 Sobre o desafio
 
Este desafio tem a intenção de criar uma aplicação para treinar o que eu aprendi até agora no Node.js!

Essa será uma aplicação para armazenar repositórios do meu portfólio, que irá permitir a criação, listagem, atualização e remoção dos repositórios, e além disso permitir que os repositórios possam receber **likes**.

<H1>Rotas da aplicação</H1>

 <b>POST /repositories:</b> A rota deve receber title, url e techs dentro do corpo da requisição, sendo a URL o link para o github desse repositório. Ao cadastrar um novo projeto, ele deve ser armazenado dentro de um objeto no seguinte formato: **{ id: "uuid", title: 'Desafio Node.js', url: 'http://github.com/...', techs: ["Node.js", "..."], likes: 0 }**; Certifique-se que o ID seja um UUID, e de sempre iniciar os likes como 0. 
 
<b>GET /repositories:</b> Rota que lista todos os repositórios;
 
<b>PUT /repositories/:</b> id: A rota deve alterar apenas o title, a url e as techs do repositório que possua o id igual ao id presente nos parâmetros da rota;
 
<b>DELETE /repositories/:</b> id: A rota deve deletar o repositório com o id presente nos parâmetros da rota;
 
<b>POST /repositories/:</b> id/like: A rota deve aumentar o número de likes do repositório específico escolhido através do id presente nos parâmetros da rota, a cada chamada dessa rota, o número de likes deve ser aumentado em 1;
 
<H2>Para esse desafio fiz os seguintes testes: </H2>

<b>should be able to create a new repository:</b> Para que esse teste passe, a aplicação deve permitir que um repositório seja criado, e retorne um **json** com o projeto criado.

<b>should be able to list the repositories:</b> Para que esse teste passe, a aplicação deve permitir que seja retornado um array com todos os repositórios que foram criados até o momento.

<b>should be able to update repository:</b> Para que esse teste passe, a aplicação deve permitir que sejam alterados apenas os campos url, title e techs.

<b>should not be able to update a repository that does not exist:</b> Para que esse teste passe, deve validar a rota de update se o id do repositório enviado pela url existe ou não. Caso não exista, retornar um erro com status 400.

<b>should not be able to update repository likes manually:</b> Para que esse teste passe, não deve permitir que a rota de update altere diretamente os likes desse repositório, mantendo o mesmo número de likes que o repositório já possuia antes da atualização. Isso porque o único lugar que deve atualizar essa informação é a rota responsável por aumentar o número de likes.

<b>should be able to delete the repository:</b> Para que esse teste passe, deve permitir que a rota de delete exclua um projeto, e ao fazer a exclusão, ele retorne uma resposta vazia, com status 204.

<b>should not be able to delete a repository that does not exist:</b> Para que esse teste passe, deve validar a rota de delete se o id do repositório enviado pela url existe ou não. Caso não exista, retornar um erro com status 400.

<b>should be able to give a like to the repository:</b> Para que esse teste passe, a aplicação deve permitir que um repositório com o id informado possa receber likes. O valor de likes deve ser incrementado em 1 a cada requisição, e como resultado, retornar um **json** contendo o repositório com o número de likes atualizado.

<b>should not be able to like a repository that does not exist:</b> Para que esse teste passe, deve validar a rota de like se o id do repositório enviado pela url existe ou não. Caso não exista, retornar um erro com status 400.


<H2>📝Licença</H2>
Esse projeto está sob a licença MIT.
