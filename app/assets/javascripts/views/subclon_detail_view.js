Clonnit.Views.SubclonDetailView = Backbone.View.extend({
	events: {
		"click button.vote": "vote"
	},

	initialize: function () {
		this.listenTo(
			this.model.posts(), 
			"change:currentUserHasVoted", 
			this.render);
	},

	render: function () {
		var renderedContent = JST["subclons/detail"]({
			subclon: this.model,
			posts: this.model.posts()
		});
		
		this.$el.html(renderedContent);
		return this;
	},

	vote: function (event) {
		event.preventDefault();
		var formData = $(event.currentTarget.parentElement).serializeJSON();
		var postVote = new Clonnit.Models.PostVote(formData["post_vote"]);
		var postID = $(event.currentTarget).data("id");
		var votedPost = this.model.posts().findWhere({ id: postID });
		var totalVotes = parseInt(votedPost.get('totalVotes'));
		var voteValue = parseInt(postVote.get('value'))
		votedPost.set('totalVotes', totalVotes + voteValue);
		votedPost.set('currentUserHasVoted', true);
		postVote.save();
	}
});