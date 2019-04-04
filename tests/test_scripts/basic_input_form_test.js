import { Selector } from 'testcafe';

const env = require('dotenv').config();

fixture('User is at page selenium easy test basic form')
  .page('https://www.seleniumeasy.com/test/basic-first-form-demo.html')

test('assert input text', async (t) => {
  await t
    .typeText('#user-message', 'test input value in form')
    .click('#get-input>.btn.btn-default')
    .expect(Selector('#display').innerText).eql('test input value in form');
})