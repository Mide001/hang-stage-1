const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;

app.get('/api', (req, res) => {
    const slack_name = req.query.slack_name || 'techwithmide';
    const track = req.query.track || 'backend';


    const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });

    const currentTime = new Date();
    const utcTime = new Date(currentTime.getTime() + (2 * 60 * 1000));
    const utcTimeStr = utcTime.toISOString();


    const githubFileUrl = 'https://github.com/Mide001/hang-stage-1/blob/main/server.js';
    const githubRepoUrl = 'https://github.com/Mide001/hang-stage-1';

    const response = {
        slack_name: slack_name,
        current_day: currentDay,
        utc_time: utcTimeStr,
        track: track,
        github_file_url: githubFileUrl,
        github_repo_url: githubRepoUrl,
        status_code: 200,
    };

    const formattedResponse = JSON.stringify(response, null, 2);
    res.setHeader('Content-Type', 'application/json');
    res.send(formattedResponse);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

