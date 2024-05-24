//your JS code here. If required.
 const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

        function sortArticles(articles) {
            const excludedWords = ['a', 'an', 'the'];

            return articles.sort((a, b) => {
                const aTitle = a.replace(new RegExp(`\\b(?:${excludedWords.join('|')})\\b`, 'gi'), '').trim();
                const bTitle = b.replace(new RegExp(`\\b(?:${excludedWords.join('|')})\\b`, 'gi'), '').trim();
                return aTitle.localeCompare(bTitle, 'en', { sensitivity: 'base' });
            });
        }

        const sortedArticles = sortArticles(bands);

        const list = document.getElementById('band');
        sortedArticles.forEach(article => {
            const li = document.createElement('li');
            li.textContent = article;
            list.appendChild(li);
        });