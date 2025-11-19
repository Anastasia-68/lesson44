# my-context-app

Простой пример использования **React Context** в многоуровневой архитектуре компонентов.

## Что реализовано
- Контекст (`src/context/AppContext.jsx`) предоставляет глобальные данные:
  - `users` — список пользователей
  - `theme` — текущая тема (`light` / `dark`)
  - `toggleTheme` — переключение темы
  - `addUser` — функция для добавления пользователя
- Компоненты с 3 уровнями вложенности:
  - `DeepParent` (уровень 1) — использует `theme` и `toggleTheme`
  - `MidChild` (уровень 2) — использует `users.length`
  - `UserList` (уровень 3) — отображает `users` и вызывает `addUser`
- Демонстрация того, как данные передаются через контекст без пропсов.

## Как запустить локально
1. Создать проект с Vite (если ещё не создан):
```bash
npm create vite@latest my-context-app -- --template react
cd my-context-app
