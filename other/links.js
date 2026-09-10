// ================================================================
//  网站链接数据 — 直接使用 HTML 标签（模板字符串）
//  每条链接前后无单引号，整体由反引号包裹
// ================================================================
const LINK_HTML = `

<a href="https://www.sogou.com/" target="_blank" rel="noopener noreferrer">搜狗</a>
<a href="https://www.baidu.com/" target="_blank" rel="noopener noreferrer">百度</a>
<a href="https://haisou.cc/" target="_blank" rel="noopener noreferrer">网盘海搜</a>
<a href="https://www.ak47s.cn/" target="_blank" rel="noopener noreferrer">AK47s导航</a>
<a href="http://www.soyy123.com/" target="_blank" rel="noopener noreferrer">音乐导航</a>
<a href="https://www.daott.cn/" target="_blank" rel="noopener noreferrer">不找了.cn</a>
<a href="https://yinghezhinan.com/" target="_blank" rel="noopener noreferrer">硬核导航</a>
<a href="https://t.hsya.top/tags" target="_blank" rel="noopener noreferrer">资源网</a>
<a href="https://typhoon.weather.com.cn/gis/typhoon_m.shtml" target="_blank" rel="noopener noreferrer">天气雷达</a>
<a href="https://typhoon.slt.zj.gov.cn/" target="_blank" rel="noopener noreferrer">台风路径</a>
<a href="https://www.qweather.com/weather/putian-101230401.html" target="_blank" rel="noopener noreferrer">和风天气</a>
<a href="https://hsya.top/periodic/" target="_blank" rel="noopener noreferrer">元素周期表</a>
<a href="https://a.cjw123.com/" target="_blank" rel="noopener noreferrer">个人导航</a>
<a href="https://www.webnav.net/" target="_blank" rel="noopener noreferrer">全网导航</a>
<a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">淘宝</a>
<a href="https://www.315jiage.cn/" target="_blank" rel="noopener noreferrer">兔灵医药</a>
<a href="http://wh.seaflysoft.com/" target="_blank" rel="noopener noreferrer">海翔系统</a>
<a href="http://www.wxno.com/" target="_blank" rel="noopener noreferrer">卫星街景</a>
<a href="https://www.douyin.com/" target="_blank" rel="noopener noreferrer">抖音</a>
<a href="https://tv.cctv.com/live/" target="_blank" rel="noopener noreferrer">央视网</a>
<a href="http://www.cnr.cn/gbzb/" target="_blank" rel="noopener noreferrer">央广网</a>
<a href="https://www.rili.com.cn/" target="_blank" rel="noopener noreferrer">日历网</a>
<a href="https://www.eastmoney.com/" target="_blank" rel="noopener noreferrer">东方财富网</a>
<a href="https://www.tianshujisuanqi.com/" target="_blank" rel="noopener noreferrer">天数计算器</a>
<a href="https://cs.yikm.net/" target="_blank" rel="noopener noreferrer">CS1.6</a>
<a href="https://www.yikm.net/play?id=5341" target="_blank" rel="noopener noreferrer">三国志</a>
<a href="https://www.yikm.net/play?id=5334" target="_blank" rel="noopener noreferrer">恐龙快打</a>
<a href="https://www.yikm.net/play?id=5329" target="_blank" rel="noopener noreferrer">拳皇2000</a>
<a href="https://www.yikm.net/play?id=37322" target="_blank" rel="noopener noreferrer">拳皇1.91</a>
<a href="https://www.babelabc.com/" target="_blank" rel="noopener noreferrer">看美剧学英语</a>
<a href="https://paperme.toolooz.com/" target="_blank" rel="noopener noreferrer">纸张模板网站</a>
<a href="https://xgzb.top/han" target="_blank" rel="noopener noreferrer">字帖生成器</a>
<a href="https://www.xjlz365.com" target="_blank" rel="noopener noreferrer">中药学习网</a>
<a href="https://appsj.szxuexiao.com/" target="_blank" rel="noopener noreferrer">小学试卷网</a>
<a href="https://www.528btc.com/coin/" target="_blank" rel="noopener noreferrer">币界圈</a>
<a href="https://app-789zan5upssh.appmiaoda.com/" target="_blank" rel="noopener noreferrer">html加密</a>
<a href="https://www.shijuan1.com/" target="_blank" rel="noopener noreferrer">第一考试卷</a>
<a href="http://www.08lr.cn/gongju/scdp.html" target="_blank" rel="noopener noreferrer">网页颜色对照表</a>
<a href="https://quote.cngold.org/gjs/gjhj_xhhj.html?key=au" target="_blank" rel="noopener noreferrer">今日金价</a>
<a href="   http://www.kuquidc.com/zhanzhang/yuanma.php   " target="_blank" rel="noopener noreferrer">查网页代码</a>
<a href="https://fanyi.youdao.com/#/TextTranslate" target="_blank" rel="noopener noreferrer">有道词典</a>
<a href="https://tugaigai.com/online_ps/" target="_blank" rel="noopener noreferrer">在线PS</a>
<a href="http://mosi.fjnews.com/" target="_blank" rel="noopener noreferrer">摩斯密码</a>
<a href="https://github.com/" target="_blank" rel="noopener noreferrer">github</a>
<a href="https://www.nezhadazi.com/course/pinyin.html" target="_blank" rel="noopener noreferrer">哪吒打字通</a>
<a href="https://qwerty.kaiyi.cool/" target="_blank" rel="noopener noreferrer">qwerty英语打字通</a>
<a href="https://dz.wubidz.cn/index.php" target="_blank" rel="noopener noreferrer">在线打字练习</a>
<a href="http://www.daziba.cn/zflx/zflx1.aspx" target="_blank" rel="noopener noreferrer">基础按键练习打字</a>
<a href="http://www.08lr.cn/game/xiangqi/zgxq.html" target="_blank" rel="noopener noreferrer">中国象棋</a>
<a href="https://www.xdf.cn/zhuanti/bd-phonetic-alphabet-card/index.html" target="_blank" rel="noopener noreferrer">英语48个音标</a>

<a href="http://www.08lr.cn/gongju/" target="_blank" rel="noopener noreferrer">实用工具</a>
<a href="https://ai-bot.cn/" target="_blank" rel="noopener noreferrer">Ai工具网</a>
<a href="https://tool.liumingye.cn/" target="_blank" rel="noopener noreferrer">明野工具网</a>
<a href="https://www.jyshare.com/" target="_blank" rel="noopener noreferrer">菜鸟工具</a>
<a href="http://www.08lr.cn/soft/" target="_blank" rel="noopener noreferrer">免费软件</a>
<a href="https://cli.im/" target="_blank" rel="noopener noreferrer">草料二维码</a>
<a href="https://tools.thatwind.com/" target="_blank" rel="noopener noreferrer">那风工具</a>
<a href="https://www.iamwawa.cn/" target="_blank" rel="noopener noreferrer">哇哇工具</a>
<a href="https://www.fulimama.com/" target="_blank" rel="noopener noreferrer">万能在线工具</a>
<a href="https://www.genha.com/" target="_blank" rel="noopener noreferrer">跟哈工具</a>
<a href="http://www.ab173.com/gongju/convert/jscodeconfusion.php" target="_blank" rel="noopener noreferrer">js混淆工具</a>
<a href="https://m.runoob.com/" target="_blank" rel="noopener noreferrer">菜鸟教程</a>
<a href="https://www.ziyuan.tv/" target="_blank" rel="noopener noreferrer">资源分享网</a>
<a href="https://www.52gxw.com/" target="_blank" rel="noopener noreferrer">吾爱共享网</a>
<a href="   https://www.52pojie.cn/   " target="_blank" rel="noopener noreferrer">吾爱破解</a>
<a href="https://www.gorg.com.cn/" target="_blank" rel="noopener noreferrer">共享网站个人</a>
<a href="https://getm3u8.com/" target="_blank" rel="noopener noreferrer">m3u8下载</a>
<a href="https://m3u8play.org/" target="_blank" rel="noopener noreferrer">m3u8播放下载</a>
<a href="https://snapany.com/zh" target="_blank" rel="noopener noreferrer">万能视频解析</a>
<a href="https://www.v2ob.com/douyin" target="_blank" rel="noopener noreferrer">短视频下载</a>
<a href="https://www.geilian.com/" target="_blank" rel="noopener noreferrer">给链vip解析</a>
<a href="https://shuiying.nxux.cn/index.html" target="_blank" rel="noopener noreferrer">短视频解析1</a>
<a href="https://bitemm.com/" target="_blank" rel="noopener noreferrer">短视频解析2</a>
<a href="https://video.5imac.net/" target="_blank" rel="noopener noreferrer">短视频解析3</a>
<a href="https://www.meijiecao.top/jiexi/" target="_blank" rel="noopener noreferrer">VIP解析mjc</a>
<a href="https://sc.chinaz.com/" target="_blank" rel="noopener noreferrer">站长素材</a>


<a href="https://im1907.top/?jx=" target="_blank" rel="noopener noreferrer">搜片影视</a>

<a href="https://kanju11.com" target="_blank" rel="noopener noreferrer">看剧网1</a>
<a href="https://kanju21.com" target="_blank" rel="noopener noreferrer">看剧网2</a>
<a href="https://www.bmmyy.com/" target="_blank" rel="noopener noreferrer">影视导航</a>
<a href="https://piaofang.maoyan.com/" target="_blank" rel="noopener noreferrer">票房</a>
<a href="https://www.mgtv.com/vip/" target="_blank" rel="noopener noreferrer">芒果</a>
<a href="https://www.bilibili.com/" target="_blank" rel="noopener noreferrer">B站</a>
<a href="https://v.qq.com" target="_blank" rel="noopener noreferrer">腾讯视频</a>
<a href="https://www.iqiyi.com" target="_blank" rel="noopener noreferrer">爱奇艺</a>
<a href="https://youku.com" target="_blank" rel="noopener noreferrer">优酷</a>
<a href="http://www.8080s.org/" target="_blank" rel="noopener noreferrer">80s手机电影</a>
<a href="https://www.tbsrhz.com/" target="_blank" rel="noopener noreferrer">片吧影视</a>
<a href="https://www.bajie2028.com/" target="_blank" rel="noopener noreferrer">八戒影视</a>
<a href="https://www.dytt8899.com/" target="_blank" rel="noopener noreferrer">电影天堂</a>
<a href="https://www.hyxkblg.com/" target="_blank" rel="noopener noreferrer">恒业影视</a>
<a href="https://www.1905.com/vod/" target="_blank" rel="noopener noreferrer">1905影视</a>
<a href="https://www.dayofrights.com/" target="_blank" rel="noopener noreferrer">电光界影视</a>
<a href="https://nnyy.la/" target="_blank" rel="noopener noreferrer">努努影院</a>
<a href="http://56dy.com/" target="_blank" rel="noopener noreferrer">我乐电影</a>
<a href="https://www.qcdy51.com/" target="_blank" rel="noopener noreferrer">清朝电影</a>
<a href="https://www.wgisnhi.cn/" target="_blank" rel="noopener noreferrer">伽马影视</a>
<a href="https://www.zssypx.com/vodtype/1.html" target="_blank" rel="noopener noreferrer">麻花影视</a>
<a href="https://ryzy4.tv/" target="_blank" rel="noopener noreferrer">如意资源</a>
<a href="https://www.sdieia.com/" target="_blank" rel="noopener noreferrer">秋霞影视</a>
<a href="https://www.btbtla.com/?www.bmmyy.com" target="_blank" rel="noopener noreferrer">BT影视下载</a>
<a href="https://www.qqmp3.vip/" target="_blank" rel="noopener noreferrer">米兔音乐</a>
<a href="https://www.mvmp3.com/" target="_blank" rel="noopener noreferrer">无名音乐网</a>
<a href="https://www.wuqupan.com/" target="_blank" rel="noopener noreferrer">舞曲网</a>
<a href="https://www.92kk.com/" target="_blank" rel="noopener noreferrer">9yyc音乐网</a>
<a href="https://www.djgem.com/" target="_blank" rel="noopener noreferrer">dj音乐网</a>
<a href="https://www.buguyy.top/" target="_blank" rel="noopener noreferrer">布谷音乐</a>
<a href="http://qjjlb.quanjian.com.cn/musicdl/" target="_blank" rel="noopener noreferrer">皮卡丘的音乐站</a>
<a href="https://www.djyyy.com/" target="_blank" rel="noopener noreferrer">DJ音乐在线</a>
<a href="https://www.btsj6.com/" target="_blank" rel="noopener noreferrer">世界网高清电影下载</a>
<a href="https://288819.com/" target="_blank" rel="noopener noreferrer">电影下载网</a>
<a href="https://www.dygod.vip/" target="_blank" rel="noopener noreferrer">电影天堂</a>
<a href="https://www.66yingshi.com/" target="_blank" rel="noopener noreferrer">66影视</a>
<a href="https://wooyun.tv/" target="_blank" rel="noopener noreferrer">乌云影视</a>
<a href="https://ocrfree.netlify.app/" target="_blank" rel="noopener noreferrer">OCR专家</a>
<a href="https://ttsmaker.cn/" target="_blank" rel="noopener noreferrer">在线配音</a>

<a href="https://www.24bit.net/" target="_blank" rel="noopener noreferrer">无损音乐下载</a>
<a href="https://music.gdstudio.org/" target="_blank" rel="noopener noreferrer">音乐播放</a>


`;

// ================================================================
//  渲染链接到页面（直接插入 HTML）
// ================================================================
(function renderSites() {
    const grid = document.getElementById('sitesGrid');
    if (!grid) return;
    grid.innerHTML = LINK_HTML;
})();