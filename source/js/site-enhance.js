(function () {
  function onReady(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  onReady(function () {
    var path = window.location.pathname.replace(/\/+$/, "/");
    if (path !== "/blog/") return;

    var firstCard = document.querySelector(".index-card");
    if (!firstCard || document.querySelector(".blog-hub")) return;

    var hub = document.createElement("section");
    hub.className = "blog-hub";
    hub.innerHTML = [
      '<div class="section-title">',
      "<p>文章导航</p>",
      "<h2>先按问题进。</h2>",
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
  });
})();
