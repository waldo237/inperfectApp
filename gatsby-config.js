const wordPressUrl = process.env.GATSBY_SITE_URL

module.exports = {
	siteMetadata: {
		title: `In-perfect | A la rencontre de soi-même`,
		description: `Nous te souhaitons de découvrir la perfection de tes imperfections,
		de voir ta véritable beauté, d’embrasser chacune des courbes de ta vie
		et de la vivre tel qu’elle a été imaginée pour toi. Tout commence à l’intérieur.
		
		WE ARE INPERFECT`,
		author: `Izhola DJEMBO`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `In-perfect | A la rencontre de soi-même`,
				short_name: `In-perfect`,
				start_url: `/`,
				background_color: `#eaeaea`,
				theme_color: `#1e5663`,
				display: `minimal-ui`,
				icon: `${__dirname}/src/images/favicon.png`, // For favicon- This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-source-graphql`,
			options: {
				// This type will contain remote schema Query type
				typeName: `hwgraphql`,
				// This is field under which it's accessible
				fieldName: `HWGraphQL`,
				// Url to query from
				url: `http://inperfect.local/graphql`,
				refetchInterval: 6000,
			},
		},
		{
			resolve: 'gatsby-plugin-graphql-image',
			options: {
				schemaName: "hwgraphql",
				imageFieldName: "sourceUrl"
			}
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		`gatsby-plugin-offline`,
	],
}
