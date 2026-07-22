#!/data/data/com.termux/files/usr/bin/bash    

clear

REPO="https://github.com/matterssmith-net/Base-Bot.git"
BRANCH="master"

TMP_DIR="$(mktemp -d)"
INSTALLER="install-termux.sh"

line0="====================================================================================="
line1="____________________________________________________________"
line2="_____________________________________________________________________________________"
line3="______________________________________________________________________________________________________________"
line4="________________________________________"

_install() {
    local manager="$1"
    local package="$2"

    echo -e "\n\e[35mInstalling ${package}\n\e[0m"

    case "$manager:$package" in

        pkg:*)
            check="command -v ${package%%-*} >/dev/null 2>&1"
            cmd="pkg install -y $package"
            ;;

        npm:install)
            [ -f package.json ] || {
                echo -e "\033[0;31mpackage.json not found.\033[0m"
                exit 1
            }
            check=""
            cmd="npm install"
            ;;

        npm:*)
            check="npm list -g --depth=0 $package >/dev/null 2>&1"
            cmd="npm install -g $package"
            ;;

        *)
            echo -e "\033[0;31mUnknown installer: $manager $package\033[0m"
            exit 1
            ;;
    esac

    if [ -n "$check" ] && eval "$check"; then
        echo -e "\033[01;33m${package} was already installed previously.\033[0m"
        return 0
    fi

    output=$(eval "$cmd" 2>&1)
    status=$?

    if [ $status -eq 0 ]; then
        echo -e "\033[01;32m${package} has been installed successfully.\n\033[0m"
        return 0
    fi

    echo -e "\033[0;31m${package} could not be installed.\033[0m"
    echo "$output"

    exit 1
}

echo -e "\e[35m
$line0

██╗░░  ██████╗░░█████╗░░██████╗███████╗  ██████╗░░█████╗░████████╗
╚██╗░  ██╔══██╗██╔══██╗██╔════╝██╔════╝  ██╔══██╗██╔══██╗╚══██╔══╝
░╚██╗  ██████╦╝███████║╚█████╗░█████╗░░  ██████╦╝██║░░██║░░░██║░░░
░██╔╝  ██╔══██╗██╔══██║░╚═══██╗██╔══╝░░  ██╔══██╗██║░░██║░░░██║░░░
██╔╝░  ██████╦╝██║░░██║██████╔╝███████╗  ██████╦╝╚█████╔╝░░░██║░░░
╚═╝░░  ╚═════╝░╚═╝░░╚═╝╚═════╝░╚══════╝  ╚═════╝░░╚════╝░░░░╚═╝░░░
\n\n\e[0m"

echo -e "\e[36m
$line1

▒█▀▀█ ▒█▀▀█ ▒█▀▀▀ ▒█▀▀█ ░█▀▀█ ▒█▀▀█ ▀█▀ ▒█▄░▒█ ▒█▀▀█ 
▒█▄▄█ ▒█▄▄▀ ▒█▀▀▀ ▒█▄▄█ ▒█▄▄█ ▒█▄▄▀ ▒█░ ▒█▒█▒█ ▒█░▄▄ 
▒█░░░ ▒█░▒█ ▒█▄▄▄ ▒█░░░ ▒█░▒█ ▒█░▒█ ▄█▄ ▒█░░▀█ ▒█▄▄█ 

▀█▀ ▒█▄░▒█ ▒█▀▀▀█ ▀▀█▀▀ ░█▀▀█ ▒█░░░ ▒█░░░ ░█▀▀█ ▀▀█▀▀ ▀█▀ ▒█▀▀▀█ ▒█▄░▒█
▒█░ ▒█▒█▒█ ░▀▀▀▄▄ ░▒█░░ ▒█▄▄█ ▒█░░░ ▒█░░░ ▒█▄▄█ ░▒█░░ ▒█░ ▒█░░▒█ ▒█▒█▒█
▄█▄ ▒█░░▀█ ▒█▄▄▄█ ░▒█░░ ▒█░▒█ ▒█▄▄█ ▒█▄▄█ ▒█░▒█ ░▒█░░ ▄█▄ ▒█▄▄▄█ ▒█░░▀█\n\e[0m"

echo -e "\e[35m
$line2

▒█▀▀▀█ ▒█▀▀▀ ▀▀█▀▀ 　 ▀▀█▀▀ ▒█░▒█ ▒█▀▀▀ 　 ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀█ ▒█▀▀▀ ▒█▀▀▀ ▒█▄░▒█ 
░▀▀▀▄▄ ▒█▀▀▀ ░▒█░░ 　 ░▒█░░ ▒█▀▀█ ▒█▀▀▀ 　 ░▀▀▀▄▄ ▒█░░░ ▒█▄▄▀ ▒█▀▀▀ ▒█▀▀▀ ▒█▒█▒█ 
▒█▄▄▄█ ▒█▄▄▄ ░▒█░░ 　 ░▒█░░ ▒█░▒█ ▒█▄▄▄ 　 ▒█▄▄▄█ ▒█▄▄█ ▒█░▒█ ▒█▄▄▄ ▒█▄▄▄ ▒█░░▀█\n\e[0m"

echo -e "\033[01;32m\033[01m
$line1

▀█▀ ▒█▄░▒█ ▒█▀▀▀█ ▀▀█▀▀ ░█▀▀█ ▒█░░░ ▒█░░░ ▀█▀ ▒█▄░▒█ ▒█▀▀█
▒█░ ▒█▒█▒█ ░▀▀▀▄▄ ░▒█░░ ▒█▄▄█ ▒█░░░ ▒█░░░ ▒█░ ▒█▒█▒█ ▒█░▄▄
▄█▄ ▒█░░▀█ ▒█▄▄▄█ ░▒█░░ ▒█░▒█ ▒█▄▄█ ▒█▄▄█ ▄█▄ ▒█░░▀█ ▒█▄▄█

▒█▀▀▄ ▒█▀▀▀ ▒█▀▀█ ▒█▀▀▀ ▒█▄░▒█ ▒█▀▀▄ ▒█▀▀▀ ▒█▄░▒█ ▒█▀▀█ ▀█▀ ▒█▀▀▀ ▒█▀▀▀█
▒█░▒█ ▒█▀▀▀ ▒█▄▄█ ▒█▀▀▀ ▒█▒█▒█ ▒█░▒█ ▒█▀▀▀ ▒█▒█▒█ ▒█░░░ ▒█░ ▒█▀▀▀ ░▀▀▀▄▄
▒█▄▄▀ ▒█▄▄▄ ▒█░░░ ▒█▄▄▄ ▒█░░▀█ ▒█▄▄▀ ▒█▄▄▄ ▒█░░▀█ ▒█▄▄█ ▄█▄ ▒█▄▄▄ ▒█▄▄▄█\n\033[0m"

echo -e "\033[33m\033[0m Updating Termux..."
pkg update -y && pkg upgrade -y

_install pkg git

echo -e "\e[35m\nChecking installer updates...\n\e[0m"

if git clone --depth=1 --branch "$BRANCH" "$REPO" "$TMP_DIR" >/dev/null 2>&1; then

    if ! cmp -s "./$INSTALLER" "$TMP_DIR/$INSTALLER"; then
        echo -e "\033[01;32mA new installer version was found. Restarting installer...\033[0m"

        cp -f "$TMP_DIR/$INSTALLER" "./$INSTALLER"

        # Convert CRLF -> LF
        sed -i 's/\r$//' "./$INSTALLER"

        chmod +x "./$INSTALLER"

        rm -rf "$TMP_DIR"

        exec bash "./$INSTALLER" "$@"
    fi

    rm -rf "$TMP_DIR"
    echo -e "\033[01;33mInstaller is already up to date.\033[0m"

else
    rm -rf "$TMP_DIR"
    echo -e "\033[0;34mCould not check for installer updates. Check your Internet connection and try again. If the error continues, update it manually!!\033[0m"
    exit 1
fi

_install pkg mpv

echo -e "\033[1;35m"

mp3_array=("https://qu.ax/PreU.mp3" "https://qu.ax/kKXA.mp3" "https://qu.ax/cFSp.mp3" "https://qu.ax/CQRm.mp3" "https://qu.ax/kDSY.mp3" "https://qu.ax/AQLB.mp3" "https://qu.ax/EspE.mp3" "https://qu.ax/ifKO.mp3" "https://qu.ax/EUDu.mp3" "https://qu.ax/SRNs.mp3" "https://qu.ax/WvfK.mp3" "https://qu.ax/lbff.mp3")
random_mp3=${mp3_array[$RANDOM % ${#mp3_array[@]}]}
mp3_file="/data/data/com.termux/files/usr/tmp/basebot_install.mp3"
curl -L "$random_mp3" -o "$mp3_file"
while true; do
    mpv --no-terminal "$mp3_file" &
    sleep 2
    wait
done &
echo -e "\033[01;91m\nSound not available.\n\033[0m"

_install pkg nodejs-lts
_install npm pino

echo -e "\e[36m
$line1

░█▀▀█ ▒█░░░ ▒█░░░ 　 ▒█▀▀█ ▀█▀ ▒█▀▀█ ▒█░▒█ ▀▀█▀▀ 
▒█▄▄█ ▒█░░░ ▒█░░░ 　 ▒█▄▄▀ ▒█░ ▒█░▄▄ ▒█▀▀█ ░▒█░░ 
▒█░▒█ ▒█▄▄█ ▒█▄▄█ 　 ▒█░▒█ ▄█▄ ▒█▄▄█ ▒█░▒█ ░▒█░░\n\e[0m"

echo -e "\033[01;32m\033[01m\nAll dependencies have been installed successfully.\n\033[0m" 

echo -e "\e[35m
$line0

██╗░░  ██╗███╗░░██╗░██████╗████████╗░█████╗░██╗░░░░░██╗░░░░░██╗███╗░░██╗░██████╗░
╚██╗░  ██║████╗░██║██╔════╝╚══██╔══╝██╔══██╗██║░░░░░██║░░░░░██║████╗░██║██╔════╝░
░╚██╗  ██║██╔██╗██║╚█████╗░░░░██║░░░███████║██║░░░░░██║░░░░░██║██╔██╗██║██║░░██╗░
░██╔╝  ██║██║╚████║░╚═══██╗░░░██║░░░██╔══██║██║░░░░░██║░░░░░██║██║╚████║██║░░╚██╗
██╔╝░  ██║██║░╚███║██████╔╝░░░██║░░░██║░░██║███████╗███████╗██║██║░╚███║╚██████╔╝
╚═╝░░  ╚═╝╚═╝░░╚══╝╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚══════╝╚═╝╚═╝░░╚══╝░╚═════╝░\n\e[0m"

echo -e "\033[1;35m"

echo -e "\e[35mDownloading latest files...\n\e[0m"

if git clone --depth=1 --branch "$BRANCH" "$REPO" "$TMP_DIR" >/dev/null 2>&1; then

    (
        cd "$TMP_DIR" || exit 1

        tar \
            --exclude=".git" \
            --exclude="$INSTALLER" \
            -cf - .
    ) | tar -xf -

    rm -rf "$TMP_DIR"

    echo -e "\033[01;32mRepository synchronized successfully.\033[0m"

else
    rm -rf "$TMP_DIR"
    echo -e "\033[0;34mCould not synchronize the repository. Check your Internet connection and try again. If the error continues, update it manually!!\033[0m"
    exit 1
fi

_install npm install

echo -e "\e[36m
$line3

▀▀█▀▀ ░█─░█ ─█▀▀█ ░█▄─░█ ░█─▄▀ ░█▀▀▀█ 　 ░█▀▀▀ ░█▀▀▀█ ░█▀▀█ 　 ░█──░█ ░█▀▀▀█ ░█─░█ ░█▀▀█ 
─░█── ░█▀▀█ ░█▄▄█ ░█░█░█ ░█▀▄─ ─▀▀▀▄▄ 　 ░█▀▀▀ ░█──░█ ░█▄▄▀ 　 ░█▄▄▄█ ░█──░█ ░█─░█ ░█▄▄▀ 
─░█── ░█─░█ ░█─░█ ░█──▀█ ░█─░█ ░█▄▄▄█ 　 ░█─── ░█▄▄▄█ ░█─░█ 　 ──░█── ░█▄▄▄█ ─▀▄▄▀ ░█─░█ 

░█▀▀█ ░█▀▀█ ░█▀▀▀ ░█▀▀▀ ░█▀▀▀ ░█▀▀█ ░█▀▀▀ ░█▄─░█ ░█▀▀█ ░█▀▀▀ 
░█▄▄█ ░█▄▄▀ ░█▀▀▀ ░█▀▀▀ ░█▀▀▀ ░█▄▄▀ ░█▀▀▀ ░█░█░█ ░█─── ░█▀▀▀ 
░█─── ░█─░█ ░█▄▄▄ ░█─── ░█▄▄▄ ░█─░█ ░█▄▄▄ ░█──▀█ ░█▄▄█ ░█▄▄▄\n\e[0m"
    
sleep 15 && pkill mpv > /dev/null 2>&1 && sleep 2 && rm -f "/data/data/com.termux/files/usr/tmp/basebot_install.mp3"

node scripts/pos-fix.js
sync && sleep 1

echo -e "\033[01;32m\033[01m\nStarting Base Bot!!\033[0m"

npm start
