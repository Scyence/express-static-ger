var ctx=document.getElementById("radar5907_9008"),myChart=new Chart(ctx,{type:"radar",data:{labels:["Nightvision [m]","Megapixel","Power Consumptions [W]","IR LEDs","Focal Length [mm]"],datasets:[{label:"IN-5907 HD",backgroundColor:"rgba(2, 117, 216, 0.5)",borderColor:"rgba(2, 117, 216, 1)",data:[25,1,13,3,8]},{label:"IN-9008 HD",backgroundColor:"rgba(240, 173, 78, 0.5)",borderColor:"rgba(240, 173, 78, 1)",data:[20,2,9,5,4.2]}]},options:{legend:{display:!1},scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}});