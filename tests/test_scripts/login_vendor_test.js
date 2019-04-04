import { Selector } from 'testcafe';

import loginPage from './../page_objects/auth/login_page';

const env = require('dotenv').config();
const loginpage = new loginPage();

fixture('Login to Bizzy using Vendor user')
  .page('https://staging-phoenix.bizzy.co.id')

test('Access login page', async (t) => {
  await t
    .click(loginpage.loginButton)

    .expect(Selector('.uk-card.uk-card-default.uk-margin-large-top>h2').innerText).eql('Masuk')

    .typeText('.ts-textfield-officeemail', 'vendor@ildav.com')
    .typeText('.ts-textfield-password', 'bizzy123')

    .click(loginpage.loginButton)

    .expect(Selector('.uk-margin.company-title').innerText).eql('PT Maju Terus Jaya');
})