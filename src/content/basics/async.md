---
title: Асинхронное программирование
description: Подробное руководство по асинхронному программированию в JavaScript
---

# Асинхронное программирование в JavaScript

## 1. Колбэки (Callbacks)

### Базовое использование
```javascript
function fetchData(callback) {
  setTimeout(() => {
    callback('Данные получены');
  }, 1000);
}

fetchData((data) => {
  console.log(data);
});
```

### Обработка ошибок
```javascript
function fetchData(success, error) {
  const random = Math.random();
  setTimeout(() => {
    if (random > 0.5) {
      success('Данные получены');
    } else {
      error('Ошибка получения данных');
    }
  }, 1000);
}
```

## 2. Промисы (Promises)

### Создание промисов
```javascript
const promise = new Promise((resolve, reject) => {
  const random = Math.random();
  setTimeout(() => {
    if (random > 0.5) {
      resolve('Успех!');
    } else {
      reject('Ошибка!');
    }
  }, 1000);
});
```

### Цепочки промисов
```javascript
fetchUser(1)
  .then(user => fetchUserPosts(user.id))
  .then(posts => fetchPostComments(posts[0].id))
  .catch(error => console.error(error));
```

## 3. Async/Await

### Основы async/await
```javascript
async function fetchUserData() {
  try {
    const response = await fetch('https://api.example.com/user');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}
```

### Параллельное выполнение
```javascript
async function fetchAllData() {
  const [users, posts, comments] = await Promise.all([
    fetch('/api/users').then(r => r.json()),
    fetch('/api/posts').then(r => r.json()),
    fetch('/api/comments').then(r => r.json())
  ]);
  
  return { users, posts, comments };
}
```