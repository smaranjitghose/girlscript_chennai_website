MediumWidget.Init({
  renderTo: '#medium-widget',
  params: {
    resource: 'https://medium.com/techequilla',
    postsPerLine: 1,
    limit: 10,
    picture: 'big',
    fields: ['description', 'author', 'claps', 'publishAt'],
    ratio: 'landscape',
  },
});
