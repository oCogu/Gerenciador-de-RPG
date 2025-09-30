import mongoose from "mongoose";
import nanoid from "../utils/nanoid.js";

const Schema = mongoose.Schema;

const campaignSchema = new Schema({
    name: {type: String, required:true},
    description: {type: String, default: ""},
    publicId: {type: String, unique: true},

    owner: { type: mongoose.SchemaTypes.ObjectId, ref: "user", required: true },

    players: [{
        user: {type: mongoose.SchemaTypes.ObjectId, ref: "user"},
        role: {type: String, enum: ["owner","master", "player"], default: "player", required: true},
        _id: false
    }]
});

campaignSchema.pre("save", async function (next) {
    if (!this.publicId)
        this.publicId = await nanoid.generateCampId()

    next()
})

export default mongoose.model("campaign", campaignSchema)