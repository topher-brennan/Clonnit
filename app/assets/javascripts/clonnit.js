window.Clonnit = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($rootEl, subclons) {
		subclons = new Clonnit.Collections.Subclons(subclons);
		new Clonnit.Routers.SubclonsRouter($rootEl, subclons);
		Backbone.history.start();
	}
};