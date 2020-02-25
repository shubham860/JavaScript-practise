const btn = document.querySelector('.checkbtn');
btn.addEventListener('click',function(){
  console.log('hek');
  const ulData = document.querySelector('ul');
  ulData.classList.toggle('navShow');
})
