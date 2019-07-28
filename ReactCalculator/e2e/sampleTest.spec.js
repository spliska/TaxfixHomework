beforeEach(async () => {
  await device.relaunchApp();
});

describe('Put two and two together', function () {
  it('2 + 2 = 4', async () => {
    await element(by.id('input-button-2')).tap();
    await element(by.id('input-button-+')).tap();
    await element(by.id('input-button-2')).tap();
    await element(by.id('input-button-=')).tap();
    await expect(element(by.id('display-text'))).toHaveText('4');
  })
});