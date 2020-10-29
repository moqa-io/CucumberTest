var {defineSupportCode} = require('cucumber');
var reporter = require('cucumber-html-reporter');

defineSupportCode(function ({Before, After}) {

   

    Before(function () {
        return this.driver.manage().window();
    });

    After(function () {
        return this.attach('Some text', 'text/plain');
    });

    After(function () {
        return this.driver.quit();
    });

   

});