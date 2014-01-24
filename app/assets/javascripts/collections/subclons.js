Clonnit.Collections.Subclons = Backbone.Collection.extend({
	model: Clonnit.Models.Subclon,
	url: "api/subclons",
	
	comparator: function (subclon) {
		return -subclon.popular();
	}
});