
# Image Search React Web UI

Travis CI Status: [![Build Status](https://travis-ci.com/kenalib/image-search-react.svg?branch=master)](https://travis-ci.com/kenalib/image-search-react)


## Sample UI and code

* UI Demo: http://image-search-demo3.oss-ap-northeast-1.aliyuncs.com/
* Front End: https://github.com/kenalib/image-search-react
* Back End: https://github.com/kenalib/image-search-java

* CI status: https://travis-ci.com/kenalib/image-search-react
* Test coverage report: https://kenalib.github.io/image-search-react/coverage/lcov-report/

## Get Started

* `git clone` this repo
* `yarn install` (`brew install yarn` if needed)
* `npm start`

## Development

* Install Visual Studio Code https://code.visualstudio.com/
* (recommend) Install `code` command in `PATH`
* refer https://code.visualstudio.com/docs/setup/mac
* run `code .` to open the directory
* `Tasks | Run Task | npm start` to start

## Test and build

* `Tasks | Run Task | npm test` to test
* `Tasks | Run Task | npm test:coverage` to test with coverage
* `open coverage/lcov-report/index.html` to see the coverage report
* `Tasks | Run Task | npm build` to make build

## Auto deploy using Travis CI

* Status: https://travis-ci.com/kenalib/image-search-react
* Test build deploy processes are automated on Travis CI.
* see `.travis.yml` for detail setup

## Java API

* Start web API in advance by `mvn tomcat7:run`
* refer https://github.com/kenalib/image-search-java

## Troubleshooting

* try `rm -fr node_modules/; yarn install` in case of trouble
* try `brew install watchman` in case `throw er; // Unhandled 'error' event`

## Reference

* https://reactjs.org/
* https://code.visualstudio.com/
* https://facebook.github.io/jest/
* https://travis-ci.org/
* https://github.com/kenalib/image-search-java
