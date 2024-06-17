<template><div><div class="hint-container tip">
<p class="hint-container-title">说明：</p>
<ul>
<li>在服务器中允许玩家使用中文名</li>
<li>中文名限制：2~4个字，不允许使用长长的名字</li>
<li>如果需要比较特别的名字，可以通过赞助5元留言改名 <RouteLink to="/tutorial/server/support.html">#支持与赞助</RouteLink></li>
<li>赞助改名允许含有特殊符号、Emoji、中英混合、其它文字等（当然也不能太长）</li>
<li>中文名仅在PaperCard服务器有效，在其它服务器无效</li>
</ul>
</div>
<div class="hint-container caution">
<p class="hint-container-title">警告：</p>
<ul>
<li>中文名需要管理审核通过后才能使用，禁止一切不雅的中文名！</li>
</ul>
</div>
<h2 id="中文名申请注册和修改均需消耗-电池" tabindex="-1"><a class="header-anchor" href="#中文名申请注册和修改均需消耗-电池"><span>中文名申请注册和修改均需消耗<RouteLink to="/docs/preface.html#%E5%85%B3%E4%BA%8E%E7%94%B5%E6%B1%A0">#电池</RouteLink></span></a></h2>
<h3 id="普通中文名" tabindex="-1"><a class="header-anchor" href="#普通中文名"><span>普通中文名</span></a></h3>
<ul>
<li>需要30电池，使用指令 <strong>/ch-name app &lt;名字&gt;</strong> 来进行申请，限制：2-4个汉字。</li>
</ul>
<h3 id="特殊中文名" tabindex="-1"><a class="header-anchor" href="#特殊中文名"><span>特殊中文名</span></a></h3>
<ul>
<li>需要至少50电池，使用指令 <strong>/ch-name app-any &lt;名字&gt; [额外的电池]</strong> 来进行申请，限制较少，可以全英文、中英混合、特殊符号等等。</li>
</ul>
<hr>
<ul>
<li>取消申请或被申请拒绝后，退回申请所使用的电池。</li>
<li>所有名字的第一个字符，必须是容易用键盘打出来的字符，首字符禁止生僻字。</li>
<li>额外的电池：在一些情况，你的名字的价格可能超出了50电池，会被拒绝并要求加上额外的电池重新申请。</li>
</ul>
<h2 id="玩家指令" tabindex="-1"><a class="header-anchor" href="#玩家指令"><span>玩家指令：</span></a></h2>
<ul>
<li><strong>/ch-name app &lt;中文名&gt;</strong> 申请注册或修改中文名</li>
<li><strong>/ch-name app-list</strong> 查看正在申请的中文名，只显示前面几条</li>
<li><strong>/ch-name use-on</strong> 启用自己的中文名，默认为启用状态</li>
<li><strong>/ch-name use-off</strong> 禁用自己的中文名，恢复为原来的用户名</li>
<li><strong>/ch-name help</strong> 查看帮助</li>
</ul>
<h2 id="管理员指令" tabindex="-1"><a class="header-anchor" href="#管理员指令"><span>管理员指令：</span></a></h2>
<ul>
<li><strong>/ch-name accept &lt;申请ID&gt;</strong> 同意中文名申请，不推荐使用，已实现点击同意</li>
<li><strong>/ch-name reject &lt;申请ID&gt;</strong> 拒绝中文名申请，不推荐使用，已实现点击拒绝</li>
</ul>
<figure><img src="/pic/玩家名.png" alt="中文名展示" tabindex="0" loading="lazy"><figcaption>中文名展示</figcaption></figure>
</div></template>


