var postsData = [
  {
    title: 'Open Source .NET: Finally',
    author: 'Andrew Brassington',
    url: 'http://www.brassington.io/microsoft/open-source-net-finally'
  },
  {
    title: 'Technical Interviews',
    author: 'Andrew Brassington',
    url: 'http://www.brassington.io/bootcamp/code-interviews'
  },
  {
    title: 'Wordpress to Jekyll: Almost Done',
    author: 'Andrew Brassington',
    url: 'http://www.brassington.io/blog-maintenence/migration-wordpress-to-jekylls'
  }
  ];
Template.postsList.helpers({
  posts: postsData
});