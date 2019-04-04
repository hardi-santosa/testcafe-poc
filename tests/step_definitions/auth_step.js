const { Given, When, Then, Before } = require('cucumber');

Given(/^User is at login page vendor bizzy$/, async => {
  await loginPage.goToPage();
});

When(/^User input name "([^"]*)" and password "([^"]*)" at login page vendor$/, async ([name, password]) => {
 await loginPage.inputTextUserName(name);
 await loginPage.inputTextPassword(password);
 await loginPage.clickButtonLogin();
});