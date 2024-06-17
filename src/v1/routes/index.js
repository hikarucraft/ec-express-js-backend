import express from 'express';

const app = express();

app.get('/v1', (req, res) => {
  try {
    res.status.json({
      status: 'success',
      data: [],
      message: 'Success to request /v1 endpoint.',
    });
  } catch (err) {
    res.status.json({
      status: 'error',
      message: 'Internal Server Error',
    });
  }
});

export default app;
