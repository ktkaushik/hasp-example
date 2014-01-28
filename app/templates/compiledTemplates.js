module.exports = function(Handlebars) {

var templates = {};

templates["home/index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1>Hello! </h1>\n\n<p class=\"lead\">You are viewing the home/index template.</p>\n<p>You can find this template at '<strong>/Users/kaushik/dev/my_repos/hasp-example/app/templates/home/index.hbs</strong>'</p>\n\n";
  });

return templates;

};