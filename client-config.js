const config = {
	headerMenuLocation: 'hcms-menu-header',
	footerMenuLocation: 'hcms-menu-footer',
	siteTitle: 'A la rencontre de soi-même', // Will be used if we don't set site title from WordPress customizer.
	siteDescription: '#WOMANINPERFECT', // Will be used if we don't set site description from WordPress customizer.
	copyrightText: '© 2020 IN-PERFECT.',
	author: 'waldo milanes',
	footerMenuTitle: 'LE SITE',
	homePagePostType: 'post', // Will be used to display 3 latest post on home page of given post type
	homePageTaxonomy: 'category', // // Will be used to display 3 taxonomies on home page of given post type,
	heroSection: {
		heroTitle: 'A la rencontre de soi-même',
		heroDescription: `Nous te souhaitons de découvrir la perfection de tes imperfections,
		de voir ta véritable beauté, d’embrasser chacune des courbes de ta vie
		et de la vivre tel qu’elle a été imaginée pour toi. Tout commence à l’intérieur.
		
		WE ARE INPERFECT`,
		heroImgURL: '/images/mountain-illustration.png',
		heroBtnTxt: 'REJOINS LA GANG !',

	},
	searchSection: {
		searchBackURL: '/images/search-background.png',
		searchPlaceholderTxt: '',
		images: [
			{
				src: '/images/bag.png',
				name: 'Solo'
			},
			{
				src: '/images/airplane.png',
				name: 'Flight'
			},
			{
				src: '/images/group.png',
				name: 'Group'
			},
		]
	},
	featuredPostsSection: {
		featuredPostHeading: 'Featured Posts'
	},
	latestPostsSection: {
		latestPostHeading: 'Latest Posts'
	},
	defaultPostImage: '/images/default.jpg', // Used for default post or pages.
};

export default config;
