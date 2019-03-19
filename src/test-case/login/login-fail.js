const driver = require('../../commons/driver');
const { expect } = require('chai');
const { By, Key, until } = require('selenium-webdriver');

it('faild', async () => {
  await driver.get('https://sod.bla-one.net');

  const titleLogin = await driver.getTitle();
  expect(titleLogin).to.equal('kakaka | Login');

  await driver.findElement(By.name('email')).sendKeys('example1@yopmail.com', Key.RETURN);
  await driver.findElement(By.name('password')).sendKeys('abcd1234121212', Key.RETURN);
  const btnSubmit = await driver.findElement(By.className('btn sod-btn sod-btn--bg-pink w-100'));

  await driver.wait(until.elementIsEnabled(btnSubmit));
  const toastErr = await driver.findElement(By.className('toast-error'));
  try {
    await driver.wait(until.elementIsVisible(toastErr));
  } catch (error) {}
  const msg = await toastErr.getText();
  expect(msg).to.equal('メールアドレスまたはパスワードが正しくありません');

  return;
});
