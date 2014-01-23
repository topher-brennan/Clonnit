Clonnit.Views.PostDetailView = Backbone.View.extend({
	events: {
		"click button.vote": "vote",
		"click button.add-comment": "addComment"
	},
	
	initialize: function () {
		this.listenTo(this.model, "change:currentUserHasVoted", this.render);
		this.listenTo(this.model.comments(), "add", this.render);
	},
	
	render: function () {
		var renderedContent = JST["posts/detail"]({
			post: this.model,
			comments: this.model.comments()
		});
		
		this.$el.html(renderedContent);
		return this;
	},
	
	vote: function (event) {
		event.preventDefault();
		var formData = $(event.currentTarget.parentElement).serializeJSON();
		var postVote = new Clonnit.Models.PostVote(formData["post_vote"]);
		var totalVotes = parseInt(this.model.get('totalVotes'));
		var voteValue = parseInt(postVote.get('value'))
		this.model.set('totalVotes', totalVotes + voteValue);
		this.model.set('currentUserHasVoted', true);
		postVote.save();
	},
		
	addComment: function (event) {
		event.preventDefault();
		var formData = $(event.currentTarget.parentElement).serializeJSON();
		var comment = new Clonnit.Models.Comment(formData["comment"]);
		var parentID = $(event.currentTarget).data("id");
		if (parentID) {
			comment.set('parent_id', parentID);
		}
		comment.set('post_id', this.model.id);
		var that = this
		comment.save({}, {
			success: function () {
				that.model.comments().add(comment);
			}
		});
	}
});