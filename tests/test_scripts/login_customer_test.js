import { Selector } from 'testcafe';

const env = require('dotenv').config();

fixture('Login to Bizzy using Customer user')
  .page('https://staging-phoenix.bizzy.co.id')

test('Access login page', async (t) => {
  await t
    .click('.ts-button-login')

    .expect(Selector('.uk-card.uk-card-default.uk-margin-large-top>h2').innerText).eql('Masuk')

    .typeText('.ts-textfield-officeemail', 'customer@test.com')
    .typeText('.ts-textfield-password', 'bizzy123')

    .click('.ts-button-login')

    .expect(Selector('.ts-label-emaillogin').innerText).eql('customer@test.com');
})