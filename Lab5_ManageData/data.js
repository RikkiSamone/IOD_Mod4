let news = [
                {
                    id: 1, title: 'Election Results',
                    content: "Newly elected minister..."
                },
                {
                    id: 2, title: 'Sporting Success',
                    content: "World Cup winners..."
                },
                {
                    id: 3, title: 'Tornado Warning',
                    content: "Residents should prepare..."
                }
            ];

        function readNews(){
            const newsContainer = document.getElementById("news-container");

            newsContainer.innerHTML = " ";

            news.forEach(item => {
                const col = document.createElement("div");
                col.className = 'col-lg-4 col-md-6 col-sm-12';

                const card = document.createElement('div');
                card.className = 'card h-100 shadow-sm border-0';

                const cardBody = document.createElement('div');
                cardBody.className = 'card-body';

                const title = document.createElement("h5");
                title.className = "card-title";
                title.textContent = item.title;

                const content = document.createElement("p");
                content.className = "card-text";
                content.textContent = item.content;

                cardBody.appendChild(title);
                cardBody.appendChild(content);

                card.appendChild(cardBody);
                
                col.appendChild(card);


                newsContainer.appendChild(col);
            });
        }
    document.getElementById('news-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const title = document.getElementById('news-title').value;
        const content = document.getElementById('news-content').value;

        const newNews = {
            id: news.length + 1,
            title: title,
            content: content
        };
        
        news.push(newNews);

        event.target.reset();
        readNews();
    });
    
        readNews();

    setInterval(readNews, 5000);
