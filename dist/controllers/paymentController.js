"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCheckoutSession = void 0;
const stripeService_1 = require("../services/stripeService"); // Asegúrate de que este archivo exista en tu proyecto
const createCheckoutSession = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const session = yield (0, stripeService_1.createSession)(req.body.lineItems);
        res.json({ id: session.id });
    }
    catch (error) {
        console.error('Error al crear la sesión de Checkout:', error);
        res.status(500).send('Error al procesar la solicitud');
    }
});
exports.createCheckoutSession = createCheckoutSession;
//# sourceMappingURL=paymentController.js.map