// mini-constellation项目mock数据

// 模拟延迟函数
export const mockDelay = (data, delay = 500) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
};

// 星座运势数据
export const constellationData = {
  code: "success",
  data: [
    {
      id: "1",
      name: "白羊座",
      date: "2024-01-15",
      overall: "★★★★☆",
      love: "★★★★☆",
      career: "★★★☆☆",
      wealth: "★★★★☆",
      health: "★★★☆☆",
      luckyColor: "红色",
      luckyNumber: "7",
      summary: "今天白羊座的整体运势不错，感情方面会有惊喜，但工作方面需要多加注意。",
      advice: "保持积极心态，注意与同事的沟通。"
    },
    {
      id: "2",
      name: "金牛座",
      date: "2024-01-15",
      overall: "★★★☆☆",
      love: "★★★☆☆",
      career: "★★★★☆",
      wealth: "★★★☆☆",
      health: "★★★★☆",
      luckyColor: "绿色",
      luckyNumber: "3",
      summary: "金牛座今天工作运势较好，但财运方面需要谨慎投资。",
      advice: "专注工作，避免冲动消费。"
    },
    {
      id: "3",
      name: "双子座",
      date: "2024-01-15",
      overall: "★★★★☆",
      love: "★★★★☆",
      career: "★★★★☆",
      wealth: "★★★☆☆",
      health: "★★★☆☆",
      luckyColor: "黄色",
      luckyNumber: "5",
      summary: "双子座今天各方面运势都不错，特别是感情和工作方面。",
      advice: "把握机会，展现自己的才华。"
    },
    {
      id: "4",
      name: "巨蟹座",
      date: "2024-01-15",
      overall: "★★★☆☆",
      love: "★★★☆☆",
      career: "★★★☆☆",
      wealth: "★★★★☆",
      health: "★★★☆☆",
      luckyColor: "白色",
      luckyNumber: "8",
      summary: "巨蟹座今天财运较好，但其他方面需要多加注意。",
      advice: "理财有道，注意身体健康。"
    },
    {
      id: "5",
      name: "狮子座",
      date: "2024-01-15",
      overall: "★★★★☆",
      love: "★★★★☆",
      career: "★★★★☆",
      wealth: "★★★★☆",
      health: "★★★☆☆",
      luckyColor: "金色",
      luckyNumber: "1",
      summary: "狮子座今天运势极佳，各方面都有不错的表现。",
      advice: "自信满满，勇往直前。"
    },
    {
      id: "6",
      name: "处女座",
      date: "2024-01-15",
      overall: "★★★☆☆",
      love: "★★★☆☆",
      career: "★★★☆☆",
      wealth: "★★★☆☆",
      health: "★★★★☆",
      luckyColor: "灰色",
      luckyNumber: "6",
      summary: "处女座今天健康运势较好，但其他方面需要努力。",
      advice: "注意休息，保持良好作息。"
    },
    {
      id: "7",
      name: "天秤座",
      date: "2024-01-15",
      overall: "★★★★☆",
      love: "★★★★☆",
      career: "★★★☆☆",
      wealth: "★★★★☆",
      health: "★★★☆☆",
      luckyColor: "蓝色",
      luckyNumber: "2",
      summary: "天秤座今天感情和财运都不错，工作方面需要加把劲。",
      advice: "平衡工作与生活，享受美好时光。"
    },
    {
      id: "8",
      name: "天蝎座",
      date: "2024-01-15",
      overall: "★★★☆☆",
      love: "★★★☆☆",
      career: "★★★★☆",
      wealth: "★★★☆☆",
      health: "★★★☆☆",
      luckyColor: "紫色",
      luckyNumber: "9",
      summary: "天蝎座今天工作运势较好，但其他方面需要谨慎。",
      advice: "专注工作，避免感情纠纷。"
    },
    {
      id: "9",
      name: "射手座",
      date: "2024-01-15",
      overall: "★★★★☆",
      love: "★★★★☆",
      career: "★★★☆☆",
      wealth: "★★★★☆",
      health: "★★★☆☆",
      luckyColor: "橙色",
      luckyNumber: "4",
      summary: "射手座今天感情和财运都不错，工作方面需要努力。",
      advice: "享受生活，积极面对挑战。"
    },
    {
      id: "10",
      name: "摩羯座",
      date: "2024-01-15",
      overall: "★★★☆☆",
      love: "★★★☆☆",
      career: "★★★★☆",
      wealth: "★★★☆☆",
      health: "★★★☆☆",
      luckyColor: "棕色",
      luckyNumber: "10",
      summary: "摩羯座今天工作运势较好，但其他方面需要多加注意。",
      advice: "努力工作，注意人际关系。"
    },
    {
      id: "11",
      name: "水瓶座",
      date: "2024-01-15",
      overall: "★★★★☆",
      love: "★★★★☆",
      career: "★★★★☆",
      wealth: "★★★☆☆",
      health: "★★★☆☆",
      luckyColor: "银色",
      luckyNumber: "11",
      summary: "水瓶座今天各方面运势都不错，特别是感情和工作。",
      advice: "发挥创意，展现独特魅力。"
    },
    {
      id: "12",
      name: "双鱼座",
      date: "2024-01-15",
      overall: "★★★☆☆",
      love: "★★★☆☆",
      career: "★★★☆☆",
      wealth: "★★★★☆",
      health: "★★★☆☆",
      luckyColor: "粉色",
      luckyNumber: "12",
      summary: "双鱼座今天财运较好，但其他方面需要努力。",
      advice: "理财有道，保持乐观心态。"
    }
  ]
};

// 星座详情数据
export const constellationDetailData = {
  code: "success",
  data: {
    id: "1",
    name: "白羊座",
    englishName: "Aries",
    dateRange: "3月21日-4月19日",
    element: "火象星座",
    rulingPlanet: "火星",
    symbol: "公羊",
    personality: "热情、勇敢、冲动、自信",
    strengths: "充满活力、行动力强、乐观积极",
    weaknesses: "急躁、缺乏耐心、容易冲动",
    loveCompatibility: "狮子座、射手座",
    careerSuitable: "运动员、军人、企业家",
    description: "白羊座是黄道十二宫的第一宫，象征着新的开始和生命的活力。白羊座的人通常充满热情和勇气，喜欢挑战和冒险。"
  }
};

// 星座配对数据
export const constellationMatchData = {
  code: "success",
  data: [
    {
      constellation1: "白羊座",
      constellation2: "狮子座",
      score: "90",
      description: "火象星座的完美组合，充满激情和活力"
    },
    {
      constellation1: "金牛座",
      constellation2: "处女座",
      score: "85",
      description: "土象星座的稳定组合，务实可靠"
    },
    {
      constellation1: "双子座",
      constellation2: "天秤座",
      score: "88",
      description: "风象星座的智慧组合，沟通顺畅"
    }
  ]
};