import React from 'react'

export default async function ScraperComponent() {
    const puppeteer = require('puppeteer');

    async function run(url) {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);
        await page.screenshot({ path: 'screenshot.png' });

        await browser.close();
    }

    run('https://www.traversymedia.com/')
}
