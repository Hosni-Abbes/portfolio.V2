$(function () {

  //loading the page
  setTimeout(function(){
    $('.container').css({display: 'flex'})
    $('.loader_container').css({display:'none'});
  },8000)

  //effect on icons in page welcome
  $('.ic:first-of-type a, .ic:first-of-type').hover(function () {
    $('.ic:first-of-type').children().first().animate({
      paddingLeft: 15,
      width: 142,
      opacity: 1
    }, 0)
  });
  $('.ic:last-of-type a, .ic:last-of-type').hover(function () {
    $('.ic:last-of-type').children().first().animate({
      paddingLeft: 15,
      width: 142,
      opacity: 1
    }, 0)
  })
  $('.ic:first-of-type').mouseleave(function () {
    $(this).children().first().animate({
      paddingLeft: 0,
      width: 0,
      opacity: 0
    })
  });
  $('.ic:last-of-type').mouseleave(function () {
    $(this).children().first().animate({
      paddingLeft: 0,
      width: 0,
      opacity: 0
    })
  })

  //ANIMATE MENU
  $('.btn').on('click', function () {
    if ($(window).innerWidth() > 767) {
      if ($('.menu').innerWidth() > 0) {
        $('.menu').animate({
          width: 0,
          padding: 0
        }, 500);
        $(this).css({
          left: -75
        })
        $('.btn span:nth-child(2)').show();
        $('.btn span:first-child').css({ transform: 'rotateZ(0)  translate(0, 0)' });
        $('.btn span:last-child').css({ transform: 'rotateZ(0)' });
      } else {
        $('.menu').animate({
          width: '25%',
          padding: 40
        }, 500);
        $(this).css({
          left: 10
        })
        $('.btn span:nth-child(2)').hide();
        $('.btn span:first-child').css({ transform: 'rotateZ(45deg)  translate(13px, 13px)' });
        $('.btn span:last-child').css({ transform: 'rotateZ(-45deg)' });
      }
    } else { //if window width <= 767px
      if ($('.menu').innerWidth() > 0) {
        $('.menu').animate({
          width: 0,
          padding: 0
        }, 500);
        $(this).css({
          left: -75,
        })
        $('.main').animate({ width: '100vw' })
        $('.animation span').show(200)
        $('.btn span:nth-child(2)').show();
        $('.btn span:first-child').css({ transform: 'rotateZ(0)  translate(0, 0)' });
        $('.btn span:last-child').css({ transform: 'rotateZ(0)' });
      } else {
        $('.menu').animate({
          width: '100vw',
          padding: 40
        }, 500);
        $(this).css({
          left: 10
        })
        $('.main').animate({ width: '0' })
        $('.animation span').hide(200)
        $('.btn span:nth-child(2)').hide();
        $('.btn span:first-child').css({ transform: 'rotateZ(45deg)  translate(13px, 13px)' });
        $('.btn span:last-child').css({ transform: 'rotateZ(-45deg)' });
      }
    }
  });

  //ANIMATE PROJECTS SECTION
  $('.projects').hover(function () {
    $(this).children().css({ animation: 'none' })
  })
  $('.projects').mouseleave(function () {
    $(this).children().css({ animation: 'rotateProj 30s linear infinite' })
  })

  $('.project').hover(function () {
    $(this).children('.project_chat, .project_ss').animate({ opacity: 1 }, 1000);
  })
  $('.project').mouseleave(function () {
    $(this).children('.project_chat, .project_ss').animate({ opacity: 0 }, 0);
  })

  $('.more_projects').click(function () {
    if ($(this).innerWidth() <= 100) {
      if ($(window).innerWidth() > 767) {
        $(this).animate({
          width: '70vw',
          height: '80vh',
          padding: '30px 60px',
          fontSize: 24
        }, 1000);
      } else {
        $(this).animate({
          width: '100vw',
          height: '70vh',
          padding: 0,
          fontSize: 24
        }, 1000);
      }
      $('.more_projects_links').css({ display: 'flex' })
    } else {
      $(this).animate({
        width: 100,
        height: 100,
        padding: '25px 10px',
        fontSize: '1rem',
      }, 1000)
      $('.more_projects_links').fadeOut(2000)
    }
  })

  //controlling the pages 
  $('#home').click(function () {
    $('.animation').show();
    $('.about, .work, .services, .contact').hide()
    $('.main').animate({ width: '100vw' })
    $('.menu').animate({ width: 0, padding: 0 })
    $('.animation span').show(200)
    $('.btn').css({ left: -75 })
    $('.btn span:nth-child(2)').show();
    $('.btn span:first-child').css({ transform: 'rotateZ(0)  translate(0, 0)' });
    $('.btn span:last-child').css({ transform: 'rotateZ(0)' });
    $('.skills_container span').hide()
    $('.skills_container .sk').css({opacity:0, width:0})
    $('.skills_container').css({width: '100%', display:'flex', height:19})
  });

  $('#about').click(function () {
    $('.about').css({ display: 'flex' })
    $('.animation, .work, .services, .contact').hide()
    $('.main').animate({ width: '100vw' })
    $('.menu').animate({ width: 0, padding: 0 })
    $('.animation span').show(200)
    $('.btn').css({ left: -75 })
    $('.btn span:nth-child(2)').show();
    $('.btn span:first-child').css({ transform: 'rotateZ(0)  translate(0, 0)' });
    $('.btn span:last-child').css({ transform: 'rotateZ(0)' });
  })
  $('#work').click(function () {
    $('.work').show()
    $('.animation, .about, .services, .contact').hide()
    $('.main').animate({ width: '100vw' })
    $('.menu').animate({ width: 0, padding: 0 })
    $('.animation span').show(200)
    $('.btn').css({ left: -75 })
    $('.btn span:nth-child(2)').show();
    $('.btn span:first-child').css({ transform: 'rotateZ(0)  translate(0, 0)' });
    $('.btn span:last-child').css({ transform: 'rotateZ(0)' });
    $('.skills_container span').hide()
    $('.skills_container .sk').css({opacity:0, width:0})
    $('.skills_container').css({width: '100%', display:'flex', height:19})
  })
  $('#services').click(function () {
    $('.services').css({ display: 'flex' })
    $('.animation, .work, .about, .contact').hide()
    $('.main').animate({ width: '100vw' })
    $('.menu').animate({ width: 0, padding: 0 })
    $('.animation span').show(200)
    $('.btn').css({ left: -75 })
    $('.btn span:nth-child(2)').show();
    $('.btn span:first-child').css({ transform: 'rotateZ(0)  translate(0, 0)' });
    $('.btn span:last-child').css({ transform: 'rotateZ(0)' });
    $('.skills_container span').hide()
    $('.skills_container .sk').css({opacity:0, width:0})
    $('.skills_container').css({width: '100%', display:'flex', height:19})
  })
  $('#contact').click(function () {
    $('.contact').css({ display: 'flex' })
    $('.animation, .work, .services, .about').hide()
    $('.main').animate({ width: '100vw' })
    $('.menu').animate({ width: 0, padding: 0 })
    $('.animation span').show(200)
    $('.btn').css({ left: -75 })
    $('.btn span:nth-child(2)').show();
    $('.btn span:first-child').css({ transform: 'rotateZ(0)  translate(0, 0)' });
    $('.btn span:last-child').css({ transform: 'rotateZ(0)' });
    $('.skills_container span').hide()
    $('.skills_container .sk').css({opacity:0, width:0})
    $('.skills_container').css({width: '100%', display:'flex', height:19})
  })

  //skills
  $('#about').click(function () {
    $('.skills_container span').show(1800)
    $('.html').animate({ width: '90%', opacity: 1, }, 2000).css({ background: '#ff5722' })
    $('.css').animate({ width: '90%', opacity: 1, }, 2000).css({ background: '#0064ff' })
    $('.js').animate({ width: '80%', opacity: 1, }, 2000).css({ background: '#ffeb3b' })
    $('.php').animate({ width: '70%', opacity: 1, }, 2000).css({ background: '#673ab7' })
    $('.mysql').animate({ width: '70%', opacity: 1, }, 2000).css({ background: '#9e9e9e' })
    $('.react').animate({ width: '80%', opacity: 1, }, 2000).css({ background: '#00acc1' })
    $('.bootstrap').animate({ width: '80%', opacity: 1, }, 2000).css({ background: '#9575cd' })
    $('.jquery').animate({ width: '70%', opacity: 1, }, 2000).css({ background: '#0d47a1' })
    $('.gulp').animate({ width: '70%', opacity: 1, }, 2000).css({ background: '#f44336' })
    $('.pug').animate({ width: '70%', opacity: 1, }, 2000).css({ background: '#bdbdbd' })
    $('.python').animate({ width: '40%', opacity: 1, }, 2000).css({ background: '#427db1' })
    $('.vue').animate({ width: '40%', opacity: 1, }, 2000).css({ background: '#4caf50' })
    $('.ajax').animate({ width: '80%', opacity: 1, }, 2000).css({ background: '#90caf9' })
    $('.cms').animate({ width: '50%', opacity: 1, }, 2000).css({ background: '#2196f3' })
    $('.sass').animate({ width: '80%', opacity: 1, }, 2000).css({ background: '#ec407a' })
    $('.git').animate({ width: '70%', opacity: 1, }, 2000).css({ background: '#9575cd' })
  })

/*
  USER LOCATION AND TIME
  // show Time
  let date    = new Date();
  let hours   = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  if(hours < 10)   hours   = '0' + hours;
  if(minutes < 10) minutes = '0' + minutes;
  if(seconds < 10) seconds = '0' + seconds;
  $('.time').text(`${hours}:${minutes}:${seconds}`)

  setInterval(() => {
    // show Time
    let date    = new Date();
    let hours   = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if(hours < 10)   hours   = '0' + hours;
    if(minutes < 10) minutes = '0' + minutes;
    if(seconds < 10) seconds = '0' + seconds;
    $('.time').text(`${hours}:${minutes}:${seconds}`)
  }, 1000);

  //show Town
  $(window).on('load', function(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position){
        $.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`, function(data){
          $('.city').text(data.countryName+', '+data.localityInfo.administrative[1].isoName)
          // $('.city0').text(data.localityInfo.administrative[1].isoName)
          console.log((data))
        })
      })
    }else{
      console.log('Your browser not support Geolocation.')
    }
  })

  */



});