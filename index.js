const puppeteer = require('puppeteer');
const eternalForceBlizzard = require('eternal-force-blizzard');

const browser = await puppeteer.launch();
const page = await browser.newPage();
