function clock(){
    const time =new Date();
    let hour= time.getHours();
    const minutes=time.getMinutes().toString().padStart(2,"0");
    const merdian=hour >=12 ? "PM":"AM";
    hour=hour %12 || 12;
    hour=hour.toString().padStart(2,"0");
    const seconds =time.getSeconds().toString().padStart(2,"0");
    const timeString=`${hour}:${minutes}:${seconds} ${merdian}`;
    document.getElementById("clockTimer").textContent=timeString;
}
clock();
setInterval(clock,1000);