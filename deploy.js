require('dotenv').config();
const Client = require('ssh2-sftp-client');
const sftp = new Client();
const localDistPath = './public/dist/bundle.js';
const remoteDistPath = process.env.REMOTE_DIST_PATH;

sftp.connect({
  host: process.env.SFTP_HOST,
  username: process.env.SFTP_USER,
  password: process.env.SFTP_PASSWORD,
}).then(() => {
  return sftp.put(localDistPath, remoteDistPath)
}).then(res => {
  console.log(res);
  return sftp.end();
}).catch(err => {
  console.log(err);
});
