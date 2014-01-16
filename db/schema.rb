# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20140116234843) do

  create_table "comment_votes", :force => true do |t|
    t.integer  "value",      :null => false
    t.integer  "comment_id", :null => false
    t.integer  "user_id",    :null => false
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "comment_votes", ["comment_id"], :name => "index_comment_votes_on_comment_id"
  add_index "comment_votes", ["user_id"], :name => "index_comment_votes_on_user_id"

  create_table "comments", :force => true do |t|
    t.string   "body",       :null => false
    t.integer  "author_id",  :null => false
    t.integer  "post_id",    :null => false
    t.integer  "parent_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "comments", ["author_id"], :name => "index_comments_on_author_id"
  add_index "comments", ["parent_id"], :name => "index_comments_on_parent_id"
  add_index "comments", ["post_id"], :name => "index_comments_on_post_id"

  create_table "post_votes", :force => true do |t|
    t.integer  "value",      :null => false
    t.integer  "post_id",    :null => false
    t.integer  "user_id",    :null => false
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "post_votes", ["post_id"], :name => "index_post_votes_on_post_id"
  add_index "post_votes", ["user_id"], :name => "index_post_votes_on_user_id"

  create_table "posts", :force => true do |t|
    t.string   "title",      :null => false
    t.string   "link_url"
    t.string   "body"
    t.integer  "author_id",  :null => false
    t.integer  "subclon_id", :null => false
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "posts", ["author_id"], :name => "index_posts_on_author_id"
  add_index "posts", ["subclon_id"], :name => "index_posts_on_subclon_id"
  add_index "posts", ["title"], :name => "index_posts_on_title"

  create_table "subclons", :force => true do |t|
    t.string   "name",       :null => false
    t.integer  "creator_id", :null => false
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "subclons", ["creator_id"], :name => "index_subclons_on_creator_id"
  add_index "subclons", ["name"], :name => "index_subclons_on_name"

  create_table "users", :force => true do |t|
    t.string   "username",        :null => false
    t.string   "password_digest", :null => false
    t.string   "session_token",   :null => false
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
  end

  add_index "users", ["session_token"], :name => "index_users_on_session_token"
  add_index "users", ["username"], :name => "index_users_on_username"

end
