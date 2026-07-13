#!/data/data/com.termux/files/usr/bin/bash    

echo -e "\e[35m

██╗░░  ██████╗░░█████╗░░██████╗███████╗  ██████╗░░█████╗░████████╗
╚██╗░  ██╔══██╗██╔══██╗██╔════╝██╔════╝  ██╔══██╗██╔══██╗╚══██╔══╝
░╚██╗  ██████╦╝███████║╚█████╗░█████╗░░  ██████╦╝██║░░██║░░░██║░░░
░██╔╝  ██╔══██╗██╔══██║░╚═══██╗██╔══╝░░  ██╔══██╗██║░░██║░░░██║░░░
██╔╝░  ██████╦╝██║░░██║██████╔╝███████╗  ██████╦╝╚█████╔╝░░░██║░░░
╚═╝░░  ╚═════╝░╚═╝░░╚═╝╚═════╝░╚══════╝  ╚═════╝░░╚════╝░░░░╚═╝░░░\n\n\e[0m"

echo -e "\e[36m

▒█▀▀█ ▒█▀▀█ ▒█▀▀▀ ▒█▀▀█ ░█▀▀█ ▒█▀▀█ ▀█▀ ▒█▄░▒█ ▒█▀▀█ 
▒█▄▄█ ▒█▄▄▀ ▒█▀▀▀ ▒█▄▄█ ▒█▄▄█ ▒█▄▄▀ ▒█░ ▒█▒█▒█ ▒█░▄▄ 
▒█░░░ ▒█░▒█ ▒█▄▄▄ ▒█░░░ ▒█░▒█ ▒█░▒█ ▄█▄ ▒█░░▀█ ▒█▄▄█ 

▀█▀ ▒█▄░▒█ ▒█▀▀▀█ ▀▀█▀▀ ░█▀▀█ ▒█░░░ ▒█░░░ ░█▀▀█ ▀▀█▀▀ ▀█▀ ▒█▀▀▀█ ▒█▄░▒█
▒█░ ▒█▒█▒█ ░▀▀▀▄▄ ░▒█░░ ▒█▄▄█ ▒█░░░ ▒█░░░ ▒█▄▄█ ░▒█░░ ▒█░ ▒█░░▒█ ▒█▒█▒█
▄█▄ ▒█░░▀█ ▒█▄▄▄█ ░▒█░░ ▒█░▒█ ▒█▄▄█ ▒█▄▄█ ▒█░▒█ ░▒█░░ ▄█▄ ▒█▄▄▄█ ▒█░░▀█\n\e[0m"

echo -e "\e[35m

▒█▀▀▀█ ▒█▀▀▀ ▀▀█▀▀ 　 ▀▀█▀▀ ▒█░▒█ ▒█▀▀▀ 　 ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀█ ▒█▀▀▀ ▒█▀▀▀ ▒█▄░▒█ 
░▀▀▀▄▄ ▒█▀▀▀ ░▒█░░ 　 ░▒█░░ ▒█▀▀█ ▒█▀▀▀ 　 ░▀▀▀▄▄ ▒█░░░ ▒█▄▄▀ ▒█▀▀▀ ▒█▀▀▀ ▒█▒█▒█ 
▒█▄▄▄█ ▒█▄▄▄ ░▒█░░ 　 ░▒█░░ ▒█░▒█ ▒█▄▄▄ 　 ▒█▄▄▄█ ▒█▄▄█ ▒█░▒█ ▒█▄▄▄ ▒█▄▄▄ ▒█░░▀█\n\e[0m"

echo -e "\033[33m\033[0m Updating Termux..."
pkg update -y && pkg upgrade -y

echo -e "\e[35mInstalling MPV\n\e[0m"

if command -v mpv >/dev/null 2>&1; then
    echo -e "\033[01;33mMPV was already installed previously.\033[0m"
else
    if pkg install mpv -y 2>&1 | grep -Eiq '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
        echo -e "\033[01;32m\033[01mMPV has been installed successfully.\n\033[0m"
    else
        error=$(pkg install mpv 2>&1 >/dev/null)
        echo -e "\033[0;31mError: $error\033[0m" 
        echo -e "\033[0;34mMPV could not be installed. Check your Internet connection and try again. If the error continues, install it manually!!\033[0m" 
        exit 1
    fi
fi

mp3_array=("https://qu.ax/PreU.mp3" "https://qu.ax/kKXA.mp3" "https://qu.ax/cFSp.mp3" "https://qu.ax/CQRm.mp3" "https://qu.ax/kDSY.mp3" "https://qu.ax/AQLB.mp3" "https://qu.ax/EspE.mp3" "https://qu.ax/ifKO.mp3" "https://qu.ax/EUDu.mp3" "https://qu.ax/SRNs.mp3" "https://qu.ax/WvfK.mp3" "https://qu.ax/lbff.mp3")
random_mp3=${mp3_array[$RANDOM % ${#mp3_array[@]}]}
mp3_file="/data/data/com.termux/files/usr/tmp/basebot_install.mp3"
curl -L "$random_mp3" -o "$mp3_file"
while true; do
    mpv --no-terminal "$mp3_file" &
    sleep 2
    wait
done &
echo -e "\033[01;91mSound not available.\n\033[0m"
 
echo -e "\033[01;32m\033[01m

▀█▀ ▒█▄░▒█ ▒█▀▀▀█ ▀▀█▀▀ ░█▀▀█ ▒█░░░ ▒█░░░ ▀█▀ ▒█▄░▒█ ▒█▀▀█
▒█░ ▒█▒█▒█ ░▀▀▀▄▄ ░▒█░░ ▒█▄▄█ ▒█░░░ ▒█░░░ ▒█░ ▒█▒█▒█ ▒█░▄▄
▄█▄ ▒█░░▀█ ▒█▄▄▄█ ░▒█░░ ▒█░▒█ ▒█▄▄█ ▒█▄▄█ ▄█▄ ▒█░░▀█ ▒█▄▄█

▒█▀▀▄ ▒█▀▀▀ ▒█▀▀█ ▒█▀▀▀ ▒█▄░▒█ ▒█▀▀▄ ▒█▀▀▀ ▒█▄░▒█ ▒█▀▀█ ▀█▀ ▒█▀▀▀ ▒█▀▀▀█
▒█░▒█ ▒█▀▀▀ ▒█▄▄█ ▒█▀▀▀ ▒█▒█▒█ ▒█░▒█ ▒█▀▀▀ ▒█▒█▒█ ▒█░░░ ▒█░ ▒█▀▀▀ ░▀▀▀▄▄
▒█▄▄▀ ▒█▄▄▄ ▒█░░░ ▒█▄▄▄ ▒█░░▀█ ▒█▄▄▀ ▒█▄▄▄ ▒█░░▀█ ▒█▄▄█ ▄█▄ ▒█▄▄▄ ▒█▄▄▄█\n\033[0m"

echo -e "\e[35mInstalling Git\n\e[0m"

if command -v git >/dev/null 2>&1; then
    echo -e "\033[01;33mGit was already installed previously.\033[0m"
else
    if pkg install git -y 2>&1 | grep -Eiq '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
        echo -e "\033[01;32m\033[01mGit has been installed successfully.\n\033[0m"
    else
        error=$(pkg install git 2>&1 >/dev/null)
        echo -e "\033[0;31mError: $error\033[0m" 
        echo -e "\033[0;34mGit could not be installed. Check your Internet connection and try again. If the error continues, install it manually!!\033[0m" 
        exit 1
    fi
fi
 
echo -e "\e[35mInstalling Node.js\n\e[0m"

if command -v node >/dev/null 2>&1; then
    echo -e "\033[01;33mNode.js was already installed previously.\033[0m"
else
    if pkg install nodejs-lts -y 2>&1 | grep -Eiq '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
        echo -e "\033[01;32m\033[01mNode.js has been installed successfully.\n\033[0m"
    else
        error=$(pkg install nodejs-lts >/dev/null)
        echo -e "\033[0;31mError: $error\033[0m" 
        echo -e "\033[0;34mNode.js could not be installed. Check your Internet connection and try again. If the error continues, install it manually!!\033[0m" 
        exit 1
    fi
fi
 
echo -e "\e[35mInstalling Pino\n\e[0m"

if npm list -g pino >/dev/null 2>&1; then
    echo -e "\033[01;33mPino was already installed previously.\033[0m"
else
    if npm install pino -y 2>&1 | grep -Eiq '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
        echo -e "\033[01;32m\033[01mPino has been installed successfully.\n\033[0m"
    else
        error=$(npm install pino 2>&1 >/dev/null)
        echo -e "\033[0;31mError: $error\033[0m" 
        echo -e "\033[0;34mPino could not be installed. Check your Internet connection and try again. If the error continues, install it manually!!\033[0m" 
        exit 1
    fi
fi

echo -e "\e[36m

░█▀▀█ ▒█░░░ ▒█░░░ 　 ▒█▀▀█ ▀█▀ ▒█▀▀█ ▒█░▒█ ▀▀█▀▀ 
▒█▄▄█ ▒█░░░ ▒█░░░ 　 ▒█▄▄▀ ▒█░ ▒█░▄▄ ▒█▀▀█ ░▒█░░ 
▒█░▒█ ▒█▄▄█ ▒█▄▄█ 　 ▒█░▒█ ▄█▄ ▒█▄▄█ ▒█░▒█ ░▒█░░\n\e[0m"

echo -e "\033[01;32m\033[01m\nAll dependencies have been installed successfully.\n\033[0m" 

echo -e "\e[35m

██╗░░  ██╗███╗░░██╗░██████╗████████╗░█████╗░██╗░░░░░██╗░░░░░██╗███╗░░██╗░██████╗░
╚██╗░  ██║████╗░██║██╔════╝╚══██╔══╝██╔══██╗██║░░░░░██║░░░░░██║████╗░██║██╔════╝░
░╚██╗  ██║██╔██╗██║╚█████╗░░░░██║░░░███████║██║░░░░░██║░░░░░██║██╔██╗██║██║░░██╗░
░██╔╝  ██║██║╚████║░╚═══██╗░░░██║░░░██╔══██║██║░░░░░██║░░░░░██║██║╚████║██║░░╚██╗
██╔╝░  ██║██║░╚███║██████╔╝░░░██║░░░██║░░██║███████╗███████╗██║██║░╚███║╚██████╔╝
╚═╝░░  ╚═╝╚═╝░░╚══╝╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚══════╝╚═╝╚═╝░░╚══╝░╚═════╝░\n\e[0m"

echo -e "\033[1;35m"

REPO="https://github.com/matterssmith-net/Base-Bot.git"
BRANCH="master"

if {
    if [ ! -d ".git" ]; then
        echo -e "\e[35mInitializing repository...\e[0m"
        git init &&
        git remote add origin "$REPO"
    fi &&
    echo -e "\e[35mDownloading latest files...\e[0m" &&
    git fetch origin &&
    git checkout -B "$BRANCH" "origin/$BRANCH"
}; then
    echo -e "\033[01;32m\033[01mRepository synchronized successfully.\n\033[0m"
else
    echo -e "\033[0;34mCould not synchronize the repository. Check your Internet connection and try again. If the error continues, update it manually!!\033[0m"
    exit 1
fi

echo -e "\033[01;32m\033[01mChanging to the repository directory!!\n\033[0m" 
cd Base-Bot

if [ -f package.json ]; then
    echo -e "\e[35mInstalling NPM\n\e[0m"

    echo -e "\033[0;34mNPM will be installed automatically. Wait a moment please.\n\033[0m"
    if npm install 2>&1 | grep -Eiq '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
        error=$(npm install 2>&1 >/dev/null)
        echo -e "\033[0;31mError: $error\033[0m" 
        echo -e "\033[0;34mNPM couldn't be installed. Check your Internet connection and try again. If the error continues, install it manually!!\033[0m" 
    else
        echo -e "\033[01;32m\033[01mNPM has been installed successfully.\n\033[0m" 
    fi
else
    echo -e "\033[31mPackage.json file not found! Put the installer in the same folder as the bot.\033[0m"
    exit 1
fi

clear
echo -e "\e[36m
▀▀█▀▀ ░█─░█ ─█▀▀█ ░█▄─░█ ░█─▄▀ ░█▀▀▀█ 　 ░█▀▀▀ ░█▀▀▀█ ░█▀▀█ 　 ░█──░█ ░█▀▀▀█ ░█─░█ ░█▀▀█ 
─░█── ░█▀▀█ ░█▄▄█ ░█░█░█ ░█▀▄─ ─▀▀▀▄▄ 　 ░█▀▀▀ ░█──░█ ░█▄▄▀ 　 ░█▄▄▄█ ░█──░█ ░█─░█ ░█▄▄▀ 
─░█── ░█─░█ ░█─░█ ░█──▀█ ░█─░█ ░█▄▄▄█ 　 ░█─── ░█▄▄▄█ ░█─░█ 　 ──░█── ░█▄▄▄█ ─▀▄▄▀ ░█─░█ 

░█▀▀█ ░█▀▀█ ░█▀▀▀ ░█▀▀▀ ░█▀▀▀ ░█▀▀█ ░█▀▀▀ ░█▄─░█ ░█▀▀█ ░█▀▀▀ 
░█▄▄█ ░█▄▄▀ ░█▀▀▀ ░█▀▀▀ ░█▀▀▀ ░█▄▄▀ ░█▀▀▀ ░█░█░█ ░█─── ░█▀▀▀ 
░█─── ░█─░█ ░█▄▄▄ ░█─── ░█▄▄▄ ░█─░█ ░█▄▄▄ ░█──▀█ ░█▄▄█ ░█▄▄▄\n\e[0m"
    
sleep 15 && pkill mpv > /dev/null 2>&1 && sleep 2 && rm -f "/data/data/com.termux/files/usr/tmp/basebot_install.mp3" &
echo -e "\033[01;32m\033[01mStarting Base Bot!!\n\033[0m"
npm start
