export default {
  '/api': {
    target: 'http://localhost:9001',
    changeOrigin: true,
    // pathRewrite: {'^/api' : ''}
  },
};
