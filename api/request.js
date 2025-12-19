import { getEnvToken } from '../utils/index'
import { mockDelay, constellationData, constellationDetailData, constellationMatchData, reminderSettingData, reminderRecordData } from './mockData.js'

const { apiPath, token } = getEnvToken()
export const request = (path, method, data = {}) => {
  // console.info(`#api-------请求路径-------#:${apiPath}${path}`)
  // console.info(`#api-------请求参数-------#:${JSON.stringify(data)}`)

  // 使用mock数据替代真实网络请求
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 根据路径返回不同的mock数据
      let mockResponse = {
        code: "success",
        message: "请求成功",
        data: null
      };

      // 星座运势相关接口
      if (path.includes('/constellation/list')) {
        // 根据页面需求，返回一个包含多个日期数据的数组
        const constellationId = data.id || 1;
        const constellation = constellationData.data.find(item => item.id === constellationId.toString());
        
        if (constellation) {
          // 创建符合页面期望的数据结构
          mockResponse.data = [
            {
              vdate: '2024-01-15',
              desc: constellation.summary,
              index: [
                { t: '综合指数', v: constellation.overall, s: 4 },
                { t: '爱情指数', v: constellation.love, s: 4 },
                { t: '事业指数', v: constellation.career, s: 3 },
                { t: '财富指数', v: constellation.wealth, s: 4 },
                { t: '健康指数', v: constellation.health, s: 3 }
              ],
              content: [
                { t: '综合运势', v: constellation.summary },
                { t: '爱情运势', v: constellation.love + '，' + constellation.summary },
                { t: '事业运势', v: constellation.career + '，' + constellation.advice },
                { t: '财富运势', v: constellation.wealth + '，注意理财规划' },
                { t: '健康运势', v: constellation.health + '，保持良好作息' },
                { t: '幸运颜色', v: constellation.luckyColor },
                { t: '幸运数字', v: constellation.luckyNumber }
              ]
            },
            {
              vdate: '2024-01-16',
              desc: '明日运势整体平稳，适合规划未来',
              index: [
                { t: '综合指数', v: '★★★★☆', s: 4 },
                { t: '爱情指数', v: '★★★★☆', s: 4 },
                { t: '事业指数', v: '★★★☆☆', s: 3 },
                { t: '财富指数', v: '★★★★☆', s: 4 },
                { t: '健康指数', v: '★★★☆☆', s: 3 }
              ],
              content: [
                { t: '综合运势', v: '明日运势整体平稳，适合规划未来发展' },
                { t: '爱情运势', v: '感情方面会有小惊喜，单身者有机会遇到心仪对象' },
                { t: '事业运势', v: '工作方面需要耐心处理细节问题' },
                { t: '财富运势', v: '财运不错，但不宜进行大额投资' },
                { t: '健康运势', v: '注意休息，避免过度劳累' },
                { t: '幸运颜色', v: '蓝色' },
                { t: '幸运数字', v: '8' }
              ]
            },
            {
              vdate: '2024-01-17',
              desc: '本周运势稳中有升，把握机会',
              index: [
                { t: '综合指数', v: '★★★★☆', s: 4 },
                { t: '爱情指数', v: '★★★★☆', s: 4 },
                { t: '事业指数', v: '★★★★☆', s: 4 },
                { t: '财富指数', v: '★★★☆☆', s: 3 },
                { t: '健康指数', v: '★★★★☆', s: 4 }
              ],
              content: [
                { t: '综合运势', v: '本周运势稳中有升，适合把握机会展现自己' },
                { t: '爱情运势', v: '感情发展顺利，适合约会增进感情' },
                { t: '事业运势', v: '工作表现突出，有机会获得认可' },
                { t: '财富运势', v: '财运平稳，注意理性消费' },
                { t: '健康运势', v: '健康状况良好，继续保持' },
                { t: '幸运颜色', v: '绿色' },
                { t: '幸运数字', v: '3' }
              ]
            },
            {
              vdate: '2024-01-18',
              desc: '本月运势整体向好，积极进取',
              index: [
                { t: '综合指数', v: '★★★★☆', s: 4 },
                { t: '爱情指数', v: '★★★☆☆', s: 3 },
                { t: '事业指数', v: '★★★★☆', s: 4 },
                { t: '财富指数', v: '★★★★☆', s: 4 },
                { t: '健康指数', v: '★★★☆☆', s: 3 }
              ],
              content: [
                { t: '综合运势', v: '本月运势整体向好，适合积极进取' },
                { t: '爱情运势', v: '感情需要更多沟通和理解' },
                { t: '事业运势', v: '工作上有突破机会，勇于挑战' },
                { t: '财富运势', v: '财运不错，适合投资理财' },
                { t: '健康运势', v: '注意劳逸结合，保持身心健康' },
                { t: '幸运颜色', v: '金色' },
                { t: '幸运数字', v: '7' }
              ]
            },
            {
              vdate: '2024-01-19',
              desc: '今年运势充满机遇，把握时机',
              index: [
                { t: '综合指数', v: '★★★★☆', s: 4 },
                { t: '爱情指数', v: '★★★★☆', s: 4 },
                { t: '事业指数', v: '★★★★☆', s: 4 },
                { t: '财富指数', v: '★★★★☆', s: 4 },
                { t: '健康指数', v: '★★★★☆', s: 4 }
              ],
              content: [
                { t: '综合运势', v: '今年运势充满机遇，需要把握时机' },
                { t: '爱情运势', v: '感情生活丰富多彩，有望遇到真爱' },
                { t: '事业运势', v: '事业发展顺利，有晋升机会' },
                { t: '财富运势', v: '财运亨通，适合长期投资' },
                { t: '健康运势', v: '健康状况良好，注意保持' },
                { t: '幸运颜色', v: '紫色' },
                { t: '幸运数字', v: '9' }
              ]
            },
            {
              vdate: '2024-01-20',
              desc: '爱情运势甜蜜，珍惜当下',
              index: [
                { t: '单身运势', v: '★★★★☆', s: 4 },
                { t: '恋爱运势', v: '★★★★☆', s: 4 },
                { t: '婚姻运势', v: '★★★★☆', s: 4 }
              ],
              content: [
                { t: '单身运势', v: '单身者桃花运旺盛，有机会遇到心仪对象' },
                { t: '恋爱运势', v: '恋爱中感情甜蜜，适合约会增进感情' },
                { t: '婚姻运势', v: '婚姻生活和谐，夫妻关系融洽' },
                { t: '爱情建议', v: '珍惜眼前人，用心经营感情' }
              ]
            }
          ];
        } else {
          mockResponse.code = "error";
          mockResponse.message = "星座不存在";
        }
      } else if (path.includes('/constellation/detail')) {
        const constellationId = data.id || data.constellationId;
        const constellation = constellationData.data.find(item => item.id === constellationId);
        if (constellation) {
          mockResponse.data = {
            ...constellationDetailData.data,
            id: constellationId,
            name: constellation.name
          };
        } else {
          mockResponse.code = "error";
          mockResponse.message = "星座不存在";
        }
      } else if (path.includes('/constellation/match')) {
        const constellation1 = data.constellation1;
        const constellation2 = data.constellation2;
        const match = constellationMatchData.data.find(item => 
          (item.constellation1 === constellation1 && item.constellation2 === constellation2) ||
          (item.constellation1 === constellation2 && item.constellation2 === constellation1)
        );
        
        if (match) {
          mockResponse.data = match;
        } else {
          // 如果没有找到具体配对，返回一个默认的配对信息
          mockResponse.data = {
            constellation1: constellation1,
            constellation2: constellation2,
            score: Math.floor(Math.random() * 30) + 50, // 50-80之间的随机分数
            description: "这两个星座的配对需要更多的了解和磨合"
          };
        }
      } else if (path.includes('/constellation/ranking')) {
        const sortedData = [...constellationData.data].sort((a, b) => {
          const aScore = a.overall.length;
          const bScore = b.overall.length;
          return bScore - aScore;
        });
        mockResponse.data = sortedData.slice(0, 5); // 返回前5名
      }
      // 提醒设置相关接口
      else if (path.includes('/reminder/setting')) {
        if (method === 'GET') {
          // 获取提醒设置
          mockResponse.data = reminderSettingData.data;
        } else if (method === 'POST' || method === 'PUT') {
          // 创建或更新提醒设置
          mockResponse.data = {
            ...reminderSettingData.data,
            ...data,
            lastUpdated: new Date().toISOString().slice(0, 19).replace('T', ' ')
          };
        } else if (method === 'DELETE') {
          // 删除提醒设置
          mockResponse.data = {
            id: data.id,
            deleted: true
          };
        }
      }
      // 提醒记录相关接口
      else if (path.includes('/reminder/records')) {
        if (method === 'GET') {
          // 获取提醒记录
          mockResponse.data = reminderRecordData.data;
        } else if (path.includes('/send')) {
          // 发送提醒
          mockResponse.data = {
            id: Date.now().toString(),
            constellationId: data.constellationId || 1,
            constellationName: data.constellationName || "白羊座",
            reminderDate: new Date().toISOString().slice(0, 10),
            reminderTime: data.reminderTime || "08:00",
            reminderType: data.reminderType || "push",
            status: "sent",
            content: data.content || "星座运势提醒",
            sentAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
          };
        }
      } else {
        // 默认返回所有星座数据
        mockResponse.data = constellationData.data;
      }

      console.info(`#api-------返回mock数据-------#:${JSON.stringify(mockResponse)}`)
      resolve(mockResponse);
    }, 500); // 模拟网络延迟
  })
}


