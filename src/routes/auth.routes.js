import {Router} from "express"
import {verifySignup} from "../middlewares/index.js"

const router = Router()

import *as authCtrl from "../controllers/auth.controller.js"

router.post("/signup", [verifySignup.UserOfEmailDuplicate, verifySignup.checkRolesExisted], authCtrl.signUp)
router.post("/signin", authCtrl.signIn)

export default router;