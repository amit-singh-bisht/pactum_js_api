PRODUCT=$1
NVM_VERSION=16.17.1

echo "Starting One Click Setup for $PRODUCT"

mkdir $PRODUCT
echo "created new folder $PRODUCT"

cp -R one_click_setup_sample/src $PRODUCT
echo "copied folder one_click_setup_sample/src successfully"

cp one_click_setup_sample/jest.config.js $PRODUCT
echo "copied file one_click_setup_sample/jest.config.js successfully"

cd $PRODUCT

source ~/.nvm/nvm.sh
nvm install $NVM_VERSION
nvm use $NVM_VERSION
echo "using node $(node --version) and nvm v$(nvm --version)"

npm init

echo "npm install && npm audit fix"
cat ../one_click_setup_sample/npm-requirements.txt | xargs npm install
npm audit fix

echo "running sample tests - jest"
./node_modules/.bin/jest

open -a "Google Chrome" reports/report.html

echo "/////////////////////////////////////////////////////////////////////////////"
echo "/                                                                           /"
echo "/                   One Click Setup completed succesfully                   /"
echo "/                                                                           /"
echo "/////////////////////////////////////////////////////////////////////////////"
