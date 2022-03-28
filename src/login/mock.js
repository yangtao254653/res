let mock = require("mockjs")
mock.mock("/api/login", 'post', function (config) {
    let obj = JSON.parse(config.body);
    console.log(obj);
    let user = obj.user;
    let pw = obj.pw;
    if(user === "admin" && pw === "123456"){
        return {
            status: 200,
            data: { user: "admin", pw: "123456",token:"123123123" },
            message: 'success'
        }
    }else{
        return {
            status: 200,
            message: "fall",
            data:{
                message:"用户密码错误"
            }
        }
    } 
})