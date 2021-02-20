module.exports = async ({ page, context }) => {
  await page.goto('https://twitter.com/login')

  await page.waitForSelector('input[name="session[username_or_email]"]')
  await page.type('input[name="session[username_or_email]"]', context.twitterUsernameOrEmail)
  await page.type('input[name="session[password]"]', context.twitterPassword)
  await page.click('div[role="button"]')

  await Promise.all([
    page.waitForNavigation(),
    page.goto('https://twitter.com/ookinaodendane/with_replies')
  ]);

  await page.waitForSelector('div[aria-label="Timeline: 大きなおでん種’s Tweets"]')

  const lists = await page.$$('div[data-testid="like"]')
  for (let i = 0; i < lists.length; i++) {
    await lists[i].click()
  }
  await browser.close();
}
