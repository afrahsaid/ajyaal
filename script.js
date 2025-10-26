  const scriptURL = 'https://script.google.com/macros/s/AKfycbyYnsZZFEB5-i3ELGD7tIQk0E__8hx3GBQeLP9RjBCDbj-RuOdx5eCapKV85vwokeI4ig/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg =document.getElementById("msg");
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
      	msg.innerHTML="Message sent successfuly"
      	setTimeout(function(){
      		msg.innerHTML=""
      	},6000) 
      	form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })

  const activePage = window.location.pathname;
//   console.log(activePage);
  const navLink = document.querySelectorAll('nav a').
  forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active')
    }
  })
  