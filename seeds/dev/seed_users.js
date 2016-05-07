exports.seed = function(knex, Promise) {
	var date = new Date();
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
			userId = userId[0];
			return knex('authentication').insert({
				userId: userId,
				type: 'local',
				identifier: 'admin@admin.com',
				createdAt: date,
				password: '$2a$10$MkjZIA4dKEBEXn7LuBPHCe1rNUDfxn2pKfRksB0rcb8sXjU1LoMe.'
			});
		})
		.then(userId => {
			userId = userId[0];
			return Promise.join(
				knex('pages').insert({ createdAt: date, pageName: 'Game of Thrones', userId: 1})
				.returning('id')
				.then(pageId => {
					pageId = pageId[0];
					return Promise.join(
						knex('buttons').insert({ createdAt: date, buttonName: 'Stark', pageId: 1, icon: 'fa-tree', color: 'gray', posTop: 18, posLeft: 5, imageUrl: 'https://40.media.tumblr.com/tumblr_lpoez2k1ap1qhq895o1_500.jpg'}),
			    		knex('buttons').insert({ createdAt: date, buttonName: 'Lannister', pageId: 1, icon: 'fa-deaf', color: 'gold', posTop: 8, posLeft: 25, imageUrl: 'http://25.media.tumblr.com/tumblr_mbn1dhxNxa1rtug9eo7_1280.jpg'}),
					    knex('buttons').insert({ createdAt: date, buttonName: 'Targaryen', pageId: 1, icon: 'fa-fire', color: 'red', posTop: 3, posLeft: 7, imageUrl: 'http://winteriscoming.net/wp-content/uploads/2016/02/House-Targ.-Game-of-Thrones-810x569.jpg'}),
					    knex('buttons').insert({ createdAt: date, buttonName: 'Bolton', pageId: 1, icon: 'fa-male', color: 'black', posTop: 28, posLeft: 16, imageUrl: 'http://vignette2.wikia.nocookie.net/gameofthrones/images/c/cf/House_Bolton_slider_HBO.jpg/revision/latest?cb=20130429043504'}),
					    knex('buttons').insert({ createdAt: date, buttonName: 'High Sparrow', pageId: 1, icon: 'fa-twitter', color: 'tan', posTop: 12, posLeft: 1, imageUrl: 'http://m0.joe.ie/wp-content/uploads/2015/05/26135623/HighSparrow.jpg'}),
					    knex('buttons').insert({ createdAt: date, buttonName: 'Dothraki', pageId: 1, icon: 'fa-ship', color: 'brown', posTop: 0, posLeft: 30, imageUrl: 'http://getinmedia.com/sites/default/files/images/Dothraki%20Inline.jpg'})
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
			userId = userId[0];
			return knex('authentication').insert({
				userId: userId,
				type: 'local',
				identifier: 'natejhawthorne@gmail.com',
				createdAt: date,
				password: '$2a$10$MkjZIA4dKEBEXn7LuBPHCe1rNUDfxn2pKfRksB0rcb8sXjU1LoMe.'
			});
		})
		.then(userId => {
			userId = userId[0];
			return Promise.join(
				knex('pages').insert({ createdAt: date, pageName: 'Game of Awesomeness', userId: 2})
				.returning('id')
				.then(pageId => {
					pageId = pageId[0];
					return Promise.join(
						knex('buttons').insert({ createdAt: date, buttonName: 'Stark', pageId: 2, icon: 'fa-tree', color: 'gray', posTop: 18, posLeft: 5, imageUrl: 'https://40.media.tumblr.com/tumblr_lpoez2k1ap1qhq895o1_500.jpg'}),
			    		knex('buttons').insert({ createdAt: date, buttonName: 'Lannister', pageId: 2, icon: 'fa-deaf', color: 'gold', posTop: 8, posLeft: 25, imageUrl: 'http://25.media.tumblr.com/tumblr_mbn1dhxNxa1rtug9eo7_1280.jpg'}),
					    knex('buttons').insert({ createdAt: date, buttonName: 'Targaryen', pageId: 2, icon: 'fa-fire', color: 'red', posTop: 3, posLeft: 7, imageUrl: 'http://winteriscoming.net/wp-content/uploads/2016/02/House-Targ.-Game-of-Thrones-810x569.jpg'}),
					    knex('buttons').insert({ createdAt: date, buttonName: 'Bolton', pageId: 2, icon: 'fa-male', color: 'black', posTop: 28, posLeft: 16, imageUrl: 'http://vignette2.wikia.nocookie.net/gameofthrones/images/c/cf/House_Bolton_slider_HBO.jpg/revision/latest?cb=20130429043504'}),
					    knex('buttons').insert({ createdAt: date, buttonName: 'High Sparrow', pageId: 2, icon: 'fa-twitter', color: 'tan', posTop: 12, posLeft: 1, imageUrl: 'http://m0.joe.ie/wp-content/uploads/2015/05/26135623/HighSparrow.jpg'}),
					    knex('buttons').insert({ createdAt: date, buttonName: 'Dothraki', pageId: 2, icon: 'fa-ship', color: 'brown', posTop: 0, posLeft: 30, imageUrl: 'http://getinmedia.com/sites/default/files/images/Dothraki%20Inline.jpg'})
					);
				})
			);
		})
		.then(userId => {
			userId = userId[0];
			return Promise.join(
				knex('pages').insert({ createdAt: date, pageName: 'Game of Thrones', userId: 2})
				.returning('id')
				.then(pageId => {
					pageId = pageId[0];
					return Promise.join(
						knex('buttons').insert({ createdAt: date, buttonName: 'Stark', pageId: 3, icon: 'fa-tree', color: 'gray', posTop: 18, posLeft: 5, imageUrl: 'https://40.media.tumblr.com/tumblr_lpoez2k1ap1qhq895o1_500.jpg'}),
			    		knex('buttons').insert({ createdAt: date, buttonName: 'Lannister', pageId: 3, icon: 'fa-deaf', color: 'gold', posTop: 8, posLeft: 25, imageUrl: 'http://25.media.tumblr.com/tumblr_mbn1dhxNxa1rtug9eo7_1280.jpg'}),
					    knex('buttons').insert({ createdAt: date, buttonName: 'Targaryen', pageId: 3, icon: 'fa-fire', color: 'red', posTop: 3, posLeft: 7, imageUrl: 'http://winteriscoming.net/wp-content/uploads/2016/02/House-Targ.-Game-of-Thrones-810x569.jpg'}),
					    knex('buttons').insert({ createdAt: date, buttonName: 'Bolton', pageId: 3, icon: 'fa-male', color: 'black', posTop: 28, posLeft: 16, imageUrl: 'http://vignette2.wikia.nocookie.net/gameofthrones/images/c/cf/House_Bolton_slider_HBO.jpg/revision/latest?cb=20130429043504'}),
					    knex('buttons').insert({ createdAt: date, buttonName: 'High Sparrow', pageId: 3, icon: 'fa-twitter', color: 'tan', posTop: 12, posLeft: 1, imageUrl: 'http://m0.joe.ie/wp-content/uploads/2015/05/26135623/HighSparrow.jpg'}),
					    knex('buttons').insert({ createdAt: date, buttonName: 'Dothraki', pageId: 3, icon: 'fa-ship', color: 'brown', posTop: 0, posLeft: 30, imageUrl: 'http://getinmedia.com/sites/default/files/images/Dothraki%20Inline.jpg'})
					);
				})
			);
		});
	});
};
