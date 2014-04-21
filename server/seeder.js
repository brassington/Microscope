if (Posts.find().count() === 0) {
  var now = new Date().getTime();

  var andrewId = Meteor.users.insert({
    profile: { name: 'Andrew Brassington' }
  });
  var andrew = Meteor.users.findOne(andrewId);

  var jacobId = Meteor.users.insert({
    profile: { name: 'Jacob Brassington' }
  });
  var jacob = Meteor.users.findOne(jacobId);

  var openSourceNet = Posts.insert({
    title: 'Open Source .NET: Finally',
    userId: andrew._id,
    author: andrew.profile.name,
    url: 'http://www.brassington.io/microsoft/open-source-net-finally',
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 2
  });

  Comments.insert({
    postId: openSourceNet,
    userId: jacob._id,
    author: jacob.profile.name,
    submitted: now - 5 * 3600 * 1000,
    body: 'Interesting insight Andrew, how can I get involved?'
  });

  Comments.insert({
    postId: openSourceNet,
    userId: andrew._id,
    author: andrew.profile.name,
    submitted: now - 5 * 3600 * 1000,
    body: 'Just PM me and we\'ll get started right away!'
  });

  Posts.insert({
    title: 'Technical Interviews',
    author: 'Andrew Brassington',
    url: 'http://www.brassington.io/bootcamp/code-interviews',
    commentsCount: 0
  });
  Posts.insert({
    title: 'Wordpress to Jekyll: Almost Done',
    author: 'Andrew Brassington',
    url: 'http://www.brassington.io/blog-maintenence/migration-wordpress-to-jekylls',
    commentsCount: 0
  });
}
