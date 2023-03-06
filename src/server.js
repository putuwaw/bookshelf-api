import { server as _server } from '@hapi/hapi'
import routes from './routes.js'

const init = async () => {
  const server = _server({
    port: 9000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*']
      }
    }
  })

  server.route(routes)

  await server.start()
  console.log(`Server running on: ${server.info.uri}`)
}

init()
