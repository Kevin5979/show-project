// 注意: 这里的type必须与侧边栏名字一样
const html_css = [
  {
    type: "html_css",
    _id: "000",
    title: "初入前端世界",
    detail: "认识浏览器与服务器",
    label: "label_notes",
    img:
      "http://iph.href.lu/300x250?text=认识浏览器与服务器&fg=f44336&bg=cccccc",
    linkURL: "https://www.jianshu.com/p/d497faab1813",
    downloadURL: "/download/html_css/认识浏览器与服务器.zip"
  },
  {
    type: "html_css",
    _id: "001",
    title: "前期预告",
    detail: "主要介绍开发环境的准备",
    label: "label_notes",
    img:
      "https://iph.href.lu/300x250?text=搭建基本开发环境&fg=f44336&bg=cccccc",
    linkURL: "https://www.jianshu.com/p/3cff12ac9daa",
    downloadURL: "/download/html_css/前期预告.zip"
  },
  {
    type: "html_css",
    _id: "002",
    title: "HTML标签一",
    detail: "介绍HTML标签",
    label: "label_notes",
    img:
      "https://iph.href.lu/300x250?text=HTML标签一&fg=f44336&bg=cccccc",
    linkURL: "https://www.jianshu.com/p/6cf97cde6eef",
    downloadURL: "/download/html_css/HTML标签一.zip"
  },
  {
    type: "html_css",
    _id: "003",
    title: "HTML标签二",
    detail: "介绍HTML标签",
    label: "label_notes",
    img:
      "https://iph.href.lu/300x250?text=HTML标签二&fg=f44336&bg=cccccc",
    linkURL: "https://www.jianshu.com/p/4b811abf7244",
    downloadURL: "/download/html_css/HTML标签二.zip"
  },
  {
    type: "html_css",
    _id: "004",
    title: "HTML标签三",
    detail: "介绍HTML标签",
    label: "label_notes",
    img:
      "https://iph.href.lu/300x250?text=HTML标签三&fg=f44336&bg=cccccc",
    linkURL: "https://www.jianshu.com/p/aa8d23c30bb2",
    downloadURL: "/download/html_css/HTML标签三.zip"
  },
  {
    type: "html_css",
    _id: "005",
    title: "HTML标签四",
    detail: "介绍HTML标签",
    label: "label_notes",
    img:
      "https://iph.href.lu/300x250?text=HTML标签四&fg=f44336&bg=cccccc",
    linkURL: "https://www.jianshu.com/p/426f197e25a6",
    downloadURL: "/download/html_css/HTML标签四.zip"
  },
  {
    type: "html_css",
    _id: "006",
    title: "CSS3语法",
    detail: "总结CSS3语法",
    label: "label_notes",
    img:
      "https://iph.href.lu/300x250?text=CSS3语法&fg=f44336&bg=cccccc",
    linkURL: "https://www.jianshu.com/p/d08d4823c22f",
    downloadURL: "/download/html_css/CSS3语法.zip"
  },
  {
    type: "html_css",
    _id: "007",
    title: "CSS3练习",
    detail: "CSS3实战案例练习",
    label: "label_views",
    sign: "PC",
    img: "https://iph.href.lu/300x250?text=CSS3练习&fg=f44336&bg=cccccc",
    linkURL: "/share/html_css/css3_case/index.html",
    downloadURL: "/download/html_css/css3_case.zip"
  },
  {
    type: "html_css",
    _id: "008",
    title: "静态vivo官网",
    detail: "利用html+css实现vivo静态官网",
    label: "label_views",
    sign: "PC",
    img: "https://iph.href.lu/300x250?text=静态vivo官网&fg=f44336&bg=cccccc",
    linkURL: "/share/html_css/vivo官网/index.html",
    downloadURL: "/download/html_css/vivo官网.zip"
  },
  {
    type: "html_css",
    _id: "009",
    title: "静态淘宝页面",
    detail: "利用html + css 完成淘宝静态页面的制作",
    label: "label_views",
    sign: "PC",
    img:
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593590266212&di=1863c9d0abe39f4891e2250f574a3d6d&imgtype=0&src=http%3A%2F%2Fimage1.hhczy.com%2Fweb%2F2013%2F8%2F5%2F2153110514770192.700x700.jpg",
    linkURL: "/share/html_css/taobao/HTML/index.html",
    downloadURL: "/download/html_css/taobao.zip"
  }
]

const JavaScript = [
  {
    type: "JavaScript",
    _id: "010",
    title: "酷狗移动端进入动画",
    detail: "javaScript + swiper实现酷狗移动端进入动画",
    label: "label_views",
    sign: "移动",
    img:
      "https://webimg.kgimg.com/e4f108fff3fa92bbad49f1527e0bb44b.png",
    linkURL: "/share/javaScript/kugou/index.html",
    downloadURL: "/download/javaScript/kugou.zip"
  }
]

export default () => {
  return {
    html_css,
    JavaScript
  }
}