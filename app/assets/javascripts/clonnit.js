window.Clonnit = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
	Data: {},

  initialize: function() {
		Clonnit.Data.subclons = new Clonnit.Collections.Subclons();
		Clonnit.Data.posts = new Clonnit.Collections.Posts();
		Clonnit.Data.comments = new Clonnit.Collections.Comments();
		Clonnit.Data.subclons.fetch({
			success: function () {
				new Clonnit.Routers.AppRouter();
				Backbone.history.start();
			}
		});
	}
};

Backbone.CompositeView = Backbone.View.extend({
	addSubview: function (selector, subbiew) {
		var selectorSubviews = 
			this.subviews()[selector] || (this.subviews()[selector] = []);
		
		selectorSubviews.push(subview);
		
		var $selectorEl = this.$(selector);
		$selectorEl.append(subview.$el);
	}
});

$(Clonnit.initialize);
