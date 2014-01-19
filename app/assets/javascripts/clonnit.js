window.Clonnit = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($rootEl, subclons) {
		new Clonnit.Routers.SubclonsRouter($rootEl, subclons);
		Backbone.history.start();
	}
};

// $(document).ready(function(){
//   Clonnit.initialize();
// });
