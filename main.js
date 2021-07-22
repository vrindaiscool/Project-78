var members = [
    "hi.jpg", 
    "me.png", 
    "mom.png",
    "dad.jpg"
    ];

    var names = [
    "My Family-Book", 
    "Vrinda Kumar (ME!)", 
    "Mummy ( Meenu Kumar )", 
    "Daddy ( Pankaj Kumar )"
    
    ];

    var count = 0;

    function nextslide () {

    document.getElementById("members").src = members[count];

    document.getElementById("names").innerHTML = names[count];
    
    count++;

    if (count == 4) {
    
    count = 0;

    }

    }