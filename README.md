# Woke-ProcessoSeletivo
Desenvolvido em 8 horas.


<p align="center">
 <a href="#problema">Problema</a> •
 <a href="#solucao">Solução</a> • 
 <a href="#funcionalidades">Funcionalidades</a> •
 <a href="#andamento">Andamento</a> •
 <a href="#tecnologias">Tecnologias</a> •  
 <a href="#decisoes ">Decisões</a> • 	
 <a href="#rodar ">Como rodar o projeto ?</a> •
 <a href="#autor">Autor</a> •
</p>



## Problema

<p id="problema" align="center"> 
Muitas pessoas, na necessidade de conseguir uma oportunidade, acabam enviando centenas de curriculos, preenchendo também, centenas de diferentes curriculos em sites diferentes. Tomando não apenas um tempo desnecessario, que poderia ser gasto em outras atividades, como passar um tempo com a sua familia ou até mesmo estudar, mas também gastam muita energia, o que pode acabar impactando negativamente, no começo do dia de uma pessoa.
</p>



### Solução

<p id="solucao" align="center">Focando resolver esse problema, proposto pela empresa Woke, desenvolvi um sistema completo, em apenas 8 horas. Onde trouxe uma plataforma aonde poderia conectar essas duas pessoas ( Contratante e Profissional ), que ao realizar o seu cadastro, a plataforma te possibilita encaminhar seus dados para outras empresas, sem toda essa burocracia, de ter que se cadastrar em um site diferente por dia, facilitando essa migração !</p>



<h2 id="andamento" align="center"> 
	🚧 Projeto concluído 🚀
</h2>




<p id="funcionalidades"></p>
<h3>Funcionalidades</h2>

- [x] Login ( Autenticação ) | FireAuth.
    - [x] Feedback ( Resposta para o usuario, positiva e negativa ) | Bootstrap ( ReactStrap ).
    
- [x] Cadastro ( Autenticação ).
    - [x] Verificação ( Verificação se os campos foram digitados ) | Resolução com funções.
    - [x] Feedback ( Resposta para o usuario, positiva e negatia ) | Bootstrap ( ReactStrap ).
   
- [x] Recuperação de senha ( Encaminhação de um e-mail, para o mesmo do cadastro, para nova senha ) | Funções desenvolvidas em cima da documentação do fireStore.
    - [x] Feedback ( Respostas positivas e negativas ) | Resolução com funções. 
    - [x] Verificação (Verifica se existe esse usuario em nosso sistema, antes mesmo de encaminhar o e-mail)
    - [x] Contato profundo ( Antes de encaminhar o e-mail, é exibido uma mensagem, indicando-o com seu nome, para entrar em seu e-mail)
      
- [x] Area Restrita ( Ambiente exclusivo, para cada cliente, com seu nome e informações ) | Resolução com funções;
- [x] Encaminhar Email ( Enviar e-mail, com seus proprios dados, para outras empresas (Proprio email, pois nao tem empresas)) | Mailto
- [x] Encaminhar dados ( Apenas autenticado, é permitido enviar seus dados ) 
- [x] Front-End ( React )
    - [x] Styled-Components
- [x] Back-End ( API ) - Firebase/FireStore



<h3 id="decisoes"> Decisões </h3>
	
	<p> 
	Optei neste projeto por utilizar duas tecnologias, uma para o front-End, sendo o React e a outra para desenvolver o backend, criar essa conexão da api, com o banco de dados, escolhi o FireStore ( FireBase ).
	O React já não restava duvidas, que seria utilizado, pela praticidade e tecnologia, por ser em minha visão, a melhor biblioteca para javaScript. 
	Já o fireStore, optei por ele, um pouco pela questão da familiaridade, que tenho, mas muito mais, pela questão do tempo, pela escasses, de desenvolvimento mesmo.
	Como colocado a cima, desenvolvi esse projeto em 8 horas, sendo que não tinha conhecimento na parte de criação mesmo, configuração do firebase, implementar essas questoes de autenticação, era coisas que realmente nao sabia, mexer com rotas, não fazia ideia de como funcionavam, essas configurações e implementações.
	Mas isso só me mostrou mais ainda o caminho da evolução, por mais besteira que possa parecer, sempre que realizo proezas que não era capaz de fazer, por achar que não tinha esse conhecimento, me sinto mais confortavel e prazer por me desafiar mais e mais e provar que sou a unica pessoa que está entre os desafios, a luta interna, é muito mais intensa do que a de qualquer conhecimento.
	Ps: sei que o frontEnd não ficou bonito, mas pelo tempo, decidi focar nas coisas que eram importantes para o projeto, os MVPS.
	</p>
	

<h3 id="rodar">Como rodar o projeto ?</h3>
	
<p>
		1: Clonar o projeto.
		2: Abrir o terminal dentro da pasta.
		3: Rodar o comando "Yarn", pois instalara todas as dependencias.
		4: Por ultimo, apenas rodar o comando "Yarn start", que botara o servidor para funcionar.
</p>
	
	

<h3>Autor</h3>
	
	<p>Mateus Silva De Santis</p>
	
	





