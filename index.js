import { EnterLimit } from './pages/admin/module/EnterLimit.js'
// const drawWorks = document.getElementById('drawWorks');
const Cword = wordCount.querySelectorAll("span")

// new EnterLimit(drawWorks);

new EnterLimit(drawWords);

// 开始绘画
startDrawing.onclick = async () => {

  if (drawWords.value.length < 1000 && drawWords.value.length > 0) {
    try {
      const response = await fetch('http://localhost:3000/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          words: drawWords.value
        })
      });

      const data = await response.json();
      console.log('Add data success:', data);
      alert("开始绘图")

    } catch (error) {
      console.error('Add data failed:', error);
    }

  } else {
    alert("请在规定字数内")
  }


}


// 字数统计
drawWords.oninput = function () {
  const value = this.value;
  const numbers = value.length;
  Cword[0].innerText = numbers;
  if (numbers >= 1000) {
    this.disabled = true;
    this.value = value.slice(0, -1);
    this.disabled = false;
  }
};

clear.onclick = () => {
  drawWords.value = ""
}



// 历史记录
history1.onclick = async () => {
  const checkResponse = await fetch(`http://localhost:3000/data`);

  const checkData = await checkResponse.json();
  // console.log(checkData)
  render(checkData)
}

function render(jsondata){
  var html = jsondata.map(item=>`
      <li>
          <div>${item.words}</div>
      </li>
  `)
  mylist.innerHTML = html.join("")
}


