
 m = 0;
let y;
const startCar = () =>
{
    y = setInterval(run , 100)
    m = 0;
    function run()
    {
        m += 5;
        if(m == 1200){
            clearInterval(y)
            m = 0
        }
        const carImg = document.getElementById('img')
             carImg.style.marginLeft = m+'px'

    }
}
 const stopCar =()=>
{
    clearInterval(y)
   
}


