"use strict";
// the new file to add logic but to use in any project
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const yaml = __importStar(require("js-yaml"));
const DEV_MODE = false;
const rootDir = path.resolve(__dirname);
const workDir = !DEV_MODE ? path.join(rootDir, "..", "..", "..") : path.join(rootDir, "..");
function getConfig(filename) {
    var configFile = path.join(workDir, filename);
    try {
        let contents = fs.readFileSync(configFile, "utf-8");
        let data = yaml.load(contents);
        if (typeof data === "object" && data !== null) {
            return data;
        }
        else {
            throw new Error("Invalid or null config data.");
        }
    }
    catch (e) {
        console.error("Error on read config data: ", e);
        process.exit(1);
    }
}
exports.default = getConfig;
