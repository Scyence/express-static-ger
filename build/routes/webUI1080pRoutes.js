var express=require("express"),webUI1080pRouter=express.Router();webUI1080pRouter.route("/Overview").get(function(e,a){a.render("./Web_User_Interface/1080p/WebUserInterface",{title:"INSTAR Web User Interface",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",headline:"INSTAR Web User Interface",canonical:"/Web_User_Interface/1080p_Series/Overview/"})}),webUI1080pRouter.route("/").get(function(e,a){a.render("./Web_User_Interface/1080p/WebUserInterface_HD-Series",{title:"INSTAR Web User Interface fullHD Series",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",headline:"INSTAR Web User Interface fullHD Series",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li>',canonical:"/Web_User_Interface/1080p_Series/",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"",fhdtab:"",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),webUI1080pRouter.route("/System/").get(function(e,a){a.render("./Web_User_Interface/1080p/WebUserInterface_HD-Series_System",{title:"System Menu",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",headline:"INSTAR Web User Interface fullHD Series :: System",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li>',canonical:"/Web_User_Interface/1080p_Series/System/",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"",fhdtab:"",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),webUI1080pRouter.route("/System/Date_Time/").get(function(e,a){a.render("./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Date_Time",{title:"System Menu :: Date & Time",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",headline:"INSTAR Web User Interface fullHD Series :: System :: Time",breadcrumbs:'<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Date_Time/">Date & Time</a></li>',canonical:"/Web_User_Interface/1080p_Series/System/Date_Time/",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"",fhdtab:"",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),webUI1080pRouter.route("/System/Email/").get(function(e,a){a.render("./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Email",{title:"System Menu :: Email",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",headline:"INSTAR Web User Interface fullHD Series :: System :: Email",breadcrumbs:'<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Email/">Email</a></li>',canonical:"/Web_User_Interface/1080p_Series/System/Email/",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"",fhdtab:"",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),webUI1080pRouter.route("/System/Info/").get(function(e,a){a.render("./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Info",{title:"System Menu :: Info",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",headline:"INSTAR Web User Interface fullHD Series :: System :: Info",breadcrumbs:'<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Info/">Info</a></li>',canonical:"/Web_User_Interface/1080p_Series/System/Info/",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"",fhdtab:"",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),webUI1080pRouter.route("/System/Language/").get(function(e,a){a.render("./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Language",{title:"System Menu :: Language",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",headline:"INSTAR Web User Interface fullHD Series :: System :: Language",breadcrumbs:'<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Language/">Language</a></li>',canonical:"/Web_User_Interface/1080p_Series/System/Language/",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"",fhdtab:"",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),webUI1080pRouter.route("/System/User/").get(function(e,a){a.render("./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_User",{title:"System Menu :: User",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",headline:"INSTAR Web User Interface fullHD Series :: System :: User",breadcrumbs:'<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/User/">User</a></li>',canonical:"/Web_User_Interface/1080p_Series/System/User/",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"",fhdtab:"",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),webUI1080pRouter.route("/System/Log/").get(function(e,a){a.render("./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Log",{title:"System Menu :: Log",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",headline:"INSTAR Web User Interface fullHD Series :: System :: Log",breadcrumbs:'<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Log/">Log</a></li>',canonical:"/Web_User_Interface/1080p_Series/System/Log/",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"",fhdtab:"",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),webUI1080pRouter.route("/System/Reboot/").get(function(e,a){a.render("./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Reboot",{title:"System Menu :: Reboot",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",headline:"INSTAR Web User Interface fullHD Series :: System :: Reboot",breadcrumbs:'<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Reboot/">Reboot</a></li>',canonical:"/Web_User_Interface/1080p_Series/System/Reboot/",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"",fhdtab:"",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),webUI1080pRouter.route("/System/Reset/").get(function(e,a){a.render("./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Reset",{title:"System Menu :: Reset",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",headline:"INSTAR Web User Interface fullHD Series :: System :: Reset",breadcrumbs:'<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Reset/">Reset</a></li>',canonical:"/Web_User_Interface/1080p_Series/System/Reset/",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"",fhdtab:"",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),webUI1080pRouter.route("/System/Update/").get(function(e,a){a.render("./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Update",{title:"System Menu :: Update",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",headline:"INSTAR Web User Interface fullHD Series :: System :: Update",breadcrumbs:'<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Update/">Update</a></li>',canonical:"/Web_User_Interface/1080p_Series/System/Update/",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"",fhdtab:"",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),webUI1080pRouter.route("/Network/").get(function(e,a){a.render("./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network",{title:"Network Menu",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",headline:"INSTAR Web User Interface fullHD Series :: Network",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Network/">Network</a></li>',canonical:"/Web_User_Interface/1080p_Series/Network/",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"",fhdtab:"",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),webUI1080pRouter.route("/Network/IP_Configuration/").get(function(e,a){a.render("./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network_IP_Configuration",{title:"Network Menu :: IP Configuration",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",headline:"INSTAR Web User Interface fullHD Series :: Network :: IP Config",breadcrumbs:'<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Network/">Network</a></li><li><a href="/Web_User_Interface/1080p_Series/Network/IP_Configuration/">IP Configuration</a></li>',canonical:"/Web_User_Interface/1080p_Series/Network/IP_Configuration/",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"",fhdtab:"",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),webUI1080pRouter.route("/Network/WiFi/").get(function(e,a){a.render("./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network_WiFi",{title:"Network Menu :: WiFi",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",headline:"INSTAR Web User Interface fullHD Series :: Network :: WiFi",breadcrumbs:'<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Network/">Network</a></li><li><a href="/Web_User_Interface/1080p_Series/Network/WiFi/">WiFi</a></li>',canonical:"/Web_User_Interface/1080p_Series/Network/WiFi/",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"",fhdtab:"",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),webUI1080pRouter.route("/Network/Remote_Access/").get(function(e,a){a.render("./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network_Remote_Access",{title:"Network Menu :: Remote Access",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",headline:"INSTAR Web User Interface fullHD Series :: Network :: Remote Access",breadcrumbs:'<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Network/">Network</a></li><li><a href="/Web_User_Interface/1080p_Series/Network/Remote_Access/">Remote Access</a></li>',canonical:"/Web_User_Interface/1080p_Series/Network/Remote_Access/",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"",fhdtab:"",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),webUI1080pRouter.route("/Network/ONVIF/").get(function(e,a){a.render("./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network_ONVIF",{title:"Network Menu :: ONVIF",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",headline:"INSTAR Web User Interface fullHD Series :: Network :: ONVIF",breadcrumbs:'<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Network/">Network</a></li><li><a href="/Web_User_Interface/1080p_Series/Network/ONVIF/">ONVIF</a></li>',canonical:"/Web_User_Interface/1080p_Series/Network/ONVIF/",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"",fhdtab:"",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),webUI1080pRouter.route("/Network/UPnP/").get(function(e,a){a.render("./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network_UPnP",{title:"Network Menu :: UPnP",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",headline:"INSTAR Web User Interface fullHD Series :: Network :: UPnP",breadcrumbs:'<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Network/">Network</a></li><li><a href="/Web_User_Interface/1080p_Series/Network/UPnP/">UPnP</a></li>',canonical:"/Web_User_Interface/1080p_Series/Network/UPnP/",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"",fhdtab:"",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),webUI1080pRouter.route("/Network/FTP/").get(function(e,a){a.render("./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network_FTP",{title:"Network Menu :: FTP",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",headline:"INSTAR Web User Interface fullHD Series :: Network :: FTP",breadcrumbs:'<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Network/">Network</a></li><li><a href="/Web_User_Interface/1080p_Series/Network/FTP/">FTP</a></li>',canonical:"/Web_User_Interface/1080p_Series/Network/FTP/",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"",fhdtab:"",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),webUI1080pRouter.route("/Features/").get(function(e,a){a.render("./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features",{title:"Features Menu",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",headline:"INSTAR Web User Interface fullHD Series :: Features",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li>',canonical:"/Web_User_Interface/1080p_Series/Features/",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"",fhdtab:"",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),webUI1080pRouter.route("/Features/Status_LED/").get(function(e,a){a.render("./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features_Status_LED",{title:"Features Menu :: Status LED",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",headline:"INSTAR Web User Interface fullHD Series :: Features :: Status LED",breadcrumbs:'<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/Status_LED">Status LED</a></li>',canonical:"/Web_User_Interface/1080p_Series/Features/Status_LED/",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"",fhdtab:"",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),webUI1080pRouter.route("/Features/IR_LEDs/").get(function(e,a){a.render("./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features_IR_LEDs",{title:"Features Menu :: IR LEDs",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",headline:"INSTAR Web User Interface fullHD Series :: Features :: IR LEDs",breadcrumbs:'<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/IR_LEDs">IR LEDs</a></li>',canonical:"/Web_User_Interface/1080p_Series/Features/IR_LEDs/",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"",fhdtab:"",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),webUI1080pRouter.route("/Features/PTZ/").get(function(e,a){a.render("./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features_PTZ",{title:"Features Menu :: PTZ",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",headline:"INSTAR Web User Interface fullHD Series :: Features :: PTZ",breadcrumbs:'<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/PTZ">PTZ</a></li>',canonical:"/Web_User_Interface/1080p_Series/Features/PTZ/",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"",fhdtab:"",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),webUI1080pRouter.route("/Features/SD_Card/").get(function(e,a){a.render("./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features_SD_Card",{title:"Features Menu :: SD Card",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",headline:"INSTAR Web User Interface fullHD Series :: Features :: SD Card",breadcrumbs:'<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/SD_Card">SD Card</a></li>',canonical:"/Web_User_Interface/1080p_Series/Features/SD_Card/",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"",fhdtab:"",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),webUI1080pRouter.route("/Features/PTZ_Tour/").get(function(e,a){a.render("./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features_PTZ_Tour",{title:"Features Menu :: PTZ Tour",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",headline:"INSTAR Web User Interface fullHD Series :: Features :: PTZ Tour",breadcrumbs:'<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/PTZ_Tour">PTZ Tour</a></li>',canonical:"/Web_User_Interface/1080p_Series/Features/PTZ_Tour/",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"",fhdtab:"",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),webUI1080pRouter.route("/Features/Manual_Recording/").get(function(e,a){a.render("./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features_ManualRec",{title:"Features Menu :: Manual Recording",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",headline:"INSTAR Web User Interface fullHD Series :: Features :: Manual Recording",breadcrumbs:'<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/Manual_Recording">Manual Recording</a></li>',canonical:"/Web_User_Interface/1080p_Series/Features/Manual_Recording/",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"",fhdtab:"",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),webUI1080pRouter.route("/Multimedia/").get(function(e,a){a.render("./Web_User_Interface/1080p/WebUserInterface_HD-Series_Multimedia",{title:"Multimedia Menu",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",headline:"INSTAR Web User Interface fullHD Series :: Multimedia",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/">Multimedia</a></li>',canonical:"/Web_User_Interface/1080p_Series/Multimedia/",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"",fhdtab:"",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),webUI1080pRouter.route("/Multimedia/Audio/").get(function(e,a){a.render("./Web_User_Interface/1080p/WebUserInterface_HD-Series_Multimedia_Audio",{title:"Multimedia Menu :: Audio",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",headline:"INSTAR Web User Interface fullHD Series :: Multimedia :: Audio",breadcrumbs:'<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/">Multimedia</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/Audio">Audio</a></li>',canonical:"/Web_User_Interface/1080p_Series/Multimedia/Audio/",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"",fhdtab:"",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),webUI1080pRouter.route("/Multimedia/Video/").get(function(e,a){a.render("./Web_User_Interface/1080p/WebUserInterface_HD-Series_Multimedia_Video",{title:"Multimedia Menu :: Video",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",headline:"INSTAR Web User Interface fullHD Series :: Multimedia :: Video",breadcrumbs:'<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/">Multimedia</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/Video">Video</a></li>',canonical:"/Web_User_Interface/1080p_Series/Multimedia/Video/",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"",fhdtab:"",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),webUI1080pRouter.route("/Multimedia/Video/Wide_Dynamic_Range").get(function(e,a){a.render("./Web_User_Interface/1080p/WebUserInterface_HD-Series_Multimedia_Video_WDR",{title:"Multimedia Menu :: Video WDR",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",headline:"INSTAR Web User Interface fullHD Series :: Multimedia :: WDR Video",breadcrumbs:'<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/">Multimedia</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/Wide_Dynamic_Range">WDR</a></li>',canonical:"/Web_User_Interface/1080p_Series/Multimedia/Video/Wide_Dynamic_Range/",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"",fhdtab:"",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),webUI1080pRouter.route("/Multimedia/Image/").get(function(e,a){a.render("./Web_User_Interface/1080p/WebUserInterface_HD-Series_Multimedia_Image",{title:"Multimedia Menu :: Image",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",headline:"INSTAR Web User Interface fullHD Series :: Multimedia :: Image",breadcrumbs:'<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/">Multimedia</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/Image">Image</a></li>',canonical:"/Web_User_Interface/1080p_Series/Multimedia/Image/",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"",fhdtab:"",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),webUI1080pRouter.route("/Multimedia/Privacy_Mask/").get(function(e,a){a.render("./Web_User_Interface/1080p/WebUserInterface_HD-Series_Multimedia_Privacy_Mask",{title:"Multimedia Menu :: Privacy Mask",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",headline:"INSTAR Web User Interface fullHD Series :: Multimedia :: Privacy Mask",breadcrumbs:'<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/">Multimedia</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/Privacy_Mask">Privacy Mask</a></li>',canonical:"/Web_User_Interface/1080p_Series/Multimedia/Privacy_Mask/",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"",fhdtab:"",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),webUI1080pRouter.route("/Alarm/").get(function(e,a){a.render("./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm",{title:"Alarm Menu",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",headline:"INSTAR Web User Interface fullHD Series :: Alarm",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/">Alarm</a></li>',canonical:"/Web_User_Interface/1080p_Series/Alarm/",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"",fhdtab:"",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),webUI1080pRouter.route("/Alarm/Areas/").get(function(e,a){a.render("./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm_Areas",{title:"Alarm Menu :: Areas",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",headline:"INSTAR Web User Interface fullHD Series :: Alarm :: Areas",breadcrumbs:'<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/Areas/">Areas</a></li>',canonical:"/Web_User_Interface/1080p_Series/Alarm/Areas/",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"",fhdtab:"",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),webUI1080pRouter.route("/Alarm/Actions/").get(function(e,a){a.render("./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm_Actions",{title:"Alarm Menu :: Actions",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",headline:"INSTAR Web User Interface fullHD Series :: Alarm :: Actions",breadcrumbs:'<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/Actions/">Actions</a></li>',canonical:"/Web_User_Interface/1080p_Series/Alarm/Actions/",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"",fhdtab:"",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),webUI1080pRouter.route("/Alarm/Schedule/").get(function(e,a){a.render("./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm_Schedule",{title:"Alarm Menu :: Schedule",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",headline:"INSTAR Web User Interface fullHD Series :: Alarm :: Schedule",breadcrumbs:'<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/Schedule/">Schedule</a></li>',canonical:"/Web_User_Interface/1080p_Series/Alarm/Schedule/",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"",fhdtab:"",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),webUI1080pRouter.route("/Alarm/Alarm_Server/").get(function(e,a){a.render("./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm_Alarm_Server",{title:"Alarm Menu :: Alarm Server",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",headline:"INSTAR Web User Interface fullHD Series :: Alarm :: Alarm Server",breadcrumbs:'<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/Alarm_Server/">Alarm Server</a></li>',canonical:"/Web_User_Interface/1080p_Series/Alarm/Alarm_Server/",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"",fhdtab:"",sacc:"hidden",dlacc:"hidden",
dltab:"hidden"})}),webUI1080pRouter.route("/Alarm/Email/").get(function(e,a){a.render("./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm_Email",{title:"Alarm Menu :: Email",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",headline:"INSTAR Web User Interface fullHD Series :: Alarm :: Email",breadcrumbs:'<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/Email/">Email</a></li>',canonical:"/Web_User_Interface/1080p_Series/Alarm/Email/",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"",fhdtab:"",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),webUI1080pRouter.route("/Alarm/Push_Service/").get(function(e,a){a.render("./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm_Push_Service",{title:"Alarm Menu :: Push Service",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",headline:"INSTAR Web User Interface fullHD Series :: Alarm :: Push Service",breadcrumbs:'<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/Push_Service/">Push Service</a></li>',canonical:"/Web_User_Interface/1080p_Series/Alarm/Push_Service/",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"",fhdtab:"",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),webUI1080pRouter.route("/Recording/").get(function(e,a){a.render("./Web_User_Interface/1080p/WebUserInterface_HD-Series_Recording",{title:"Recording Menu",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",headline:"INSTAR Web User Interface fullHD Series :: Recording",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Recording/">Recording</a></li>',canonical:"/Web_User_Interface/1080p_Series/Recording/",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"",fhdtab:"",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),webUI1080pRouter.route("/Recording/Video/").get(function(e,a){a.render("./Web_User_Interface/1080p/WebUserInterface_HD-Series_Recording_Video",{title:"Recording Menu :: Video",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",headline:"INSTAR Web User Interface fullHD Series :: Recording :: Video",breadcrumbs:'<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Recording/">Recording</a></li><li><a href="/Web_User_Interface/1080p_Series/Recording/Video">Video</a></li>',canonical:"/Web_User_Interface/1080p_Series/Recording/Video/",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"",fhdtab:"",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),webUI1080pRouter.route("/Recording/Photoseries/").get(function(e,a){a.render("./Web_User_Interface/1080p/WebUserInterface_HD-Series_Recording_Photoseries",{title:"Recording Menu :: Photoseries",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",headline:"INSTAR Web User Interface fullHD Series :: Recording :: Photoseries",breadcrumbs:'<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Recording/">Recording</a></li><li><a href="/Web_User_Interface/1080p_Series/Recording/Photoseries">Photoseries</a></li>',canonical:"/Web_User_Interface/1080p_Series/Recording/Photoseries/",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"",fhdtab:"",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),webUI1080pRouter.route("/Live_Video/").get(function(e,a){a.render("./Web_User_Interface/1080p/WebUserInterface_HD-Series_Live_Video",{title:"Live Video",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",headline:"INSTAR Web User Interface fullHD Series :: Live Video",breadcrumbs:'<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li>',canonical:"/Web_User_Interface/1080p_Series/Live_Video/",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"",fhdtab:"",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),webUI1080pRouter.route("/Cloud/").get(function(e,a){a.render("./Web_User_Interface/1080p/WebUserInterface_HD-Series_Cloud",{title:"INSTAR Cloud",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",headline:"INSTAR Web User Interface fullHD Series :: INSTAR Cloud",breadcrumbs:'<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li>',canonical:"/Web_User_Interface/1080p_Series/Cloud/",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"",fhdtab:"",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),module.exports=webUI1080pRouter;