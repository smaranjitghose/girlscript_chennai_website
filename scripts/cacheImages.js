async function cacheImages() {
  try {
    const cache = await caches.open("girl-script");
    const urls = [
      "/assets/Images/logo/logo_for_boilerplate_1.png",
      "/assets/Images/index/ml.jpg",
      "/assets/Images/index/IoT1.jpg",
      "/assets/Images/index/program.jpg",
      "/assets/Images/index/cloud1.jpg",
      "/assets/Images/index/cs3.jpg",
      "/assets/Images/index/robot1.jpg",
      "/assets/Images/Front-img/event.jpg",
      "/assets/Images/logo/Logo1.png",
      "/assets/Images/logo/logo.png",
    ];
    cache.addAll(urls);
  } catch (err) {
    console.log("Items already added!");
  }
}

async function findImages() {
  const cacheNames = await caches.keys();
  const result = [];

  for (const name of cacheNames) {
    const cache = await caches.open(name);

    for (const request of await cache.keys()) {
      if (request.url.endsWith(".jpg") || request.url.endsWith(".png")) {
        result.push(await cache.match(request));
      }
    }
  }

  // console.log(result);
}

// method to cache: only cache home page images
cacheImages();
// displays the cache items
findImages();
