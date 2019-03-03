function log(str) {
  console.clear()
  var arr = str[0].split(',')
  for (let index = 0; index < arr.length; index++) {
    const item = arr[index]
    eval(`
    console.log("${item} ->",${item})
    `)
  }
}
