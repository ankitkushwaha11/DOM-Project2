
const myStranger=document.querySelector('h5')
const AddFrined=document.querySelector('#add')

 flag=0;

AddFrined.addEventListener('click',function(){
  if(flag===0){

  myStranger.innerHTML="Friends"
  myStranger.style.color="green"
  AddFrined.innerHTML="Remove Friend"
  flag=1;

  }else{

    myStranger.innerHTML="Stranger"
    myStranger.style.color="red"
    AddFrined.innerHTML="Add Friend"
    flag=0;
  }
})
