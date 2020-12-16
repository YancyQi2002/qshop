// 引入mock对象
import Mock from 'mockjs'

/*
Mock.mock('/meun', /post|get/i, {
  // /post|get/i 匹配post和get模式 也可以用'post'或'get'
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|1-10': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    // 随机数字1-100
    'number|1-100': 100,
    // 返回city数组，每次里面有三个
    'city|3': {
      '310000': '上海市',
      '320000': '江苏省',
      '330000': '浙江省',
      '340000': '安徽省'
    }
  }]
})
*/
//图书数据
var books=[
      {id:1, type:"tool", title:"Vue官方指南", desc:"130个实例演示+300多个源码解析+PPT课件，Web前端开发书籍。", author:"李...", pic:"s1.jpg" ,price:45,},
      {id:2, type:"tool", title:"Vue21天", desc:"Vue.js从入门到实战视频教程，深入剖析Vue.js源码。", author:"王...", pic:"s2.jpg" ,price:35,},
      {id:3, type:"tool", title:"Vue精通", desc:"360奇舞团团长月影和《JavaScript高级程序设计》译者李松峰作序推荐。", author:"张...", pic:"s3.jpg" ,price:55,},
      {id:4, type:"tool", title:"Vue深入浅出", desc:"与React|Angular三分天下 大热框架首著惊现 Vue之父作序力荐", author:"赵...", pic:"s4.jpg" ,price:22,},
      {id:5, type:"tool", title:"Vue入门", desc:"本书适合正在准备或已经使用Vue.js进行Web应用程序开发的从业者。", author:"刘...", pic:"s5.jpg" ,price:74,},

      {id:6, type:"novel", title:"红楼梦", desc:"红楼梦塑造了众多的人物形象，在中国文学史和世界文学史上永远放射着奇光异彩。", author:"曹雪芹", pic:"honglm.jpg" ,price:33,},
      {id:7, type:"novel", title:"西游记", desc:"主要描写的是孙悟空保唐僧西天取经，历经九九八十一难的故事。", author:"吴承恩", pic:"xiyj.jpg" ,price:68,},
      {id:8, type:"novel", title:"水浒传", desc:"一部长篇英雄传奇，是中国古代长篇小说的代表作之一，是以宋江起义故事为线索创作出来的。", author:"施耐庵", pic:"shuih.jpg" ,price:28,},
      {id:9, type:"novel", title:"三国演义", desc:"他们各自具有自己独特而鲜明的个性特征，成为不朽的艺术典型。", author:"罗贯中", pic:"sang.jpg" ,price:74,},
]

var users=[
  {id:1, name:'寒江', pic:'user1.svg'},
  {id:2, name:'孤影', pic:'user2.svg'},
  {id:3, name:'故人', pic:'user3.svg'},
  null,
]

//网站标题
Mock.mock('/title',/post|get/i, {
  'title': '求知书场',
})

//轮播列表
Mock.mock('/swipe',/post|get/i, {
  'swipeList': ["s1.jpg","s2.jpg","s3.jpg","s4.jpg","s5.jpg","s6.jpg"],
})

//九宫格列表
Mock.mock('/grid9', /post|get/i, {
  'gridList': [
    {id: "/Category", pic: "menu1.png", title: "新闻资讯"},
    {id: "/Category", pic: "menu2.png", title: "图片分享"},
    {id: "/Category", pic: "menu3.png", title: "商品购买"},
    {id: "/Category", pic: "menu4.png", title: "留言反馈"},
    {id: "/Category", pic: "menu5.png", title: "视频专区"},
    {id: "/Category", pic: "menu6.png", title: "联系我们"},
  ]
})

//图书栏目
Mock.mock('/category', /post|get/i, {
  'categoryList': [
    {type: "novel", pic: "novel.svg", title: "小说"},
    {type: "science", pic: "science.svg", title: "科普"},
    {type: "art", pic: "art.svg", title: "艺术"},
    {type: "history", pic: "history.svg", title: "历史"},
    {type: "tool", pic: "tool.svg", title: "编程"},
  ]
})

//书籍
Mock.mock('/allbook', /post|get/i, {
    'books':books,
})

//书籍
//options是post传递过来的参数
//item.type即传递过来的图书类别，例如'tool'
Mock.mock("/booktype", "post", (options) =>{
  let item = JSON.parse(options.body)
  return {
    'books': books.filter(n => n.type == item.type) // 过滤，只保留图书类型是查询类别的图书
  }
})

//书籍
//options是post传递过来的参数
//item.input即传递过来的书名、作者
//search字符串包含
Mock.mock("/books", "post", (options) =>{
  let item =JSON.parse(options.body)
  return {
    'books': books.filter( n => n.title.search(item.input) != -1
      || n.author.search(item.input) != -1
      || n.desc.search(item.input) != -1)
  }
})

//根据id返回一本书
Mock.mock("/book", "post", (options) =>{
  var books=[
        {id:1, type:"tool", title:"Vue官方指南", desc:"130个实例演示+300多个源码解析+PPT课件，Web前端开发书籍。", author:"李...", pic:"s1.jpg" ,price:45,},
        {id:2, type:"tool", title:"Vue21天", desc:"Vue.js从入门到实战视频教程，深入剖析Vue.js源码。", author:"王...", pic:"s2.jpg" ,price:35,},
        {id:3, type:"tool", title:"Vue精通", desc:"360奇舞团团长月影和《JavaScript高级程序设计》译者李松峰作序推荐。", author:"张...", pic:"s3.jpg" ,price:55,},
        {id:4, type:"tool", title:"Vue深入浅出", desc:"与React|Angular三分天下 大热框架首著惊现 Vue之父作序力荐", author:"赵...", pic:"s4.jpg" ,price:22,},
        {id:5, type:"tool", title:"Vue入门", desc:"本书适合正在准备或已经使用Vue.js进行Web应用程序开发的从业者。", author:"刘...", pic:"s5.jpg" ,price:74,},
        {id:6, type:"novel", title:"红楼梦", desc:"红楼梦塑造了众多的人物形象，在中国文学史和世界文学史上永远放射着奇光异彩。", author:"曹雪芹", pic:"honglm.jpg" ,price:33,},
        {id:7, type:"novel", title:"西游记", desc:"主要描写的是孙悟空保唐僧西天取经，历经九九八十一难的故事。", author:"吴承恩", pic:"xiyj.jpg" ,price:68,},
        {id:8, type:"novel", title:"水浒传", desc:"一部长篇英雄传奇，是中国古代长篇小说的代表作之一，是以宋江起义故事为线索创作出来的。", author:"施耐庵", pic:"shuih.jpg" ,price:28,},
        {id:9, type:"novel", title:"三国演义", desc:"他们各自具有自己独特而鲜明的个性特征，成为不朽的艺术典型。", author:"罗贯中", pic:"sang.jpg" ,price:74,},
  ]

})

//随机返回一名登录用户，可能是null（即没登录）
Mock.mock('/user', /post|get/i, {

})
