function preloading(){
    var preloader = document.getElementById("preloader");
    window.addEventListener("load",function(){
        preloader.style.display = 'none';
    })
}
preloading();



function hint1(){
    document.addEventListener('selectionchange', function() {
        var selection = document.getSelection();
        var selectedText = selection ? selection.toString() : null;
    
        if (!selectedText) {
            hidePopup();
            return;
        }

        if (selectedText.trim() === 'MYSTIC MAP') {
            showPopup("hehe hint recieved");
        } else {
            hidePopup();
        }
    });
    
    function showPopup(message) {
        alert(message);
    }
    
    function hidePopup() {
    }
}
hint1();


function hint2(){
    var typedText = '';

    document.addEventListener('keydown', function(event) {
        typedText += event.key.toUpperCase();
        if (typedText.includes('MYSTIC')) {
            showPopup("hehe hint recieved");
            typedText = '';
        }
    });
    
    function showPopup(message) {
        alert(message);
    }
    
}
hint2();

//   function hint3() {
//         var imageElement = document.querySelector('img[alt="sponsor_hint.png"]');
//         imageElement.addEventListener('click', function() {
//             showPopup("hehe hint recieved");
//         });
    
//         function showPopup(message) {
//             alert(message);
//         }
//     }   
//    hint3();
function hint3() {
    var sponsorHintImages = document.querySelectorAll('img[alt="sponsor_hint.png"]');
    sponsorHintImages.forEach(function(imageElement) {
        imageElement.addEventListener('click', function() {
            showPopup("hehe hint received");
        });
    });
    function showPopup(message) {
        alert(message);
    }
}
hint3();

    

   
function hint4() {

    var imageElement = document.querySelector('label[for="c3"] .icon');
    imageElement.addEventListener('click', function() {
        showPopup("hehe hint received");
    });
    function showPopup(message) {
        alert(message);
    }
}

hint4();

   

   