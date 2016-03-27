Router.configure({
  layoutTemplate: 'layout'
});
Router.route('/', function () {
  this.render('home');
});
Router.route('/aboutus', function () {
  this.render('aboutus');
});
Router.route('/services', function () {
  this.render('services');
});
Router.route('/feedback', function () {
  this.render('feedback');
});
