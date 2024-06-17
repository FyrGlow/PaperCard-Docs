---
# 这是文章的标题
title: 服务器指令
# 你可以自定义封面图片
# cover: /img/image1.png
# 这是页面的图标
icon: icon-terminal
# 这是侧边栏的顺序
order: 3
# 设置作者
author: FyrGlow
# 设置写作时间
date: 2024-03-03
# 一个页面可以有多个分类
category:
  - 服务器教程
# 一个页面可以有多个标签
tag:
  - 指令
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在星标文章中
star: true
# 你可以自定义页脚
footer: 服务器指令
# 你可以自定义版权信息
copyright: PaperCard Docs
---

## 服务器指令 [由'有伊人'的Word文档友情提供]
### 传送相关
- **/tpa <玩家名>** (消耗物：末影珍珠 / 贡献值)
- **/rtp** (随机传送，范围3W)
- **/spawn bed** (返回玩家最后一个床的位置)
- **/spawn world** (返回世界出生点)
- **/spawn death** (返回上一个死亡地点)
- **/spawn <地标>** (传送至 组织/建筑 地标)
### Home相关
- **/home set <家的名称>** (设置家)
- **/home buy** (购买一个Home上限)
- **/home remove <家的名称>** (删除家)
- **/home go <家的名称>** (传送到家)
### 电池相关
- **/coins pay <游戏名或UUID> <电池数量> <备注信息>** (给某位玩家付电池)
- **/coins query** (你所拥有的电池总数) 
- **/coins detail** (查看电池支出收入明细)
- **/yue-ka** (电池月卡，显示已领取次数)
### 额外辅助
- **/fsb** (快捷潜影盒，手拿潜影盒使用指令即可，需要80电池)
- **/fu workbench** (快捷工作台，不用摆在地上，需要30电池)
### 趣味指令
- **/take-off-armor** (脱下身上所有衣服包括副手，绑定或消失诅咒也可以脱)
- **/spin** (原地旋转)
- **/lay** (原地躺下)
- **/sit** (原地坐下)
- **/sit toggle on/off** (是否空手右键半砖台阶等物品来坐下)
- **/sit playertoggle on/off** (是否空手右键坐到玩家身上)
- **/crawl** (趴下)
- **/afk <状态文本>** (挂机状态，再次输入/afk或移动 可退出此状态)
### QQ相关
- **/qq-bind code** (生成绑定QQ验证码，发送到QQ群即可绑定QQ)
- **/qq-bind get <玩家名或UUID>** (查询指定玩家所绑定的信息)
- **/qq-bind qq &lt;QQ&gt;** (查询指定QQ号所绑定的信息)
- **/smurf bili-code <验证码>** (大号在游戏里输入这串指令绑定小号，验证码是小号连接时的验证码)
- **/smurf query <游戏名或UUID>** (查询自己或者别人的小号信息)
- **/qgcs toggle** (决定是否启用qq群消息同步)
### 中文名
- **/ch-name app <普通中文名>** (申请中文名，最大四个字，需要30电池)
- **/ch-name app-any <特殊中文名> [额外的电池]** (限制较少，需要至少50电池)
- **/ch-name app-list** (查看中文名申请列表)
- **/ch-name use-on** (启用中文名)
- **/ch-name use-off** (禁用中文名)
### 私信
- **/tell <玩家名> <私聊消息>** (消息更醒目)
- **/reply <私信消息>** (发送一次tell私信、或者收到别人的私信后，快速再次发送或回复。)
### 举报
- **/report player <玩家名> <举报理由>** (举报玩家)
- **/report list-accepted** (查看成功的举报，可点击翻页)
- **/report list-rejected** (查看失败的举报，可点击翻页)
### 封禁
- **/ban list** (查看与自己有关的封禁记录)
- **/ban list-about <玩家名>** (查看与指定玩家有关的封禁记录)
- **/ban list-all** (查看所有封禁记录)
- **/ban view <封禁ID>** (查看指定封禁ID的封禁记录)
### 防熊查询
- **/co i** (查询容器/方块变化，再次输入可退出)
- **/co near** (查询附近变化 半径为5)
- **/co lookup <玩家名> include: deepslate_diamond_ore action: -block time: 1d** (查询玩家一天内挖掘的深层钻石)
- 上述为简单操作，复杂操作请参考以下文档 [COI Docs](https://docs.coreprotect.net/commands/)
- **/invsee  <玩家名>** (查询玩家背包)
- **/endersee <玩家名>** (查询玩家末影箱)
### 村民优化
- **/vo optimize** (村民优化，输入指令回车后右键村民即可优化)
- **/vo restore** (村民优化取消，输入指令后回车右键村民即可取消优化)
- **/vo exit** (退出村民优化/取消优化状态)
### 锁箱子
- **/cp lock** (进入上锁模式，然后右键想要上锁的箱子)
- **/cp unlock** (进入解锁模式，然后右键想要解锁的箱子，直接打掉这个箱子也可以解锁)
- **/cp trust <玩家名>** (进入信任模式，然后右键需要添加信任的箱子)
- **/cp untrust <玩家名>** (信任解除模式，然后右键点击需要解除信任的箱子)
- **/cp menu** (菜单，可设置连续上锁解锁模式、连续信任添加与取消)
- **/cp exit** (启用持续模式后，除非你使用指令/cp exit来退出模式，否则不会自动退出模式)
### 赞助相关
- **/zanzhu** (服务器的运营离不开每一位玩家的赞助)
- **/sponsorship latest** (查看最近赞助记录，按时间顺序)
- **/sponsorship top** (查看赞助排行榜)
- **/sponsorship list** (查看赞助记录，按记录顺序)
- **/sponsorship anonymous** (查看匿名赞助记录)
- **/sponsorship id <赞助ID>** (查看指定赞助ID的记录)
- **/sponsorship special** (查看特别赞助记录)
- **/sponsorship player <玩家名或UUID>** (查看指定玩家的赞助记录)
### 皮肤相关
- **/skin update** (刷新皮肤)
### 在线玩家
- **/client-brand** (查看所有在线玩家)
### 所在区域TPS
- **/tpsbar** (查看你所在区域的TPS、MSPT、Ping)
### 服务器提示
- **/tip list** (查看所有服务器提示)



## 客户端指令
### 手动内存清理
- **/mcmodclient**
### 聊天发送图片
- 指令发送：**/chatimage send <图片名> <图片链接>**
- 消息嵌入：**[[CICode,url=图片链接,name=图片名]]**
### 待办事项
- 添加项目：
- **/note push <内容>** 在顶部添加一个项目
- **/note queue <内容>** 在底部添加一个项目
- **/note insert <索引> <内容>** 在任意索引处添加项目
- 移除项目：
- **/note pop** 移除最上面的项目。
- **/note pop** <索引> 为remove的别名
- **/note shift** 删除最底部的项目
- **/note remove** <索引> 删除指定的项目
- 编辑项目：
- **/note edit** <索引> <内容> 覆盖现有项目 完成提供旧值
- **/note bump** <索引> 将项目向上移动一个位置
- **/note bump** <索引> <偏移量> 将项目移动到给定的位数 正值向上移动 负值向下移动
- **/note move** <旧索引> <新索引> 将项目从一个索引移动到另一个索引
- Hud控制：
- **/note hide** 将Hud设置为“打开”或“关闭”