module.exports = (err, req, res, next) => {
  if (
    (err instanceof SyntaxError && err.status === 400 && 'body' in err) ||
    err.type === 'entity.parse.failed'
  ) {
    // log only a short message for noisy client JSON errors
    console.error('Invalid JSON body:', err.message);
    return res.status(400).json({
      message: 'Invalid JSON body. Please send valid JSON.'
    });
  }

  if ((err.name === 'MongoServerError' || err.name === 'MongoError') && err.code === 11000) {
    console.error('Duplicate key error:', err.message);

    const fields = Object.keys(err.keyValue || {});
    return res.status(400).json({
      message: 'Duplicate value for unique field',
      fields,
      keyValue: err.keyValue
    });
  }

  console.error(err && err.stack ? err.stack : err);

  if (err.name === 'ValidationError') {
    const errors = {};
    for (const [field, detail] of Object.entries(err.errors || {})) {
      errors[field] = detail.message;
    }
    return res.status(400).json({
      message: 'Validation error',
      errors
    });
  }

  if (err.name === 'CastError') {
    return res.status(400).json({
      message: 'Invalid value for field',
      field: err.path,
      value: err.value
    });
  }

  const status = err.statusCode || 500;
  res.status(status).json({ message: err.message || 'Internal Server Error' });
};
