import { getVls } from 'vue-language-server/dist/service'
import { SingleFileService } from './base'

export default class VueService extends SingleFileService {
  createService(code: string) {
    this.service = getVls()
    console.log(this.service)
  }

  getQuickInfo() {}
  getOccurrences() {
    return []
  }
  getDefinition() {}
}
