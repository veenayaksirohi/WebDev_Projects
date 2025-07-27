
// script.js
window.addEventListener('DOMContentLoaded', () => {
    const intro = document.getElementById('introScreen');
    // trigger fade-out sequence
    intro.classList.add('fade-out');
  
    // after fade-out, remove intro and restore scroll
    intro.addEventListener('animationend', () => {
      intro.remove();
      document.body.style.overflow = 'auto';
    });
  });
  
api='https://api.github.com/users/';

const button = document.querySelector('#searchBtn');
button.addEventListener('click', (e) => {
    e.defaultPrevented;
    const username=document.querySelector('#username').value;
    const url = api + username;
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data=>{
        document.querySelector('.profile-img').src = data.avatar_url;
        document.querySelector('#name').innerText = data.name || 'No name available';
        document.querySelector('#repos').innerText = `${data.public_repos}`;
        document.querySelector('#followers').innerText = ` ${data.followers}`;
        document.querySelector('#following').innerText = `${data.following}`;
        document.querySelector('#location').innerText = `${data.location || 'No location available'}`;
        document.querySelector('#twitter').innerText = `${data.twitter_username || 'No Twitter available'}`;
        document.querySelector('#created').innerText = `${new Date(data.created_at).toLocaleDateString()}`;
        document.querySelector('#updated').innerText = `${new Date(data.updated_at).toLocaleDateString()}`;
        document.querySelector('#profileLink').href = data.html_url;
        document.querySelector('.temp').style.display = 'block';
        console.log(data);
    })
})