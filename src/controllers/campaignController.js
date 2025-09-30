import campaignService from "../services/campaignService.js";
import Campaign from "../models/campaign.model.js";

const campaignController = {
    create: async (req, res) => {
       try {
            const {name, description} = req.body
            const ownerId = req.user

            const campaign = await campaignService.create(name, description, ownerId)
            res.status(200).json({message: "Campanha criada", campaign: campaign})
       } catch (error) {
            res.status(400).json({error: error.message})
       }
    },

    join: async (req, res) => {
        try {
            const {campaignId} = req.params
            const user = req.user
        
            const campaign = await campaignService.join(campaignId, user)
            res.status(200).json({message: `sucesso ao entrar`})
        } catch (error) {
            res.status(400).json({error: error.message})
        }   
    },

    getCampaign: async (req, res) => {
        try {
            const {campaignId} = req.params
            const userId = req.user

            const campaign = await campaignService.getCampaign(campaignId, userId)
            res.status(200).json({campaign: campaign})
        } catch (error) {
            res.status(400).json({error: error.message})
        }

        
    }
}

export default campaignController