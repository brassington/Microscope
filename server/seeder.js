if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Open Source .NET: Finally',
    author: 'Andrew Brassington',
    url: 'http://www.brassington.io/microsoft/open-source-net-finally'
  });
  Posts.insert({
    title: 'Technical Interviews',
    author: 'Andrew Brassington',
    url: 'http://www.brassington.io/bootcamp/code-interviews'
  });
  Posts.insert({
    title: 'Wordpress to Jekyll: Almost Done',
    author: 'Andrew Brassington',
    url: 'http://www.brassington.io/blog-maintenence/migration-wordpress-to-jekylls'
  });
}