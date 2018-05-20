# Calvary Stockholm ✝
##### Version 2: [B.B Warfield](https://en.wikipedia.org/wiki/B._B._Warfield)

The app repo for calvarystockholm.se. If you're in the Stockholm area, give us a visit!

## Technologies used

- Front-end
	- Gatsbyjs (React v15)
	- Styled-components
	- React scroll parallax 
  
- Back-end (via Firebase cloud functions)
	- Netlify serverless functions (async/await)
  - Google sheets w/ webhooks
  - GraphQL to query data from Google Sheets

### How to dev locally
gatsby develop

### Deployment steps
Netlify is automatically tied to the master branch of this repo. As it gets updated, Netlify rebuilds and deploys.

### Site planning doc
[This doc](https://docs.google.com/document/d/1gQyRYfCBTusJfmlWT-3D-pD4VEM1tNwSMsQTlt6EPz4/edit?usp=sharing) serves as primary source for planning and development of the site.

### Events & collected emails
In [this sheet](https://docs.google.com/spreadsheets/d/1PyITnQGRqwbYcsXIZNC2sANFlmKrY3SIgV7wKGW3X88/edit#gid=1053217261), you'll be able to 
- edit events (note: there musn't be any spaces between rows) and publish live (takes a few mins to deploy).
- see the collected email addresses from the forms on the site. As a user submits, it automatically gets inserted into the sheet.

### Site planning doc
[This doc](https://docs.google.com/document/d/1gQyRYfCBTusJfmlWT-3D-pD4VEM1tNwSMsQTlt6EPz4/edit?usp=sharing) serves as primary source for planning and development of the site.

### Future plans & nice-to-haves
- Stock imagery replaced with home-grown photos
- Working CMS w/ netlify CMS
- Gatsby v2 upgrade
- gatsby-image implementation after object.fit polyfill see [this issue] (https://github.com/gatsbyjs/gatsby/issues/2470) and [this issue] (https://github.com/gatsbyjs/gatsby/issues/4021)
- Integration w/ Spotify playlists for latest worship songs (?)
- Integration w/ Facebook and social media strategy
- Sermon messages section
- Google Adwords grant ads strategy
