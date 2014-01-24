Clonnit.Views.PostEditView = Backbone.View.extend({
	events: {
		"click button.edit-post": "editPost"
	},
	
	render: function () {
		console.log("Attempting to render PostEditView")
		var renderedContent = JST["posts/edit"]({
			post: this.model
		});
		this.$el.html(renderedContent);
		return this;
	},
	
	editPost: function(event) {
		event.preventDefault();
		var form = event.currentTarget.parentElement.parentElement
		var formData = $(form).serializeJSON();
		var that = this
		that.model.save(formData, {
			success: function () {
				Backbone.history.navigate("subclons/" + that.model.get('subclon_id'), {
					trigger: true
				});
			}
		});
	}
});