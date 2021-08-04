//TypeWriter Effect
class typeEffect{
  constructor(element, words){
    this.element = element;
    this.words = words;
    this.index = 0;
    this.delete = false;
    this.text = '';
    this.typing()
  }
  typing(){
    const currIndex = this.index % this.words.length;
    const currWord  = this.words[currIndex];
    let speed = 200; //speed of typing
    //write text
    if(!this.delete){
      speed = 200; //writing with speed of 200 ms
      this.text = currWord.substring(0, this.text.length + 1);
    }else{
      speed = 80; //deleting with speed of 80 ms
      this.text = currWord.substring(0, this.text.length - 1);
    }
    //delete text
    if(!this.delete && this.text === currWord){
      this.delete = true;
      speed = 1000; //waiting 1000 ms then start delete
    }else if(this.delete && this.text === ''){
      this.delete = false;
      this.index++;
      speed = 800; //waiting 800 ms then start write
    }
    //output text
    this.element.textContent = this.text
    //add timing function
    setTimeout(()=> this.typing(), speed)
  }
}
//init
document.addEventListener('DOMContentLoaded', initialize)
function initialize(){
  const element = document.querySelector('.i_am');
  const words = ['Web Developer', 'Web Designer', 'Video Editor'];
  new typeEffect(element, words)
}


//Function send mail (using smtpjs to send mail with javascript);
function sendEmail(e) {
  const name  = document.querySelector('.name'),
        email = document.querySelector('.your_email'),
        msg   = document.querySelector('.msg');
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  e.preventDefault();
  if(name.value !== '' && email.value !== '' && msg.value !== ''){ //fields not empty
    if(regex.test(String(email.value).toLowerCase())){ //if emailis valid
      Email.send({
          SecureToken: "ea03a52c-fd57-4c58-ba2d-c651006915bc",
          To: "hosny.abbes@gmail.com",
          From: email,
          Subject: "Contact Portfolio..",
          Body: msg.value
      }).then( 
          message => alert("Mail sent successfully")
      );
      name.value  = '';
      email.value = '';
      msg.value   = '';

    }else{ //if email is not valid
      alert('Your email is not valid !');
    }
  }else{ //if fields are empty
    alert('Please fill out all fields.');
  }
}
