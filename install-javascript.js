#!/usr/bin/env node

"use strict";

/*
|--------------------------------------------------------------------------
| Base Bot Installer
|--------------------------------------------------------------------------
| Universal JavaScript Installer
| Works on:
|   • Windows
|   • Linux
|   • macOS
|   • Android (Termux)
|--------------------------------------------------------------------------
*/

const fs = require("node:fs");
const fsp = require("node:fs/promises");

const path = require("node:path");

const os = require("node:os");

const crypto = require("node:crypto");

const https = require("node:https");

const { pipeline } = require("node:stream/promises");

const { spawn } = require("node:child_process");



/*
|--------------------------------------------------------------------------
| Configuration
|--------------------------------------------------------------------------
*/

const CONFIG = {

    repository: "matterssmith-net/Base-Bot",

    branch: "master",

    installer: "install-javascript.js",

    zipName: "repository.zip",

    tempFolder: path.join(os.tmpdir(), "BaseBotInstaller"),

    preserve: [

        ".env",

        "runtime.state.json",

        "config.json"

    ]

};



/*
|--------------------------------------------------------------------------
| Colors
|--------------------------------------------------------------------------
*/

const COLOR = {

    reset: "\x1b[0m",

    red: "\x1b[31m",

    green: "\x1b[32m",

    yellow: "\x1b[33m",

    blue: "\x1b[34m",

    magenta: "\x1b[35m",

    cyan: "\x1b[36m",

    white: "\x1b[37m",

    gray: "\x1b[90m"

};



/*
|--------------------------------------------------------------------------
| Logger
|--------------------------------------------------------------------------
*/

class Logger {

    static line() {

        console.log();

    }

    static info(text) {

        console.log(`${COLOR.cyan}${text}${COLOR.reset}`);

    }

    static success(text) {

        console.log(`${COLOR.green}${text}${COLOR.reset}`);

    }

    static warning(text) {

        console.log(`${COLOR.yellow}${text}${COLOR.reset}`);

    }

    static error(text) {

        console.error(`${COLOR.red}${text}${COLOR.reset}`);

    }

}



/*
|--------------------------------------------------------------------------
| Sleep
|--------------------------------------------------------------------------
*/

function sleep(ms){

    return new Promise(resolve=>setTimeout(resolve,ms));

}



/*
|--------------------------------------------------------------------------
| Ensure Directory
|--------------------------------------------------------------------------
*/

async function ensureDirectory(directory){

    await fsp.mkdir(directory,{recursive:true});

}



/*
|--------------------------------------------------------------------------
| Remove Directory
|--------------------------------------------------------------------------
*/

async function removeDirectory(directory){

    await fsp.rm(directory,{

        recursive:true,

        force:true

    });

}



/*
|--------------------------------------------------------------------------
| File Exists
|--------------------------------------------------------------------------
*/

async function exists(file){

    try{

        await fsp.access(file);

        return true;

    }

    catch{

        return false;

    }

}



/*
|--------------------------------------------------------------------------
| SHA256
|--------------------------------------------------------------------------
*/

async function sha256(file){

    return new Promise((resolve,reject)=>{

        const hash=crypto.createHash("sha256");

        const stream=fs.createReadStream(file);

        stream.on("data",chunk=>hash.update(chunk));

        stream.on("end",()=>resolve(hash.digest("hex")));

        stream.on("error",reject);

    });

}



/*
|--------------------------------------------------------------------------
| Download File
|--------------------------------------------------------------------------
*/

async function download(url,destination){

    await ensureDirectory(path.dirname(destination));

    return new Promise((resolve,reject)=>{

        https.get(url,response=>{

            if(response.statusCode!==200){

                reject(new Error(`HTTP ${response.statusCode}`));

                return;

            }

            const file=fs.createWriteStream(destination);

            pipeline(response,file)

                .then(resolve)

                .catch(reject);

        }).on("error",reject);

    });

}



/*
|--------------------------------------------------------------------------
| Execute Command
|--------------------------------------------------------------------------
*/

function execute(command,args=[],cwd=process.cwd()){

    return new Promise((resolve,reject)=>{

        const child=spawn(command,args,{

            cwd,

            stdio:"inherit",

            shell:true

        });

        child.on("close",code=>{

            if(code===0)

                resolve();

            else

                reject(new Error(`${command} exited with ${code}`));

        });

    });

}

/*
|--------------------------------------------------------------------------
| Internet Connection
|--------------------------------------------------------------------------
*/

async function hasInternet() {

    return new Promise(resolve => {

        const request = https.request({

            method: "HEAD",

            host: "github.com",

            timeout: 5000

        }, () => resolve(true));

        request.on("error", () => resolve(false));

        request.on("timeout", () => {

            request.destroy();

            resolve(false);

        });

        request.end();

    });

}



/*
|--------------------------------------------------------------------------
| Download With Progress
|--------------------------------------------------------------------------
*/

async function downloadWithProgress(url, destination) {

    await ensureDirectory(path.dirname(destination));

    return new Promise((resolve, reject) => {

        https.get(url, response => {

            if (response.statusCode !== 200) {

                reject(
                    new Error(`Download failed (HTTP ${response.statusCode})`)
                );

                return;

            }

            const total = Number(response.headers["content-length"] || 0);

            let downloaded = 0;

            const file = fs.createWriteStream(destination);

            response.on("data", chunk => {

                downloaded += chunk.length;

                if (total > 0) {

                    const percent = (
                        downloaded / total * 100
                    ).toFixed(1);

                    process.stdout.write(
                        `\rDownloading... ${percent}%`
                    );

                }

            });

            pipeline(response, file)

                .then(() => {

                    process.stdout.write("\n");

                    resolve();

                })

                .catch(reject);

        })

        .on("error", reject);

    });

}



/*
|--------------------------------------------------------------------------
| GitHub URLs
|--------------------------------------------------------------------------
*/

function getRawURL(file) {

    return `https://raw.githubusercontent.com/${CONFIG.repository}/refs/heads/${CONFIG.branch}/${file}`;

}



function getZipURL() {

    return `https://github.com/${CONFIG.repository}/archive/refs/heads/${CONFIG.branch}.zip`;

}



/*
|--------------------------------------------------------------------------
| Compare Files
|--------------------------------------------------------------------------
*/

async function filesAreEqual(fileA, fileB) {

    if (!await exists(fileA))

        return false;

    if (!await exists(fileB))

        return false;

    return (await sha256(fileA)) === (await sha256(fileB));

}



/*
|--------------------------------------------------------------------------
| Update Installer
|--------------------------------------------------------------------------
*/

async function updateInstaller() {

    Logger.info("Checking installer updates...");

    const online = await hasInternet();

    if (!online) {

        Logger.error("No Internet connection.");

        process.exit(1);

    }

    await ensureDirectory(CONFIG.tempFolder);

    const remoteInstaller = path.join(

        CONFIG.tempFolder,

        CONFIG.installer

    );

    await downloadWithProgress(

        getRawURL(CONFIG.installer),

        remoteInstaller

    );

    const currentInstaller = path.resolve(

        CONFIG.installer

    );

    const equal = await filesAreEqual(

        currentInstaller,

        remoteInstaller

    );

    if (equal) {

        Logger.success("Installer is already up to date.");

        return false;

    }

    Logger.warning("New installer version found.");

    await fsp.copyFile(

        remoteInstaller,

        currentInstaller

    );

    Logger.success("Installer updated.");

    return true;

}



/*
|--------------------------------------------------------------------------
| Restart Installer
|--------------------------------------------------------------------------
*/

async function restartInstaller() {

    Logger.info("Restarting installer...");

    spawn(

        process.execPath,

        [path.resolve(CONFIG.installer)],

        {

            detached: true,

            stdio: "inherit"

        }

    );

    process.exit(0);

}

/*
|--------------------------------------------------------------------------
| Temporary Paths
|--------------------------------------------------------------------------
*/

CONFIG.zipFile = path.join(
    CONFIG.tempFolder,
    CONFIG.zipName
);

CONFIG.extractFolder = path.join(
    CONFIG.tempFolder,
    "extract"
);



/*
|--------------------------------------------------------------------------
| Prepare Temporary Directory
|--------------------------------------------------------------------------
*/

async function prepareTemp() {

    if (await exists(CONFIG.tempFolder)) {

        await removeDirectory(CONFIG.tempFolder);

    }

    await ensureDirectory(CONFIG.tempFolder);

}



/*
|--------------------------------------------------------------------------
| Download Repository
|--------------------------------------------------------------------------
*/

async function downloadRepository() {

    Logger.info("Downloading repository...");

    await downloadWithProgress(

        getZipURL(),

        CONFIG.zipFile

    );

    Logger.success("Repository downloaded.");

}



/*
|--------------------------------------------------------------------------
| Extract ZIP
|--------------------------------------------------------------------------
*/

async function extractRepository() {

    Logger.info("Extracting repository...");

    if (await exists(CONFIG.extractFolder)) {

        await removeDirectory(CONFIG.extractFolder);

    }

    await ensureDirectory(CONFIG.extractFolder);

    const AdmZip = require("adm-zip");

    const zip = new AdmZip(CONFIG.zipFile);

    zip.extractAllTo(

        CONFIG.extractFolder,

        true

    );

    Logger.success("Repository extracted.");

}



/*
|--------------------------------------------------------------------------
| Repository Root
|--------------------------------------------------------------------------
*/

async function getRepositoryRoot() {

    const items = await fsp.readdir(

        CONFIG.extractFolder,

        {

            withFileTypes: true

        }

    );

    for (const item of items) {

        if (item.isDirectory()) {

            return path.join(

                CONFIG.extractFolder,

                item.name

            );

        }

    }

    throw new Error(

        "Repository root could not be found."

    );

}



/*
|--------------------------------------------------------------------------
| Remove ZIP
|--------------------------------------------------------------------------
*/

async function removeZip() {

    if (await exists(CONFIG.zipFile)) {

        await fsp.unlink(

            CONFIG.zipFile

        );

    }

}

/*
|--------------------------------------------------------------------------
| Ignored Files
|--------------------------------------------------------------------------
*/

function isIgnored(relativePath) {

    const normalized = relativePath.replace(/\\/g, "/");

    return CONFIG.preserve.some(file =>

        normalized === file ||

        normalized.endsWith("/" + file)

    );

}



/*
|--------------------------------------------------------------------------
| Copy File
|--------------------------------------------------------------------------
*/

async function copyFile(source, destination) {

    await ensureDirectory(path.dirname(destination));

    await fsp.copyFile(source, destination);

}



/*
|--------------------------------------------------------------------------
| Synchronize File
|--------------------------------------------------------------------------
*/

async function synchronizeFile(source, destination) {

    if (!(await exists(destination))) {

        await copyFile(source, destination);

        Logger.success("Added: " + path.relative(process.cwd(), destination));

        return;

    }

    const sourceHash = await sha256(source);

    const destinationHash = await sha256(destination);

    if (sourceHash === destinationHash)

        return;

    await copyFile(source, destination);

    Logger.info("Updated: " + path.relative(process.cwd(), destination));

}



/*
|--------------------------------------------------------------------------
| Synchronize Directory
|--------------------------------------------------------------------------
*/

async function synchronizeDirectory(source, destination) {

    const entries = await fsp.readdir(source, {

        withFileTypes: true

    });

    for (const entry of entries) {

        const sourcePath = path.join(source, entry.name);

        const destinationPath = path.join(destination, entry.name);

        const relative = path.relative(process.cwd(), destinationPath);

        if (isIgnored(relative))

            continue;

        if (entry.isDirectory()) {

            await synchronizeDirectory(

                sourcePath,

                destinationPath

            );

            continue;

        }

        await synchronizeFile(

            sourcePath,

            destinationPath

        );

    }

}



/*
|--------------------------------------------------------------------------
| Repository Synchronization
|--------------------------------------------------------------------------
*/

async function synchronizeRepository() {

    Logger.info("Synchronizing repository...");

    const repositoryRoot = await getRepositoryRoot();

    await synchronizeDirectory(

        repositoryRoot,

        process.cwd()

    );

    Logger.success("Repository synchronized.");

}

/*
|--------------------------------------------------------------------------
| Delete Obsolete Files
|--------------------------------------------------------------------------
*/

async function removeObsolete(localDir, repoDir) {

    const entries = await fsp.readdir(localDir, {

        withFileTypes: true

    });

    for (const entry of entries) {

        const localPath = path.join(localDir, entry.name);

        const repoPath = path.join(repoDir, entry.name);

        const relative = path.relative(

            process.cwd(),

            localPath

        );

        if (isIgnored(relative))

            continue;

        if (!(await exists(repoPath))) {

            if (entry.isDirectory()) {

                await removeDirectory(localPath);

            }

            else {

                await fsp.unlink(localPath);

            }

            Logger.warning(

                "Removed: " + relative

            );

            continue;

        }

        if (

            entry.isDirectory()

        ) {

            await removeObsolete(

                localPath,

                repoPath

            );

        }

    }

}



/*
|--------------------------------------------------------------------------
| Clean Repository
|--------------------------------------------------------------------------
*/

async function cleanRepository() {

    Logger.info(

        "Removing obsolete files..."

    );

    const repositoryRoot =

        await getRepositoryRoot();

    await removeObsolete(

        process.cwd(),

        repositoryRoot

    );

    Logger.success(

        "Repository cleaned."

    );

}



/*
|--------------------------------------------------------------------------
| Synchronize Repository
|--------------------------------------------------------------------------
*/

async function synchronize() {

    await prepareTemp();

    await downloadRepository();

    await extractRepository();

    await synchronizeRepository();

    await cleanRepository();

    await removeZip();

}



/*
|--------------------------------------------------------------------------
| Cleanup
|--------------------------------------------------------------------------
*/

async function cleanup() {

    if (

        await exists(CONFIG.tempFolder)

    ) {

        await removeDirectory(

            CONFIG.tempFolder

        );

    }

}



/*
|--------------------------------------------------------------------------
| Fatal Error
|--------------------------------------------------------------------------
*/

async function fatal(error) {

    Logger.line();

    Logger.error(

        error.message

    );

    Logger.line();

    await cleanup();

    process.exit(1);

}