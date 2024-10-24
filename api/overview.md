# API

```lua
consumeWindowMessage(bool bGameMessage, bool bScriptsMessage);
local nHandle = getCharPointerHandle(nPointer);
local nPointer = getCharPointer(int nHandle);
local nHandle = getPlayerPedHandle();
addEventHandler(String Event, function Callback);
local bResult = isKeyDown(int nKey);
local bResult = isKeyPressed(int nKey);
local bResult = isKeyReleased(int nKey);
addMessage(String szText, int nTime, int nFlags, bool bPreviousBrief);
loadScript(String szScriptName);
unloadScript(String szScriptName);
local nHWND = getGameHWND();
local nDevicePtr = getD3DDevicePtr();
local nSwapChainPtr = getDXGISwapChainPtr();
local nDeviceContextPtr = getD3DDeviceContextPtr();
showCursor(bool bShow, bool bLockPlayer);
local Result = readMemory(int nAddr, int nSize);
writeMemory(int nAddr, int nSize, Value);
local szResult = getWorkingDirectory();
local bResult = doesDirectoryExist(String szPath);
local szPath, bIsResult = getFolderPath(int nValue);
local bResult = doesFileExist(String szPath);
local nResult = allocateMemory(int nSize);
freeMemory(int nPtr);
local nStatus = downloadUrlToFile(String szUrl, String szPath, function Callback);
local nResult = representFloatAsInt(float fValue);
local fResult = representIntAsFloat(int nValue);
local szPath = getGameDirectory();
local bResult, nHandle = loadDynamicLibrary(String szPath);
freeDynamicLibrary(int nHandle);
local bResult, nProc = getDynamicLibraryProcedure(String szProcStr, int nHandle);
local bResult = createDirectory(String szPath);
```