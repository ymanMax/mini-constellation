Page({
  data: {
    testList: [
      {
        id: 1,
        title: '星座性格测试',
        desc: '揭示你的真实性格特质',
        type: 'personality',
        questions: [
          {
            question: '当你参加聚会时，你通常会？',
            options: [
              { text: '主动与新朋友交流', score: 5 },
              { text: '和熟悉的人聊天', score: 3 },
              { text: '安静地待在角落', score: 1 }
            ]
          },
          {
            question: '你做决定时更依赖？',
            options: [
              { text: '直觉和感觉', score: 5 },
              { text: '理性分析', score: 3 },
              { text: '他人建议', score: 1 }
            ]
          },
          {
            question: '你更喜欢哪种休闲方式？',
            options: [
              { text: '参加热闹的活动', score: 5 },
              { text: '在家看书或看电影', score: 3 },
              { text: '户外活动', score: 4 }
            ]
          },
          {
            question: '面对压力时，你会？',
            options: [
              { text: '寻求他人帮助', score: 2 },
              { text: '独自解决', score: 4 },
              { text: '暂时逃避', score: 1 }
            ]
          },
          {
            question: '你认为自己是一个？',
            options: [
              { text: '充满创意的人', score: 5 },
              { text: '务实可靠的人', score: 3 },
              { text: '随和友好的人', score: 4 }
            ]
          }
        ]
      },
      {
        id: 2,
        title: '星座爱情测试',
        desc: '了解你的爱情观和匹配类型',
        type: 'love',
        questions: [
          {
            question: '你认为爱情中最重要的是？',
            options: [
              { text: '激情和浪漫', score: 5 },
              { text: '信任和忠诚', score: 3 },
              { text: '共同的兴趣', score: 4 }
            ]
          },
          {
            question: '当你喜欢上一个人，你会？',
            options: [
              { text: '主动表白', score: 5 },
              { text: '暗示对方', score: 3 },
              { text: '等待对方行动', score: 1 }
            ]
          },
          {
            question: '你更看重伴侣的？',
            options: [
              { text: '外貌和气质', score: 4 },
              { text: '内在品质', score: 5 },
              { text: '经济条件', score: 2 }
            ]
          },
          {
            question: '处理感情矛盾时，你会？',
            options: [
              { text: '直接沟通', score: 4 },
              { text: '冷战等待', score: 1 },
              { text: '寻求妥协', score: 5 }
            ]
          },
          {
            question: '你理想的约会是？',
            options: [
              { text: '浪漫的烛光晚餐', score: 5 },
              { text: '轻松的户外散步', score: 3 },
              { text: '一起看电影', score: 4 }
            ]
          }
        ]
      }
    ],
    currentTest: null,
    currentQuestionIndex: 0,
    userAnswers: [],
    showResult: false,
    result: null
  },

  onLoad() {
    console.log('测试页面加载')
  },

  startTest(e) {
    const { testIndex } = e.currentTarget.dataset
    const test = this.data.testList[testIndex]
    this.setData({
      currentTest: test,
      currentQuestionIndex: 0,
      userAnswers: [],
      showResult: false,
      result: null
    })
  },

  selectAnswer(e) {
    const { answerScore } = e.currentTarget.dataset
    const { currentTest, currentQuestionIndex, userAnswers } = this.data

    const newAnswers = [...userAnswers, answerScore]
    const nextQuestionIndex = currentQuestionIndex + 1

    if (nextQuestionIndex < currentTest.questions.length) {
      this.setData({
        userAnswers: newAnswers,
        currentQuestionIndex: nextQuestionIndex
      })
    } else {
      this.calculateResult([...newAnswers, answerScore])
    }
  },

  calculateResult(answers) {
    const totalScore = answers.reduce((sum, score) => sum + score, 0)
    const { currentTest } = this.data

    let result = {}

    if (currentTest.type === 'personality') {
      if (totalScore >= 20) {
        result = {
          title: '外向型人格',
          description: '你充满活力，喜欢社交，总是能够带动周围的气氛。你的乐观和热情感染着每一个人。',
          suggestion: '继续保持你的活力，但也要注意倾听他人的意见。',
          matchedStar: '白羊座、狮子座、射手座'
        }
      } else if (totalScore >= 12) {
        result = {
          title: '平衡型人格',
          description: '你既能够享受社交的乐趣，也能够安静地独处。你是一个很好的倾听者和沟通者。',
          suggestion: '保持你的平衡，在不同的场合展现不同的自己。',
          matchedStar: '双子座、天秤座、水瓶座'
        }
      } else {
        result = {
          title: '内向型人格',
          description: '你喜欢深度思考，注重内心世界。你是一个可靠的朋友，总是能够给予真诚的建议。',
          suggestion: '不要害怕表达自己，你的想法很有价值。',
          matchedStar: '金牛座、天蝎座、摩羯座'
        }
      }
    } else if (currentTest.type === 'love') {
      if (totalScore >= 20) {
        result = {
          title: '浪漫主义者',
          description: '你相信爱情的力量，追求完美的浪漫。你愿意为爱情付出一切。',
          suggestion: '浪漫很重要，但也要注重现实生活的经营。',
          matchedStar: '双鱼座、巨蟹座、天蝎座'
        }
      } else if (totalScore >= 12) {
        result = {
          title: '理性恋人',
          description: '你用理性的方式看待爱情，注重共同的价值观和生活目标。',
          suggestion: '偶尔也需要一些浪漫的惊喜来滋润感情。',
          matchedStar: '处女座、摩羯座、水瓶座'
        }
      } else {
        result = {
          title: '谨慎型恋人',
          description: '你在爱情中比较谨慎，需要时间来建立信任和感情。',
          suggestion: '勇敢一些，爱情需要冒险和尝试。',
          matchedStar: '金牛座、天秤座、双子座'
        }
      }
    }

    this.setData({
      result: result,
      showResult: true
    })
  },

  backToTestList() {
    this.setData({
      currentTest: null,
      currentQuestionIndex: 0,
      userAnswers: [],
      showResult: false,
      result: null
    })
  },

  retakeTest() {
    this.setData({
      currentQuestionIndex: 0,
      userAnswers: [],
      showResult: false,
      result: null
    })
  }
})
