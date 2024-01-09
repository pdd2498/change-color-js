var changeColor = document.getElementById("colors");

changeColor.addEventListener("click" , (e) =>{
    // alert("click");

    var num = "0123456789abcdef";
    var color = "#"
    for(let i = 0;i<6;i++){
        var idx = Math.floor(Math.random()*16);
        color += num[idx];
    }
    console.log(color);


    // var color = rand;
    var circ = document.getElementById("cir1");
    circ.style.backgroundColor = color;
    console.log(color);
})

var sapebat = document.getElementById("sap");

sapebat.addEventListener("click" , (e) =>{
    // alert("click");

    let dis = ["box" , "tran" , "circul" , "reck" , "hex"];

    var idx = Math.floor(Math.random()*5);

    var mv = document.getElementById("sape")

    mv.className = dis[idx];

    // mv.classList(dis[idx]);
    console.log(dis[idx]);
    

})





