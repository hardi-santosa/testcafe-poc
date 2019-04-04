import { Selector } from 'testcafe';

const env = require('dotenv').config();

fixture('User is at page selenium easy test basic form input 2 value')
  .page('https://www.seleniumeasy.com/test/basic-first-form-demo.html')

test('Count sum of value', async (t) => {
  await t
    .typeText('#sum1', '10')
    .typeText('#sum2', '10')
    .click('#gettotal>.btn.btn-default')
    .expect(Selector('#displayvalue').innerText).eql('20');
})