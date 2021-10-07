export const notFoundHandler = (req, res, next) => {
  throw new Error(`Not Found -${req.originalUrl}`);
  res.status(404);
  next(err);
};

export const customErrorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
  });
};
