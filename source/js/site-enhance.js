(function () {
  function onReady(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  function decodePathPart(value) {
    try {
      return decodeURIComponent(value);
    } catch (error) {
      return value;
    }
  }

  function getPostSlug(href) {
    var url;
    try {
      url = new URL(href, window.location.origin);
    } catch (error) {
      return "";
    }

    var parts = url.pathname.split("/").filter(Boolean);
    return decodePathPart(parts[parts.length - 1] || "");
  }

  function upgradeArchiveCards() {
    var groups = document.querySelectorAll(".list-group");
    if (!groups.length) return;

    var data = window.__ARTICLE_CARD_DATA__ || {};
    var pageTitle = document.title.split(" - ")[0] || "";
    var sectionTitle = pageTitle.replace(/^分类\s*-\s*/, "").replace(/^标签\s*-\s*/, "");
    if (!sectionTitle || sectionTitle === pageTitle) sectionTitle = "文章索引";
    var sectionLabel = pageTitle.indexOf("分类 - ") === 0 ? "分类" : pageTitle.indexOf("标签 - ") === 0 ? "标签" : "索引";

    groups.forEach(function (group) {
      if (group.classList.contains("archive-card-list")) return;

      var items = group.querySelectorAll("a.list-group-item");
      if (!items.length) return;

      group.classList.add("archive-card-list");

      var heading = group.querySelector(".h4");
      if (heading && !heading.querySelector(".archive-heading-label")) {
        var countText = heading.textContent.trim();
        heading.innerHTML =
          '<span class="archive-heading-label">' +
          sectionLabel +
          "</span>" +
          sectionTitle +
          '<em class="archive-heading-count">' +
          countText +
          "</em>";
      }

      items.forEach(function (item) {
        var slug = getPostSlug(item.getAttribute("href") || "");
        var meta = data[slug] || {};
        var title = item.querySelector(".list-group-item-title");
        var time = item.querySelector("time");
        var image = meta.image || "/img/article-default.svg";
        var desc = meta.description || "";

        item.classList.add("archive-card-item");

        if (!item.querySelector(".archive-card-img")) {
          var imgWrap = document.createElement("span");
          imgWrap.className = "archive-card-img";
          imgWrap.innerHTML = '<img src="' + image + '" alt="" loading="lazy">';
          item.insertBefore(imgWrap, item.firstChild);
        }

        if (!item.querySelector(".archive-card-copy")) {
          var copy = document.createElement("span");
          copy.className = "archive-card-copy";

          if (time) copy.appendChild(time);
          if (title) copy.appendChild(title);
          if (desc) {
            var excerpt = document.createElement("span");
            excerpt.className = "archive-card-excerpt";
            excerpt.textContent = desc;
            copy.appendChild(excerpt);
          }

          item.appendChild(copy);
        }
      });
    });
  }

  onReady(function () {
    var path = window.location.pathname.replace(/\/+$/, "/");

    if (path === "/blog/") {
      var firstCard = document.querySelector(".index-card");
      if (!firstCard || document.querySelector(".blog-hub")) return;

      var hub = document.createElement("section");
      hub.className = "blog-hub";
      hub.innerHTML = [
        '<div class="section-title blog-hub-title">',
        "<p>导航</p>",
        "</div>",
        '<div class="blog-hub-grid">',
        '<a href="/categories/加拿大生活/"><span>加拿大生活</span><strong>税、医疗、养老、生活成本</strong></a>',
        '<a href="/categories/移民实战/"><span>移民实战</span><strong>政策、身份、真实路径</strong></a>',
        '<a href="/categories/语言学习/"><span>语言学习</span><strong>英语、法语、羞耻感和表达</strong></a>',
        '<a href="/categories/AI与工具/"><span>AI与工具</span><strong>Codex、虚拟卡、出海工具</strong></a>',
        '<a href="/categories/社会观察/"><span>社会观察</span><strong>普通人、内容舆论和关系账</strong></a>',
        '<a href="/tools/run-worth/"><span>人生计算器</span><strong>润值计算器和后续小工具</strong></a>',
        "</div>",
      ].join("");

      firstCard.parentNode.insertBefore(hub, firstCard);
    }

    upgradeArchiveCards();
  });
})();
