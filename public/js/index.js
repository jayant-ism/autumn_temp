function myMove() {
    var elem = document.getElementById("animate");   
    var pos = 80;
    var id = setInterval(frame);
    function frame() {
        if (pos == 0) {
        clearInterval(id);
        } else {
        pos--;        
        elem.style.left = pos+"%"   ; 
        elem.style.width =100- pos+"%" ; 
        }
    }

    var ds = document.getElementById("but") ; 
    ds.style.display = "none" ; 
    ds =document.getElementById("rev-but") ; 
    ds.style.display ="inline" ;  
}


function rev_myMove() {
    var elem = document.getElementById("animate");   
    var pos = 0;
    var id = setInterval(frame);
    function frame() {
        if (pos == 80) {
        clearInterval(id);
        } else {
        pos++ 
        
        elem.style.left = pos+"%"   ; 
        elem.style.width =100- pos+"%" ; 
        }
    }
    var ds = document.getElementById("but") ; 
    ds.style.display = "block"  ;
    ds =document.getElementById("rev-but") ; 
        ds.style.display = "none"  ; 
}
