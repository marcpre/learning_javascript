const text = "<h1>Hello world!</h1> <h2>What is {{ $slot }} Ipsum?</h2> <p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to {{$example }}make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially {{$category1 }} unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more {{ $Product2}} recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> <p>&nbsp;</p><p>&nbsp;</p>"

let data = text.match(/{{\s*\$\w+\s*}}/g)
console.log(data)

var json = JSON.parse("[" + data + "]");

console.log(json);