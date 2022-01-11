class HttpResponse {
  serverSuccess (params = null) {
    return {
      message: 'Success',
      statusCode: 201,
      info: params
    }
  }
}

module.exports = HttpResponse
