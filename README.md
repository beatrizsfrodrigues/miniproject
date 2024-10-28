# jest coverage report 🧪

![example workflow](https://github.com//beatrizsfrodrigues/tdw-mp1-beatriz-rodrigues/actions/workflows/main.yml/badge.svg)

# Mini Projeto TDW

### Beatriz Rodrigues nº127939

### Links:

**Website:** https://beatrizrodrigues-tdw.vercel.app/

**Repositório GitLab:** https://gitlab.com/group_br/miniproject

**Repositório Strapi:** https://github.com/beatrizsfrodrigues/strapi-cloud-template-blog-c26e1d99c9

**Repositório GitHub:** https://github.com/beatrizsfrodrigues/tdw-mp1-beatriz-rodrigues

## Introdução

Este projeto tem como objetivo a criação de uma pipeline de integração contínua para uma aplicação Web. Essa aplicação, desenvolvida em Vue.js, depende de um sistema de CMS, neste caso o Strapi, para obter dados e renderizar conteúdos em páginas estáticas HTML. A tarefa é desenvolvida em duas partes principais: a implementação de uma pipeline de CI/CD no GitHub e a replicação dessa pipeline em outra plataforma de CI/CD à escolha. A plataforma de CI/CD alternativa escolhida foi o GitLab.

## Implementação

### Ferramentas de Validação de Qualidade de Código

Integrei ferramentas como o ESLint e o Prettier para manter a consistência e o estilo do código, bem como o Jest para realizar testes automatizados de unidade. Estas ferramentas foram configuradas para serem executadas durante a pipeline.

O ESLint foi configurado para identificar problemas de sintaxe, erros potenciais e violações de padrões de estilo específicos do JavaScript e Vue.js. A sua integração na pipeline assegura que o código submetido segue as melhores práticas e padrões definidos pelo projeto.

O Prettier foi utilizado para formatar automaticamente o código, assegurando um estilo consistente em toda a base de código. Também é corrida uma verificação na pipeline para garantir que foi usado antes de ser feito o commit.

Para garantir a funcionalidade e a estabilidade do código, integrei o Jest como framework de testes automatizados.

### Integração com o Strapi

Para obter dados do Strapi, utilizei a API do serviço para configurar o acesso à aplicação, garantindo que as páginas são atualizadas automaticamente sempre que há uma modificação no conteúdo do CMS.

Foi criada uma tabela de dados bastante simples, apenas com uma imagem e numero de gostos para cada objeto.

### Deployment com o Vercel

O deployment foi configurado com o Vercel, permitindo que a aplicação seja publicada automaticamente sempre que há alterações na branch principal do GitHub, utilizando as credenciais fornecidas.

### Pipeline no GitHub

A pipeline no GitHub foi configurada para seguir um fluxo bem estruturado, garantindo a qualidade do código e a eficiência do processo de deploy. A execução do lint com o ESLint e Prettier, e dos testes com o Jest ocorre em paralelo, logo no início do processo. O build da aplicação só é executado se as verificações do lint passarem e o workflow é acionado na branch principal. O deploy é configurado para ser executado quando o build é bem sucedido.

A pipeline é acionada automaticamente a cada commit na branch principal, permitindo o deployment automático das atualizações assim que são aprovadas. Além do trigger de commit, a pipeline está configurada para ser executada de segunda a sexta-feira à meia-noite, o que ajuda a manter um ciclo de desenvolvimento contínuo.

## Diferenças Observadas entre as Plataformas

Durante a implementação da pipeline em ambas as plataformas, GitHub Actions e GitLab CI, observei algumas diferenças que influenciam diretamente a experiência de configuração, a facilidade de uso e a flexibilidade no desenvolvimento de pipelines de CI/CD.

Uma das principais vantagens do GitHub Actions é a vasta biblioteca de ações criadas pela comunidade, que facilita e acelera a implementação de pipelines. Além disso, a documentação e os exemplos disponíveis são extremamente úteis para novos utilizadores.

Por outro lado, o GitLab CI destaca-se pela sua interface mais intuitiva para agendar execuções automáticas da pipeline. A forma como se protegem branches também é mais clara e acessível.

## Principais Desafios e Obstáculos Não Ultrapassados

Um dos principais desafios que enfrentei durante este projeto foi a integração de várias ferramentas novas que nunca havia utilizado anteriormente, como Vercel, Strapi e GitLab.

Com o Vercel, os maiores desafios foram a configuração inicial e o entendimento das opções de deployment .

Com o Strapi, tive que aprender a modelar dados e configurar permissões adequadas para garantir que as informações fossem acessíveis apenas a quem deveria e compreender como fazer chamadas à API e garantir que os dados fossem renderizados corretamente no meu site foi um processo que exigiu tempo e testes.

No GitLab, o entendimento das pipelines e como configurar corretamente os jobs no GitLab foi um desafio.

## Principais Aprendizagens

Durante este projeto, aprendi a utilizar diversas plataformas, a configurar uma pipeline de CI/CD complexa com triggers específicos, a gerir credenciais de forma segura e a adaptar pipelines entre diferentes plataformas. Além disso, ganhei uma compreensão mais profunda sobre as melhores práticas na integração contínua e na entrega contínua, que são cruciais para o sucesso de projetos de software modernos.

## Conclusão e Reflexão Crítica

O desenvolvimento deste projeto evidenciou a importância de uma integração contínua bem estruturada para o sucesso de projetos Web modernos. Aprendi que, apesar de a configuração inicial ser mais complexa, uma pipeline de CI/CD bem implementada reduz significativamente a carga de trabalho manual e aumenta a eficiência do processo de deployment.
