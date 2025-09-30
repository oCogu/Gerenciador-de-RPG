import startDB from "./mongoose.js";

class Loaders {
    start(){
        startDB()
    }
}

export default new Loaders();