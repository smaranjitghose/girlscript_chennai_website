"use strict";

async function getData() {
	const cacheVersion = 1;
	const cacheName = `girlscript-${cacheVersion}`;
	const urls = [
		'/assets/Images/logo/logo_for_boilerplate_1.png',
		'/assets/Images/index/ml.jpg',
		'/assets/Images/index/IoT1.jpg',
		'/assets/Images/index/program.jpg',
		'/assets/Images/index/cloud1.jpg',
		'/assets/Images/index/cs3.jpg',
		'/assets/Images/index/robot1.jpg',
		'/assets/Images/Front-img/event.jpg',
		'/assets/Images/logo/Logo1.png',
		'/assets/Images/logo/logo.png',
		'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0',
		'/assets/Images/announcement/producthunt.png',
		'/assets/Images/announcement/contributors.png',
		'/assets/Images/announcement/DU-Express.png',
		'/assets/Images/achievement/ach1.jpg',
		'/assets/Images/achievement/ach2.jpg',
		'/assets/Images/achievement/ach3.jpg',
		'/assets/Images/contact/contact.png'
	];

	let cachedData = await getCachedData(cacheName, urls);

	if (cachedData) {
		console.log('Retrieved cached data');
	}

	const cacheStorage = await caches.open(cacheName);
	await cacheStorage.addAll(urls);
	await deleteOldCaches(cacheName);
}

// Get data from the cache.
async function getCachedData(cacheName, url) {
	const result = [];
	const cacheStorage = await caches.open(cacheName);

	for (const request of await cacheStorage.keys()) {
		if (request.url.endsWith('.jpg') || request.url.endsWith('.png') || request.url.startsWith('https')) {
			result.push(await cacheStorage.match(request));
		}
	}
}

// Delete any old caches to respect user's disk space.
async function deleteOldCaches(currentCache) {
	const keys = await caches.keys();

	for (const key of keys) {
		const isOurCache = 'girlscript-' === key.substr(0, 11);

		if (isOurCache) {
			setTimeout(() => {
				caches.delete(key);
			}, 60 * 1000);
		}
		if (currentCache === key || !isOurCache) {
			continue;
		}

		caches.delete(key);
	}
}

(async function startCaching() {
	try {
		await getData();
	} catch (error) {
		console.error({ error });
	}
})();
