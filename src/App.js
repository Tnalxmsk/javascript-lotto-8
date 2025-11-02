import LottoAppController from "./controller/LottoAppController.js";

class App {
  async run() {
    await new LottoAppController().run();
  }
}

export default App;
