const app = getApp()
const { request } = app.$api

Component({
  properties: {
    // 是否显示组件
    show: {
      type: Boolean,
      value: false,
      observer: 'onShowChange'
    },
    // 星座列表数据
    constellationList: {
      type: Array,
      value: []
    }
  },

  data: {
    reminderSetting: {
      id: "1",
      constellationId: 1,
      constellationName: "白羊座",
      reminderType: ["push"],
      reminderTime: "08:00",
      isEnabled: false
    },
    reminderRecords: [],
    selectedConstellationName: "白羊座"
  },

  lifetimes: {
    attached() {
      this.loadReminderSetting()
      this.loadReminderRecords()
    }
  },

  methods: {
    // 显示状态变化时的处理
    onShowChange(newVal) {
      if (newVal) {
        this.loadReminderSetting()
        this.loadReminderRecords()
      }
    },

    // 加载提醒设置
    loadReminderSetting() {
      request('/reminder/setting', 'GET').then(res => {
        if (res.code === "success" && res.data) {
          this.setData({
            reminderSetting: res.data,
            selectedConstellationName: res.data.constellationName
          })
        }
      }).catch(err => {
        console.error('加载提醒设置失败:', err)
      })
    },

    // 加载提醒记录
    loadReminderRecords() {
      request('/reminder/records', 'GET').then(res => {
        if (res.code === "success" && res.data) {
          this.setData({
            reminderRecords: res.data
          })
        }
      }).catch(err => {
        console.error('加载提醒记录失败:', err)
      })
    },

    // 关闭组件
    onClose() {
      this.triggerEvent('close')
    },

    // 提醒开关变化
    onEnableChange(e) {
      const isEnabled = e.detail.value
      this.setData({
        'reminderSetting.isEnabled': isEnabled
      })
    },

    // 提醒方式切换
    onTypeToggle(e) {
      const type = e.currentTarget.dataset.type
      const currentTypes = [...this.data.reminderSetting.reminderType]

      let newTypes
      if (currentTypes.includes(type)) {
        newTypes = currentTypes.filter(t => t !== type)
      } else {
        newTypes = [...currentTypes, type]
      }

      this.setData({
        'reminderSetting.reminderType': newTypes
      })
    },

    // 提醒时间变化
    onTimeChange(e) {
      const time = e.detail.value
      this.setData({
        'reminderSetting.reminderTime': time
      })
    },

    // 星座选择变化
    onConstellationChange(e) {
      const index = parseInt(e.detail.value)
      const constellation = this.properties.constellationList[index]

      this.setData({
        'reminderSetting.constellationId': index + 1,
        'reminderSetting.constellationName': constellation.astroname,
        selectedConstellationName: constellation.astroname
      })
    },

    // 保存设置
    onSave() {
      const { reminderSetting } = this.data

      // 验证提醒方式至少选择一种
      if (reminderSetting.reminderType.length === 0) {
        wx.showToast({
          title: '请至少选择一种提醒方式',
          icon: 'none',
          duration: 2000
        })
        return
      }

      request('/reminder/setting', 'POST', reminderSetting).then(res => {
        if (res.code === "success" && res.data) {
          wx.showToast({
            title: '保存成功',
            icon: 'success',
            duration: 2000
          })

          // 保存到本地存储
          wx.setStorageSync('reminderSetting', res.data)

          // 触发保存成功事件
          this.triggerEvent('save', { setting: res.data })

          // 关闭组件
          setTimeout(() => {
            this.onClose()
          }, 2000)
        }
      }).catch(err => {
        console.error('保存提醒设置失败:', err)
        wx.showToast({
          title: '保存失败，请重试',
          icon: 'none',
          duration: 2000
        })
      })
    }
  }
})
