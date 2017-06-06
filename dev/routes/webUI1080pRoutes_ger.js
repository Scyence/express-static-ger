var express = require('express');
var webUI1080pGerRouter = express.Router();

/* GET WebUI page. */
webUI1080pGerRouter.route('/Auswahl')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface', {
            title: 'INSTAR Web User Interface',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface',
            canonical: '/Web_User_Interface/1080p_Serie/Overview/',
          });
      });

/* ###################################### fullHD Series ###################################### */

/* GET fullHD WebUI page. */
webUI1080pGerRouter.route('/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series', {
            title: 'INSTAR Web User Interface fullHD Serie',
            ampimg: '/images/Search/QI_SearchThumb_WebUI_1080p.jpg',
            headline: 'INSTAR Web User Interface fullHD Serie',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li>',
            canonical: '/Web_User_Interface/1080p_Serie/',
			pacc: '',
			ptab: 'hidden',
			qiacc: '',
			qitab: 'hidden',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: '',
			fhdtab: '',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* ###################################### fullHD Series System ###################################### */

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/System/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System', {
            title: 'System Menu',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_System_Overview.jpg',
            headline: 'INSTAR Web User Interface fullHD Serie :: System',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/System/',
			pacc: '',
			ptab: 'hidden',
			qiacc: '',
			qitab: 'hidden',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: '',
			fhdtab: '',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/System/Datum_Uhrzeit/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Date_Time', {
            title: 'System Menu :: Datum & Uhrzeit',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_System_Date_Time.jpg',
            headline: 'INSTAR Web User Interface fullHD Serie :: System :: Zeit & Datum',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Datum_Uhrzeit/">Datum & Uhrzeit</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/System/Date_Time/',
			pacc: '',
			ptab: 'hidden',
			qiacc: '',
			qitab: 'hidden',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: '',
			fhdtab: '',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/System/Info/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Info', {
            title: 'System Menu :: Info',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_System_Overview.jpg',
            headline: 'INSTAR Web User Interface fullHD Serie :: System :: Info',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Info/">Info</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/System/Info/',
			pacc: '',
			ptab: 'hidden',
			qiacc: '',
			qitab: 'hidden',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: '',
			fhdtab: '',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/System/Sprache/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Language', {
            title: 'System Menu :: Language',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_System_Language.jpg',
            headline: 'INSTAR Web User Interface fullHD Serie :: System :: Sprache',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Sprache/">Sprache</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/System/Language/',
			pacc: '',
			ptab: 'hidden',
			qiacc: '',
			qitab: 'hidden',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: '',
			fhdtab: '',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/System/Benutzer/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_User', {
            title: 'System Menu :: Benutzer',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_System_User.jpg',
            headline: 'INSTAR Web User Interface fullHD Serie :: System :: Benutzer',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Benutzer/">Benutzer</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/System/User/',
			pacc: '',
			ptab: 'hidden',
			qiacc: '',
			qitab: 'hidden',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: '',
			fhdtab: '',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/System/Log/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Log', {
            title: 'System Menu :: Log',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_System_Log.jpg',
            headline: 'INSTAR Web User Interface fullHD Serie :: System :: Log',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Log/">Log</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/System/Log/',
			pacc: '',
			ptab: 'hidden',
			qiacc: '',
			qitab: 'hidden',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: '',
			fhdtab: '',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/System/Neustarten/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Reboot', {
            title: 'System Menu :: Neustarten',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_System_Reboot.jpg',
            headline: 'INSTAR Web User Interface fullHD Serie :: System :: Neustarten',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Neustarten/">Neustarten</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/System/Reboot/',
			pacc: '',
			ptab: 'hidden',
			qiacc: '',
			qitab: 'hidden',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: '',
			fhdtab: '',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/System/Werksreset/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Reset', {
            title: 'System Menu :: Werksreset',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_System_Reset.jpg',
            headline: 'INSTAR Web User Interface fullHD Serie :: System :: Werksreset',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Werksreset/">Werksreset</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/System/Reset/',
			pacc: '',
			ptab: 'hidden',
			qiacc: '',
			qitab: 'hidden',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: '',
			fhdtab: '',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/System/Update/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Update', {
            title: 'System Menu :: Update',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_System_Update.jpg',
            headline: 'INSTAR Web User Interface fullHD Serie :: System :: Update',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Update/">Update</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/System/Update/',
			pacc: '',
			ptab: 'hidden',
			qiacc: '',
			qitab: 'hidden',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: '',
			fhdtab: '',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* ###################################### fullHD Series Network ###################################### */

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Netzwerk/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network', {
            title: 'Netzwerk Menu',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Network_IP_Configuration.jpg',
            headline: 'INSTAR Web User Interface fullHD Serie :: Netzwerk',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Netzwerk/">Netzwerk</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Network/',
			pacc: '',
			ptab: 'hidden',
			qiacc: '',
			qitab: 'hidden',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: '',
			fhdtab: '',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Netzwerk/IP_Konfiguration/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network_IP_Configuration', {
            title: 'Netzwerk Menu :: IP Configuration',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Network_IP_Configuration.jpg',
            headline: 'INSTAR Web User Interface fullHD Serie :: Netzwerk :: IP Konfig',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Netzwerk/">Netzwerk</a></li><li><a href="/Web_User_Interface/1080p_Series/Netzwerk/IP_Konfiguration/">IP Konfiguration</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Network/IP_Configuration/',
			pacc: '',
			ptab: 'hidden',
			qiacc: '',
			qitab: 'hidden',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: '',
			fhdtab: '',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Netzwerk/WLAN/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network_WiFi', {
            title: 'Netzwerk Menu :: WiFi',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Network_WiFi.jpg',
            headline: 'INSTAR Web User Interface fullHD Serie :: Netzwerk :: WLAN',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Netzwerk/">Netzwerk</a></li><li><a href="/Web_User_Interface/1080p_Series/Netzwerk/WLAN/">WLAN</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Network/WiFi/',
			pacc: '',
			ptab: 'hidden',
			qiacc: '',
			qitab: 'hidden',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: '',
			fhdtab: '',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Netzwerk/Fernzugriff/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network_Remote_Access', {
            title: 'Netzwerk Menu :: Fernzugriff',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Network_Remote_Access.jpg',
            headline: 'INSTAR Web User Interface fullHD Serie :: Netzwerk :: Fernzugriff',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Netzwerk/">Netzwerk</a></li><li><a href="/Web_User_Interface/1080p_Series/Netzwerk/Fernzugriff/">Fernzugriff</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Network/Remote_Access/',
			pacc: '',
			ptab: 'hidden',
			qiacc: '',
			qitab: 'hidden',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: '',
			fhdtab: '',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Netzwerk/ONVIF/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network_ONVIF', {
            title: 'Netzwerk Menu :: ONVIF',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Network_ONVIF.jpg',
            headline: 'INSTAR Web User Interface fullHD Serie :: Netzwerk :: ONVIF',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Netzwerk/">Netzwerk</a></li><li><a href="/Web_User_Interface/1080p_Series/Netzwerk/ONVIF/">ONVIF</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Network/ONVIF/',
			pacc: '',
			ptab: 'hidden',
			qiacc: '',
			qitab: 'hidden',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: '',
			fhdtab: '',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Netzwerk/UPnP/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network_UPnP', {
            title: 'Netzwerk Menu :: UPnP',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Network_UPnP.jpg',
            headline: 'INSTAR Web User Interface fullHD Serie :: Netzwerk :: UPnP',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Netzwerk/">Netzwerk</a></li><li><a href="/Web_User_Interface/1080p_Series/Netzwerk/UPnP/">UPnP</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Network/UPnP/',
			pacc: '',
			ptab: 'hidden',
			qiacc: '',
			qitab: 'hidden',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: '',
			fhdtab: '',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* ###################################### fullHD Series Features ###################################### */

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Features/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features', {
            title: 'Features Menu',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Features_Wizard.jpg',
            headline: 'INSTAR Web User Interface fullHD Serie :: Features',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Features/',
			pacc: '',
			ptab: 'hidden',
			qiacc: '',
			qitab: 'hidden',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: '',
			fhdtab: '',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Features/Email_Einstellungen/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features_Email', {
            title: 'Features Menu :: Email Einstellungen',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Features_Email.jpg',
            headline: 'INSTAR Web User Interface fullHD Serie :: Features :: Email Einstellungen',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/Email_Einstellungen/">Email Einstellungen</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Features/Email/',
			pacc: '',
			ptab: 'hidden',
			qiacc: '',
			qitab: 'hidden',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: '',
			fhdtab: '',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Features/FTP/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features_FTP', {
            title: 'Features Menu :: FTP',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Features_FTP.jpg',
            headline: 'INSTAR Web User Interface fullHD Serie :: Features :: FTP',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/FTP/">FTP</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Features/FTP/',
			pacc: '',
			ptab: 'hidden',
			qiacc: '',
			qitab: 'hidden',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: '',
			fhdtab: '',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Features/Status_LED/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features_Status_LED', {
            title: 'Features Menu :: Status LED',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Features_Status_LEDs.jpg',
            headline: 'INSTAR Web User Interface fullHD Serie :: Features :: Status LED',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/Status_LED">Status LED</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Features/Status_LED/',
			pacc: '',
			ptab: 'hidden',
			qiacc: '',
			qitab: 'hidden',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: '',
			fhdtab: '',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Features/IR_Nachtsicht/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features_IR_LEDs', {
            title: 'Features Menu :: IR LEDs',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Features_Nightvision.jpg',
            headline: 'INSTAR Web User Interface fullHD Serie :: Features :: IR Nachtsicht',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/IR_Nachtsicht">IR Nachtsicht</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Features/IR_LEDs/',
			pacc: '',
			ptab: 'hidden',
			qiacc: '',
			qitab: 'hidden',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: '',
			fhdtab: '',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Features/PTZ/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features_PTZ', {
            title: 'Features Menu :: PTZ',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Features_PTZ.jpg',
            headline: 'INSTAR Web User Interface fullHD Serie :: Features :: PTZ',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/PTZ">PTZ</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Features/PTZ/',
			pacc: '',
			ptab: 'hidden',
			qiacc: '',
			qitab: 'hidden',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: '',
			fhdtab: '',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Features/SD_Karte/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features_SD_Card', {
            title: 'Features Menu :: SD Karte',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Features_SD_Card.jpg',
            headline: 'INSTAR Web User Interface fullHD Serie :: Features :: SD Karte',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/SD_Karte">SD Karte</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Features/SD_Card/',
			pacc: '',
			ptab: 'hidden',
			qiacc: '',
			qitab: 'hidden',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: '',
			fhdtab: '',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Features/PTZ_Tour/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features_PTZ_Tour', {
            title: 'Features Menu :: PTZ Tour',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Features_PTZ_Tour.jpg',
            headline: 'INSTAR Web User Interface fullHD Serie :: Features :: PTZ Tour',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/PTZ_Tour">PTZ Tour</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Features/PTZ_Tour/',
			pacc: '',
			ptab: 'hidden',
			qiacc: '',
			qitab: 'hidden',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: '',
			fhdtab: '',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Features/Manuelle_Aufnahme/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features_ManualRec', {
            title: 'Features Menu :: Manuelle Aufnahme',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Features_Manual_Recording.jpg',
            headline: 'INSTAR Web User Interface fullHD Serie :: Features :: Manuelle Aufnahme',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/Manuelle_Aufnahme">Manuelle Aufnahme</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Features/Manual_Recording/',
			pacc: '',
			ptab: 'hidden',
			qiacc: '',
			qitab: 'hidden',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: '',
			fhdtab: '',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* ###################################### fullHD Series Multimedia ###################################### */

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Multimedia/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Multimedia', {
            title: 'Multimedia Menu',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Multimedia_Overlays.jpg',
            headline: 'INSTAR Web User Interface fullHD Serie :: Multimedia',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/">Multimedia</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Multimedia/',
			pacc: '',
			ptab: 'hidden',
			qiacc: '',
			qitab: 'hidden',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: '',
			fhdtab: '',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Multimedia/Audio/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Multimedia_Audio', {
            title: 'Multimedia Menu :: Audio',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Multimedia_Audio.jpg',
            headline: 'INSTAR Web User Interface fullHD Serie :: Multimedia :: Audio',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/">Multimedia</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/Audio">Audio</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Multimedia/Audio/',
			pacc: '',
			ptab: 'hidden',
			qiacc: '',
			qitab: 'hidden',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: '',
			fhdtab: '',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Multimedia/Video/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Multimedia_Video', {
            title: 'Multimedia Menu :: Video',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Multimedia_Video.jpg',
            headline: 'INSTAR Web User Interface fullHD Serie :: Multimedia :: Video',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/">Multimedia</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/Video">Video</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Multimedia/Video/',
			pacc: '',
			ptab: 'hidden',
			qiacc: '',
			qitab: 'hidden',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: '',
			fhdtab: '',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Multimedia/Bild/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Multimedia_Image', {
            title: 'Multimedia Menu :: Bild',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Multimedia_Image.jpg',
            headline: 'INSTAR Web User Interface fullHD Serie :: Multimedia :: Bild',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/">Multimedia</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/Bild">Bild</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Multimedia/Image/',
			pacc: '',
			ptab: 'hidden',
			qiacc: '',
			qitab: 'hidden',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: '',
			fhdtab: '',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Multimedia/Bild/Wide_Dynamic_Range')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Multimedia_Image_WDR', {
            title: 'Multimedia Menu :: Bild WDR',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Multimedia_Image.jpg',
            headline: 'INSTAR Web User Interface fullHD Serie :: Multimedia :: WDR Bild',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/">Multimedia</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/Bild">Bild</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/Bild/Wide_Dynamic_Range">WDR</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Multimedia/Image/Wide_Dynamic_Range/',
			pacc: '',
			ptab: 'hidden',
			qiacc: '',
			qitab: 'hidden',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: '',
			fhdtab: '',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Multimedia/Video_Overlays/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Multimedia_Overlays', {
            title: 'Multimedia Menu :: Video Overlays',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Multimedia_Overlays.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Multimedia :: Video Overlays',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/">Multimedia</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/Video_Overlays">Video Overlays</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Multimedia/Video_Overlays/',
			pacc: '',
			ptab: 'hidden',
			qiacc: '',
			qitab: 'hidden',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: '',
			fhdtab: '',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Multimedia/Privat/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Multimedia_Privacy_Mask', {
            title: 'Multimedia Menu :: Privatsphäre',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Multimedia_Privat.jpg',
            headline: 'INSTAR Web User Interface fullHD Serie :: Multimedia :: Privatsphäre',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/">Multimedia</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/Privat">Privatsphäre</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Multimedia/Privacy_Mask/',
			pacc: '',
			ptab: 'hidden',
			qiacc: '',
			qitab: 'hidden',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: '',
			fhdtab: '',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* ###################################### fullHD Series Alarm ###################################### */

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Alarm/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm', {
            title: 'Alarm Menu',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Alarm_Alarm_Actions.jpg',
            headline: 'INSTAR Web User Interface fullHD Serie :: Alarm',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/">Alarm</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Alarm/',
			pacc: '',
			ptab: 'hidden',
			qiacc: '',
			qitab: 'hidden',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: '',
			fhdtab: '',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Alarm/Bereiche/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm_Areas', {
            title: 'Alarm Menu :: Bereiche',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Alarm_Alarm_Areas.jpg',
            headline: 'INSTAR Web User Interface fullHD Serie :: Alarm :: Bereiche',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/Bereiche/">Bereiche</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Alarm/Areas/',
			pacc: '',
			ptab: 'hidden',
			qiacc: '',
			qitab: 'hidden',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: '',
			fhdtab: '',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Alarm/Aktionen/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm_Actions', {
            title: 'Alarm Menu :: Aktionen',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Alarm_Alarm_Actions.jpg',
            headline: 'INSTAR Web User Interface fullHD Serie :: Alarm :: Aktionen',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/Aktionen/">Aktionen</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Alarm/Actions/',
			pacc: '',
			ptab: 'hidden',
			qiacc: '',
			qitab: 'hidden',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: '',
			fhdtab: '',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Alarm/Zeitplan/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm_Schedule', {
            title: 'Alarm Menu :: Zeitplan',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Alarm_Schedule.jpg',
            headline: 'INSTAR Web User Interface fullHD Serie :: Alarm :: Zeitplan',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/Zeitplan/">Zeitplan</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Alarm/Schedule/',
			pacc: '',
			ptab: 'hidden',
			qiacc: '',
			qitab: 'hidden',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: '',
			fhdtab: '',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Alarm/Alarm_Server/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm_Alarm_Server', {
            title: 'Alarm Menu :: Alarm Server',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Alarm_Alarmserver.jpg',
            headline: 'INSTAR Web User Interface fullHD Serie :: Alarm :: Alarm Server',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/Alarm_Server/">Alarm Server</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Alarm/Alarm_Server/',
			pacc: '',
			ptab: 'hidden',
			qiacc: '',
			qitab: 'hidden',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: '',
			fhdtab: '',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Alarm/Push_Dienst/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm_Push_Service', {
            title: 'Alarm Menu :: Push Dienst',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Alarm_Push_Service.jpg',
            headline: 'INSTAR Web User Interface fullHD Serie :: Alarm :: Push Dienst',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/Push_Dienst/">Push Dienst</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Alarm/Push_Service/',
			pacc: '',
			ptab: 'hidden',
			qiacc: '',
			qitab: 'hidden',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: '',
			fhdtab: '',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* ###################################### fullHD Series Recording ###################################### */

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Aufnahme_Aufgaben/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Recording', {
            title: 'Aufnahme Menu',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Tasks_Video_Recording.jpg',
            headline: 'INSTAR Web User Interface fullHD Serie :: Aufnahme',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Aufnahme_Aufgaben/">Aufnahme Aufgaben</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Recording/',
			pacc: '',
			ptab: 'hidden',
			qiacc: '',
			qitab: 'hidden',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: '',
			fhdtab: '',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Aufnahme_Aufgaben/Video/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Recording_Video', {
            title: 'Aufnahme Menu :: Video',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Tasks_Video_Recording.jpg',
            headline: 'INSTAR Web User Interface fullHD Serie :: Aufnahme :: Video',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Aufnahme_Aufgaben/">Aufnahme Aufgaben</a></li><li><a href="/Web_User_Interface/1080p_Series/Aufnahme_Aufgaben/Video">Video</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Recording/Video/',
			pacc: '',
			ptab: 'hidden',
			qiacc: '',
			qitab: 'hidden',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: '',
			fhdtab: '',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Aufnahme_Aufgaben/Fotoserie/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Recording_Photoseries', {
            title: 'Aufnahme Menu :: Fotoserie',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Tasks_Photoseries.jpg',
            headline: 'INSTAR Web User Interface fullHD Serie :: Aufnahme :: Fotoserie',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Aufnahme_Aufgaben/">Aufnahme Aufgaben</a></li><li><a href="/Web_User_Interface/1080p_Series/Aufnahme_Aufgaben/Fotoserie">Fotoserie</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Recording/Photoseries/',
			pacc: '',
			ptab: 'hidden',
			qiacc: '',
			qitab: 'hidden',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: '',
			fhdtab: '',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* ###################################### fullHD Series LiveVideo ###################################### */

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Live_Video/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Live_Video', {
            title: 'Live Video',
            ampimg: '/images/Search/QI_SearchThumb_WebUI_1080p.jpg',
            headline: 'INSTAR Web User Interface fullHD Serie :: Live Video',
			breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li>',
      canonical: '/Web_User_Interface/1080p_Series/Live_Video/',
			pacc: '',
			ptab: 'hidden',
			qiacc: '',
			qitab: 'hidden',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: '',
			fhdtab: '',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* ###################################### fullHD Series Cloud ###################################### */

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Cloud/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Cloud', {
            title: 'INSTAR Cloud',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Cloud_Login.jpg',
            headline: 'INSTAR Web User Interface fullHD Serie :: INSTAR Cloud',
			breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li>',
      canonical: '/Web_User_Interface/1080p_Series/Cloud/',
			pacc: '',
			ptab: 'hidden',
			qiacc: '',
			qitab: 'hidden',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: '',
			fhdtab: '',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });


module.exports = webUI1080pGerRouter;
