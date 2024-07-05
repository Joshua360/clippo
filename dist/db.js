"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGODB_URL = process.env.MONGODB_URL;
if (!MONGODB_URL) {
    throw new Error('Please define the MONGODB_URL environment variable inside .env');
}
mongoose_1.default
    .connect(MONGODB_URL)
    .then(() => {
    console.log('MongoDB connection established');
})
    .catch((e) => {
    console.error('Connection error', e.message);
});
const db = mongoose_1.default.connection;
exports.default = db;
