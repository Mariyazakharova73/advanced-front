### advanced-front

#### О проекте

<!-- Для имитации бэкенда используется JSON Server. Бандл разделен на чанки (React.lazy). Добавлена возможность смены темы (React Context, css-variables, custom hook useTheme). Реализована возможность смены языка (i18next). Настроен EsLint, Stylelint, husky. Настроена обработка ошибок (React ErrorBoundary). Настроена работа со Storybook.
Модальное окно создано с использованием React Portal.
loginReducer, profileReducer, articleDetailsReducer добавляются асинхроно через reducerManager (форма авторизации подгружается только для неавторизованного пользователя).
Страница профиля защищена от неавторизованного пользователя. В режиме редактирования можно изменить данные профиля.
Реализована возможность просмотра статей и комментариев. Также можно добавлять новые комментарии к статье. -->


<details><summary>Применен Feature-Sliced Design</summary>
app - router, ThemeProvider, StoreProvider, styles, types

pages - AboutPage, MainPage, NotFoundPage

widgets - Navbar, SideBar, ThemeSwitcher, LanguageSwitcher, PageLoader

feautures - AuthByUsername

entities - User

shared - AppLink, classNames, assets, config i18next, routeConfig, Loader, Button, Modal, Portal, hooks, api

</details>

#### Технологии

<div>
  <img height='25px' src="https://img.shields.io/badge/React-20232A??style=plastic&logo=react&logoColor=61DAFB" alt="React.">
  <img height='25px' src="https://img.shields.io/badge/TypeScript-20232A??style=plastic&logo=typescript&logoColor=3178C6" alt="TypeScript.">
  <img height='25px' src="https://img.shields.io/badge/Redux Toolkit-20232A??style=plastic&logo=redux&logoColor=764ABC" alt="Redux">
  <img height='25px' src="https://img.shields.io/badge/React Router v6-20232A??style=plastic&logo=reactrouter&logoColor=CA4245" alt="React Router.">
  <img height='25px' src="https://img.shields.io/badge/Jest-20232A??style=plastic&logo=jest&logoColor=C21325" alt="Jest">
  <img height='25px' src="https://img.shields.io/badge/Storybook-20232A??style=plastic&logo=Storybook&logoColor=FF4785" alt="Storybook">
</div>

#### Установка и запуск приложения

<details><summary><b>Развернуть</b></summary>

Клонировать репозиторий (backend):

    git clone https://github.com/Mariyazakharova73/advanced-front.git

Установить зависимости:

    npm install

Запустить проект:

    npm start

</details>

<!-- преобразование svg  в реакт компонент
(в webpack это SVGR loader + declare module {})
import { ReactComponent as BrushIcon } from 'shared/assets/icons/brush.svg'; 

-->