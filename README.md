# WDIO--Docker-Telnyx

## Test task login and exploratory flow for Webdriver.io

### Automated tests of https://telnyx.com/ website with using of Page Object pattern. Tests perfoms implementation of testcases for this website

#### Requirements: JS,NodeJS,Webdriver.io,Docker

### Install software and check out the project

- Download and install Node.JS (at least version 20)(https://nodejs.org/uk/)
- Install Visual Studio Code (https://code.visualstudio.com/)
- Open VS code terminal and clone repository `https://github.com/Flantoro/WDIO_Intership`
- Install Cypress using `npm install -g @wdio/cli`
- Run in terminal `npm i` to install all you needed
- Enter `npm run wdio` to run all tests locally

### Run tests in Chrome

```bash
npm run wdio:chrome
```

### Run tests in Firefox

```bash
npm run wdio:firefox
```

## Docker Integration

### Start Docker services

```bash
npm run docker-compose
```

This script launches Docker services defined in `docker/docker-compose.yml`. Adjust the Docker configuration as needed.

### Run tests with Docker

```bash
npm run wdio-docker
```