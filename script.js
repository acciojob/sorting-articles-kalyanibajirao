//your JS code here. If required.
 const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

function sortArticles(articles) {
  // Remove "a," "an," and "the" from the beginning of each article
  const cleanedArticles = articles.map(article => {
    return article.replace(/^(a|an|the)\s+/i, '');
  });

  // Sort the cleaned articles alphabetically
  const sortedArticles = cleanedArticles.sort((a, b) => {
    return a.localeCompare(b, 'en', { sensitivity: 'base' });
  });

  // Create an unordered list with the sorted articles
  const ul = document.getElementById('band');
  sortedArticles.forEach(article => {
    const li = document.createElement('li');
    li.textContent = article;
    ul.appendChild(li);
  });
}

// Call the function with the provided data
sortArticles(bands);
