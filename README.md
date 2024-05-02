### advanced-front

#### Технологии

<div>
  <img height='25px' src="https://img.shields.io/badge/React-20232A??style=plastic&logo=react&logoColor=61DAFB" alt="React.">
  <img height='25px' src="https://img.shields.io/badge/TypeScript-20232A??style=plastic&logo=typescript&logoColor=3178C6" alt="TypeScript.">
  <img height='25px' src="https://img.shields.io/badge/Redux Toolkit-20232A??style=plastic&logo=redux&logoColor=764ABC" alt="Redux.">
  <img height='25px' src="https://img.shields.io/badge/RTK Query-20232A??style=plastic&logoColor=764ABC" alt="RTK Query.">
  <img height='25px' src="https://img.shields.io/badge/React Router v6-20232A??style=plastic&logo=reactrouter&logoColor=CA4245" alt="React Router.">
  <img height='25px' src="https://img.shields.io/badge/Storybook-20232A??style=plastic&logo=Storybook&logoColor=FF4785" alt="Storybook.">
  <img height='25px' src="https://img.shields.io/badge/Headless Ui-20232A??style=plastic&logo=headlessui&logoColor=66E3FF" alt="Headless Ui.">
</div>

#### О проекте

Приложение для просмотра статей. Для имитации бэкенда используется JSON Server

Данные для входа - username: admin, password 123;

- Верстка только на гридах (без flex)
- Созданы некоторые UI компоненты. (Button, Input, Card, Modal, Avatar, Loader, Tabs, Text, Stack и т.д)
- Бандл разделен на чанки (React.lazy)
- Смена темы (React Context, css-variables, custom hook useTheme), Смена языка (i18next)
- Настроен EsLint, Stylelint, husky, Storybook
- Настроена обработка ошибок (React ErrorBoundary)
- React Portal (lazy loading modal)
- loginReducer, profileReducer, articleDetailsReducer и др. добавляются асинхронно через reducerManager (форма авторизации подгружается только для неавторизованного пользователя)
- Страницы профиля и cтатей защищены от неавторизованного пользователя
- Изменение данных профиля в режиме редактирования
- Подгрузка новых статей при скролле (observer API)
- Добавление комментариев к статье
- Сохранение позиции скролла при возвращении на страницу статей
- Сортировка статей по дате создания, количеству просмотров, темам
- Параметры сортировки сохраняются в url
- Поиск статьи (debounce)
- Админ-панель

#### Установка и запуск приложения

<details><summary><b>Развернуть</b></summary>

Клонировать репозиторий:

    git clone https://github.com/Mariyazakharova73/advanced-front.git

Установить зависимости:

    npm install

Запустить проект:

    npm run start:dev

Запустить Storybook:

    npm run storybook

</details>

<!-- преобразование svg  в реакт компонент
(в webpack это SVGR loader + declare module {})
import { ReactComponent as BrushIcon } from 'shared/assets/icons/brush.svg';
-->
