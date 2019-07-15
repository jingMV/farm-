//submit function
const submitOrder = () => {
    //declare
    const corn = document.getElementById("corn").value;
    const banana = document.getElementById("banana").value;
    const apple = document.getElementById("apple").value;
    const orange = document.getElementById("orange").value;
    const mango = document.getElementById("mango").value;
    const strawberry = document.getElementById("strawberry").value;
    const waterMelon = document.getElementById("waterMelon").value;
    const tamarine = document.getElementById("tamarine").value;
    
    //compute the product
    const cornVal = corn * 100;
    const bananaVal = banana * 70;
    const appleVal = apple * 120;
    const orangeVal = orange * 120;
    const mangoVal = mango * 110;
    const strawberryVal = strawberry * 140;
    const waterMelonVal = waterMelon * 150;
    const tamarineVal = tamarine * 200;

    //pass the compute data to ORDER-SECTION
   const myUl = document.getElementById("myUl");
   if (corn >= 1 || banana >= 1 || apple >= 1 || orange >= 1 || mango >= 1 || strawberry >= 1 || waterMelon >= 1 || tamarine >= 1) {
    const list = document.createElement("LI");
    const span = document.createElement("SPAN");
    const text = document.createTextNode("("+corn+")"+"Corn Order: " + cornVal + ', ' + "("+banana+")"+"Banana Order: " + bananaVal + ', ' + "("+apple+")"+"Apple Order: " + appleVal + ', ' + "("+orange+")"+"Orange Order: " + orangeVal + ', ' + "("+mango+")"+"Mango Order: " + mangoVal + ', ' + "("+strawberry+")"+"Strawberry Order: " + strawberryVal + ', ' + "("+waterMelon+")"+"waterMelon Order: " + waterMelonVal + ', ' + "("+tamarine+")"+"Apple Order: " + tamarineVal);
    span.appendChild(text);
    list.appendChild(span);
    myUl.appendChild(list);

    //create a P element that display total amount of order
    const allProduct = cornVal + bananaVal + appleVal + orangeVal + mangoVal + strawberryVal + waterMelonVal + tamarineVal;
    const totalText = "TOTAL ORDER: " + allProduct
    const myP = document.createElement("P");
    const myPText = document.createTextNode(totalText)
    myP.appendChild(myPText);
    list.appendChild(myP)
    
   } else {
       alert("Put your order in the boxes")
   };
   //clear the input value
    this.corn.value = 0;
    this.banana.value = 0;
    this.apple.value = 0;
    this.orange.value = 0;
    this.mango.value = 0;
    this.strawberry.value = 0;
    this.waterMelon.value = 0;
    this.tamarine.value = 0;

    //clear btn
    const ulChild = myUl.childNodes;
    const clear = document.getElementById("clear");
    const noOrder = document.getElementById("no-order");
    if ((ulChild.length - 1) >= 0) {
         clear.style.display = "block";
         
    };

    clear.addEventListener('click', () => {
        myUl.innerHTML = ""
        clear.style.display = "none";
    })
     console.log(myUl.childNodes)
}