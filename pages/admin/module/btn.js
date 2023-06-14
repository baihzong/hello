
class btn {
  constructor(name, password) {
    this.name = name;
    this.password = password;
    this.change();
  }
  change() {
    fetchData(this.name, this.password);
  }
}
async function fetchData(name1, password1) {
  try {
    const response = await fetch('http://localhost:3000/users');


    const data = await response.json();
    // console.log(data[0].username)
    let bool = false
    data.forEach(user => {
      if (name1 === user.username && password1 === user.password) {
        console.log("登入成功");
        alert("登入成功")
        window.location.href = 'http://localhost:8080/index.html';
        bool = true
        return
      }
    });
    if (!bool) {
      console.log("登入失败")
      alert("账号或者密码错误")
    }

  } catch (error) {
    console.error(error);
  }
}

//导出
export {
  btn
}
