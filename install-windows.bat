<!-- : Begin batch script
@setlocal DisableDelayedExpansion
@echo off

cls
mode con cols=80 lines=32

:: Mostrar título
title Base Bot Installer

::==================================================
:: ###                   Configuration Options ###
::==================================================

set "_Pause=pause >nul"
set "_el=%errorlevel%"
set "_err===== ERROR ===="

:: change to 1 to enable debug mode (can be used with unattended options)
set _Debug=0

set Unattend=0

set "line0======================================================================================"
set "line1=____________________________________________________________"
set "line2=_____________________________________________________________________________________"
set "line3=______________________________________________________________________________________________________________"
set "line4=________________________________________"

color 1F
echo.
echo %line0%
echo.
echo ██╗░░  ██████╗░░█████╗░░██████╗███████╗  ██████╗░░█████╗░████████╗
echo ╚██╗░  ██╔══██╗██╔══██╗██╔════╝██╔════╝  ██╔══██╗██╔══██╗╚══██╔══╝
echo ░╚██╗  ██████╦╝███████║╚█████╗░█████╗░░  ██████╦╝██║░░██║░░░██║░░░
echo ░██╔╝  ██╔══██╗██╔══██║░╚═══██╗██╔══╝░░  ██╔══██╗██║░░██║░░░██║░░░
echo ██╔╝░  ██████╦╝██║░░██║██████╔╝███████╗  ██████╦╝╚█████╔╝░░░██║░░░
echo ╚═╝░░  ╚═════╝░╚═╝░░╚═╝╚═════╝░╚══════╝  ╚═════╝░░╚════╝░░░░╚═╝░░░
echo.

timeout /t 1 >nul

color 1F
echo.
echo %line1%
echo.
echo ▒█▀▀█ ▒█▀▀█ ▒█▀▀▀ ▒█▀▀█ ░█▀▀█ ▒█▀▀█ ▀█▀ ▒█▄░▒█ ▒█▀▀█ 
echo ▒█▄▄█ ▒█▄▄▀ ▒█▀▀▀ ▒█▄▄█ ▒█▄▄█ ▒█▄▄▀ ▒█░ ▒█▒█▒█ ▒█░▄▄ 
echo ▒█░░░ ▒█░▒█ ▒█▄▄▄ ▒█░░░ ▒█░▒█ ▒█░▒█ ▄█▄ ▒█░░▀█ ▒█▄▄█ 

echo ▀█▀ ▒█▄░▒█ ▒█▀▀▀█ ▀▀█▀▀ ░█▀▀█ ▒█░░░ ▒█░░░ ░█▀▀█ ▀▀█▀▀ ▀█▀ ▒█▀▀▀█ ▒█▄░▒█
echo ▒█░ ▒█▒█▒█ ░▀▀▀▄▄ ░▒█░░ ▒█▄▄█ ▒█░░░ ▒█░░░ ▒█▄▄█ ░▒█░░ ▒█░ ▒█░░▒█ ▒█▒█▒█
echo ▄█▄ ▒█░░▀█ ▒█▄▄▄█ ░▒█░░ ▒█░▒█ ▒█▄▄█ ▒█▄▄█ ▒█░▒█ ░▒█░░ ▄█▄ ▒█▄▄▄█ ▒█░░▀█
echo.

color 1F
echo.
echo %line2%
echo.
echo ▒█▀▀▀█ ▒█▀▀▀ ▀▀█▀▀ 　 ▀▀█▀▀ ▒█░▒█ ▒█▀▀▀ 　 ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀█ ▒█▀▀▀ ▒█▀▀▀ ▒█▄░▒█ 
echo ░▀▀▀▄▄ ▒█▀▀▀ ░▒█░░ 　 ░▒█░░ ▒█▀▀█ ▒█▀▀▀ 　 ░▀▀▀▄▄ ▒█░░░ ▒█▄▄▀ ▒█▀▀▀ ▒█▀▀▀ ▒█▒█▒█ 
echo ▒█▄▄▄█ ▒█▄▄▄ ░▒█░░ 　 ░▒█░░ ▒█░▒█ ▒█▄▄▄ 　 ▒█▄▄▄█ ▒█▄▄█ ▒█░▒█ ▒█▄▄▄ ▒█▄▄▄ ▒█░░▀█
echo.

color 1F
echo.
echo %line1%
echo.
echo ▀█▀ ▒█▄░▒█ ▒█▀▀▀█ ▀▀█▀▀ ░█▀▀█ ▒█░░░ ▒█░░░ ▀█▀ ▒█▄░▒█ ▒█▀▀█
echo ▒█░ ▒█▒█▒█ ░▀▀▀▄▄ ░▒█░░ ▒█▄▄█ ▒█░░░ ▒█░░░ ▒█░ ▒█▒█▒█ ▒█░▄▄
echo ▄█▄ ▒█░░▀█ ▒█▄▄▄█ ░▒█░░ ▒█░▒█ ▒█▄▄█ ▒█▄▄█ ▄█▄ ▒█░░▀█ ▒█▄▄█
echo.
echo ▒█▀▀▄ ▒█▀▀▀ ▒█▀▀█ ▒█▀▀▀ ▒█▄░▒█ ▒█▀▀▄ ▒█▀▀▀ ▒█▄░▒█ ▒█▀▀█ ▀█▀ ▒█▀▀▀ ▒█▀▀▀█
echo ▒█░▒█ ▒█▀▀▀ ▒█▄▄█ ▒█▀▀▀ ▒█▒█▒█ ▒█░▒█ ▒█▀▀▀ ▒█▒█▒█ ▒█░░░ ▒█░ ▒█▀▀▀ ░▀▀▀▄▄
echo ▒█▄▄▀ ▒█▄▄▄ ▒█░░░ ▒█▄▄▄ ▒█░░▀█ ▒█▄▄▀ ▒█▄▄▄ ▒█░░▀█ ▒█▄▄█ ▄█▄ ▒█▄▄▄ ▒█▄▄▄█
echo.

color 1F
::==================================================
:: ###                   Configuration ###
::==================================================

set REPO=https://github.com/matterssmith-net/Base-Bot.git
set BRANCH=master

set "TMP_DIR=%TEMP%\BaseBot_%RANDOM%"
set INSTALLER=install.bat

set "RAW_REPO=%REPO%"
set "RAW_REPO=%RAW_REPO:https://github.com/=%"
set "RAW_REPO=%RAW_REPO:.git=%"

::==================================================
:: ###                   Check Administrator ###
::==================================================

:E_Admin
net session >nul 2>&1

set "_el=%errorlevel%"
if not "%_el%"=="0" (
    color 4F
    echo.
    echo %_err%
    echo This script requires administrator privileges.
    echo To do so, right-click on this script and select 'Run as administrator'
    echo.

    if %_Debug% EQU 0 if %Unattend% EQU 0 (
        echo Press any key to exit...
        %_Pause%
        color 0F
        echo.
        echo /^>
        echo.
        timeout /t 1 >nul
    )

    exit /b 1
)

::==================================================
:: ###                   Check Winget ###
::==================================================

where winget >nul 2>&1

set "_el=%errorlevel%"
if "%_el%" == 1 (
    echo.
    color 4F
    echo Winget was not found.
    
    color 1F
    echo.
    echo Install App Installer from Microsoft Store first.
    %_pause%
    color 0F
    echo.
    echo /^>
    echo.
    timeout /t 1 >nul
    exit /b 1
)

color 1F
call :E_WindowsUpdate

::==================================================
:: ###                   Install Git ###
::==================================================

color 1F
call :_install winget Git.Git

color 1F
call refreshenv >nul 2>&1

::==================================================
:: ###                   Check installer updates ###
::==================================================

color 1F
echo.
echo Checking installer updates...
echo.

if not exist "%TMP_DIR%" mkdir "%TMP_DIR%"

curl.exe -L --fail ^
    -o "%TMP_DIR%\%INSTALLER%" ^
    "https://raw.githubusercontent.com/%RAW_REPO%/refs/heads/%BRANCH%/%INSTALLER%"

set "_el=%errorlevel%"

if %_el% EQU 1 (
    color 4F
    echo.
    echo Could not check for installer updates.
    echo Check your Internet connection and try again.
    if exist "%TMP_DIR%" rd /s /q "%TMP_DIR%"
    %_pause%
    color 0F
    echo.
    echo /^>
    echo.
    timeout /t 1 >nul
    exit /b 1
)

if not exist "%TMP_DIR%\install.bat" (
    rd /s /q "%TMP_DIR%"

    color 4F
    echo.
    echo install.bat was not found in the repository.
    %_Pause%
    color 0F
    echo.
    echo /^>
    echo.
    timeout /t 1 >nul
    exit /b 1
)

fc /b "%~f0" "%TMP_DIR%\%INSTALLER%" >nul

set "_el=%errorlevel%"

if %_el% EQU 2 (
    color 4F
    echo.
    echo Unable to compare installer files.
    if exist "%TMP_DIR%" rd /s /q "%TMP_DIR%"
    %_Pause%
    exit /b 1
)

if %_el% EQU 1 (
    color 1F
    echo.
    echo A new installer version was found.
    echo Restarting installer...
    echo.

    copy /y "%TMP_DIR%\%INSTALLER%" "%~f0" >nul

    timeout /t 1 /nobreak >nul

    rd /s /q "%TMP_DIR%"

    cmd /c "%~f0"
    exit
)

echo.
echo Installer is already up to date.
echo.

::==================================================
:: ###                   Refresh PATH ###
::==================================================

color 1F
call refreshenv >nul 2>&1

::==================================================
:: ###                   Install Node.js LTS ###
::==================================================

color 1F
call :_install winget OpenJS.NodeJS.LTS

color 1F
call refreshenv >nul 2>&1

::==================================================
:: ###                   Verify Node ###
::==================================================

where node >nul 2>&1

set "_el=%errorlevel%"
if "%_el%" == 1 (
    color 4F
    echo.
    echo Node.js could not be found after installation.
    %_pause%
    color 0F
    echo.
    echo /^>
    echo.
    timeout /t 1 >nul
    exit /b 1
)

::==================================================
:: ###                   Install global npm packages ###
::==================================================

color 1F
call :_install npm pino

color 1F
call refreshenv >nul 2>&1

color 1F
echo.
echo %line1%
echo.
echo ░█▀▀█ ▒█░░░ ▒█░░░ 　 ▒█▀▀█ ▀█▀ ▒█▀▀█ ▒█░▒█ ▀▀█▀▀ 
echo ▒█▄▄█ ▒█░░░ ▒█░░░ 　 ▒█▄▄▀ ▒█░ ▒█░▄▄ ▒█▀▀█ ░▒█░░
echo ▒█░▒█ ▒█▄▄█ ▒█▄▄█ 　 ▒█░▒█ ▄█▄ ▒█▄▄█ ▒█░▒█ ░▒█░░
echo.

color 1F
echo.
echo All dependencies have been installed successfully.
echo.

color 1F
echo.
echo %line0%
echo.
echo ██╗░░  ██╗███╗░░██╗░██████╗████████╗░█████╗░██╗░░░░░██╗░░░░░██╗███╗░░██╗░██████╗░
echo ╚██╗░  ██║████╗░██║██╔════╝╚══██╔══╝██╔══██╗██║░░░░░██║░░░░░██║████╗░██║██╔════╝░
echo ░╚██╗  ██║██╔██╗██║╚█████╗░░░░██║░░░███████║██║░░░░░██║░░░░░██║██╔██╗██║██║░░██╗░
echo ░██╔╝  ██║██║╚████║░╚═══██╗░░░██║░░░██╔══██║██║░░░░░██║░░░░░██║██║╚████║██║░░╚██╗
echo ██╔╝░  ██║██║░╚███║██████╔╝░░░██║░░░██║░░██║███████╗███████╗██║██║░╚███║╚██████╔╝
echo ╚═╝░░  ╚═╝╚═╝░░╚══╝╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚══════╝╚═╝╚═╝░░╚══╝░╚═════╝░
echo.

color 1F
echo.
echo "Downloading latest files..."
echo.

if exist "%TMP_DIR%" rd /s /q "%TMP_DIR%"
if not exist "%TMP_DIR%" mkdir "%TMP_DIR%"

git clone ^
    --depth=1 ^
    --branch "%BRANCH%" ^
    "%REPO%" ^
    "%TMP_DIR%"

set "_el=%errorlevel%"

if %_el% NEQ 0 (
    color 4F
    echo.
    echo Could not clone repository.
    if exist "%TMP_DIR%" rd /s /q "%TMP_DIR%"
    %_Pause%
    color 0F
    echo.
    echo /^>
    echo.
    timeout /t 1 >nul
    exit /b 1
)

set "_el=%errorlevel%"
if "%_el%" == 1 (
    color 4F
    echo.
    echo Could not synchronize the repository. Check your Internet connection and try again. If the error continues, update it manually!!
    %_pause%
    color 0F
    echo.
    echo /^>
    echo.
    timeout /t 1 >nul
    exit /b 1
)

echo Synchronizing repository...

robocopy "%TMP_DIR%" "%CD%" ^
    /E ^
    /R:5 ^
    /W:2 ^
    /NFL ^
    /NDL ^
    /NJH ^
    /NJS ^
    /NP ^
    /XD ".git" ^
    /XF "install.bat" >nul

set "_el=%errorlevel%"

if "%_el%" GEQ 8 (
    color 4F
    echo.
    echo Repository synchronization failed.
    timeout /t 2 /nobreak >nul
    rd /s /q "%TMP_DIR%" >nul 2>&1
    %_pause%
    color 0F
    echo.
    echo /^>
    echo.
    timeout /t 1 >nul
    exit /b 1
)

rd /s /q "%TMP_DIR%"

color 1F
echo.
echo Repository synchronized successfully.
echo.

color 1F
call :_install npm install

set "_el=%errorlevel%"
if "%_el%" == 1 (
    color 4F
    echo.
    echo Failed installing project dependencies.
    %_pause%
    color 0F
    echo.
    echo /^>
    echo.
    timeout /t 1 >nul
    exit /b 1
)

echo.
echo Project dependencies installed successfully.
echo.

color 1F
echo.
echo %line1%
echo.
echo ▀▀█▀▀ ░█─░█ ─█▀▀█ ░█▄─░█ ░█─▄▀ ░█▀▀▀█ 　 ░█▀▀▀ ░█▀▀▀█ ░█▀▀█ 　 ░█──░█ ░█▀▀▀█ ░█─░█ ░█▀▀█
echo ─░█── ░█▀▀█ ░█▄▄█ ░█░█░█ ░█▀▄─ ─▀▀▀▄▄ 　 ░█▀▀▀ ░█──░█ ░█▄▄▀ 　 ░█▄▄▄█ ░█──░█ ░█─░█ ░█▄▄▀
echo ─░█── ░█─░█ ░█─░█ ░█──▀█ ░█─░█ ░█▄▄▄█ 　 ░█─── ░█▄▄▄█ ░█─░█ 　 ──░█── ░█▄▄▄█ ─▀▄▄▀ ░█─░█
echo.
echo ░█▀▀█ ░█▀▀█ ░█▀▀▀ ░█▀▀▀ ░█▀▀▀ ░█▀▀█ ░█▀▀▀ ░█▄─░█ ░█▀▀█ ░█▀▀▀
echo ░█▄▄█ ░█▄▄▀ ░█▀▀▀ ░█▀▀▀ ░█▀▀▀ ░█▄▄▀ ░█▀▀▀ ░█░█░█ ░█─── ░█▀▀▀
echo ░█─── ░█─░█ ░█▄▄▄ ░█─── ░█▄▄▄ ░█─░█ ░█▄▄▄ ░█──▀█ ░█▄▄█ ░█▄▄▄
echo.

timeout /t 3 >nul

echo.
echo Starting Base Bot...
echo.

color 0F
call npm start

::==================================================
:: ###                   Generic installer ###
::==================================================

:_install

set TYPE=%~1
set PACKAGE=%~2

echo.
color 1F
echo Installing %PACKAGE%...
echo.

if /I "%TYPE%"=="winget" (

    winget list --id %PACKAGE% >nul 2>&1

    set "_el=%errorlevel%"
    if not "%_el%" == 1 ( 
        color 1F
        echo %PACKAGE% is already installed.
        goto :eof
    )

    winget install ^
        --id %PACKAGE% ^
        --exact ^
        --accept-package-agreements ^
        --accept-source-agreements

    set "_el=%errorlevel%"
    if "%_el%" == 1 (
        color 4F
        echo.
        echo Failed installing %PACKAGE%.
        %_pause%
        color 0F
        echo.
        echo /^>
        echo.
        timeout /t 1 >nul
        exit /b 1
    )

    color 1F
    echo %PACKAGE% installed successfully.
    goto :eof
)

if /I "%TYPE%"=="npm" if /I "%PACKAGE%"=="install" (

    if not exist package.json (
        color 4F
        echo.
        echo package.json not found.
        %_pause%
        color 0F
        echo.
        echo /^>
        echo.
        timeout /t 1 >nul
        exit /b 1
    )


    color 1F
    call npm install

    if errorlevel 1 (
        color 4F
        echo.
        echo Project dependencies could not be installed.
        %_pause%
        color 0F
        echo.
        echo /^>
        echo.
        timeout /t 1 >nul
        exit /b 1
    )

    echo Project dependencies have been installed successfully.
    goto :eof
)

if /I "%TYPE%"=="npm" (

    call npm list -g %PACKAGE% >nul 2>&1

    set "_el=%errorlevel%"
    if not "%_el%" == 1 (
        color 1F
        echo %PACKAGE% is already installed.
        goto :eof
    )

    call npm install -g %PACKAGE%

    set "_el=%errorlevel%"
    if "%_el%" == 1 (
        color 4F
        echo.
        echo Failed installing %PACKAGE%.
        %_pause%
        color 0F
        echo.
        echo /^>
        echo.
        timeout /t 1 >nul
        exit /b 1
    )

    color 1F
    echo %PACKAGE% installed successfully.
    goto :eof
)

goto :eof

::==================================================
:: ###                   Windows Update ###
::==================================================

:E_WindowsUpdate

color 1F
echo.
echo Updating Windows...
echo.

::---------------------------------------
:: Update Winget sources
::---------------------------------------

winget source update >nul 2>&1

::---------------------------------------
:: Update installed applications
::---------------------------------------

winget upgrade --all ^
    --accept-package-agreements ^
    --accept-source-agreements ^
    --silent

::---------------------------------------
:: Update Windows (Native API)
::---------------------------------------

powershell -NoProfile -ExecutionPolicy Bypass ^
"$ErrorActionPreference='Stop'; ^
try { ^
    if (-not ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) { ^
        throw 'Administrator privileges are required.' ^
    } ^
    $Session = New-Object -ComObject Microsoft.Update.Session; ^
    $Searcher = $Session.CreateUpdateSearcher(); ^
    $SearchResult = $Searcher.Search('IsInstalled=0 and IsHidden=0'); ^
    if ($SearchResult.Updates.Count -eq 0) { ^
        Write-Host 'No Windows updates available.'; ^
        exit 0 ^
    } ^
    $Updates = New-Object -ComObject Microsoft.Update.UpdateColl; ^
    foreach ($Update in $SearchResult.Updates) { ^
        if (-not $Update.EulaAccepted) { $Update.AcceptEula() } ^
        [void]$Updates.Add($Update) ^
    } ^
    $Downloader = $Session.CreateUpdateDownloader(); ^
    $Downloader.Updates = $Updates; ^
    $Downloader.Download(); ^
    $Installer = $Session.CreateUpdateInstaller(); ^
    $Installer.Updates = $Updates; ^
    $Result = $Installer.Install(); ^
    Write-Host ''; ^
    Write-Host ('Installed: ' + $Result.ResultCode); ^
    if ($Result.RebootRequired) { ^
        Write-Host 'A system reboot is required.' -ForegroundColor Yellow ^
    } ^
} ^
catch { ^
    Write-Host ''; ^
    Write-Host 'Windows Update failed.' -ForegroundColor Red; ^
    Write-Host $_.Exception.Message -ForegroundColor Red; ^
    exit 1 ^
}"

set "_el=%errorlevel%"

if %_el% NEQ 0 (
    color 4F
    echo.
    echo Windows Update could not be completed.
    %_Pause%
    color 0F
    echo.
    echo /^>
    echo.
    timeout /t 1 >nul
    exit /b 1
)

color 1F
echo.
echo Windows Update completed successfully.
echo.

goto :eof
