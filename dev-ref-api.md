[How To Build a MailChimp Form with React](https://help.formspree.io/hc/en-us/articles/360053124374-How-To-Build-a-MailChimp-Form-with-React)

[Mailchimp Marketing API](https://mailchimp.com/developer/marketing/guides/quick-start/)

[how to set up mailchimp and get ping everything chimpy?](https://stackoverflow.com/questions/69687091/how-to-set-up-mailchimp-and-get-ping-everything-chimpy)

[Integrating Mailchimp with your Node.js App](https://www.grouparoo.com/blog/integrating-mailchimp-with-your-nodejs-app)


dc="us5"
apikey="22d622e41816072720c9b0066ed6f20f-us5"

curl -sS \
  "https://${dc}.api.mailchimp.com/3.0/ping" \
  --user "anystring:${apikey}" | jq -r

//

  dc=MAILCHIMP_DC
apikey=MAILCHIMP_API_KEY

curl -sS \
  "https://${dc}.api.mailchimp.com/3.0/ping" \
  --user "anystring:${apikey}" | jq -r