"use strict";

const Post = use("App/Models/Post");

class PostController {
  async index({ request, view }) {
    const posts = await Post.all();

    return view.render("posts.index", {
      posts: posts.toJSON()
    });
  }

  async show({ params, view }) {
    const post = await Post.find(params.id);

    return view.render("posts.show", {
      post: post.toJSON()
    });
  }
}

module.exports = PostController;
