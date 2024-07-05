"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const DownloadStatisticSchema = new mongoose_1.default.Schema({
    videoId: { required: true, type: String },
    title: { required: true, type: String },
    uploadDate: { type: String },
    likes: { type: Number },
    category: { type: String },
    authorId: { type: String },
    downloadedFormat: { type: String },
}, { timestamps: true });
exports.default = mongoose_1.default.model('downloadstatistics', DownloadStatisticSchema);
