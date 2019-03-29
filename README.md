# Storeo
Storeo is an open-source, Javascript/SQL e-commerce toolkit that allows businesses and developers to easily create and manage their e-commerce stores.

Storeo, provides developers with a prebuilt back-end infrustructure, including database creation queries, database seeding, complete server structure and dual front-end including Admin and Client sections. 

![Storeo Screenshots](/images/homepage.png)
![Storeo Screenshots](/images/headphones.png)
![Storeo Screenshots](/images/basket.png)
![Storeo Screenshots](/images/admin_section1.png)
![Storeo Screenshots](/images/admin_section3.png)

## Getting Started

1. Make sure that you have [Docker](https://www.docker.com/) installed. We recommend the official desktop app for your operating system.

2. After installing docker, clone the repo, build and run the backend with docker-compose:

```sh
# Get the backend up and running
mkdir ~/projects/storeo
cd ~/projects/storeo
git clone https://github.com/felixweinberger/Storeo-server
docker-compose build
docker-compose up

# Get the frontend up and running (in a separate terminal)
cd ~/projects/storeo
git clone https://github.com/felixweinberger/Storeo-FE
docker-compose build
docker-compose up
```

3. Point your browser to `http://localhost:80/` to see Storeo in action

## User and Client Sections

**User Login** page endpoint: `/login`.

**Admin Login** page endpoint: `/admin/login`.

## Tech Stack

### Front-end
* [React](https://facebook.github.io/react-native/)
* [Redux](https://redux.js.org/)
* [Materiallize CSS](https://expo.io/)

### Back-end: [Storeo-server](https://github.com/felixweinberger/storeo-server)
* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [MySQL](https://www.mysql.com/)
* [Sequelize](http://docs.sequelizejs.com/)
* [JWT](https://jwt.io/) 
* [Faker.js](https://github.com/Marak/faker.js)
* [Docker](https://www.docker.com/)

## Contributors
* Zain Sayed - [zain-ali-syed](https://github.com/zain-ali-syed)
* Uros C - [ross-u](https://github.com/ross-u)
* Luca Panzavolta - [LucaPanzavolta](https://github.com/LucaPanzavolta)
* Tomasz Gasienica - [Casprovy](https://github.com/Casprovy)
* Christian Francia - [ctfrancia](https://github.com/ctfrancia)
* Alan Hu - [ahuounan](https://github.com/ahuounan)
* Felix Weinberger - [felixweinberger](https://github.com/felixweinberger)
