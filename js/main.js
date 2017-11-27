window.onload = function(){
    var btnShowPopUp1 = document.querySelector('.popUp1'),
        btnShowPopUp2 = document.querySelector('.popUp2');
    
    function PopUp(){
        
        var popUp = this,
            modalWindow = document.querySelector('.popUp'),
            overlay = document.querySelector('.overlay');
        
        
        this.open = function(content){
            modalWindow.style.display ='block';
            overlay.style.display = 'block';
            modalWindow.innerHTML = content;
        }
        
        this.close = function(){
            modalWindow.style.display= 'none';
            overlay.style.display = 'none';
        }
        
        overlay.onclick = function(){
            popUp.close();
        }
    }
    
    
    
    var newPopUp = new PopUp();
    
    btnShowPopUp1.onclick = function(){
        newPopUp.open('Hello my name is Oleh');
    }
    
    btnShowPopUp2.onclick = function(){
        newPopUp.open('Hello world');
    }
    
}