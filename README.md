# Pactum JS suite for api and microservice testing

## Setup
- Use node version 16: ```nvm use v16.17.0```
- Run one click setup ```sh one_click_setup.sh <product_name>```
- Navigate inside your working directory ```cd <product_name>```
- You are all set to unleash the power of PACTUM (https://pactumjs.github.io/introduction/welcome.html)

## Run tests
- Run all tests in uncommited files: ```PROFILE=<env_name> npm run git```
- Run all tests in a particular file: ```PROFILE=<env_name> FILE=<file_name> npm run test```
- Run specific tags in a file: ```PROFILE=<env_name> FILE=<file_name> npm run test -- -t @<tag>```
