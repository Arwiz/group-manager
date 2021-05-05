import app from './src/app.js'
import config from './src/config.js'
app.listen(config.PORT , config.HOST, () => {
  console.log(`Example app listening at http://localhost:${config.PORT} , ${ config.HOST}`)
});

