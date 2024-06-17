<template><div><h2 id="服务器指令-由-有伊人-的word文档友情提供" tabindex="-1"><a class="header-anchor" href="#服务器指令-由-有伊人-的word文档友情提供"><span>服务器指令 [由'有伊人'的Word文档友情提供]</span></a></h2>
<h3 id="传送相关" tabindex="-1"><a class="header-anchor" href="#传送相关"><span>传送相关</span></a></h3>
<ul>
<li><strong>/tpa &lt;玩家名&gt;</strong> (消耗物：末影珍珠 / 贡献值)</li>
<li><strong>/rtp</strong> (随机传送，范围3W)</li>
<li><strong>/spawn bed</strong> (返回玩家最后一个床的位置)</li>
<li><strong>/spawn world</strong> (返回世界出生点)</li>
<li><strong>/spawn death</strong> (返回上一个死亡地点)</li>
<li><strong>/spawn &lt;地标&gt;</strong> (传送至 组织/建筑 地标)</li>
</ul>
<h3 id="home相关" tabindex="-1"><a class="header-anchor" href="#home相关"><span>Home相关</span></a></h3>
<ul>
<li><strong>/home set &lt;家的名称&gt;</strong> (设置家)</li>
<li><strong>/home buy</strong> (购买一个Home上限)</li>
<li><strong>/home remove &lt;家的名称&gt;</strong> (删除家)</li>
<li><strong>/home go &lt;家的名称&gt;</strong> (传送到家)</li>
</ul>
<h3 id="电池相关" tabindex="-1"><a class="header-anchor" href="#电池相关"><span>电池相关</span></a></h3>
<ul>
<li><strong>/coins pay &lt;游戏名或UUID&gt; &lt;电池数量&gt; &lt;备注信息&gt;</strong> (给某位玩家付电池)</li>
<li><strong>/coins query</strong> (你所拥有的电池总数)</li>
<li><strong>/coins detail</strong> (查看电池支出收入明细)</li>
<li><strong>/yue-ka</strong> (电池月卡，显示已领取次数)</li>
</ul>
<h3 id="额外辅助" tabindex="-1"><a class="header-anchor" href="#额外辅助"><span>额外辅助</span></a></h3>
<ul>
<li><strong>/fsb</strong> (快捷潜影盒，手拿潜影盒使用指令即可，需要80电池)</li>
<li><strong>/fu workbench</strong> (快捷工作台，不用摆在地上，需要30电池)</li>
</ul>
<h3 id="趣味指令" tabindex="-1"><a class="header-anchor" href="#趣味指令"><span>趣味指令</span></a></h3>
<ul>
<li><strong>/take-off-armor</strong> (脱下身上所有衣服包括副手，绑定或消失诅咒也可以脱)</li>
<li><strong>/spin</strong> (原地旋转)</li>
<li><strong>/lay</strong> (原地躺下)</li>
<li><strong>/sit</strong> (原地坐下)</li>
<li><strong>/sit toggle on/off</strong> (是否空手右键半砖台阶等物品来坐下)</li>
<li><strong>/sit playertoggle on/off</strong> (是否空手右键坐到玩家身上)</li>
<li><strong>/crawl</strong> (趴下)</li>
<li><strong>/afk &lt;状态文本&gt;</strong> (挂机状态，再次输入/afk或移动 可退出此状态)</li>
</ul>
<h3 id="qq相关" tabindex="-1"><a class="header-anchor" href="#qq相关"><span>QQ相关</span></a></h3>
<ul>
<li><strong>/qq-bind code</strong> (生成绑定QQ验证码，发送到QQ群即可绑定QQ)</li>
<li><strong>/qq-bind get &lt;玩家名或UUID&gt;</strong> (查询指定玩家所绑定的信息)</li>
<li><strong>/qq-bind qq &lt;QQ&gt;</strong> (查询指定QQ号所绑定的信息)</li>
<li><strong>/smurf bili-code &lt;验证码&gt;</strong> (大号在游戏里输入这串指令绑定小号，验证码是小号连接时的验证码)</li>
<li><strong>/smurf query &lt;游戏名或UUID&gt;</strong> (查询自己或者别人的小号信息)</li>
<li><strong>/qgcs toggle</strong> (决定是否启用qq群消息同步)</li>
</ul>
<h3 id="中文名" tabindex="-1"><a class="header-anchor" href="#中文名"><span>中文名</span></a></h3>
<ul>
<li><strong>/ch-name app &lt;普通中文名&gt;</strong> (申请中文名，最大四个字，需要30电池)</li>
<li><strong>/ch-name app-any &lt;特殊中文名&gt; [额外的电池]</strong> (限制较少，需要至少50电池)</li>
<li><strong>/ch-name app-list</strong> (查看中文名申请列表)</li>
<li><strong>/ch-name use-on</strong> (启用中文名)</li>
<li><strong>/ch-name use-off</strong> (禁用中文名)</li>
</ul>
<h3 id="私信" tabindex="-1"><a class="header-anchor" href="#私信"><span>私信</span></a></h3>
<ul>
<li><strong>/tell &lt;玩家名&gt; &lt;私聊消息&gt;</strong> (消息更醒目)</li>
<li><strong>/reply &lt;私信消息&gt;</strong> (发送一次tell私信、或者收到别人的私信后，快速再次发送或回复。)</li>
</ul>
<h3 id="举报" tabindex="-1"><a class="header-anchor" href="#举报"><span>举报</span></a></h3>
<ul>
<li><strong>/report player &lt;玩家名&gt; &lt;举报理由&gt;</strong> (举报玩家)</li>
<li><strong>/report list-accepted</strong> (查看成功的举报，可点击翻页)</li>
<li><strong>/report list-rejected</strong> (查看失败的举报，可点击翻页)</li>
</ul>
<h3 id="封禁" tabindex="-1"><a class="header-anchor" href="#封禁"><span>封禁</span></a></h3>
<ul>
<li><strong>/ban list</strong> (查看与自己有关的封禁记录)</li>
<li><strong>/ban list-about &lt;玩家名&gt;</strong> (查看与指定玩家有关的封禁记录)</li>
<li><strong>/ban list-all</strong> (查看所有封禁记录)</li>
<li><strong>/ban view &lt;封禁ID&gt;</strong> (查看指定封禁ID的封禁记录)</li>
</ul>
<h3 id="防熊查询" tabindex="-1"><a class="header-anchor" href="#防熊查询"><span>防熊查询</span></a></h3>
<ul>
<li><strong>/co i</strong> (查询容器/方块变化，再次输入可退出)</li>
<li><strong>/co near</strong> (查询附近变化 半径为5)</li>
<li><strong>/co lookup &lt;玩家名&gt; include: deepslate_diamond_ore action: -block time: 1d</strong> (查询玩家一天内挖掘的深层钻石)</li>
<li>上述为简单操作，复杂操作请参考以下文档 <a href="https://docs.coreprotect.net/commands/" target="_blank" rel="noopener noreferrer">COI Docs<ExternalLinkIcon/></a></li>
<li><strong>/invsee  &lt;玩家名&gt;</strong> (查询玩家背包)</li>
<li><strong>/endersee &lt;玩家名&gt;</strong> (查询玩家末影箱)</li>
</ul>
<h3 id="村民优化" tabindex="-1"><a class="header-anchor" href="#村民优化"><span>村民优化</span></a></h3>
<ul>
<li><strong>/vo optimize</strong> (村民优化，输入指令回车后右键村民即可优化)</li>
<li><strong>/vo restore</strong> (村民优化取消，输入指令后回车右键村民即可取消优化)</li>
<li><strong>/vo exit</strong> (退出村民优化/取消优化状态)</li>
</ul>
<h3 id="锁箱子" tabindex="-1"><a class="header-anchor" href="#锁箱子"><span>锁箱子</span></a></h3>
<ul>
<li><strong>/cp lock</strong> (进入上锁模式，然后右键想要上锁的箱子)</li>
<li><strong>/cp unlock</strong> (进入解锁模式，然后右键想要解锁的箱子，直接打掉这个箱子也可以解锁)</li>
<li><strong>/cp trust &lt;玩家名&gt;</strong> (进入信任模式，然后右键需要添加信任的箱子)</li>
<li><strong>/cp untrust &lt;玩家名&gt;</strong> (信任解除模式，然后右键点击需要解除信任的箱子)</li>
<li><strong>/cp menu</strong> (菜单，可设置连续上锁解锁模式、连续信任添加与取消)</li>
<li><strong>/cp exit</strong> (启用持续模式后，除非你使用指令/cp exit来退出模式，否则不会自动退出模式)</li>
</ul>
<h3 id="赞助相关" tabindex="-1"><a class="header-anchor" href="#赞助相关"><span>赞助相关</span></a></h3>
<ul>
<li><strong>/zanzhu</strong> (服务器的运营离不开每一位玩家的赞助)</li>
<li><strong>/sponsorship latest</strong> (查看最近赞助记录，按时间顺序)</li>
<li><strong>/sponsorship top</strong> (查看赞助排行榜)</li>
<li><strong>/sponsorship list</strong> (查看赞助记录，按记录顺序)</li>
<li><strong>/sponsorship anonymous</strong> (查看匿名赞助记录)</li>
<li><strong>/sponsorship id &lt;赞助ID&gt;</strong> (查看指定赞助ID的记录)</li>
<li><strong>/sponsorship special</strong> (查看特别赞助记录)</li>
<li><strong>/sponsorship player &lt;玩家名或UUID&gt;</strong> (查看指定玩家的赞助记录)</li>
</ul>
<h3 id="皮肤相关" tabindex="-1"><a class="header-anchor" href="#皮肤相关"><span>皮肤相关</span></a></h3>
<ul>
<li><strong>/skin update</strong> (刷新皮肤)</li>
</ul>
<h3 id="在线玩家" tabindex="-1"><a class="header-anchor" href="#在线玩家"><span>在线玩家</span></a></h3>
<ul>
<li><strong>/client-brand</strong> (查看所有在线玩家)</li>
</ul>
<h3 id="所在区域tps" tabindex="-1"><a class="header-anchor" href="#所在区域tps"><span>所在区域TPS</span></a></h3>
<ul>
<li><strong>/tpsbar</strong> (查看你所在区域的TPS、MSPT、Ping)</li>
</ul>
<h3 id="服务器提示" tabindex="-1"><a class="header-anchor" href="#服务器提示"><span>服务器提示</span></a></h3>
<ul>
<li><strong>/tip list</strong> (查看所有服务器提示)</li>
</ul>
<h2 id="客户端指令" tabindex="-1"><a class="header-anchor" href="#客户端指令"><span>客户端指令</span></a></h2>
<h3 id="手动内存清理" tabindex="-1"><a class="header-anchor" href="#手动内存清理"><span>手动内存清理</span></a></h3>
<ul>
<li><strong>/mcmodclient</strong></li>
</ul>
<h3 id="聊天发送图片" tabindex="-1"><a class="header-anchor" href="#聊天发送图片"><span>聊天发送图片</span></a></h3>
<ul>
<li>指令发送：<strong>/chatimage send &lt;图片名&gt; &lt;图片链接&gt;</strong></li>
<li>消息嵌入：<strong>[[CICode,url=图片链接,name=图片名]]</strong></li>
</ul>
<h3 id="待办事项" tabindex="-1"><a class="header-anchor" href="#待办事项"><span>待办事项</span></a></h3>
<ul>
<li>添加项目：</li>
<li><strong>/note push &lt;内容&gt;</strong> 在顶部添加一个项目</li>
<li><strong>/note queue &lt;内容&gt;</strong> 在底部添加一个项目</li>
<li><strong>/note insert &lt;索引&gt; &lt;内容&gt;</strong> 在任意索引处添加项目</li>
<li>移除项目：</li>
<li><strong>/note pop</strong> 移除最上面的项目。</li>
<li><strong>/note pop</strong> &lt;索引&gt; 为remove的别名</li>
<li><strong>/note shift</strong> 删除最底部的项目</li>
<li><strong>/note remove</strong> &lt;索引&gt; 删除指定的项目</li>
<li>编辑项目：</li>
<li><strong>/note edit</strong> &lt;索引&gt; &lt;内容&gt; 覆盖现有项目 完成提供旧值</li>
<li><strong>/note bump</strong> &lt;索引&gt; 将项目向上移动一个位置</li>
<li><strong>/note bump</strong> &lt;索引&gt; &lt;偏移量&gt; 将项目移动到给定的位数 正值向上移动 负值向下移动</li>
<li><strong>/note move</strong> &lt;旧索引&gt; &lt;新索引&gt; 将项目从一个索引移动到另一个索引</li>
<li>Hud控制：</li>
<li><strong>/note hide</strong> 将Hud设置为“打开”或“关闭”</li>
</ul>
</div></template>


