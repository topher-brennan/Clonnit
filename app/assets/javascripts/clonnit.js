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

Backbone.CompositeView = Backbone.View.extend({
	addSubview: function (selector, subbiew) {
		var selectorSubviews = 
			this.subviews()[selector] || (this.subviews()[selector] = []);
		
		selectorSubviews.push(subview);
		
		var $selectorEl = this.$(selector);
		$selectorEl.append(subview.$el);
	}
});