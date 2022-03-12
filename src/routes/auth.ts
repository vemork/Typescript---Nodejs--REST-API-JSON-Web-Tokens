import { Router } from "express";
import { tokenValidation } from "../libs/validateToken";
import { signin, signup, profile } from "../controllers/auth.controller";

const router: Router = Router();

// router.get('/', (req, res)=>{
//   res.send('Hello from router !')
//   console.log('Hello from auth')
// })

router.post("/signin", signin);
router.post("/signup", signup);

router.get("/profile", tokenValidation, profile);

export default router;
