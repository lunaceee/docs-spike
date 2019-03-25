module.exports = {
  extend: "@vuepress/theme-default",
  markdown: {
    config: md => {
      md.set({ breaks: true });
      md.use(require("markdown-it"));
    }
  },
  extendPageData($page) {
    const {
      _filePath, // file's absolute path
      _computed, // access the client global computed mixins at build time, e.g _computed.$localePath.
      _content, // file's raw content string
      _strippedContent, // file's content string without frontmatter
      key, // page's unique hash key
      frontmatter, // page's frontmatter object
      regularPath, // current page's default link (follow the file hierarchy)
      path // current page's real link (use regularPath when permalink does not exist)
    } = $page;

    // 1. Add extra fields.
    $page.xxx = "xxx";

    // 2. Change frontmatter.
    frontmatter.extraData = {
      title: "Sky is the limit"
    };
  },
  themeConfig: {
    displayAllHeaders: true,
    sidebar: [
      {
        title: "root",
        sidebarDepth: 2,
        children: [
          "root/nested-footer",
          {
            title: "root/foo",
            sidebarDepth: 2,
            children: ["root/foo/foo-footer"]
          }
        ]
      }
    ]
  },
  plugins: [
    [
      "@vuepress/active-header-links",
      {
        sidebarLinkSelector: ".sidebar-link",
        headerAnchorSelector: ".header-anchor"
      }
    ],
    [
      "@vuepress/container",
      {
        type: "cat",
        before: '<pre class="vue-container"><code>',
        after: "</code></pre>"
      }
    ],
    [
      "@vuepress/container",
      {
        type: "note"
      }
    ],
    [
      "@vuepress/container",
      {
        type: "fancylink",
        before: info => `<a class="fancy" href="${info}">`,
        after: "</a>"
      }
    ]
  ]
};
