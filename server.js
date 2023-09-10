const { json } = require('body-parser');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/get_info', (req, res) => {
    const slack_name = req.query.slack_name || 'techwithmide';
    const track = req.query.track || 'backend';


    const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });

    const currentTime = new Date();
    const utcTime = new Date(currentTime.getTime() + (2 * 60 * 1000));
    const utcTimeStr = utcTime.toISOString();


    const githubFileUrl = 'https://github.com/username/repo/blob/main/file_name.ext';
    const githubRepoUrl = 'https://github.com/username/repo';

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

// http://example.com/api?slack_name=example_name&track=backend