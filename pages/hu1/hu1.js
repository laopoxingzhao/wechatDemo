// pages/index/login.js
Page({
  data: {
    userName: '',
    userPwd:""
  },
  //获取用户输入的用户名
  userNameInput:function(e)
  {
    this.setData({
      userName: e.detail.value
    })
    console.log(e)
  },
  passWdInput:function(e)
  {
    this.setData({
      userPwd: e.detail.value
    })
    console.log(e)
  },
  //获取用户输入的密码
  loginBtnClick: function (e) {
    console.log("用户名："+this.data.userName+" 密码：" +this.data.userPwd);
    console.log(e)
  }
  ,
  // 用户点击右上角分享
  onShareAppMessage: function () {

  }
})