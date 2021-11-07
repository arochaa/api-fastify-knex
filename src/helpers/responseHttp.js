class HttpResponse {
  serverSuccess (params = null) {
    return {
      message: 'Success',
      statusCode: 200,
      info: params
    }
  }
}

module.exports = HttpResponse
