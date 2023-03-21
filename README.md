# Lenspa's Docusaurus

[See deployment](https://kayla-lin.github.io/lenspa-docusaurus/blog/welcome)

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator. This website is created to document weekly updates on the Lenspa project for CSC211.

## Installation

```
$ npm install
```

## Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Deployment

Build static files

```
npm run build
```

Check out [Docusarus's instructions](https://docusaurus.io/docs/deployment#deploying-to-github-pages) for deploying to GitHub pages

Your deployment command should look something like this

```
$ GIT_USER=<Your GitHub username> npm run deploy
```

Example

```
GIT_USER=kayla-lin USE_SSH=true npm run deploy
```
