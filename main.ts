// the new file to add logic but to use in any project

import * as fs from "fs";
import * as path from "path";
import * as yaml from "js-yaml";

const DEV_MODE: boolean = false;

const rootDir: string = path.resolve(__dirname);
const workDir: string = !DEV_MODE ? path.join(rootDir, "..", "..", "..") : path.join(rootDir, "..");

function getConfig(filename: string) {
    var configFile = path.join(workDir, filename);

    try {

        let contents = fs.readFileSync(configFile, "utf-8");
        let data = yaml.load(contents) as any;

        if (typeof data === "object" && data !== null) {
            return data;
        } else {
            throw new Error("Invalid or null config data.");
        }

    } catch (e) {
        console.error("Error on read config data: ", e);
        process.exit(1);
    }
}

export default getConfig;