import { Router } from "express";
const router = new Router();
import userController from "../controllers/user-controller.js";
import infoController from "../controllers/info-controller.js";
// import controller from '../controllers/authController.js';
import { loginValidation, registerValidation } from "../middleware/validations.js";
import authMiddleware from "../middleware/authMiddleware.js"


// router.post('/registration', controller.registration);
// router.post('/login', controller.login);

router.post('/registration', registerValidation, userController.registration);
router.post('/login', loginValidation, userController.login);
router.post('/logout', userController.logout);
router.get('/refresh', userController.refresh);
router.post('/resources', authMiddleware, infoController.getResourcePrice);
router.post('/update', authMiddleware, infoController.changeResourcePrice);
// router.get('/users', userController.getUsers);
// router.get('/users', authMiddleware,userController.getUsers);



export default router;