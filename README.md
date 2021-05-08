# DS Sales Project
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/devsuperior/sds1-wmazoni/blob/master/LICENSE) 

# About the project

https://iagorodrigues-sds3.netlify.app/

DS Sales Project is a monorepo project created as a simple web full stack application and built in the 3º edition of the **DevSuperior week** (#sds3). Event organized buy [DevSuperior](https://devsuperior.com "DevSuperior website").

The main objective of the application is to show the perfomance of sales of different sellers by various perspectives. It shows this data in a dashboard with some graphics and a table listing sellers with there amount, date of sale and other data.

## Mobile layout

<div float="left">
  <img src="https://user-images.githubusercontent.com/19571060/117524839-ca108400-af95-11eb-9e3d-9715138a124f.png" width="300">
  <img src="https://user-images.githubusercontent.com/19571060/117524845-d7c60980-af95-11eb-95ef-7085855797cb.png" width="300">
</div>

## Desktop layout
<div>
  <img src="https://user-images.githubusercontent.com/19571060/117524874-fb894f80-af95-11eb-833a-e8ca0100519d.png">
  <img src="https://user-images.githubusercontent.com/19571060/117524879-05ab4e00-af96-11eb-9af5-8897a015cce8.png">
</div>

## Conceptual model
![image](https://user-images.githubusercontent.com/19571060/117525216-8dde2300-af97-11eb-857a-acfb6faaded5.png)


# Technologies used
## Back end
- Java
- Spring Boot
- JPA / Hibernate
- Maven
## Front end
- HTML / CSS / JS / TypeScript
- ReactJS
- ReactRouterDom
- Apex Charts
- Axios
## Deploy
- Back end: Heroku
- Front end web: Netlify
- Database: Postgresql

# How to execute the project

## Back end
Requirements: Java 11

```bash
# clone the repository
git clone https://github.com/oiagorodrigues/projeto-sds3.git

# go to the backend directory
cd backend

# run the project
./mvnw spring-boot:run
```

## Front end web
Requirements: yarn

```bash
# go to the frontend directory, backend's sister directory
cd frontweb

# install the dependencies
yarn

# run the project
yarn start
```

# Author

Iago Rodrigues Melo

https://www.linkedin.com/in/iago-rodrigues

