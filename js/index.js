var tabs = document.getElementById('tabs').getElementsByTagName('li')
console.log(tabs)
var lists = document.getElementById('lists').getElementsByTagName('ul')
console.log(lists)

for (var i = 0; i < tabs.length; i++) {
  tabs[i].onclick = showlist
}

function showlist () {
  for (i = 0; i < tabs.length; i++) {
    if (tabs[i] === this) {
      tabs[i].className = 'active'
      lists[i].className = 'clearfix active'
    } else {
      tabs[i].className = ''
      lists[i].className = 'clearfix'
    }
  }
}
var seckillnav = document.getElementById('seckillnav')
window.onscroll = function () {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
  if(scrollTop >= 260) {
    seckillnav.className = 'seckill-nav seckill-navfixed'
  }
  else {
    seckillnav.className = 'seckill-nav'
  }
  console.log(scrollTop)
}


