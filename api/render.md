# Рендер

В Trilogy Loader, в отличии от Moonloader, рендер происходит иначе. Функции рендера вызываются один раз и возвращают идентификатор рендера (исключение: `renderEnd`).

## Пример

Для примера напишем функцию, которая будет рисовать розовую линию по нажатию на кнопку `0x01` (левой кнопки мыши).

```lua
local nId = nil

function main()
  if isKeyJustPressed(0x1) then
    if nId ~= nil then
      renderEnd(nId)
    else
      nId = renderAddLine(100, 100, 240, 440, 0xFF00FF, 1)
    end
  end
end
```


## Доступные функции для рендера

```lua
local nId = renderAddLine(float x1, float y1, float x2, float y2, int color, float thickness);
local nId = renderAddRect(float p_minX, float p_minY, float p_maxX, float p_maxY, int col, float rounding, Flags flags, float thickness);
local nId = renderAddRectFilled(float p_minX, float p_minY, float p_maxX, float p_maxY, int col, float rounding, Flags flags);
local nId = renderAddRectFilledMultiColor(float p_minX, float p_minY, float p_maxX, float p_maxY, int col_upr_left, int col_upr_right, int col_bot_right, int col_bot_left);
local nId = renderAddQuad(float pX1, float pY1, float pX2, float pY2, float pX3, float pY3, float pX4, float pY4, int col, float thickness);
local nId = renderAddQuadFilled(float pX1, float pY1, float pX2, float pY2, float pX3, float pY3, float pX4, float pY4, int col);
local nId = renderAddTriangle(float pX1, float pY1, float pX2, float pY2, float pX3, float pY3, int col, float thickness);
local nId = renderAddTriangleFilled(float pX1, float pY1, float pX2, float pY2, float pX3, float pY3, int col);
local nId = renderAddCircle(float centerX, float centerY, float radius, int col, int num_segments, float thickness);
local nId = renderAddCircleFilled(float centerX, float centerY, float radius, int col, int num_segments);
local nId = renderAddNgon(float centerX, float centerY, float radius, int col, int num_segments, float thickness);
local nId = renderAddNgonFilled(float centerX, float centerY, float radius, int col, int num_segments);
local nId = renderAddEllipse(float centerX, float centerY, float radius, int col, float rot, int num_segments, float thickness);
local nId = renderAddEllipseFilled(float centerX, float centerY, float radius, int col, float rot, int num_segments);
local nId = renderAddBezierCubic(float pX1, float pY1, float pX2, float pY2, float pX3, float pY3, float pX4, float pY4, int col, float thickness, int num_segments);
local nId = renderAddBezierQuadratic(float pX1, float pY1, float pX2, float pY2, float pX3, float pY3, int col, float thickness, int num_segments);
local nId = renderAddText(float X, float Y, int col, float font_size, String text);
renderEnd(int nIn);
```