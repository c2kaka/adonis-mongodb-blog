"use strict";

class SiteController {
  async index() {
    return {
      status: "ok"
    };
  }

  async site() {
    return {
      name: "我的博客",
      logo: "https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg",
      menu: [
        {
          name: "我的文章",
          url: "/rest/posts",
          icon: "fa fa-list"
        }
      ]
    };
  }
}

module.exports = SiteController;
