# Библиотеки

Trilogy Loader поддерживает загрузку и использование библиотек

## Официальные библиотеки

- [ArizonaAPI](/libs/arizona-api.md) - Библиотека для работы с Arizona Trilogy

## Библиотеки, скомпилированные под x64 (для работы в Trilogy Loader)

- [cjson](https://github.com/TrilogyDevelop/updater/blob/main/lib/cjson.zip) - Библиотека для работы с JSON
- [effil](https://github.com/TrilogyDevelop/updater/blob/main/lib/effil.zip) - Библиотека для создания отдельных Lua-потоков (реальный async емаааа)
- [iconv](https://github.com/TrilogyDevelop/updater/blob/main/lib/iconv.zip) - Библиотека для работы с кодировками
- [lfs](https://github.com/TrilogyDevelop/updater/blob/main/lib/lfs.zip) - Библиотека для работы с директориями
- [socket](https://github.com/TrilogyDevelop/updater/blob/main/lib/socket.zip) - Библиотека для работы с TCP и UDP

## Сторонние библиотеки

- [lts.lua](https://www.blast.hk/threads/222607/) - Библиотека для создания Lua-потоков (аналог lua_thread в Moonloader)

## Создание библиотеки

Библиотеки могут быть созданы в двух форматах: Lua и Dynamic Link Library (DLL).

### Lua

```lua pidor.lua
local M = {
  __name = "pidor",
  __version = "1.0.0",
  __author = "whyega",
  __description = "whyega's Pidor",
}

function M:load()
  print("Pidor loaded")
end

return M
```

### Dynamic Link Library (DLL)

Пока не готово

<!-- Для создания DLL вы должны использовать наш SDK. Подробнее: [TrilogyLoader SDK](/guides/sdk.md) -->
