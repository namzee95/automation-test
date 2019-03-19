const driver = require('../../commons/driver');
const { expect } = require('chai');
const { By, Key, until } = require('selenium-webdriver');

it('success', async () => {
  await driver.get('https://sod.bla-one.net');

  const titleLogin = await driver.getTitle();
  expect(titleLogin).to.equal('kakaka | Login');

  await driver.findElement(By.name('email')).sendKeys('example1@yopmail.com', Key.RETURN);
  await driver.findElement(By.name('password')).sendKeys('abcd1234', Key.RETURN);
  await driver.wait(until.urlIs('https://sod.bla-one.net/ja/home'));

  const titleHome = await driver.getTitle();
  expect(titleHome).to.equal('kakaka | user');
  return;
});
