import express from "express"
import campaignController from "../controllers/campaignController.js";

const router = express.Router()

router.post("/create", campaignController.create)
router.post("/join/:campaignId", campaignController.join)
router.get("/:campaignId", campaignController.getCampaign)

export default router