const request = new XMLHttpRequest()
request.open('GET','http://127.0.0.1:8888/friends.json')
request.onreadystatechange = ()=>{
    if(request.readyState ===4 && request.status ===200){
        console.log(request.response)
    }
}

request.send()

// function jsonp(url){
//     return new Promise((resolve,reject)=>{
//         const random = 'shuJSONPCallbackName'+Math.random()
//         console.log(random)
//         window[random]= (data)=>{
//         resolve(data)
//     }
//     const script = document.createElement('script')
//     script.src = `${url}?callback=${random}`;//functionName叫callback
//     script.onload= ()=>{
//     script.remove()
//     }
//     script.onerror = ()=>{
//         reject();
//     }
//     document.body.appendChild(script)
//   })
// }
// //jsonp只知道状态码

// jsonp('http://127.0.0.1:8888/friends.js')
//    .then((data)=>{
//        console.log(data)
//    })
// //封装jsonp

