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
            showPopup("hint1.png");
        } 
    });
    
    function showPopup() {
        var popup = document.createElement('div');
        popup.style.position = 'fixed';
        popup.style.top = '50%';
        popup.style.left = '50%';
        popup.style.transform = 'translate(-50%, -50%)';
        popup.style.zIndex = '1000';
        // popup.style.backgroundColor = 'white';
        popup.style.padding = '10px';
        popup.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';

        var img = document.createElement('img');
        img.src = 'hint1.webp';  // Replace with the URL of your image
        img.alt = 'Hint Image';
        img.style.maxWidth = '60%';
        img.style.height = 'auto';

        var closeBtn = document.createElement('button');
        closeBtn.innerText = 'Close';
        closeBtn.style.display = 'block';
        closeBtn.style.margin = '5px auto 0';
        closeBtn.style.padding = '5px 10px';
        closeBtn.style.cursor = 'pointer';
        closeBtn.onclick = function() {
            document.body.removeChild(popup);
        };

        popup.appendChild(img);
        popup.appendChild(closeBtn);
        document.body.appendChild(popup);
    }
}
hint1();


function hint2(){
    var typedText = '';

    document.addEventListener('keydown', function(event) {
        typedText += event.key.toUpperCase();
        if (typedText.includes('MYSTIC')) {
            showPopup();
            typedText = '';
        }
    });
    
    function showPopup() {
        var popup = document.createElement('div');
        popup.style.position = 'fixed';
        popup.style.top = '50%';
        popup.style.left = '50%';
        popup.style.transform = 'translate(-50%, -50%)';
        popup.style.zIndex = '1000';
        // popup.style.backgroundColor = 'white';
        popup.style.padding = '10px';
        popup.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';

        var img = document.createElement('img');
        img.src = 'hint2.webp';  // Replace with the URL of your image
        img.alt = 'Hint Image';
        img.style.maxWidth = '60%';
        img.style.height = 'auto';

        var closeBtn = document.createElement('button');
        closeBtn.innerText = 'Close';
        closeBtn.style.display = 'block';
        closeBtn.style.margin = '5px auto 0';
        closeBtn.style.padding = '5px 10px';
        closeBtn.style.cursor = 'pointer';
        closeBtn.onclick = function() {
            document.body.removeChild(popup);
        };

        popup.appendChild(img);
        popup.appendChild(closeBtn);
        document.body.appendChild(popup);
    }
}

hint2();


function hint3() {
    var sponsorHintImages = document.querySelectorAll('img[alt="sponsor_hint.png"]');
    sponsorHintImages.forEach(function(imageElement) {
        imageElement.addEventListener('click', function() {
            showPopup("hehe hint received");
        });
    });
    function showPopup() {
        var popup = document.createElement('div');
        popup.style.position = 'fixed';
        popup.style.top = '50%';
        popup.style.left = '50%';
        popup.style.transform = 'translate(-50%, -50%)';
        popup.style.zIndex = '1000';
        // popup.style.backgroundColor = 'white';
        popup.style.padding = '10px';
        popup.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';

        var img = document.createElement('img');
        img.src = 'hint3.webp';  // Replace with the URL of your image
        img.alt = 'Hint Image';
        img.style.maxWidth = '60%';
        img.style.height = 'auto';

        var closeBtn = document.createElement('button');
        closeBtn.innerText = 'Close';
        closeBtn.style.display = 'block';
        closeBtn.style.margin = '5px auto 0';
        closeBtn.style.padding = '5px 10px';
        closeBtn.style.cursor = 'pointer';
        closeBtn.onclick = function() {
            document.body.removeChild(popup);
        };

        popup.appendChild(img);
        popup.appendChild(closeBtn);
        document.body.appendChild(popup);
    }
}
hint3();

    

   
function hint4() {

    var imageElement = document.querySelector('label[for="c3"] .icon');
    imageElement.addEventListener('click', function() {
        showPopup("hehe hint received");
    });
    function showPopup() {
        var popup = document.createElement('div');
        popup.style.position = 'fixed';
        popup.style.top = '50%';
        popup.style.left = '50%';
        popup.style.transform = 'translate(-50%, -50%)';
        popup.style.zIndex = '1000';
        // popup.style.backgroundColor = 'white';
        popup.style.padding = '10px';
        popup.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';

        var img = document.createElement('img');
        img.src = 'hint4.webp';  // Replace with the URL of your image
        img.alt = 'Hint Image';
        img.style.maxWidth = '60%';
        img.style.height = 'auto';

        var closeBtn = document.createElement('button');
        closeBtn.innerText = 'Close';
        closeBtn.style.display = 'block';
        closeBtn.style.margin = '5px auto 0';
        closeBtn.style.padding = '5px 10px';
        closeBtn.style.cursor = 'pointer';
        closeBtn.onclick = function() {
            document.body.removeChild(popup);
        };

        popup.appendChild(img);
        popup.appendChild(closeBtn);
        document.body.appendChild(popup);
    }
}

hint4();
