import Campaign from "../models/campaign.model.js"
import User from "../models/user.model.js"

const campaignService = {

    create: async (name, description, ownerId) => {

        if (!name)
            throw new Error("Nome da campanha é obrigátorio")

        try {
            const campaign = new Campaign({
                name: name,
                description: description,
                owner: ownerId,
                players: [{user: ownerId, role: "owner"}]
            })

            await campaign.save()
            return campaign
        }
        catch(error){
            throw error
        }
    },

    join: async (campaignId, user) => {
        const campaign = await Campaign.findOne({publicId: campaignId})
        if (!campaign)
            throw new Error("Essa campanha não foi encontrada")

        const existingUser = campaign.players.find(p => p.user.toString() === user.toString())
        if (existingUser)
            throw new Error("Usuario já está na campanha")

        campaign.players.push({user: user})
        await campaign.save()
    },

    getCampaign: async (campaignId, user) => {
        const campaign = await Campaign.findOne({publicId: campaignId})
        .populate("players.user", "nameTag publicId")
        
        if(!campaign)
            throw new Error("Campanha não encontrada")

        const existingUser = campaign.players.find(p => p.user._id.toString() === user.toString())

        if(!existingUser)
            throw new Error("Usuario não participa dessa campanha")

        return {name: campaign.name, 
                description: campaign.description,
                players: campaign.players.map(p => ({
                    nametag: p.user.nameTag,
                    publicId: p.user.publicId,
                    role: p.role
                }))
            }
        }
}

export default campaignService