// import { ApifyClient } from 'apify-client';

// // Initialize the ApifyClient with API token
// const client = new ApifyClient({
//     token: 'apify_api_G2m4SaJLKmSvm6dhHK02JjqgVtvPHN3X1tq7'
// });

// // Prepare Actor input
// const input = {
//     "hashtags": [
//         "followforfollowback"
//     ],
//     "resultsPerPage": 5,
//     "scrapeEmptyChannelInfo": false,
//     "shouldDownloadVideos": false,
//     "shouldDownloadCovers": false,
//     "proxyConfiguration": {
//         "useApifyProxy": true
//     }
// };

// (async () => {
//     // Run the Actor and wait for it to finish
//     const run = await client.task("jafarlie~tiktok-scraper").call(input);

//     // Fetch and print actor results from the run's dataset (if any)
//     console.log('Results from dataset');
//     const { items } = await client.dataset(run.defaultDatasetId).listItems();
//     items.forEach((item) => {
//         console.dir(item);
//     });
// })();

const axios = require('axios');

const options = {
  method: 'POST',
  url: 'https://scraper-api.smartproxy.com/v1/scrape?tiktok_api_hashtag=',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    authorization: 'Basic UzAwMDAxMDkzNzU6U0psYjE4cGM3Y2FsOUNQYW15'
  },
  data: {target: 'tiktok_api_hashtag', query: 'fitness', count: 10}
};

axios
  .request(options)
  .then(function (response) {
    debugger;
    const data = response.data.data.content;
    // data.itemList.map(s => {
    //     console.log(s);
    //     console.log("Author: " + s.author + ", author stats: " + s.authorStats);
    // })
    console.log(response.data.data.content.itemList);
    //console.log(response.data.content);
  })
  .catch(function (error) {
    console.error(error);
  });