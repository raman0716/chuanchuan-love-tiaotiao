$(function () {
  setTimeout(function () {
    $('.name').animate(
      {
        opacity: '1',
        top: '15%'
      },
      2000
    )
  }, 6000)
  setTimeout(function () {
    $('.happy').animate(
      {
        opacity: '1',
        top: '15%'
      },
      2000
    )
  }, 6000)
  setTimeout(function () {
    $('.button-style1').animate(
      {
        opacity: '1',
        top: '70%'
      },
      1500
    )
    $('.button-style2').animate(
      {
        opacity: '1',
        top: '85%'
      },
      2000
    )
  }, 9000)

  var beg = $('.begin').hide()
  beg.click(function () {
    $(this).hide()

    $('#code').show().typewriter()

    $('audio')[0].play()
  })
})
$(function () {
  var count = 0
  var txtlist = ['点这里', '我爱钏钏', '最爱钏钏', '谢谢钏钏', 'v钏钏500']
  var ht = document.querySelector('body').offsetHeight
  var wid = document.querySelector('body').offsetWidth

  $('#next_txt')
    .text(txtlist[0])
    .css({
      left: 'calc(50% - 20px)',
      top: '50%'
    })
    .click(function () {
      count += 1
      var idx = Math.floor(Math.random() * 5)
      if (count >= 8) {
        $(this).hide()
        $('.begin').show()
      }
      var left = wid - 50 - Math.round(Math.random() * (wid / 2))
      var top = ht - 50 - Math.round(Math.random() * (ht / 2))
      $(this)
        .text(txtlist[idx])
        .css({
          fontSize: `${Math.max(15, Math.round(Math.random() * 24))}px`
        })
        .css({
          left: `${left || 0}px`,
          top: `${top || 0}px`
        })
    })
})
