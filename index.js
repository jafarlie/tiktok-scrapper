import { ApifyClient } from 'apify-client';

// Initialize the ApifyClient with API token
const client = new ApifyClient({
    token: 'apify_api_G2m4SaJLKmSvm6dhHK02JjqgVtvPHN3X1tq7'
});

// Prepare Actor input
const input = {
    "hashtags": [
        "followforfollowback"
    ],
    "resultsPerPage": 5,
    "scrapeEmptyChannelInfo": false,
    "shouldDownloadVideos": false,
    "shouldDownloadCovers": false,
    "proxyConfiguration": {
        "useApifyProxy": true
    }
};

(async () => {
    // Run the Actor and wait for it to finish
    const run = await client.task("jafarlie~tiktok-scraper").call(input);

    // Fetch and print actor results from the run's dataset (if any)
    console.log('Results from dataset');
    const { items } = await client.dataset(run.defaultDatasetId).listItems();
    items.forEach((item) => {
        console.dir(item);
    });
})();
