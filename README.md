# Chat widget UI Library
<br />

Widget Ui-Kit — это библиотека React компонентов для создания веб-интерфейсов.

## Установка

Widget Ui-Kit доступен как [npm-пакет](https://www.npmjs.com/package/).

```shell
npm install widget-ui-kit --save
```
## Разработка

Необходимые внешние зависимости системы:

[`node`](https://nodejs.org/en/) 10 и `npm`

Шаги запуска демо:

1. `npm i`
2. `npm start`
## Поддерживаемые браузеры

**Desktop**

- Chrome _(две последние стабильные версии)_
- Edge _(две последние стабильные версии)_
- Firefox _(две последние стабильные версии)_
- IE 10+
- Opera _(две последние стабильные версии)_
- Safari _(две последние стабильные версии)_
- Yandex _(две последние стабильные версии)_

**Mobile**

- Android 4.1+
- iOS _(две последние стабильные версии)_


## Автоматические проверки кода

Перед каждым коммитом js код проверяется через `eslint`, css через `stylelint`.

Запуск линтера для css `npm run lint-css`.

Запуск линтера для js `npm run lint-js`.

## Публикация

Для выпуска новой версии используйте следущие команды:

- Выпуск патч-версии 1.0.0 -> 1.0.1 `npm run release-patch`
- Выпуск минорной версии 1.0.0 -> 1.1.0 `npm run release-minor`
- Выпуск мажорной версии 1.0.0 -> 2.0.0 `npm run release-major`

Запуск этих команд автоматически сформирует changelog, сделает новый git tag,
запустит сборку и публикацию.


© 2020 sinups.
