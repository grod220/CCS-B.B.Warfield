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
        icon: "src/images/cross-favicon.png"
      },
      "gatsby-plugin-offline"
    }
  ]
};
