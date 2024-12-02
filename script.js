// Check JS is Connected
console.log('OK');

// get JSON data
// create anchor link for each item
document.addEventListener('DOMContentLoaded', async () => {
    try {
      const response = await fetch('data.json');
      const data = await response.json();
      
      const myLinks = document.getElementById('myLinks');
      const fragment = document.createDocumentFragment();
  
      data.myLinks.forEach(({ url, name, image }) => {
        const li = document.createElement('li');
        li.style.listStyleType = 'none';
        li.innerHTML = `
        <img src="${image}" alt="${name} Icon" style="width: 20px; height: 20px; vertical-align: middle; margin-right: 5px;">
        <a href="${url}" target="_blank">${name}</a>`;
        fragment.appendChild(li);
      });
  
      myLinks.appendChild(fragment);
    } catch (error) {
      console.error('Error loading JSON:', error);
    }
  });