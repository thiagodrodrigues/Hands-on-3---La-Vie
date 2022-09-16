<h1 align=center> La Vie - Saúde Mental </hi> <br>

<img src="./docs/LaVie.jpeg" alt="LaVie">

## 💻 Sobre o projeto

<br>
- Desafio #GamaExperience44 HandsOn3

- O projeto pedia para desenvolver uma API que permitisse criar registros de psicólogos, pacientes e prontuários da clínica La Vie.

---

## :mortar_board: Descrição das Funcionalidades

- Banco de Dados:
  Foi feito um banco de dados a partir do MySQL Workbench com três tabelas:

  <img src="./docs/DER.png" alt="DER">

  <br>

- Login: 
    - /login (post): Esse endpoint recebe dois parâmetros obrigatórios: email e senha; que são validados de acordo com as informações do banco de dados.
  
  <br>

- Psicólogos:
    - /psicologos (get): Lista todos os psicólogos cadastrados no banco de dados, exibindo todos os atributos da entidade. Caso não exista nenhum psicólogo, envia um array vazio como resposta.
    - /psicologos (post): Recebe um objeto no body da requisição contendo: "nome", "email", "senha", "apresentacao".
    - /psicologos/:id (get): Devolve um objeto com todas as informações do psicólogo do id informado na url, com exceção da senha. 
    - /psicologos/:id (put): Recebe o id do psicólogo que será atualizado. Recebe um objeto no body da requisição contendo: "nome", "email", "senha", "apresentacao".
    - psicologos/:id (del): Irá receber o id do psicólogo que será deletado.
  
  <br>

- Pacientes: 
    - /pacientes (get): Lista todos os pacientes cadastrados no banco de dados, exibindo todos os atributos da entidade. Caso não exista nenhum psicólogo, envia um array vazio como resposta.
    - /pacientes (post): Recebe um objeto no body da requisição contendo: "nome", "email", "idade".
    - /pacientes/:id (get): Devolve um objeto com todas as informações do paciente do id informado na url.
    - /pacientes/:id (put): Recebe o id do psicólogo que será atualizado. Recebe um objeto no body da requisição contendo: "nome", "email", "idade".
    - /pacientes/:id (del): Irá receber o id do paciente que será deletado.
  
  <br>

- Atendimentos:
    - /atendimentos (get): Listado todos os atendimentos realizados por todos os psicólogos cadastrados no banco de dados, exibindo todos os atributos da entidade.
    - /atendimentos (post): Irá receber o id do paciente que será atualizado. Recebe um objeto no body  da requisição contendo: "paciente_id", "data_atendimento", "observação".
    - /atendimentos/:id (get): Devolve um objeto com todas as informações do atendimento do id informado na url.
 
  <br>

---

## :file_folder: Funcionalidades da API

- 

---

<div align="center">
<p>:point_down: Clique aqui :point_down:  </p> 
 <h2> <a href="" >  Documentação da API La Vie</a>  </h2>

[![Run in Insomnia}]()

</div>

---


## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:
<br><br>

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" width="52" alt="javascript logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" width="52" alt="nodejs logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" height="40" width="52" alt="sequelize logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" height="40" width="52" alt="mysql logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height="40" width="52" alt="express logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" height="40" width="52" alt="npm logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="40" width="52" alt="git logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" height="40" width="52" alt="github logo"  />
</div>

---

<h2> 👨‍💻 Contribuidores </h2><br>

<h2>
<table align=center>
  <tr>

   <td align="center"> <img src="https://avatars.githubusercontent.com/u/102426768?v=4" width=175/></br><a href="https://www.linkedin.com/in/ellen-ribeiro-borges-7371811bb/"> Ellen Ribeiro </a>
   </td>
   <td align="center"> <img src="https://avatars.githubusercontent.com/u/76272470?v=4"  width=175/></br><a href="https://www.linkedin.com/in/fernando-predes-b1545838/"> Fernando Predes </a>
   </td>
    <td align="center"> <img src="https://avatars.githubusercontent.com/u/100455177?v=4" width=175/> </br><a href="https://www.linkedin.com/in/patricksegalla/"> Patrick Segalla </a>
   </td>
    <td align="center"> <img src="https://avatars.githubusercontent.com/u/109247611?v=4" width=175/> </br><a href="https://www.linkedin.com/in/raphael-anizio-da-silva-0173211b8/"> Thiago Rodrigues </a>
   </td>
   
  </tr>
</table> </h2>

---
