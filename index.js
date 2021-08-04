window.addEventListener('scroll', function(){
  const header = document.querySelector('header');
  header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu(){
  const menu=document.querySelector('.menu');
  const navigation=document.querySelector('.navigation');
  navigation.classList.toggle('active');
  menu.classList.toggle('active');
}
