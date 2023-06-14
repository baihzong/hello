// function EnterLimit(inputElement) {
//   inputElement.onchange = function() {
//     const value = this.value;
//     if (!/^[a-zA-Z0-9]+$/.test(value)) {
//       alert('只能输入数字和字母！');
//       this.value = '';
//     }
//   };
// }

function EnterLimit(inputElement) {
  inputElement.onchange = function () {
    const value = this.value;
    if (/[\u4e00-\u9fa5]/.test(value)) {
      alert('不能输入中文！');
      this.value = '';
    }
  };
}


export {
  EnterLimit
}
