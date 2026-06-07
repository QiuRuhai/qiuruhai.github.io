# qiuruhai.github.io

我的个人站点。基于 Jekyll，托管在 GitHub Pages。

线上地址：<https://qiuruhai.github.io>

---

## 我要新增一个作品

1. 把图片 / GIF 放进 `assets/images/`，比如 `assets/images/my-new-thing.gif`
2. 在 `_works/` 复制一个旧的 markdown 文件，重命名（用英文），改里面的内容：

   ```yaml
   ---
   title: 作品标题
   year: 2026
   tags: [C++, OpenGL]                     # 技术标签数组
   image: /assets/images/my-new-thing.gif  # 上一步放的那张图
   github: https://github.com/QiuRuhai/repo-name   # 可选
   video:                                  # 可选，比如 B 站/YouTube 链接
   paper:                                  # 可选，比如论文 PDF
   description: 一句话简介，会出现在卡片上。
   ---

   ## 做了什么
   正文内容…
   ```

3. 提交并推送：
   ```bash
   git add .
   git commit -m "add: my new work"
   git push
   ```
4. 一分钟后刷新 <https://qiuruhai.github.io/works/> 就能看到。

## 我要写一篇博客

在 `_posts/` 新建一个文件，命名格式必须是 `YYYY-MM-DD-标题.md`：

```yaml
---
title: 文章标题
date: 2026-06-15
---

正文（markdown）。
```

push 后会自动出现在 `/blog/`。

## 我要改首页 / 关于页文字

- 首页：编辑 `index.html`
- 关于页：编辑 `about.md`
- 全站标题 / 联系方式 / 社交链接：编辑 `_config.yml`

## 想在本机预览（可选）

需要先装 Ruby 3.1+ 和 Bundler：

```bash
brew install ruby@3.1
export PATH="/opt/homebrew/opt/ruby@3.1/bin:$PATH"
gem install --user-install bundler
```

然后在仓库目录下：

```bash
bundle install
bundle exec jekyll serve
```

打开 <http://127.0.0.1:4000/> 即可看到。

跳过这一步也完全没问题——直接 push 到 GitHub，Pages 会自动构建。

## 文件夹是啥意思

| 路径 | 干嘛的 | 我会动吗 |
|------|--------|---------|
| `_works/` | 每个作品一个 .md 文件 | ✅ 经常 |
| `_posts/` | 博客文章 | ✅ 如果你写博客 |
| `assets/images/`, `assets/videos/` | 图片视频素材 | ✅ 上传素材 |
| `about.md` | 关于页内容 | ✅ 偶尔 |
| `index.html` | 首页 | ✅ 想调首页文案时 |
| `_config.yml` | 全站配置 | ✅ 很少 |
| `_layouts/`, `_includes/`, `assets/css/`, `assets/js/` | 模板和样式 | ⚠️ 一般不动；想改样式时再说 |
