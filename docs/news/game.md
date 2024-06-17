---
# 这是文章的标题
title: 纸片小游戏
# 你可以自定义封面图片
# cover: /img/image1.png
# 这是页面的图标
icon: icon-pixchamp
# 这是侧边栏的顺序
order: 4
# 设置作者
author: FyrGlow
# 设置写作时间
date: 2024-03-18
# 一个页面可以有多个分类
category:
  - 纸片小游戏
# 一个页面可以有多个标签
tag:
  - 小游戏
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在星标文章中
star: true
# 你可以自定义页脚
footer: 纸片小游戏
# 你可以自定义版权信息
copyright: PaperCard Docs
---

<style>
.card-container {
  display: inline-block;
  position: relative;
  width: 90px; /* 设置卡片容器的固定宽度 */
  height: 90px; /* 设置卡片容器的固定高度 */
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s;
  margin-right: 20px;
}

.card-container:last-child {
  margin-right: 0;
}

.card-container:hover {
  transform: scale(1.1);
}

.card {
  width: 100%;
  height: 100%;
}

.card img {
  display: block;
  width: 100%;
  height: 100%; /* 让图片充满整个卡片容器 */
  object-fit: cover; /* 让图片保持原始比例并填充整个容器 */
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  z-index: 1;
}

.text-background {
  position: absolute;
  bottom: -40px;
  left: 0;
  width: 100%;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  transition: bottom 0.3s, opacity 0.3s;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}

.text-animation {
  position: absolute;
  bottom: -40px;
  left: 0;
  width: 100%;
  text-align: center;
  color: white;
  font-weight: bold;
  z-index: 3;
  opacity: 0;
  transition: bottom 0.1s, opacity 0.2s;
}

.card-container:hover .text-background,
.card-container:hover .text-animation {
  bottom: -20px;
  opacity: 1;
}
</style>

<div class="card-container">
  <a class="card-link" href="/games/2048/2048.html">
    <div class="card">
      <img src="/games/ico/2048.avif" alt="2048">
    </div>
    <div class="overlay"></div>
    <div class="text-background"></div>
    <div class="text-animation">
      <p>2048</p>
    </div>
  </a>
</div>

<div class="card-container">
  <a class="card-link" href="/games/hextris/index.html">
    <div class="card">
      <img src="/games/ico/hextris.png" alt="hextris">
    </div>
    <div class="overlay"></div>
    <div class="text-background"></div>
    <div class="text-animation">
      <p>Hextris</p>
    </div>
  </a>
</div>

<div class="card-container">
  <a class="card-link" href="/games/tetris/index.html">
    <div class="card">
      <img src="/games/ico/tetris.ico" alt="tetris">
    </div>
    <div class="overlay"></div>
    <div class="text-background"></div>
    <div class="text-animation">
      <p>Tetris</p>
    </div>
  </a>
</div>

<div class="card-container">
  <a class="card-link" href="/games/els/index.html">
    <div class="card">
      <img src="/games/ico/els.png" alt="tetris+">
    </div>
    <div class="overlay"></div>
    <div class="text-background"></div>
    <div class="text-animation">
      <p>Tetris+</p>
    </div>
  </a>
</div>

<!-- <div class="card-container">
  <a class="card-link" href="/tools/banner/editor.htm">
    <div class="card">
      <img src="/games/ico/banner.png" alt="Banner">
    </div>
    <div class="overlay"></div>
    <div class="text-background"></div>
    <div class="text-animation">
      <p>Banner</p>
    </div>
  </a>
</div> -->