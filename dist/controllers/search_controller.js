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
exports.getSearchs = exports.createSearch = void 0;
const search_model_1 = __importDefault(require("../models/search_model"));
const createSearch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a search!',
        });
    }
    try {
        const search = new search_model_1.default(body);
        yield search.save();
        return res.status(201).json({
            success: true,
            data: search,
            message: 'Search Statistics created!',
        });
    }
    catch (error) {
        return res.status(400).json({
            success: false,
            error,
            message: 'Search Statistics not created!',
        });
    }
});
exports.createSearch = createSearch;
const getSearchs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searches = yield search_model_1.default.find({});
        if (!searches.length) {
            return res
                .status(404)
                .json({ success: false, error: `Search Statistics not found` });
        }
        return res.status(200).json({ success: true, data: searches });
    }
    catch (error) {
        return res.status(400).json({ success: false, error });
    }
});
exports.getSearchs = getSearchs;
