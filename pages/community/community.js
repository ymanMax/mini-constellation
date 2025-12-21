import { communityMockData } from '../../api/mockData'

//获取应用实例
const app = getApp()

Page({
  data: {
    posts: [], // 帖子列表
    newPostContent: '', // 新帖子内容
    showCommentInput: false, // 是否显示评论输入框
    currentCommentPostId: null, // 当前评论的帖子ID
    commentContent: '', // 评论内容
  },

  onLoad() {
    this.loadPosts()
  },

  // 加载帖子数据
  loadPosts() {
    const posts = communityMockData.posts
    this.setData({
      posts
    })
  },

  // 处理新帖子输入
  onPostInput(e) {
    this.setData({
      newPostContent: e.detail.value
    })
  },

  // 发布新帖子
  publishPost() {
    const { newPostContent, posts } = this.data
    if (!newPostContent.trim()) {
      wx.showToast({
        title: '请输入帖子内容',
        icon: 'none'
      })
      return
    }

    // 创建新帖子
    const newPost = {
      id: Date.now(),
      userId: 1,
      username: '我',
      avatar: '../../assets/images/1.png',
      content: newPostContent,
      createTime: new Date().toISOString().replace('T', ' ').substring(0, 19),
      likes: 0,
      comments: [],
      isLiked: false,
      星座: '白羊座'
    }

    // 添加到帖子列表
    const updatedPosts = [newPost, ...posts]
    this.setData({
      posts: updatedPosts,
      newPostContent: ''
    })

    wx.showToast({
      title: '帖子发布成功',
      icon: 'success'
    })
  },

  // 点赞/取消点赞
  toggleLike(e) {
    const { postId } = e.currentTarget.dataset
    const { posts } = this.data
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        const isLiked = !post.isLiked
        return {
          ...post,
          isLiked,
          likes: isLiked ? post.likes + 1 : post.likes - 1
        }
      }
      return post
    })
    this.setData({ posts: updatedPosts })
  },

  // 分享帖子
  sharePost(e) {
    const { postId } = e.currentTarget.dataset
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
    wx.showToast({
      title: '分享功能已启用',
      icon: 'success'
    })
  },

  // 显示评论输入框
  showCommentInput(e) {
    const { postId } = e.currentTarget.dataset
    this.setData({
      showCommentInput: true,
      currentCommentPostId: postId
    })
  },

  // 处理评论输入
  onCommentInput(e) {
    this.setData({
      commentContent: e.detail.value
    })
  },

  // 发布评论
  publishComment() {
    const { commentContent, currentCommentPostId, posts } = this.data
    if (!commentContent.trim()) {
      wx.showToast({
        title: '请输入评论内容',
        icon: 'none'
      })
      return
    }

    // 创建新评论
    const newComment = {
      id: Date.now(),
      userId: 1,
      username: '我',
      content: commentContent,
      createTime: new Date().toISOString()
    }

    // 添加到对应帖子的评论列表
    const updatedPosts = posts.map(post => {
      if (post.id === currentCommentPostId) {
        return {
          ...post,
          comments: [...post.comments, newComment]
        }
      }
      return post
    })

    this.setData({
      posts: updatedPosts,
      commentContent: '',
      showCommentInput: false,
      currentCommentPostId: null
    })

    wx.showToast({
      title: '评论发布成功',
      icon: 'success'
    })
  },

  // 取消评论
  cancelComment() {
    this.setData({
      showCommentInput: false,
      currentCommentPostId: null,
      commentContent: ''
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    return {
      title: '星座社区 - 分享精彩内容',
      path: '/pages/community/community',
    }
  },

  /**
   * 朋友圈分享
   */
  onShareTimeline() {
    return {
      title: '星座社区 - 一起来讨论星座吧',
    }
  },
})
