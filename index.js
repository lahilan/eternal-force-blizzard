const puppeteer = require('puppeteer');
const eternalForceBlizzard = require('./eternal-force-blizzard');

const context = { twitterUsernameOrEmail: '', twitterPassword: '' }

const newPage = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  return page
}

newPage().then(page => { eternalForceBlizzard( { page, context }) })