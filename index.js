function log(str) {
  console.clear()
  str[0].split(',').forEach(v => eval(`console.log("${v} ->",${v})`))
}
