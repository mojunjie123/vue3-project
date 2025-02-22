import { App } from 'vue'
import chooseArea from './chooseArea'
import chooseCity from './chooseCity'
import chooseTime from './chooseTime'

const components = [chooseArea, chooseCity, chooseTime]

export default {
  install(app: App) {
    components.map((item) => {
      app.use(item)
    })
  },
}
