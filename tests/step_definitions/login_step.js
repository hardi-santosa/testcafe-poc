const { Given, When, Then, Before } = require('cucumber');
const { Selector: NativeSelector } = require('testcafe');
const env = require('dotenv').config();
const Selector = (input, t) => {
 return NativeSelector(input).with({ boundTestRun: t });
};

Given(/^User is at login page vendor$/, async t => {
 await t.navigateTo(process.env.PHOENIX_STAGING_URL + '/seller/auth/login');
});

When(/^User input name "([^"]*)" and password "([^"]*)" at login page$/, async (t, [name, password]) => {
 const inputName = Selector('.ts-textfield-officeemail');
 const inputPassword = Selector('.ts-textfield-password');
 const buttonLogin = Selector('.ts-button-login');
 await t.typeText(inputName, name);
 await t.typeText(inputPassword, password);
 await t.click(buttonLogin);
});

Then(/^User will see dashboard vendor$/, async t => {
 const companyName = Selector('.uk-margin.company-title');
 await t.expect(companyName.innerText).eql('PT PANSA PKP (Persero) Tbk');
});

