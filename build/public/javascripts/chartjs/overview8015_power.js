var data={labels:["1","2","3","4","5","6","7","8","9","10"],series:[[{meta:"IN-8015HD: Booting (min) [W]",value:2.04},{meta:"IN-8015HD: Booting (max) [W]",value:6.8},{meta:"IN-8015HD: Booting (IR on) [W]",value:7.3},{meta:"IN-8015HD: Idle [W]",value:3.52},{meta:"IN-8015HD: Idle (IR on) [W]",value:4.63},{meta:"IN-8015HD: Idle (WLAN + IR on) [W]",value:5.32},{meta:"IN-8015HD: Pan [W]",value:4.32},{meta:"IN-8015HD: Pan (IR on) [W]",value:5.47},{meta:"IN-8015HD: Recording [W]",value:3.65},{meta:"IN-8015HD: Recording (IR on) [W]",value:4.7}],[{meta:"IN-6014HD: Booting (min) [W]",value:1.94},{meta:"IN-6014HD: Booting (max) [W]",value:6.42},{meta:"IN-6014HD: Booting (IR on) [W]",value:7.49},{meta:"IN-6014HD: Idle [W]",value:2.94},{meta:"IN-6014HD: Idle (IR on) [W]",value:4.29},{meta:"IN-6014HD: Idle (WLAN + IR on) [W]",value:5.09},{meta:"IN-6014HD: Pan [W]",value:4.74},{meta:"IN-6014HD: Pan (IR on) [W]",value:5.67},{meta:"IN-6014HD: Recording [W]",value:2.97},{meta:"IN-6014HD: Recording (IR on) [W]",value:4.54}],[{meta:"IN-3011: Booting (min) [W]",value:2.2},{meta:"IN-3011: Booting (max) [W]",value:6.8},{meta:"IN-3011: Booting (IR on) [W]",value:7.2},{meta:"IN-3011: Idle [W]",value:3.3},{meta:"IN-3011: Idle (IR on) [W]",value:3.8},{meta:"IN-3011: Idle (WLAN + IR on) [W]",value:4.5},{meta:"IN-3011: Pan&Tilt [W]",value:5.1},{meta:"IN-3011: Pan&Tilt (IR on) [W]",value:7.6},{meta:"IN-3011: Recording [W]",value:4.5},{meta:"IN-3011: Recording (IR on) [W]",value:4}]]},options={width:900,height:500,showArea:!0,showLine:!0,showPoint:!0,fullWidth:!0,lineSmooth:Chartist.Interpolation.simple({divisor:2}),fullWidth:!0,chartPadding:{right:20},low:0,plugins:[Chartist.plugins.tooltip()]},responsiveOptions=[["screen and (min-width: 975px) and (max-width: 1050px)",{width:775,height:430}],["screen and (min-width: 746px) and (max-width: 974px)",{width:568,height:315}],["screen and (max-width: 745px)",{width:510,height:283}]];new Chartist.Line("#chart1",data,options,responsiveOptions);