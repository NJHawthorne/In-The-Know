exports.seed = function(knex, Promise) {
	var date = new Date();
	var userId1 = null;
	var userId2 = null;
	return knex('users').del()
	.then(() => {
		return knex('users').insert({
			firstName: 'Admin',
			lastName: 'Admin',
			email: 'admin@admin.com',
			createdAt: date,
			username: 'Admin'
		})
		.returning('id')
		.then(userId => {
			userId1 = userId[0];
			return knex('authentication').insert({
				userId: userId1,
				type: 'local',
				identifier: 'admin@admin.com',
				createdAt: date,
				password: '$2a$10$MkjZIA4dKEBEXn7LuBPHCe1rNUDfxn2pKfRksB0rcb8sXjU1LoMe.'
			});
		})
		.then(userId => {
			return Promise.join(
				knex('pages').insert({ createdAt: date, pageName: 'Game of Thrones', userId: userId1, description: 'A simple quiz with Game of Thrones trivia. *WARNING* Does contain spoiler information from Season 6. Do not take if you\'re not caught up'})
				.returning('id')
				.then(pageId => {
					pageId = pageId[0];
					return Promise.join(
						knex('buttons').insert({ createdAt: date, position: 1, buttonName: 'Stark', question: 'How many starks are currently left?', answer: '5', pageId: pageId, icon: 'fa-tree', color: 'gray', posTop: 28, posLeft: 85, imageUrl: 'https://40.media.tumblr.com/tumblr_lpoez2k1ap1qhq895o1_500.jpg'}),
			    		knex('buttons').insert({ createdAt: date, position: 2, buttonName: 'Lannister', question: 'Where do the Lannisters call home?', answer: 'casterly rock', pageId: pageId, icon: 'fa-bell', color: 'gold', posTop: 68, posLeft: 55, imageUrl: 'http://25.media.tumblr.com/tumblr_mbn1dhxNxa1rtug9eo7_1280.jpg'}),
					    knex('buttons').insert({ createdAt: date, position: 3, buttonName: 'Targaryen', question: 'What was the name of the dragon Danaerys rode away on?', answer: 'drogon',pageId: pageId, icon: 'fa-fire', color: 'red', posTop: 53, posLeft: 67, imageUrl: 'http://winteriscoming.net/wp-content/uploads/2016/02/House-Targ.-Game-of-Thrones-810x569.jpg'}),
					    knex('buttons').insert({ createdAt: date, position: 4, buttonName: 'Bolton', question: 'Which Stark do the Boltons currently have hostage in Winterfell?', answer: 'rickon', pageId: pageId, icon: 'fa-male', color: 'black', posTop: 78, posLeft: 86, imageUrl: 'http://vignette2.wikia.nocookie.net/gameofthrones/images/c/cf/House_Bolton_slider_HBO.jpg/revision/latest?cb=20130429043504'}),
					    knex('buttons').insert({ createdAt: date, position: 5, buttonName: 'High Sparrow', question: 'How many gods does the High Sparrow worship?', answer: '7',pageId: pageId, icon: 'fa-twitter', color: 'tan', posTop: 20, posLeft: 63, imageUrl: 'http://m0.joe.ie/wp-content/uploads/2015/05/26135623/HighSparrow.jpg'}),
					    knex('buttons').insert({ createdAt: date, position: 6, buttonName: 'Dothraki', question: 'Who was the Khal who married Danaerys in season one?', answer: 'drogo', pageId: pageId, icon: 'fa-ship', color: 'brown', posTop: 60, posLeft: 80, imageUrl: 'http://getinmedia.com/sites/default/files/images/Dothraki%20Inline.jpg'})
					);
				})
			);
		});
	})
	.then(() => {
		return knex('users').insert({
			firstName: 'Nate',
			lastName: 'Hawthorne',
			email: 'natejhawthorne@gmail.com',
			createdAt: date,
			username: 'NJHawthorne'
		})
		.returning('id')
		.then(userId => {
			userId2 = userId[0];
			return knex('authentication').insert({
				userId: userId2,
				type: 'local',
				identifier: 'natejhawthorne@gmail.com',
				createdAt: date,
				password: '$2a$10$MkjZIA4dKEBEXn7LuBPHCe1rNUDfxn2pKfRksB0rcb8sXjU1LoMe.'
			});
		})
		.then(userId => {
			userId = userId[0];
			return Promise.join(
				knex('pages').insert({ createdAt: date, pageName: 'Game of Awesomeness', userId: userId2, description: 'A simple quiz with Game of Thrones trivia. *WARNING* Does contain spoiler information from Season 6. Do not take if you\'re not caught up'})
				.returning('id')
				.then(pageId => {
					pageId = pageId[0];
					return Promise.join(
						knex('buttons').insert({ createdAt: date, position: 1, buttonName: 'Quark', question: 'How many starks are currently left?', answer: '5', pageId: pageId, icon: 'fa-tree', color: 'gray', posTop: 28, posLeft: 85, imageUrl: 'https://40.media.tumblr.com/tumblr_lpoez2k1ap1qhq895o1_500.jpg'}),
			    		knex('buttons').insert({ createdAt: date, position: 2, buttonName: 'Lannister', question: 'Where do the Lannisters call home?', answer: 'casterly rock', pageId: pageId, icon: 'fa-bell', color: 'gold', posTop: 68, posLeft: 55, imageUrl: 'http://25.media.tumblr.com/tumblr_mbn1dhxNxa1rtug9eo7_1280.jpg'}),
					    knex('buttons').insert({ createdAt: date, position: 3, buttonName: 'Targaryen', question: 'What was the name of the dragon Danaerys rode away on?', answer: 'drogon',pageId: pageId, icon: 'fa-fire', color: 'red', posTop: 53, posLeft: 67, imageUrl: 'http://winteriscoming.net/wp-content/uploads/2016/02/House-Targ.-Game-of-Thrones-810x569.jpg'}),
					    knex('buttons').insert({ createdAt: date, position: 4, buttonName: 'Bolton', question: 'Which Stark do the Boltons currently have hostage in Winterfell?', answer: 'rickon', pageId: pageId, icon: 'fa-male', color: 'black', posTop: 78, posLeft: 86, imageUrl: 'http://vignette2.wikia.nocookie.net/gameofthrones/images/c/cf/House_Bolton_slider_HBO.jpg/revision/latest?cb=20130429043504'}),
					    knex('buttons').insert({ createdAt: date, position: 5, buttonName: 'High Sparrow', question: 'How many gods does the High Sparrow worship?', answer: '7',pageId: pageId, icon: 'fa-twitter', color: 'tan', posTop: 20, posLeft: 63, imageUrl: 'http://m0.joe.ie/wp-content/uploads/2015/05/26135623/HighSparrow.jpg'}),
					    knex('buttons').insert({ createdAt: date, position: 6, buttonName: 'Dothraki', question: 'Who was the Khal who married Danaerys in season one?', answer: 'drogo', pageId: pageId, icon: 'fa-ship', color: 'brown', posTop: 60, posLeft: 80, imageUrl: 'http://getinmedia.com/sites/default/files/images/Dothraki%20Inline.jpg'})
					);
				})
			);
		})
		.then(userId => {
			return Promise.join(
				knex('pages').insert({ createdAt: date, pageName: 'SUPER HAPPY FUN TIME YEAH', userId: userId2, description: 'A simple quiz with Game of Thrones trivia. *WARNING* Does contain spoiler information from Season 6. Do not take if you\'re not caught up'})
				.returning('id')
				.then(pageId => {
					pageId = pageId[0];
					return Promise.join(
						knex('buttons').insert({ createdAt: date, position: 1, buttonName: 'Snark', question: 'How many starks are currently left?', answer: '5', pageId: pageId, icon: 'fa-tree', color: 'gray', posTop: 28, posLeft: 85, imageUrl: 'https://40.media.tumblr.com/tumblr_lpoez2k1ap1qhq895o1_500.jpg'}),
			    		knex('buttons').insert({ createdAt: date, position: 2, buttonName: 'Lannister', question: 'Where do the Lannisters call home?', answer: 'casterly rock', pageId: pageId, icon: 'fa-bell', color: 'gold', posTop: 68, posLeft: 55, imageUrl: 'http://25.media.tumblr.com/tumblr_mbn1dhxNxa1rtug9eo7_1280.jpg'}),
					    knex('buttons').insert({ createdAt: date, position: 3, buttonName: 'Targaryen', question: 'What was the name of the dragon Danaerys rode away on?', answer: 'drogon',pageId: pageId, icon: 'fa-fire', color: 'red', posTop: 53, posLeft: 67, imageUrl: 'http://winteriscoming.net/wp-content/uploads/2016/02/House-Targ.-Game-of-Thrones-810x569.jpg'}),
					    knex('buttons').insert({ createdAt: date, position: 4, buttonName: 'Bolton', question: 'Which Stark do the Boltons currently have hostage in Winterfell?', answer: 'rickon', pageId: pageId, icon: 'fa-male', color: 'black', posTop: 78, posLeft: 86, imageUrl: 'http://vignette2.wikia.nocookie.net/gameofthrones/images/c/cf/House_Bolton_slider_HBO.jpg/revision/latest?cb=20130429043504'}),
					    knex('buttons').insert({ createdAt: date, position: 5, buttonName: 'High Sparrow', question: 'How many gods does the High Sparrow worship?', answer: '7',pageId: pageId, icon: 'fa-twitter', color: 'tan', posTop: 20, posLeft: 63, imageUrl: 'http://m0.joe.ie/wp-content/uploads/2015/05/26135623/HighSparrow.jpg'}),
					    knex('buttons').insert({ createdAt: date, position: 6, buttonName: 'Dothraki', question: 'Who was the Khal who married Danaerys in season one?', answer: 'drogo', pageId: pageId, icon: 'fa-ship', color: 'brown', posTop: 60, posLeft: 80, imageUrl: 'http://getinmedia.com/sites/default/files/images/Dothraki%20Inline.jpg'})
					);
				})
			);
		});
	});
};
