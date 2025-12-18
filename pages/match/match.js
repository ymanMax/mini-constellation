import { starNavData } from '../index/initData'

Page({
  data: {
    starNavData,
    starNames: [],
    star1Index: 0,
    star2Index: 1,
    showResult: false,
    matchResult: {}
  },

  onLoad() {
    // 构建星座名称数组用于picker
    const starNames = starNavData.map(star => star.astroname)
    this.setData({
      starNames
    })
  },

  // 选择第一个星座
  onStar1Change(e) {
    const index = parseInt(e.detail.value)
    this.setData({
      star1Index: index,
      showResult: false
    })
  },

  // 选择第二个星座
  onStar2Change(e) {
    const index = parseInt(e.detail.value)
    this.setData({
      star2Index: index,
      showResult: false
    })
  },

  // 开始配对
  onMatch() {
    const { star1Index, star2Index } = this.data
    const matchResult = this.getMatchResult(star1Index, star2Index)

    this.setData({
      matchResult,
      showResult: true
    })
  },

  // 获取配对结果（mock数据）
  getMatchResult(star1Index, star2Index) {
    // 生成随机配对指数（60-95之间）
    const baseScore = 60 + Math.floor(Math.random() * 36)

    // 星座名称
    const star1 = starNavData[star1Index].astroname
    const star2 = starNavData[star2Index].astroname

    // 配对分析模板
    const analysisTemplates = [
      `${star1}和${star2}的配对充满了吸引力和互补性。双方在性格上能够很好地互补，${star1}的热情主动搭配${star2}的温柔体贴，能够创造出美好的爱情氛围。`,
      `${star1}与${star2}的组合是一对充满活力和创意的组合。双方都具有强烈的好奇心和探索精神，在一起能够共同探索新的事物，创造出许多美好的回忆。`,
      `${star1}和${star2}的配对需要双方更多的理解和包容。虽然双方在一开始会被彼此的不同所吸引，但长期相处需要更多的沟通和妥协，才能让关系更加稳定。`,
      `${star1}与${star2}是一对非常默契的组合。双方在很多方面都有着共同的理念和价值观，能够很好地理解彼此的想法和感受，在一起会感到非常的舒适和自在。`
    ]

    // 爱情、亲情、友情评价模板
    const loveTemplates = [
      `在爱情方面，${star1}和${star2}有着很强的吸引力。${star1}的浪漫情怀能够深深打动${star2}，而${star2}的细心呵护也能让${star1}感受到温暖。`,
      `爱情对于${star1}和${star2}来说是充满激情的。双方都有着强烈的情感表达，在一起时能够感受到浓烈的爱意，这种激情能够让他们的感情保持新鲜。`
    ]

    const familyTemplates = [
      `在亲情方面，${star1}和${star2}能够形成非常和谐的家庭关系。${star1}的责任感和${star2}的顾家观念能够让家庭充满温馨和安全感。`,
      `作为家人，${star1}和${star2}能够相互支持和理解。${star1}会为家庭付出很多努力，而${star2}则会在背后默默支持，这种互补让家庭更加稳固。`
    ]

    const friendshipTemplates = [
      `在友情方面，${star1}和${star2}是非常好的朋友。他们有着共同的兴趣爱好，能够一起分享快乐和烦恼，这种真挚的友谊能够持续很长时间。`,
      `${star1}和${star2}的友谊是建立在相互信任和尊重的基础上的。他们能够理解彼此的差异，并且欣赏对方的优点，这种健康的友谊能够让双方都得到成长。`
    ]

    const noticeTemplates = [
      `需要注意的是，${star1}有时会过于冲动，而${star2}则可能会过于敏感。双方在相处时要注意控制自己的情绪，多站在对方的角度考虑问题，这样才能避免不必要的矛盾。`,
      `虽然${star1}和${star2}的配对非常不错，但也需要双方共同努力维护。平时要多沟通交流，分享彼此的想法和感受，同时也要给对方足够的个人空间，这样才能让关系更加健康发展。`
    ]

    // 随机选择模板
    const getRandomTemplate = (templates) => {
      return templates[Math.floor(Math.random() * templates.length)]
    }

    return {
      score: baseScore,
      analysis: getRandomTemplate(analysisTemplates),
      love: getRandomTemplate(loveTemplates),
      family: getRandomTemplate(familyTemplates),
      friendship: getRandomTemplate(friendshipTemplates),
      notice: getRandomTemplate(noticeTemplates)
    }
  }
})
