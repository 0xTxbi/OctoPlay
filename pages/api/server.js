// import dotenv from 'dotenv'
// import querystring from 'query-string'

// dotenv.config();

// // Random string
// let state = '4C#KYQq.hY"}93CM';

// // Redirect URI
// const redirectUri = 'http://localhost:3000/profile'

// export default (req, res) => {

//   // Authorisation scope
//   let scope = 'user-read-private user-read-email';

//   res.redirect('https://accounts.spotify.com/authorize?' +
//     querystring.stringify({
//       response_type: 'code',
//       client_id: process.env.CLIENT_ID,
//       scope: scope,
//       redirect_uri: redirectUri,
//       state: state
//     }));

// }
