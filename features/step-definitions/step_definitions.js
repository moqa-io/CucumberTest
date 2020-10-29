//var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given, When, Then}) {
    Given(/^I have open Netflix website$/, function () {
        return this.driver.get('http://netflix.com/')
    });

    Then(/^Click on Sign In button$/, function () {
        var locator = "//a[text()='Sign In']";
        return this.driver.findElement({xpath: locator}).then(function (element) {
            return element.click();
        });
    });

    Then(/^Enter username "(.*?)" and password "(.*?)"$/, function (username, password) {
        var locatorUsername = "//input[@id='id_userLoginId']";
        var locatorPassword = "//input[@id='id_password']";
        
        this.driver.findElement({xpath: locatorUsername}).then(function (element) {
            return element.sendKeys(username);
        });
        this.driver.findElement({xpath: locatorPassword}).then(function (element) {
            return element.sendKeys(password);
        });
        return this;
    });

    When(/^Press Sign In button$/, function () {
        var locator = "//button[text()='Sign In']";
        return this.driver.findElement({xpath: locator}).then(function (element) {
            return element.click();
        });
    });

    Then(/^The error message box is displayed$/, function () {
        var locator = "//div/b[text()='Incorrect password.']";
        return this.waitForElement(locator);
    });
});