const checkbox = document.getElementById("checkbox");
const submitBtn = document.querySelector("button[type=submit]")
// console.log(submitBtn)
//disabled checkbox
checkbox.disabled =  true;
submitBtn.disabled = true;


const elements = document.querySelectorAll(".element")
const selectColor = document.getElementById("SelectColor")
// selectColor = document.getElementById('#SelectColor')// #query selector with Id

// console.log(selectColor)
//Assign color to elements
elements.forEach(function (element) {
    const color = getRandomColor();
    
    element.style.backgroundColor = color; // to get the diffrent color
    element.innerHTML= color; 
    selectColor.innerHTML =color;
});

// generate the random color fnx
function getRandomColor() {
    const letter = '0123456789ABCDEF'
    let color = '#';
    for (let i=0; i<6; i++){
        color += letter[Math.floor(Math.random() * 16)];

    }
    return color;
}

//check if the right color is chosen

elements.forEach( function (element) {
    element.addEventListener("click", function() {
        if(element.innerHTML === selectColor.innerHTML){
                checkbox.checked =true;
                alert("You are Human !")
                submitBtn.disabled = false;
                submitBtn.classList.remove("btn-light")
                submitBtn.classList.add("btn-success")
                console.log(submitBtn)

        }else {
                    alert("Please verify that you are human! ")
                    location.reload(true);
                    
        }
    })
})

// console.log(getRandomColor())