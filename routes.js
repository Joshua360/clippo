"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const download_controller_1 = require("./controllers/download_controller");
const search_controller_1 = require("./controllers/search_controller");
const router = express_1.default.Router();
router.get('/download', download_controller_1.getDownloads);
router.get('/search', search_controller_1.getSearchs);
exports.default = router;
