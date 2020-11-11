# LDSO 2020-2021

This project was made during the LDSO course of FEUP.

SmartXchange is a tool that provides a virtual stock exchange system, supporting the growth of new
and better business ideas. By simulating reality in this virtual competition, players are prone to a risk-taking attitude which will lead to business model refinements, according with the movement of the virtual market. In the end, entrepreneurs will have stronger business models and greater confidence in their business ideas.

**TEAM**

- Christopher Fernandes de Abreu - up201604735@fe.up.pt
- José Diogo da Cunha Moreira Trindade Martins - up201504761@fe.up.pt
- Lucas Vieira Casalderrey Vilard Stein - up201606398@fe.up.pt (Team Leader)
- Murilo de Mendonça Couceiro - up202003377@fe.up.pt
- Paulo Roberto Dias Mourato - up201705616@fe.up.pt
- Rita Nunes da Mota - up201703964@fe.up.pt
- Vinicius Ribeiro Furlan - up202001495@fe.up.pt

**How To Contribute**

_Step 1_ - Assign yourself to an issue in the GitLab issue board "Sprint Backlog" and move it to the "Doing" board

_Step 2_ - On the issue page you've chosen, select the option "Create branch", use the default name for the branch and select the source branch as being the respective branch of the sprint you're on (sprint-1, sprint-2, etc)

_Step 3_ - Commit your changes to the brach you've created

_Step 4_ - After resolving the issue, create a merge request between your issue branch and the respective sprint branch, your colleagues will have to review your solution and at least 2 of them have to to confirm it for the merge request to go forward

_Step 5_ - At the end of the sprint the sprint branch will be merged to the master branch

**Note:** If your merge request fails, you'll have to resolve the problems yourself.

**Commit Template**

_Title:_ [#Number] < Type > Summary, upper case, don't end with a period, no more than 50 chars, 'Number' is the issue id, and 'Type' can be 'Fix' - resolving a bug; 'Feature' - adding something to the application; 'Refactor' - rewriting code without changing the outcome

_Body:_ Explain *what* and *why* (not *how*).

_(optional)_ Co-authored-by: name

_**Example:**_

[#40] < Refactor> UPDATED README.MD

Added "How to contribute" and "Commit template" sections to readme file so that every contributer knows what to do when they want to summit their changes and so that everyone commits with the same message format.

## How to start

First you need to download all the packages used in this project. For this you must use these commands:
```commmand
npm install 
```
After this you need to start the back-end server. First change to the back-end directory and then use: 

```command
npm start 
```

Note: For now, we have a local database so you need to install MySQL Workbench to continue. In there you must create an empty schema called smartxchange_cb and a user with username:SmartXchange and password:Smartxchange.

To create the database tables you must run the migrations with sequelize-cli. Still in the back-end directory, you should use these command: 

```command
npx sequelize-cli db:migrate
```

To start and open the web app, you need to head to the front-end directory and use this command: 

```command
ng serve --open
```

Co-authored-by: Rita Mota