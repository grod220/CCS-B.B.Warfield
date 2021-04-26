require('dotenv').config()

const googleCreds = JSON.parse(
  Buffer.from(process.env.GOOGLE_SERVICE_ACCOUNT, 'base64').toString('ascii')
)

module.exports = {
  siteMetadata: {
    meta: {
      keywords: {
        name: 'keywords',
        content: 'christian, church, god, jesus, stockholm, english',
      },
    },
    index: {
      title: "Calvary Stockholm :: Loving God, Loving Others",
      description: {
        name: 'description',
        content:
          'We are an English speaking church in the heart of Stockholm, brought and bound together by one person: Jesus. Come and see that the Lord is good.',
      },
    },
    sundays: {
      title: 'Sunday Gatherings :: Calvary Stockholm',
      description: {
        name: 'description',
        content: 'Learn about what Sundays are like at Calvary.',
      },
    },
    whoWeAre: {
      title: 'Who We Are :: Calvary Stockholm',
      description: {
        name: 'description',
        content:
          "Hear our story, and learn about the mission God's given us for Stockholm.",
      },
    },
    calendar: {
      title: 'Upcoming Events :: Calvary Stockholm',
      description: {
        name: 'description',
        content: 'Stay in touch with upcoming events and fellowship.',
      },
    },
    giving: {
      title: 'Giving :: Calvary Stockholm',
      description: {
        name: 'description',
        content:
          'It is the means of which we can maintain minitries and help those in need.',
      },
    },
    getInTouch: {
      title: 'Stay In Touch :: Calvary Stockholm',
      description: {
        name: 'description',
        content: "You're welcome! Get in touch with us anytime you need.",
      },
    },
    pageNotFound: {
      title: 'Page Not Found :: Calvary Stockholm',
      description: {
        name: 'description',
        content: 'Sorry! Page not found.',
      },
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Calvary Stockholm',
        short_name: 'Calvary',
        start_url: '/',
        background_color: '#212121',
        theme_color: '#212121',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
        spreadsheetId: '1PyITnQGRqwbYcsXIZNC2sANFlmKrY3SIgV7wKGW3X88',
        worksheetTitle: 'Calendar',
        credentials: googleCreds,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-119387755-1',
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '2236453533278831',
      },
    },
  ],
}
