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
 const btnShowMessage =  Selector('#get-input>.btn.btn-default');
 await t.typeText(inputMessage, message);
 await t.click(btnShowMessage);
});

When(/^User input value 1 "([^"]*)" and value 2 "([^"]*)" at selenium easy basic form page$/, async (t, [value1, value2]) => {
 const inputValue1 = Selector('#sum1');
 const inputValue2 = Selector('#sum2');
 const btnGetTotal =  Selector('#gettotal>.btn.btn-default');
 await t.typeText(inputValue1, value1);
 await t.typeText(inputValue2, value2);
 await t.click(btnGetTotal);
});

Then(/^User will see text message "([^"]*)" at selenium easy basic form page$/, async (t, [message]) => {
 const textMessage = Selector('#display');
 await t.expect(textMessage.innerText).eql(message);
});

Then(/^User will see text total value "([^"]*)" at selenium easy basic form page$/, async (t, [total]) => {
 const textTotal = Selector('#displayvalue');
 await t.expect(textTotal.innerText).eql(total);
});

