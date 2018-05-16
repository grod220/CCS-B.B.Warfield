module.exports = {
  siteMetadata: {
    title: "Calvary Chapel Stockholm"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-netlify-cms",
    "gatsby-transformer-yaml",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/src/content/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "img",
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Calvary Stockholm",
        short_name: "Calvary",
        start_url: "/",
        background_color: "#212121",
        theme_color: "#212121",
        display: "minimal-ui",
        icon: "src/images/favicon-cross.png"
      }
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-source-google-sheets",
      options: {
        spreadsheetId: "1PyITnQGRqwbYcsXIZNC2sANFlmKrY3SIgV7wKGW3X88",
        worksheetTitle: "Calendar",
        credentials: JSON.parse(
          Buffer.from(process.env.GOOGLE_SERVICE_ACCOUNT, "base64").toString(
            "ascii"
          )
        )
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-119387755-1",
        head: true
      },
    }
  ]
};
