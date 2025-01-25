// server.js
const http = require('http');
const fs = require('fs');
const path = require('path');
const https = require('https');

const botToken = "7410926036:AAEYrG_FhU2901EeJ8mSx2lwLauTAhKS_y0";
const channelUsername = "hamster_kombat";
const dataFilePath = path.join(__dirname, 'subscriberData.json');

// Функция для получения количества подписчиков
function fetchSubscribers(callback) {
    const url = `https://api.telegram.org/bot${botToken}/getChatMembersCount?chat_id=@${channelUsername}`;

    https.get(url, (res) => {
        let data = '';

        res.on('data', chunk => {
            data += chunk;
        });

        res.on('end', () => {
            const result = JSON.parse(data);
            if (result.ok) {
                callback(null, result.result);
            } else {
                callback('Ошибка при получении данных о подписчиках');
            }
        });
    }).on('error', (err) => {
        callback(err);
    });
}

// Сохранение данных в JSON файл
function saveSubscriberData(count) {
    const timestamp = new Date().toISOString();
    const data = {
        timestamp,
        count,
    };

    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
}

// Создаем HTTP сервер
http.createServer((req, res) => {
    if (req.url === '/get-subscriber-data') {
        fs.readFile(dataFilePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Ошибка сервера');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(data);
        });
    } else if (req.url === '/update-subscriber-data') {
        fetchSubscribers((error, count) => {
            if (error) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Ошибка при получении данных');
                return;
            }
            saveSubscriberData(count);
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Данные обновлены');
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Страница не найдена');
    }
}).listen(3000, () => {
    console.log('Сервер работает на порту 3000');
});
