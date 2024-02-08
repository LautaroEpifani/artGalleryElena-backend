"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const paymentController_1 = require("../controllers/paymentController"); // Asegúrate de que este archivo exista en tu proyecto
const router = express_1.default.Router();
router.post('/create-checkout-session', paymentController_1.createCheckoutSession);
exports.default = router;
