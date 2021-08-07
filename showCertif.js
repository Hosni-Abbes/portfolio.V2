$(function(){

  //array of certifications info
  const arrOfCertif = [
    {src:'images/udacity.png',                        link:'https://drive.google.com/file/d/1YffGAtZ4QRLkMPwmHRuhTacb8yMDZnjs/view',       id:'Link'         , title:'Udacity: Full Stack (HTML5+CSS3+Python)'},
    {src:'images/hackerrank-js-bas.png',              link:'https://www.hackerrank.com/certificates/0a41934af834',                         id:'0a41934af834' , title:'HackerRank: JavaScript Basic'           },
    {src:'images/hackerrank-js.png',                  link:'https://www.hackerrank.com/certificates/6a16b1275a2b',                         id:'6a16b1275a2b' , title:'HackerRank: JavaScript Intermediate'    },
    {src:'images/hackerrank-prblmsolvng.png',         link:'https://www.hackerrank.com/certificates/703a4fdc859c',                         id:'703a4fdc859c' , title:'HackerRank: Problem Solving'            },
    {src:'images/hackerrank-react.png',               link:'https://www.hackerrank.com/certificates/694eadc24eb0',                         id:'694eadc24eb0' , title:'HackerRank: React'                      },
    {src:'images/hackerrank-css.png',                 link:'https://www.hackerrank.com/certificates/5270e21f8138',                         id:'5270e21f8138' , title:'HackerRank: CSS3'                       },
    {src:'images/CSS-cert-1023-21102169.jpg',         link:'https://www.sololearn.com/Certificate/1023-21102169/pdf',                      id:'1023-21102169', title:'SoloLearn: CSS+CSS3'                    },
    {src:'images/HTML-cert-1014-21102169.jpg',        link:'https://www.sololearn.com/Certificate/1014-21102169/pdf',                      id:'1014-21102169', title:'SoloLearn: HTML+HTML5'                  },
    {src:'images/jQry-cert-1082-21102169.jpg',        link:'https://www.sololearn.com/Certificate/1082-21102169/pdf',                      id:'1082-21102169', title:'SoloLearn: jQuery'                      },
    {src:'images/JS-cert-21102169-1024.png',          link:'https://www.sololearn.com/certificates/course/en/21102169/1024/landscape/pdf', id:'21102169-1024', title:'SoloLearn: JavaScript'                  },
    {src:'images/PHP-cert-1059-21102169.jpg',         link:'https://www.sololearn.com/Certificate/1059-21102169/pdf',                      id:'1059-21102169', title:'SoloLearn: PHP'                         },
    {src:'images/React-Redux-cert-1097-21102169.jpg', link:'https://www.sololearn.com/Certificate/1097-21102169/pdf',                      id:'1097-21102169', title:'SoloLearn: React+Redux'                 },
    {src:'images/SQL-cert-21102169-1060.png',         link:'https://www.sololearn.com/certificates/course/en/21102169/1060/landscape/pdf', id:'21102169-1060', title:'SoloLearn: SQL'                         },
    {src:'images/Digital Marketing.jpg',              link:'https://drive.google.com/file/d/12moKCyZ3IW8isQx9g8Zhcaf6X8Guxswx/view',       id:'Link'         , title:'Google: Digital Marketing'              }
  ];
  //set the index to 0
  let index = 0
  //


  $('#cert').click(function(){
    $('.certTitle').text(arrOfCertif[index].title);
    $('.certImg').attr('src', arrOfCertif[index].src);
    $('.certLink').attr('href', arrOfCertif[index].link).html('ID: '+arrOfCertif[index].id+' <i class="fa fa-external-link-alt"></i>');
    $('.prev').prop('disabled', true).css({cursor: 'no-drop'});
  });

  $('.next').click(function(){
    index+= 1
    $('.prev').prop('disabled', false).css({cursor: 'pointer'});
    $('.certTitle').text(arrOfCertif[index].title);
    $('.certImg').attr('src', arrOfCertif[index].src);
    $('.certLink').attr('href', arrOfCertif[index].link).html('ID: '+arrOfCertif[index].id+' <i class="fa fa-external-link-alt"></i>');
    if(index === arrOfCertif.length-1){
      $(this).prop('disabled', true).css({cursor: 'no-drop'});
    }
  });

  $('.prev').click(function(){
    index-= 1
    $('.next').prop('disabled', false).css({cursor: 'pointer'});
    $('.certTitle').text(arrOfCertif[index].title);
    $('.certImg').attr('src', arrOfCertif[index].src);
    $('.certLink').attr('href', arrOfCertif[index].link).html('ID: '+arrOfCertif[index].id+' <i class="fa fa-external-link-alt"></i>');
    if(index === 0){
      $(this).prop('disabled', true).css({cursor: 'no-drop'});
    }
  });

  $('.certImg').click(function(){
    $(this).toggleClass('clicked')
    if($(this).hasClass('clicked')){
      $(this).css({transform: 'scale(1.5)' })
    } else {
      $(this).css({transform: 'scale(1)' })
    }
  });

  
})