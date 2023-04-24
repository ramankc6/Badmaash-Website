export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","A0.png","A1.png","A2.png","B0.png","B1.png","C0.png","C1.png","D0.png","D1.png","D2.png","D3.png","E0.png","E1.png","E2.png","E3.png","arjunMahendro.png","contactBackground.jpg","emailIcon.png","favicon.png","firstFigmaItteration.png","galleryImage1.png","galleryImage2.png","galleryImage3.png","galleryImage4.png","galleryImage5.png","galleryImage6.png","galleryImage7.png","heritageImage.jpeg","heritageImage.png","instagramIcon.png","landingBackground.jpg","landingLogo.jpeg","landingLogo.png","leftArrow.png","logo.png","nakulMahendro.png","pawanMahendro.png","phoneIcon.png","planningBoard.jpeg","rightArrow.png","secondFigmaItteration.png","testBackground.png","twitterIcon.png","woodBackground.png"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.8b393ac8.js","imports":["_app/immutable/entry/start.8b393ac8.js","_app/immutable/chunks/index.9a07e080.js","_app/immutable/chunks/singletons.2a5b94b7.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.1764c22d.js","imports":["_app/immutable/entry/app.1764c22d.js","_app/immutable/chunks/index.9a07e080.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/home",
				pattern: /^\/home\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
