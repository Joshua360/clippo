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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDownloads = exports.createDownload = void 0;
const download_model_1 = __importDefault(require("../models/download_model"));
const createDownload = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a download statistic!',
        });
    }
    try {
        const download = new download_model_1.default(body);
        yield download.save();
        return res.status(201).json({
            success: true,
            data: download,
            message: 'Download Statistics created!',
        });
    }
    catch (error) {
        return res.status(400).json({
            success: false,
            error,
            message: 'Download Statistics not created!',
        });
    }
});
exports.createDownload = createDownload;
const getDownloads = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const downloads = yield download_model_1.default.find({});
        if (!downloads.length) {
            return res
                .status(404)
                .json({ success: false, error: `Downloads Statistics not found` });
        }
        return res.status(200).json({ success: true, data: downloads });
    }
    catch (error) {
        return res.status(400).json({ success: false, error });
    }
});
exports.getDownloads = getDownloads;
