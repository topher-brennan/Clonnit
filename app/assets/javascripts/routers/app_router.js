Clonnit.Routers.AppRouter = Backbone.Router.extend({
	routes: {
		"": "subclonsIndex",
		"subclons/new": "subclonNew",
		"subclons/:id": "subclonShow",
		"subclons/:subclon_id/posts/new": "postNew",
		"posts/:id": "postShow",
		"posts/:id/edit": "postEdit"
	},
	
	subclonsIndex: function () {		
		var subclonsIndexView = new Clonnit.Views.SubclonsIndexView({
			collection: Clonnit.Data.subclons
		});
		
		this._swapView(subclonsIndexView);
	},
	
	subclonNew: function () {
		var newSubclonView = new Clonnit.Views.NewSubclonView();
		this._swapView(newSubclonView);
	},
	
	subclonShow: function (id) {
		var subclon = Clonnit.Data.subclons.findWhere({ id: parseInt(id) });
		
		var subclonDetailView = new Clonnit.Views.SubclonDetailView({
			model: subclon
		});
		
		this._swapView(subclonDetailView);
	},
	
	postNew: function (subclon_id) {
		var newPostView =  new Clonnit.Views.NewPostView({
			attributes: { subclonID: subclon_id }
		});
		this._swapView(newPostView);
	},
	
	postShow: function (id) {
		var post = Clonnit.Data.posts.findWhere({ id: parseInt(id) });
		var postDetailView = new Clonnit.Views.PostDetailView({
			model: post
		});
		
		this._swapView(postDetailView);
	},
	
	postEdit: function(id) {
		var post = Clonnit.Data.posts.get(id);
		var postEditView = new Clonnit.Views.PostEditView({
			model: post
		});
		this._swapView(postEditView);
	},
	
	_swapView: function (view) {
		if (this.currentView) {
			this.currentView.remove();
		}
		this.currentView = view;
		
		$("#content").html(view.render().$el);
	}
});