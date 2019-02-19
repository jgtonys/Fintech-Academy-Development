module.exports = {
    port: process.env.PORT || 8080,
    db: {
      name: 'sigbi',
      username: 'root',
      password: 'k123123'
    },
    session: {
        secretKey: 'thisIsSecretKey'
    }
};
