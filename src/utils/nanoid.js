import { customAlphabet } from "nanoid"
import User from "../models/user.model.js"
import Campaign from "../models/campaign.model.js"

const nanoid = {
    generateUserId: async () =>{
        const tries = 5
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        const nanoid = customAlphabet(alphabet, 10)

        for(let i = 0; i < tries; i++){
        
            const publicId = nanoid()

            const existingUser = await User.findOne({publicId})

            if (!existingUser)
                return publicId
        }
    },

    generateCampId: async () => {
        const tries = 5
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        const nanoid = customAlphabet(alphabet, 20)

        for (let i = 0; i < tries; i++) {
            const publicIdRaw = nanoid();
            const publicId = publicIdRaw.match(/.{1,5}/g).join("-"); // <--- formatado

            const existingCampaign = await Campaign.findOne({ publicId });

            if (!existingCampaign) 
                return publicId;
        }
    }
}

export default nanoid