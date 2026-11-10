const https = require('https');

https.get('https://moto-sync-web.vercel.app', res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('HTML Length:', data.length);
    console.log('Has id="hero":', data.includes('id="hero"'));
    console.log('Has id="story":', data.includes('id="story"'));
    console.log('Has id="download":', data.includes('id="download"'));
    console.log('Has "GRAND FINALE":', data.includes('GRAND FINALE'));
    console.log('Has "MURTHAL HAVELI":', data.includes('MURTHAL HAVELI'));
    console.log('Has "LIVE RADAR LOCK":', data.includes('LIVE RADAR LOCK'));
  });
});
