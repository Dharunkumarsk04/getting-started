const puppeteer = require('puppeteer');         // Require Puppeteer module
 
const url = "https://devops.beemyguest.jp/job/test/lastBuild/logText/progressiveText?start=0";           // Set website you want to screenshot
 
const Screenshot = async () => {                // Define Screenshot function
 
//    const browser = await puppeteer.launch();    // Launch a "browser"
   const PCR = require("puppeteer-chromium-resolver");
   const option = {
       revision: "",
       detectionPath: "",
       folderName: ".chromium-browser-snapshots",
       defaultHosts: ["https://storage.googleapis.com", "https://npm.taobao.org/mirrors"],
       hosts: [],
       cacheRevisions: 2,
       retry: 3,
       silent: false
   };
   const stats = await PCR(option);
   const browser = await stats.puppeteer.launch({
        headless: false,
        args: ["--no-sandbox"],
        executablePath: stats.executablePath
    }).catch(function(error) {
        console.log(error);
    });

//    const browser = await puppeteer.launch({
//      executablePath: '/usr/bin/chromium'
//    })
   const page = await browser.newPage();        // Open a new page
 
   await page.goto(url);                        // Go to the website
 
   await page.screenshot({                      // Screenshot the website using defined options
 
    path: "./screenshot.png",                   // Save the screenshot in current directory
 
    fullPage: true                              // take a fullpage screenshot
 
  });
 
  await page.close();                           // Close the website
 
  await browser.close();                        // Close the browser
 
}
 
Screenshot();                                   // Call the Screenshot function
