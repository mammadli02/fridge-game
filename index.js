$(document).ready(function() {
    var letters=["A","B","C","D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    function startGame(let){
        $("#buttons").html(let.map(item=>{
            return `<button class ="letter-button letter letter-button-color myBtn">${item}</button>`;
    
        }));
        
    }
     startGame(letters);
    $(".myBtn").on("click", function(e){
    let div =$("<div>").text($(this).text()).addClass("fridge-color letter");
    $("#display").append(div)
    
    }) ;
    $("#clear").on("click", ()=>{
        $("#display div").hide()
    })
    })
    