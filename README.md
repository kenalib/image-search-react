
# Image Search React Web UI

![React Logo](./src/logo.svg)

## Sample page

* http://image-search-demo3.oss-ap-northeast-1.aliyuncs.com/
* (This is just UI for demo, the backend API service maybe suspended.)

## Get Started

* `git clone` this repo
* `yarn install` (`brew install yarn` if needed)
* `npm start`

## Development

* Install Visual Studio Code https://code.visualstudio.com/
* (recommend) Install 'code' command in PATH
* refer https://code.visualstudio.com/docs/setup/mac
* run `code .` to open the directory
* Tasks | Run Task | npm start to start
* Tasks | Run Task | npm test to test
* Tasks | Run Task | npm build to make build
* Copy files in build directory to your server

## Java API

* Start Web API in advance by `mvn tomcat7:run`
* refer https://github.com/kenalib/image-search-java

## Troubleshooting

* try `rm -fr node_modules/; yarn install` in case of trouble
* try `brew install watchman` in case `throw er; // Unhandled 'error' event`

## Reference

* https://reactjs.org/
* https://code.visualstudio.com/
* https://github.com/kenalib/image-search-java
