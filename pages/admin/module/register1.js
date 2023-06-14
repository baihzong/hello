async function register1(username, password) {
  try {
    // check if username already exists
    const checkResponse = await fetch(`http://localhost:3000/users?username=${username}`);
    const checkData = await checkResponse.json();
    if (checkData.length > 0) {
      console.log('Username already exists');
      alert('用户名已经注册');
      return;
    }

    // register user
    const response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        username: username, 
        password: password 
      })
    });

    const data = await response.json();
    console.log('Add data success:', data);
    alert("注册成功")
  } catch (error) {
    console.error('Add data failed:', error);
  }
}


export {
  register1
}

