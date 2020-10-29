Feature: CucumberTest

 Scenario: Login functionality exists
    Given I have open Netflix website
    And Click on Sign In button
    Then Enter username "test@gmail.com" and password "1234"
    When Press Sign In button
    Then The error message box is displayed