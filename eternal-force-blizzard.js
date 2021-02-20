const fs = require('fs');

module.exports = async ({ page, context }) => {
  try {
    const cookies = JSON.parse(fs.readFileSync('COOKIES_PATH', 'utf-8'));
    for (let cookie of cookies) {
      await page.setCookie(cookie);
    }
  } catch (err) {
    await page.goto('https://twitter.com/login')
    await page.waitForSelector('input[name="session[username_or_email]"]')
    await page.type('input[name="session[username_or_email]"]', context.twitterUsernameOrEmail)
    await page.type('input[name="session[password]"]', context.twitterPassword)
    await page.click('div[role="button"]')
    await page.waitForNavigation()
  }

  await page.goto('https://twitter.com/ookinaodendane/with_replies')

  // await page.waitForSelector('div[aria-label="Timeline: 大きなおでん種’s Tweets"]')

  // const lists = await page.$$('div[data-testid="like"]')
  // for (let list of lists) {
  //   await lists.click()
  // }

  const afterCookies = await page.cookies();
  fs.writeFileSync('COOKIES_PATH', JSON.stringify(afterCookies));
}
