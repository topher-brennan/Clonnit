Clonnit.Routers.AppRouter = Backbone.Router.extend({
	routes: {
		"": "subclonsIndex",
		"subclons/:id": "subclonShow",
	},
	
	subclonsIndex: function () {		
		var subclonsIndexView = new Clonnit.Views.SubclonsIndexView({
			collection: Clonnit.Data.subclons
		});
		
		Clonnit.Data.subclons.fetch();
		this._swapView(subclonsIndexView);
	},
	
	subclonShow: function (id) {
		var subclon = Clonnit.Data.subclons.findWhere({ id: parseInt(id) });
		
		var subclonDetailView = new Clonnit.Views.SubclonDetailView({
			model: subclon
		});
		
		this._swapView(subclonDetailView);
	},
	
	postShow: function (id) {
		
		
	},
	
	_swapView: function (view) {
		if (this.currentView) {
			this.currentView.remove();
		}
		this.currentView = view;
		
		$("#content").html(view.render().$el);
	}
});