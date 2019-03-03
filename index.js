function log(strings) {
  console.clear()
  strings[0].split(',').forEach(v => eval(`console.log("${v} ->",${v})`))
}
