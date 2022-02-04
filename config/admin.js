module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cc3d44a54743614a86d258fec0dcf2fd'),
  },
});
