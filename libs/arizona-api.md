# ArizonaAPI

Библиотека для работы с Arizona Trilogy

::: info
Тема на blast.hk: https://www.blast.hk/threads/222392/
:::


## Установка

Для установки переместите `ArizonaAPI.dll` с вложений темы по пути `Arizona Launcher/bin/trilogy/Client/CommunityMods`. Если папки `CommunityMods` нет - создайте её.

В ту же папку переместите `TrilogyLoader.asi` и измените формат файла на `.dll`, после чего установка `.lua` скриптов будет происходить по пути `Arizona Launcher/bin/Game/Gameface/Binaries/Win64/TrilogyLoader`

## Пример использования

```lua
require("ArizonaAPI") -- Подключение библиотеки

function getPlayerInfo(arg)
    local nId = tonumber(arg)
    local nickName = sampGetPlayerNickName(nId)
    local color = sampGetPlayerColor(nId)
    sampAddChatMessage(string.format("Игрок: %s[%d]. Цвет ника: %X", nickName, nId, color), 0xFFFFFFFF)
end

function main()
    sampRegisterChatCommand("printInfo", getPlayerInfo)
end

function onClientMessage(message, color)
    if message:find("MyText") then
        return false
    end
end

function onServerJoin(playerId)
    local nickName = sampGetPlayerNickName(playerId)
    sampAddChatMessage(string.format("Игрок: {9E86F2}%s[%d]{FFFFFF} подключился к серверу!", nickName, playerId), 0xFFFFFFFF)
end

function onServerQuit(playerId)
    -- Никнейм получить вы не сможете
    sampAddChatMessage(string.format("Игрок с ID: {CFF290}%d{FFFFFF} отключился от сервера!", playerId), 0xFFFFFFFF)
end

function onWorldVehicleAdd(vehicleId)
    sampAddChatMessage(string.format("В зоне стрима появился транспорт с ID: {F2A1A1}%d!"), 0xFFFFFFFF)
end
```

## Функции

```lua
-- Функции для работы с чатом
sampAddChatMessage(string szString, int nColor) -- Отправка визуального сообщения в чат
sampSendChat(string szString) -- Отправка сообщения в серверный чат от лица локального игрока
sampSendCommand(string szCommand) -- Отправка команды в чат
sampRegisterChatCommand(string szString, function callback) -- Регистрация чат команды

-- Функции для работы с игроками
local nId = sampGetLocalPlayerId() -- Возвращает ID локального игрока
local nColor = sampGetPlayerColor(int nId) -- Возвращает цвет игрока по его ID
local szNickName = sampGetPlayerNickName(int nId) -- Возвращает ник игрока по его ID
local bIsAFK = sampIsPlayerAFK(int nId) -- Проверяет находится ли игрок АФК
local bIsConnected = sampIsLocalPlayerConnected() -- Проверяет подключены ли вы к серверу

-- Функции для работы с браузером (CEF)
executeUIBrowserJSCode(szCode) -- Выполняет JS код в CEF (пример: window.executeEvent("some.event", "[1,2,3,4]"))
sendUIBrowserMessage(szMessage) -- Отправляет сообщение браузеру (пример: onActionView|someview)

-- Прочие функции
int nVersion = getArizonaAPIVersion() -- Возвращает текущую версию API
```

## События

```lua
-- События, которые нельзя отклонить
--[[
enum ENetworkState
{
  None,
  WaitConnect,
  Connecting,
  AwaitJoin,
  Connected,
  Restarting
}
]]
onStateChanged(ENetworkState oldState, ENetworkState newState) -- смена статуса игры (GameState)
onServerJoin(int nId) -- Игрок подключился к серверу
onServerQuit(int nId) -- Игрок отключился от сервера
onWorldPlayerAdd(int nId) -- Игрок вошел в зону стрима
onWorldPlayerRemove(int nId) -- Игрок вышел из зоны стрима
onWorldPlayerDeath(int nId) -- Игрок умер
onWorldVehicleAdd(int nId) -- Транспорт вошел в зону стрима
onWorldVehicleRemove(int nId) -- Транспорт вышел из зоны стрима
onSetPlayerColor(int nId, int nColor) -- Смена цвета игрока (клист)
onSetPlayerName(int nId, string szName) -- Смена ника игрока

-- События, которые разрешают отклонять их работу через return false
onClientMessage(string szMessage, int nColor) -- добавление клиентского сообщения в чат
onWorldTime(int nHour) -- Сменилось время
onSetTimeEx(int nHour, int nMinute) -- Сменилось время, учитывая минуты
onWeather(int nWeather) -- Сменилась погода
onSetCheckpoint(float x, float y, float z, float radius) -- Установлен чекпоинт
onDisableCheckpoint() -- Отключен чекпоинт
onSetRaceCheckpoint(int nType, float x, float y, float z, float targetX, float targetY, float targetZ, float radius) -- Установлен гоночный чекпоинт
onDisableRaceCheckpoint() -- Отключен гоночный чекпоинт
onUIBrowserJSCodeExecute(string szCode) -- Выполнение JS кода в CEF (пример: window.executeEvent("some.event", "[1,2,3,4]"))
onSendUIBrowserMessage(string szMessage) -- Отправка сообщения браузеру (пример: onActionView|someview)
onCommand(string szCommand) -- Отправка команды в чат
```
