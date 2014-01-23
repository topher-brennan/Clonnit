json.(post, :id, :title, :link_url, :body, :author_id, :subclon_id)
json.totalVotes post.total_votes
json.authorUsername post.author.username
json.currentUserHasVoted current_user.posts_voted_on.include?(post)
json.comments post.comments do |json, comment|
	json.partial!("comments/comment", :comment => comment)
end
