var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');
var chrome = require('chromedriver');
//var chrome = require('selenium-webdriver/chrome');

function CustomWorld({attach}) {

    this.attach = attach;

    this.driver = new seleniumWebdriver.Builder()
        .forBrowser('chrome')
        .build();

    // Returns a promise that resolves to the element
    this.waitForElement = function (locator) {
        var condition = seleniumWebdriver.until.elementLocated({xpath: locator});
        return this.driver.wait(condition)
    }
}

defineSupportCode(function ({setDefaultTimeout, setWorldConstructor}) {

    setWorldConstructor(CustomWorld);
    setDefaultTimeout(60 * 1000);

})
