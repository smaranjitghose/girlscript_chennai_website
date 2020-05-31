// saving and fetch cached pages

const cachedPage = cache.get(req.url);
if (cachedPage) {
  res.send(cachedPage);
}

const store = initRedux();
//.... more code

Promise.all(promises).then(() => {
  // ... more code

  cache.set(req.url, `${html}`);
  return res.send(`${html}`);
});
