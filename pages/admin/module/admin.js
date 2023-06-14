import { btn as MyTabs } from './btn.js'
import { register1 as reg } from './register1.js'
import { EnterLimit } from './EnterLimit.js'
const inputs = login.querySelectorAll('input');
const inputs1 = register1.querySelectorAll('input');

var a = false;

new EnterLimit(inputs[0]);

// 注册
new EnterLimit(inputs1[0]);
new EnterLimit(inputs1[1]);

//登入验证
inputs[2].onclick = async function () {
  new MyTabs(inputs[0].value, inputs[1].value)
}

register.onclick = function () {
  login.style.display = 'none';
  register1.style.display = 'block';
}

admin.onclick = function () {
  login.style.display = 'block';
  register1.style.display = 'none';
}


// 注册
inputs1[2].onclick = async function () {
  reg(inputs1[0].value, inputs1[1].value)
}
