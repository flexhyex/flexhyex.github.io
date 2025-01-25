<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Subscriber Count</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        body {
            margin: 0;
            padding: 0;
            background: transparent;
            font-family: "Courier New", Courier, monospace;
            color: #ffffff;
        }

        .widget {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            width: 300px;
            height: 150px;
            position: relative;
        }

        .stats {
            font-size: 1.5rem;
            margin-left: 5px;
        }

        .main-value {
            font-size: 2.5rem;
            font-weight: bold;
            color: #ffffff;
            margin-left: 5px;
        }

        .container {
            position: relative;
            width: 100%;
            height: 100%;
        }

        .widget canvas {
            position: absolute;
            top: 40px;
            left: 0;
            width: 100%;
            height: 100%;
        }
    </style>
</head>
<body>
    <div class="widget">
        <div class="main-value" id="mainValue">0</div>
        <div class="stats" id="stats">↑ 0 (0%)</div>
        <div class="container">
            <canvas id="subscriberChart"></canvas>
        </div>
    </div>

    <script>
        const subscriberData = {
            labels: [],
            datasets: [
                {
                    data: [],
                    borderColor: "#00ff00",
                    backgroundColor: "transparent",
                    borderWidth: 2,
                    tension: 0.4,
                    pointRadius: 0,
                },
            ],
        };

        const config = {
            type: "line",
            data: subscriberData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                scales: {
                    x: {
                        display: false,
                    },
                    y: {
                        display: false,
                    },
                },
                animation: {
                    duration: 0,
                },
            },
        };

        const ctx = document.getElementById("subscriberChart").getContext("2d");
        const subscriberChart = new Chart(ctx, config);

        const mainValue = document.getElementById("mainValue");
        const stats = document.getElementById("stats");

        async function fetchSubscriberData() {
            try {
                const response = await fetch("https://your-repository-url/subscribers.json");
                const data = await response.json();
                return data;
            } catch (error) {
                console.error("Error fetching subscriber data:", error);
                return null;
            }
        }

        async function updateSubscribers() {
            const subscriberDataArr = await fetchSubscriberData();

            if (subscriberDataArr) {
                const latestData = subscriberDataArr[subscriberDataArr.length - 1];
                const subscriberCount = latestData.count;
                const timestamp = new Date(latestData.timestamp).toLocaleTimeString();
                
                mainValue.textContent = subscriberCount;
                stats.textContent = `↑ ${subscriberCount}`;

                // Add to graph
                subscriberData.labels.push(timestamp);
                subscriberData.datasets[0].data.push(subscriberCount);

                if (subscriberData.labels.length > 30) {
                    subscriberData.labels.shift();
                    subscriberData.datasets[0].data.shift();
                }

                subscriberChart.update();
            }
        }

        setInterval(updateSubscribers, 10000);
        updateSubscribers();
    </script>
</body>
</html>
