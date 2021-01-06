import { Router } from "express";
const router = Router();

import * as userCtrl from "../controllers/user.controller";
import {authjwt, verifySignup} from "../middlewares";


router.post('/',[
    authjwt.verifyToken,
    authjwt.isAdministrador,
    verifySignup.checkRoleExisted
], userCtrl.createUser);

export default router;