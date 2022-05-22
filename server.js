const express = require("express");
const bodyparser = require("body-parser");
const request = require("request");

const path = require("path");

const app = express();

app.use(express.json());

app.use(bodyparser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.post('/subscribe', (req, res) => {
    console.log("I am listening");
})

const PORT = process.env.PORT || 8888

/* app.listen(PORT, console.log('The server has started'));

const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
    apikey: "22d622e41816072720c9b0066ed6f20f-us5",
    server: "us5"
});

async function run(){
    const response = await mailchimp.ping.get();
    console.log(response);
}

run(); */