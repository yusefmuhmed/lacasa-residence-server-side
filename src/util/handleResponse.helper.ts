class HandleResponse {
  static resHandler = (res: any, statusCode: number, apiStatus: string, data: any, message: string) => {
    res.status(statusCode).send({
      apiStatus,
      data,
      message,
    });
  };
}

export default HandleResponse;