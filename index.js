const config = require("./config");
const request = require("request");
const urlopen = require("child_process");
const url = 'https://twitch.tv/yungshapez';
 
setInterval(() => {
    request({
        url: `https://api.twitch.tv/kraken/users/${config.streamer_id}`,
        headers: {
            "Accept": "application/vnd.twitchtv.v5+json",
            "Client-ID": config.client_id
        }
    }, function(e, r, b) {
        if(e) throw e;
        let body = JSON.parse(b);
        if(!body) return console.error(`Yungshapez is not streaming yet.`);

        console.error(`Yungshapez is streaming right now.. opening on browser!`);
        urlopen.exec(`start ${url}`);
        setTimeout(() => { process.exit(0); }, 2500);
    });
}, 5000);