## Pre requirements

1. Install NodeJs (version 12 or higher ). You can use [n](https://github.com/tj/n) or [nvm](https://github.com/nvm-sh/nvm) for this.
2. Install plugins for your IDE in order to use [prettier](https://prettier.io/docs/en/editors.html) and [eslint](https://eslint.org/docs/user-guide/integrations).
3. Please review [json-server](https://github.com/typicode/json-server) documentation to be familiar about how to connect and run local game's API.


## Install and run for development

1. Clone repo.
2. Go to project's folder and run `npm install`.
3. Create `.env` file in project's root folder and copy environment variable from `.env.example` file into it.
4. Fill in variable values in `.env` file with correct data (default value for `REACT_APP_SERVER_URL` variable is `http://localhost:3001/games`).
5. Start local server with command `npm run server`.
6. Start application with command `npm run start`.
7. Go to http://localhost:3000.


## Code style

For code style use `Prettier` and `ESLint`. Please make sure you have installed Prettier and ESLint plugins for your IDE.


## GIT

- `master` is the main working branch
