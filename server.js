const app = require('rocket-server')
const server = require('http').createServer(app.dispatch)
const port = 8080

app.get('/log', (res, req, params) => {
  console.log(params['message'])
  res.success()
})

app.static_root = __dirname
app.token_required = false
server.listen(port, function() {
  console.log("Server listening on: http://localhost:%s", port)
})