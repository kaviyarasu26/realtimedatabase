// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCjUmWiSA0w3KaMREKX6JC7LFMqPaJ2NR0",
    authDomain: "fir-database-419d5.firebaseapp.com",
    databaseURL: "https://fir-database-419d5-default-rtdb.firebaseio.com",
    projectId: "fir-database-419d5",
    storageBucket: "fir-database-419d5.appspot.com",
    messagingSenderId: "1000973370272",
    appId: "1:1000973370272:web:254ef208cbd69031619ac5",
    measurementId: "G-N4HXP5J7TS"
  };
firebase.initializeApp(firebaseConfig);



var display=document.querySelector('#display');




function dataToFirebase(work,time ){
    var id=new Date();
    firebase.database().ref("doc/"+id.getTime()).set({
        work: work,
        time: time
    })

}
function insert(work,time,primarykey){
    display.innerHTML+=`<div>${work}<br>${time}</div><br><button id="del" onclick="del(${primarykey})">Delete</button><hr>`
}
function del(primarykey){
    firebase.database().ref("doc/"+primarykey).remove();
}

function retrive(){
   //read
    firebase.database().ref("doc/").on('value', (snap) => {
       
        console.log(snap.val());
        display.innerHTML="";
        for(var i in snap.val()){
            insert(snap.val()[i]["work"],snap.val()[i]["time"],i);

        }
    })

}



retrive();


document.getElementById("add").addEventListener('click',()=>{
    console.log("Kaviyarasu");
    dataToFirebase(document.getElementById("work-el").value,document.getElementById("time-el").value);
  
})





