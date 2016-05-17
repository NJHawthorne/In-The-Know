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
				knex('pages').insert({ createdAt: date, pageName: 'Game of Thrones', userId: userId1, description: 'A simple quiz with Game of Thrones trivia. *WARNING* Does contain some spoiler information from Season 6. Do not take if you\'re not caught up'})
				.returning('id')
				.then(pageId => {
					pageId = pageId[0];
					return Promise.join(
						knex('buttons').insert({ createdAt: date, position: 1, buttonName: 'Stark', question: 'Who is the only Stark currently north of the wall?', answer: 'Bran', pageId: pageId, icon: 'fa-magic', color: 'gray', posTop: 28, posLeft: 85, imageUrl: 'https://media.giphy.com/media/hz69YUpLt247u/giphy.gif'}),
			    		knex('buttons').insert({ createdAt: date, position: 2, buttonName: 'Lannister', question: 'Who is the mystery knight that follows around Cersei?', answer: 'The Mountain', pageId: pageId, icon: 'fa-money', color: 'gold', posTop: 68, posLeft: 55, imageUrl: 'http://awesomegifs.com/wp-content/uploads/Tyrion_slaps_Joffrey.gif'}),
					    knex('buttons').insert({ createdAt: date, position: 3, buttonName: 'Targaryen', question: 'True or False; Daenerys is unaffected by fire', answer: 'True',pageId: pageId, icon: 'fa-diamond', color: 'red', posTop: 53, posLeft: 67, imageUrl: 'http://i.imgur.com/6MjMgs9.png'}),
					    knex('buttons').insert({ createdAt: date, position: 4, buttonName: 'Bolton', question: 'Which Stark do the Boltons currently have hostage in Winterfell?', answer: 'Rickon', pageId: pageId, icon: 'fa-trophy', color: 'black', posTop: 78, posLeft: 86, imageUrl: 'https://media.giphy.com/media/xTiTnJRx2XkceUmOpq/giphy.gif'}),
					    knex('buttons').insert({ createdAt: date, position: 5, buttonName: 'High Sparrow', question: 'Which member of the crown does the High Sparrow still have in custody?', answer: 'Margaery Tyrell',pageId: pageId, icon: 'fa-paper-plane', color: 'tan', posTop: 20, posLeft: 63, imageUrl: 'http://m0.joe.ie/wp-content/uploads/2015/05/26135623/HighSparrow.jpg'}),
					    knex('buttons').insert({ createdAt: date, position: 6, buttonName: 'Dothraki', question: 'Where did the Dothraki take Daenerys?', answer: 'Vaes Dothrak', pageId: pageId, icon: 'fa-beer', color: 'brown', posTop: 60, posLeft: 80, imageUrl: 'http://getinmedia.com/sites/default/files/images/Dothraki%20Inline.jpg'})
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
				knex('pages').insert({ createdAt: date, pageName: 'Nate\'s Personal Quiz', userId: userId2, description: 'Little bits of trivia about Nate Hawthorne...and a couple of slightly embarrassing photos if you guess the answers.'})
				.returning('id')
				.then(pageId => {
					pageId = pageId[0];
					return Promise.join(
						knex('buttons').insert({ createdAt: date, position: 1, buttonName: 'High School', question: 'What was the name of the High School Nate attended?', answer: 'Central High School', pageId: pageId, icon: 'fa-paper-plane', color: 'red', posTop: 28, posLeft: 85, imageUrl: 'http://i1187.photobucket.com/albums/z394/Vaaldraem/central_zps02d09e3b.png'}),
			    		knex('buttons').insert({ createdAt: date, position: 2, buttonName: 'Music', question: 'What instrument did Nate play growing up?', answer: 'Drum set', pageId: pageId, icon: 'fa-bell', color: 'gold', posTop: 68, posLeft: 55, imageUrl: 'http://media.musiciansfriend.com/is/image/MMGS7/Imperialstar-6-Piece-Drum-Set-with-Cymbals-Candy-Apple-Mist/J04277000004000-00-500x500.jpg'}),
					    knex('buttons').insert({ createdAt: date, position: 3, buttonName: 'Video Games', question: 'What game is the Skeleton in the HTML comment from?', answer: 'Undertale',pageId: pageId, icon: 'fa-magic', color: 'red', posTop: 53, posLeft: 67, imageUrl: 'https://i.ytimg.com/vi/mqzBv3FYpr0/hqdefault.jpg'}),
					    knex('buttons').insert({ createdAt: date, position: 4, buttonName: 'Family', question: 'How many brothers does Nate have?', answer: 'One', pageId: pageId, icon: 'fa-beer', color: 'black', posTop: 78, posLeft: 86, imageUrl: 'https://scontent-dfw1-1.xx.fbcdn.net/v/t1.0-9/270152_1948549392619_5539274_n.jpg?oh=8378609e8ab8ff71813fdf3850a23eb8&oe=57D9C673'}),
					    knex('buttons').insert({ createdAt: date, position: 5, buttonName: 'Embarrassment', question: 'And finally, has Nate ever grown a beard?', answer: 'No',pageId: pageId, icon: 'fa-trophy', color: 'tan', posTop: 20, posLeft: 63, imageUrl: 'https://scontent-dfw1-1.xx.fbcdn.net/v/t1.0-9/602644_3760217414507_2089735225_n.jpg?oh=ccb44f247a5e5d1928466f6ec53e0e1a&oe=57A7E871'})
					);
				})
			);
		});
	});
};
