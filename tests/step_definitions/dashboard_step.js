const { Given, When, Then, Before } = require('cucumber');


Then(/^User will see dashboard vendor "([^"]*)"$/, async ([companyName]) => {
 await dashboardPage.assertCompanyName(companyName);
});