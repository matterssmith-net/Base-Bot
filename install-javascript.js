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

