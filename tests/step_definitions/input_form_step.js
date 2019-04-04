const { Given, When, Then, Before } = require('cucumber');
const { Selector: NativeSelector } = require('testcafe');
const env = require('dotenv').config();
const Selector = (input, t) => {
 return NativeSelector(input).with({ boundTestRun: t });
};

Given(/^User is at selenium easy basic form page$/, async t => {
 await t.navigateTo(process.env.selenium_easy + '/basic-first-form-demo.html');
});

When(/^User input message "([^"]*)" at selenium easy basic form page$/, async (t, [message]) => {
 const inputMessage = Selector('#user-message');
 const btnShowMessage =  Selector('.btn.btn-default');
 await t.typeText(inputMessage, message);
 await t.click(btnShowMessage);
});

Then(/^User will see text message "([^"]*)" at selenium easy basic form page$/, async (t, [message]) => {
 const textMessage = Selector('#display');
 await t.expect(textMessage.innerText).eql(message);
});

