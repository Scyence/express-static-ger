var express = require('express');
var webUI1080pGerRouter = express.Router();

/* GET WebUI page. */
webUI1080pGerRouter.route('/Auswahl')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - INSTAR Weboberfläche - kontrollieren Sie Ihre IP Kamera über Ihren Webbrowser',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Weboberfläche - kontrollieren Sie Ihre IP Kamera über Ihren Webbrowser',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li>',
            canonical: '/Web_User_Interface/1080p_Serie/Overview/',
            description: '1080p Weboberfläche - Nutzen Sie unser INSTAR Kamera Tool um die IP Ihrer IP Kamera zu ermitteln und rufen Sie diese Adresse in Ihrem Webbrowser auf um die Weboberfläche (WebUI) zu erreichen.',
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

/* ###################################### fullHD Series ###################################### */

/* GET fullHD WebUI page. */
webUI1080pGerRouter.route('/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - INSTAR Full HD Weboberfläche - kontrollieren Sie Ihre IP Kamera über Ihren Webbrowser',
            ampimg: '/images/Search/QI_SearchThumb_WebUI_1080p.jpg',
            headline: 'INSTAR Full HD Weboberfläche - kontrollieren Sie Ihre IP Kamera über Ihren Webbrowser',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li>',
            canonical: '/Web_User_Interface/1080p_Serie/',
            description: 'Nutzen Sie unser INSTAR Kamera Tool um die IP Ihrer IP Full HD Webcam zu ermitteln und rufen Sie diese Adresse in Ihrem Webbrowser auf um die Weboberfläche (WebUI) zu erreichen. Die WebUI ermöglicht es Ihnen alle Funktionen Ihrer 1080p Sicherheitskamera zu konfigurieren.',
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
            title: 'INSTAR IP Kamera 1080p Weboberfläche - System Menu',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_System_Overview.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  System Overlay',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/System/',
            description: '1080p Weboberfläche - System Overlay: Ändern Sie die Sprache der Weboberfläche, starten Sie die Kamera neu, führen Sie einen Werksreset durch oder updaten Sie die Firmware und Weboberfläche Ihrer Kamera.',
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
            title: 'INSTAR IP Kamera 1080p Weboberfläche - System Menu :: Datum & Uhrzeit',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_System_Date_Time.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  System :: Zeit & Datum',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Datum_Uhrzeit/">Datum & Uhrzeit</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/System/Date_Time/',
            description: '1080p Weboberfläche - Zeit & Datum: Ihre Kamera wird automatisch versuchen einen sogenannten NTP Server zu kontaktieren um die interne Zeit einzustellen. Es wird empfohlen diesen Dienst aktiviert zu lassen. Wenn Ihre Kamera jedoch nicht mit dem Internet verbunden ist, können Sie die Zeit aber auch mit Ihrem Computer synchronisieren, wenn Sie auf die Kamera zugreifen. Beachten Sie bitte, dass Sie dies regelmäßig durchführen müssen, um die Zeit auf der Kamera zu halten.',
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
            title: 'INSTAR IP Kamera 1080p Weboberfläche - System Menu :: Info',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_System_Overview.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  System :: Info',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Info/">Info</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/System/Info/',
            description: '1080p Weboberfläche - Das Info Menü stellt eine Übersicht über wichtige System Variablen dar und soll Ihnen beim Lösen von Problemen mit der Kamera helfen. Der Zugriff über Ihre DDNS Adresse funktioniert nicht? Überprüfen Sie hier den DDNS Status (dieser muss erfolgreich sein) und der UPnP Status (sollte in den meisten Fällen deaktiviert sein). Um die DDNS Adresse als Fehlerquelle auszuschließen, können Sie auch über ihre WAN IP (anstelle der DDNS Adresse) auf die Kamera zugreifen - sollte es danach immer noch nicht gehen, ist vermutlich die Port Weiterleitung der Schuldige.',
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
            title: 'INSTAR IP Kamera 1080p Weboberfläche - System Menu :: Language',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_System_Language.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  System :: Sprache',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Sprache/">Sprache</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/System/Language/',
            description: '1080p Weboberfläche - Ändern Sie Sprache der Weboberfläche zu Deutsch, Englisch, Französisch oder Chinesisch. Die Oberfläche wird automatisch in der Standard Sprache Ihres Betriebssystems geladen. Sollte diese Erkennung fehlschlagen, oder Sie eine andere Sprache für die WebUI wünschen, legen Sie dies bitte hier fest. Die Auswahl wird lokal auf Ihrem Rechner und nicht global auf der Kamera gespeichert.',
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
            title: 'INSTAR IP Kamera 1080p Weboberfläche - System Menu :: Benutzer',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_System_User.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  System :: Benutzer',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Benutzer/">Benutzer</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/System/User/',
            description: '1080p Weboberfläche - Ihre Kamera über 3 Benutzerebenen mit zunehmenden Beschränkungen beim Kamerazugriff. Der Administrator (admin), der Benutzer (user) und der Gast (guest) und einem Kennwort für alle Zugänge - instar. Bitte ändern Sie dieses bevor Sie Ihre Kamera online verfügbar machen. Vergessen Sie bitte nicht, dass dieses Kennwort für alle drei Zugänge geändert werden sollte. Um dennoch ohne eine Kennwortabfrage auf den RTSP Stream zuzugreifen, können Sie die Authentifizierung nur für diesen Stream deaktivieren.',
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
            title: 'INSTAR IP Kamera 1080p Weboberfläche - System Menu :: Log',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_System_Log.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  System :: Log',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Log/">Log</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/System/Log/',
            description: '1080p Weboberfläche - Nutzen Sie das Log um Fehlerquellen auf die Schliche zu kommen. Sie erhalten keine Alarm Emails mehr, die SMTP Server Daten scheinen aber noch zu funktionieren? Schauen Sie im Log nach, ob überhaupt noch Alarme ausgelöst werden. Sie erhalten kontinuierlich Alarmbenachrichtigungen, obwohl Sie testweise schon einmal die Bewegungserkennung ganz deaktiviert haben? Überprüfen Sie im Log was den Alarm auslöst. Ist eventuell der Audio Alarm aktiv? Oder kommt der Trigger vom Alarmeingang der Kamera?',
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
            title: 'INSTAR IP Kamera 1080p Weboberfläche - System Menu :: Neustarten',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_System_Reboot.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  System :: Neustarten',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Neustarten/">Neustarten</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/System/Reboot/',
            description: '1080p Weboberfläche - Hier können Sie die Kamera neustarten. Es wird empfohlen die Kamera nicht einfach abzustecken oder über den Hardware Reset zurückzusetzen, da dies das Betriebssystem (aber auch die SD Karte) schädigen kann. Nutzen Sie den Hardware Reset nur dann, wenn Sie den Zugriff auf die Weboberfläche der Kamera verloren haben.',
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
            title: 'INSTAR IP Kamera 1080p Weboberfläche - System Menu :: Werksreset',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_System_Reset.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  System :: Werksreset',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Werksreset/">Werksreset</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/System/Reset/',
            description: '1080p Weboberfläche - Hier können Sie die Kamera in den Werkszustand zurückversetzen. Es wird empfohlen die Kamera nicht einfach abzustecken oder über den Hardware Reset zurückzusetzen, da dies das Betriebssystem (aber auch die SD Karte) schädigen kann. Nutzen Sie den Hardware Reset nur dann, wenn Sie den Zugriff auf die Weboberfläche der Kamera verloren haben.',
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
            title: 'INSTAR IP Kamera 1080p Weboberfläche - System Menu :: Update',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_System_Update.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  System :: Update',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Update/">Update</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/System/Update/',
            description: '1080p Weboberfläche - Die INSTAR Software Abteilung arbeitet konstant daran die Erfahrung mit unseren Produkten zu verbessern. Überprüfen Sie hier ob die Software Ihrer Kamera noch aktuell ist. Alternativ können Sie auch unseren Download Bereich besuchen, um die neueste Software und deren Changelog zu finden.',
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
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Netzwerk Menu',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Network_IP_Configuration.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Netzwerk',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Netzwerk/">Netzwerk</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Network/',
            description: '1080p Weboberfläche - Ändern Sie die IP Konfigurationen oder WLAN Einstellungen, oder verbinden Sie Ihr Smartphone durch Scannen des DDNS, P2P oder Push Service QR Codes mit unserer Smartphone App.',
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
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Netzwerk Menu :: IP Configuration',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Network_IP_Configuration.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Netzwerk :: IP Konfig',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Netzwerk/">Netzwerk</a></li><li><a href="/Web_User_Interface/1080p_Series/Netzwerk/IP_Konfiguration/">IP Konfiguration</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Network/IP_Configuration/',
            description: '1080p Weboberfläche - Ändern Sie die IP Adresse, das Gateway und den DNS Server Ihrer Kamera - all diese Einstellungen werden in der Regel vom Installation Wizard gesetzt und müssen nicht mehr angepasst werden. Sie werden jedoch ggf. den HTTP Port der Kamera anpassen müssen, um diese über das Internet zu erreichen. Der hier aufgeführte RTSP Port ist der RTSP Streaming Port der Kamera.',
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
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Netzwerk Menu :: WiFi',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Network_WiFi.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Netzwerk :: WLAN',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Netzwerk/">Netzwerk</a></li><li><a href="/Web_User_Interface/1080p_Series/Netzwerk/WLAN/">WLAN</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Network/WiFi/',
            description: '1080p Weboberfläche - Die WLAN Verbindung kann sehr einfach per WPS eingerichtet werden oder über den Erstinstallation Assistenten. Für die manuelle Einrichtung steht Ihnen hier ein WLAN Scanner zur Verfügung. Der Scanner gibt Ihnen auch eine Übersicht über die Empfangsstärke des Signals und ermöglicht es Ihnen so einen optimalen Platz für Ihre Kamera zu finden.',
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
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Netzwerk Menu :: Fernzugriff',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Network_Remote_Access.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Netzwerk :: Fernzugriff',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Netzwerk/">Netzwerk</a></li><li><a href="/Web_User_Interface/1080p_Series/Netzwerk/Fernzugriff/">Fernzugriff</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Network/Remote_Access/',
            description: '1080p Weboberfläche - Sie haben 2 Möglichkeiten auf die Kamera über das Internet zuzugreifen - der einfach Weg nennt sich P2P. Der einzige Weg, der Ihnen einen Vollzugriff auf die Kamera gibt, nennt sich DDNS. Die DDNS oder Internet Adresse erlaubt Ihnen den Zugriff auf die WebUI der Kamera von unterwegs.',
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
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Netzwerk Menu :: ONVIF',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Network_ONVIF.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Netzwerk :: ONVIF',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Netzwerk/">Netzwerk</a></li><li><a href="/Web_User_Interface/1080p_Series/Netzwerk/ONVIF/">ONVIF</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Network/ONVIF/',
            description: '1080p Weboberfläche - Die Industrie für IP Überwachungslösungen hat ein Standard Protokoll mit dem Namen ONVIF definiert, das es IP Überwachungskameras erlaubt mit Netzwerk Aufnahmegeräten (NVR) zu kommunizieren. Den dafür benötigten Service können Sie hier aktivieren oder deaktivieren, als auch den Netzwerk-Port für die Kommunikation festlegen.',
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
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Netzwerk Menu :: UPnP',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Network_UPnP.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Netzwerk :: UPnP',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Netzwerk/">Netzwerk</a></li><li><a href="/Web_User_Interface/1080p_Series/Netzwerk/UPnP/">UPnP</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Network/UPnP/',
            description: '1080p Weboberfläche - Der UPnP Standard sollte unser Leben einfacher machen. Jeder Port der öffentlich verfügbar sein muss für den externen Zugriff, sollte automatisch durchgeleitet werden. Das würde den DDNS Zugriff sehr vereinfachen...doch funktioniert dieser Standard häufig nicht und wird von System Administratoren oft - aus gutem Grund - als gefährlich eingestuft. Wir empfehlen daher die manuelle Portweiterleitung für den DDNS Zugriff zu nutzen.',
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
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Features Menu',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Features_Wizard.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Features',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Features/',
            description: '1080p Weboberfläche - Ändern Sie die Systemeinstellungen der Kamera, stellen Sie die Status LED und IR LEDs, oder die Schwenk-, Neig- und Zoomfunktion, Ihrer Kamera ein.',
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
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Features Menu :: Email Einstellungen',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Features_Email.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Features :: Email Einstellungen',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/Email_Einstellungen/">Email Einstellungen</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Features/Email/',
            description: '1080p Weboberfläche - Im Email Menü können Sie die Absender und Ihre Empfänger Adresse für die Email Benachrichtigung hinterlegen. Der Absender muss entsprechend des gewählten SMTP Accounts gesetzt werden. Beachten Sie bitte, dass einige Email Anbieter es nicht erlauben, wenn Absender und Empfänger Email gleich gewählt werden! Als Empfänger können Sie mehrere Email Adressen, getrennt durch ein Semikolon gesetzt werden. Es ist empfohlen auch einen Betreff und Email Text (max 64 Zeichen) einzutragen, da leere Emails ggf. an Spam-Wächtern hängen bleiben.',
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
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Features Menu :: FTP',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Features_FTP.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Features :: FTP',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/FTP/">FTP</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Features/FTP/',
            description: '1080p Weboberfläche - Um den FTP Upload zu nutzen, müssen Sie zuerst einen FTP Server und Ihre Login Daten hinterlegen. Sie können z.B. Ihren Router als Empfänger des FTP Uploads einrichten - in diesem Fall können Sie einfach die Router IP Adresse (z.B. 192.168.178.1) als FTP Server Adresse eintragen. Der Standard FTP Port ist 21 und der Standard Modus ist passiv (PASV). Beachten Sie bitte, dass es manche FTP Server (z.B. Telekom Speedport) es nicht erlauben, für jeden Tag einen neunen Ordner anzulegen.',
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
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Features Menu :: Status LED',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Features_Status_LEDs.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Features :: Status LED',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/Status_LED">Status LED</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Features/Status_LED/',
            description: '1080p Weboberfläche - Hat Ihr Kameramodell eine Status-LED die durchgehend blinkend die Netzwerkverbindung signalisiert? Dies ist sehr sinnvoll während der Einrichtung. Kann aber sehr schnell störend werden - besonders wenn es dunkel wird. Wenn Sie die LED nicht benötigen um Ihre Netzwerkverbindung zu troubelshooten oder um Personen darauf aufmerksam zu machen, dass sie aufgenommen werden, können Sie die LED hier einfach deaktivieren.',
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
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Features Menu :: IR LEDs',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Features_Nightvision.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Features :: IR Nachtsicht',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/IR_Nachtsicht">IR Nachtsicht</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Features/IR_LEDs/',
            description: '1080p Weboberfläche - Die IR LEDs Ihrer Kamera werden automatisch durch einen internen Helligkeitssensor bei Dunkelheit aktiviert und wieder deaktiviert, sobald es wieder hell wird. Wenn Sie die Kamera hinter einer reflektierenden Scheibe verwenden möchten, oder z.B. die Kamera als Wetter-Cam in den Himmel richten und somit keine Nachtausleuchtung benötigen, können Sie die LEDs hier einfach deaktivieren. Beachten Sie bitte, dass der IRcut Filter damit permanent vor dem Objektiv steht und Sie somit auch keine externen IR Scheinwerfer einsetzen können.',
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
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Features Menu :: PTZ',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Features_PTZ.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Features :: PTZ',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/PTZ">PTZ</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Features/PTZ/',
            description: '1080p Weboberfläche - Aktivieren/Deaktivieren Sie hier die Kalibrierungsfahrt, die die Kamera beim Neustart durchführt. Lassen Sie Ihre Kamera eine gespeicherte Position anfahren oder die Reichweite der Dreh- und Neigbewegung einschränken.',
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
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Features Menu :: SD Karte',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Features_SD_Card.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Features :: SD Karte',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/SD_Karte">SD Karte</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Features/SD_Card/',
            description: '1080p Weboberfläche - Wählen Sie ob Sie die SD Karte auswerfen oder Formatieren möchten und bestätigen Sie die Eingabe. Es ist immer empfohlen die SD Karte zuerst auszuwerfen, bevor Sie sie aus der Kamera entfernen. Gerade wenn die Kamera eine Aufnahme durchführt während die Stromversorgung gekappt wird, kann es zu Fehlern im Dateisystem kommen. Sollte die SD Karte beschädigt werden, wird das Betriebsysstem versuchen die SD Karte zu reparieren und es kann einige Minuten dauern, bis die SD Karte wieder verfügbar ist. Sollte die SD Karte auch nach einiger Zeit noch nicht erreichbar sein, können Sie probieren die Karte zu formatieren. Sollte die Karte ausgeworfen werden, wird das Betriebssystem versuchen Sie nach einiger Zeit wieder automatisch zu mounten.',
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
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Features Menu :: PTZ Tour',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Features_PTZ_Tour.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Features :: PTZ Tour',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/PTZ_Tour">PTZ Tour</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Features/PTZ_Tour/',
            description: '1080p Weboberfläche - Aktivieren/Deaktivieren Sie hier die Kalibrierungsfahrt, die die Kamera beim Neustart durchführt. Lassen Sie Ihre Kamera eine gespeicherte Position anfahren oder die Reichweite der Dreh- und Neigbewegung einschränken.',
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
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Features Menu :: Manuelle Aufnahme',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Features_Manual_Recording.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Features :: Manuelle Aufnahme',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/Manuelle_Aufnahme">Manuelle Aufnahme</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Features/Manual_Recording/',
            description: '1080p Weboberfläche - Setzen Sie hier die Dauer der manuellen Aufnahme, die Sie rechts über die Schnellleiste starten können. Wenn Sie eine durchgehende Aufnahme wünschen, dann setzen Sie den Wert bitte auf 0 Minuten. Achtung! Diese Einstellung hat keinen Einfluss auf die Dauer der Alarmvideos.',
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
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Multimedia Menu',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Multimedia_Overlays.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Multimedia',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/">Multimedia</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Multimedia/',
            description: '1080p Weboberfläche - Stellen Sie die Videoqualität und die Audiolautstärke Ihrer Kamera ein. Die Bildeinstellungen erlauben es, den Kontrast, die Sättigung und die Helligkeit Ihrer Kamera einzustellen.',
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
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Multimedia Menu :: Audio',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Multimedia_Audio.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Multimedia :: Audio',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/">Multimedia</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/Audio">Audio</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Multimedia/Audio/',
            description: '1080p Weboberfläche - Hier können Sie die Verstärkung des Audiosignals für den Audioeingang und Audioausgang festlegen. Dies betrifft entweder extern angeschlossene Mikrofone und Lautsprecher an der Kamera, oder, wenn Ihr Kameramodell über ein Mikrofon und Lautsprecher verfügt, die interne Hardware. Alternativ können Sie den Audiostream auch komplett deaktivieren. Der Alarmton ist eine Audiodatei, die abgespielt wird sobald eine Alarm ausgelöst wird. Dies ist nicht zu verwechseln mit dem Audio Alarm, der das Mikrofon der Kamera nutzt um einen Alarm auszulösen, sobald etwas lautes in der Nähe der Kamera geschieht. Beachten Sie bitte, dass die hier eingestellte Lautstärke für den Audioeingang (durch das Mikrofon an der Kamera) mit in die Empfindlichkeit des Audio Alarms einfließt - der Audioalarm ist umso empfindlicher, desto höher seine Empfindlichkeit im Audio Alarm Overlay eingestellt wird UND desto höher die Verstärkung des Audioeingangs hier gesetzt wird.',
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
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Multimedia Menu :: Video',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Multimedia_Video.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Multimedia :: Video',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/">Multimedia</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/Video">Video</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Multimedia/Video/',
            description: '1080p Weboberfläche - Die Video Einstellungen erlauben Ihnen die Qualität der 3 h.264 Videostreams und des MJPG Streams der Kamera einzuregeln. Beachten Sie bitte, dass hohe Qualitätseinstellungen auch zu hohen Bandbreitenanforderungen führen und die Grafikkarte des Zugreifenden Rechners belasten. Die Einstellungen, die Sie hier wählen, sollten immer ein Kompromiss sein aus Bildqualität und der Anforderung, dass Sie zur jeder Zeit einen flüssigen Videostream erhalten möchten, wenn Sie auf die Kamera zugreifen. Sie haben hier noch die Möglichkeit das benutzte Video Plugin für die Videowiedergabe festzulegen und den MJPEG Stream zwischen einen vollwertigen MJPEG Stream und einem pseudo MJEPG Stream umzuschalten.',
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
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Multimedia Menu :: Bild',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Multimedia_Image.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Multimedia :: Bild',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/">Multimedia</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/Bild">Bild</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Multimedia/Image/',
            description: '1080p Weboberfläche - Hier können Sie die Bildparameter, wie Helligkeit, Sättigung, Kontrast, Belichtung (Shutter) und Schärfe, einstellen. Die Funktion zum Drehen&Spiegeln erlaubt es Ihnen ein aufrechtes Bild zu erhalten, wenn Sie die Kamera über Kopf montieren. Der Kameraname und Zeitstempel, der Ihnen im Livevideo angezeigt wird, kann hier ebenfalls angepasst werden. Beachten Sie bitte, das ein Ändern des Kameranamen einen Neustart der Kamera benötigt.',
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
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Multimedia Menu :: Bild WDR',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Multimedia_Image.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Multimedia :: WDR Bild',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/">Multimedia</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/Bild">Bild</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/Bild/Wide_Dynamic_Range">WDR</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Multimedia/Image/Wide_Dynamic_Range/',
            description: '1080p Weboberfläche - Einstellungen für den WDR Modus Ihrer Kamera.',
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
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Multimedia Menu :: Video Overlays',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Multimedia_Overlays.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Multimedia :: Video Overlays',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/">Multimedia</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/Video_Overlays">Video Overlays</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Multimedia/Video_Overlays/',
            description: '1080p Weboberfläche - Die Einstellungen für das Onscreen Display (OSD) ermöglichen es Ihnen den Kameranamen und einen Zeitstempel im Videobild anzeigen zu lassen.',
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
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Multimedia Menu :: Privatsphäre',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Multimedia_Privat.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Multimedia :: Privatsphäre',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/">Multimedia</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/Privat">Privatsphäre</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Multimedia/Privacy_Mask/',
            description: '1080p Weboberfläche - Die Privatsphäre Maske erlaubt es Ihnen Bereiche, die Sie nicht überwachen dürfen im Video auszuschwärzen. Wenn Sie z.B. Ihren Hauseingang überwachen und einen Teil der öffentlichen Straße im Bild haben, könnnen Sie diesen Bereich aus dem Videobild entfernen.',
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
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Alarm Menu',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Alarm_Alarm_Actions.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Alarm',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/">Alarm</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Alarm/',
            description: '1080p Weboberfläche - Aktivieren Sie die Bewegungs- oder Audioerkennung der Kamera und Aktionen, die im Alarmfall ausgelöst werden sollen - wie zum Beispiel Videoaufnahmen, E-Mail Benachrichtigungen oder FTP Uploads.',
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
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Alarm Menu :: Bereiche',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Alarm_Alarm_Areas.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Alarm :: Bereiche',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/Bereiche/">Bereiche</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Alarm/Areas/',
            description: '1080p Weboberfläche - Die Alarmbereiche bestimmen die Bildbereiche, die für die interne Bewegungserkennung der Kamera herangezogen wird. Sie können bis zu vier Alarmbereiche einzeichnen. Der Schwellenwert für ein Alarmereignis kann über die Empfindlichkeit festgelegt werden - von sehr unempfindlich (Wert = 0) bis sehr empfindlich (Wert = 100). Die Empfindlichkeit wird darüber hinaus von der Größe des Bereiches bestimmt. Je kleiner der Bereich, desto mehr Fläche nimmt eine Änderung im Bild prozentual ein. Wenn Sie eine hohe Empfindlichkeit brauchen, setzten Sie viele kleine Alarmbereiche. Wenn Sie zu viele Fehlalarme erhalten, ist es besser einen großen Bereich aufzuziehen.',
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
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Alarm Menu :: Aktionen',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Alarm_Alarm_Actions.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Alarm :: Aktionen',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/Aktionen/">Aktionen</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Alarm/Actions/',
            description: '1080p Weboberfläche - Bestimmen Sie hier welche Aktionen die Kamera ausführen soll, wenn ein Alarmereignis ausgelöst wurde. Alarme können ausgelöst werden durch die interne Bewegungserkennung der Kamera, durch den Audio Alarm oder durch einen externen Sensor. Sie können Ihre Kamera anweisen Ihnen eine Email (mit Schnappschüssen) zu senden oder Bilder auf der internen SD Karte abzulegen, bzw. auf den FTP Server hochzuladen. Stellen Sie bitte sicher, dass Sie einen SMTP Server hinterlegt haben, bevor Sie den Email Versand aktivieren. Auch für den FTP Versand muss zuerst ein FTP Server hinterlegt sein. Sollte die Option zum Speichern auf der internen SD Karte nicht auswählbar sein, müsste die interne SD Karte überprüft werden.',
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
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Alarm Menu :: Zeitplan',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Alarm_Schedule.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Alarm :: Zeitplan',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/Zeitplan/">Zeitplan</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Alarm/Schedule/',
            description: '1080p Weboberfläche - Hier können Sie die Zeitfenster festlegen in dem die Bewegungserkennung der Kamera für aktivierte Alarmbereiche aktiv sein soll. Beachten Sie bitte, dass dieser Zeitplan auch für die Alarmauslösung durch den Audio Alarm oder durch einen externen Sensor regelt. Jedes blaue Quadrat entspricht dabei 30 Minuten, in denen der Alarm scharfgestellt ist. Stellen Sie bitte sicher, dass in der Kamera die richtige Zeitzone und der Wert für die Sommerzeit gesetzt wurde bevor Sie den Zeitplan aktivieren.',
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
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Alarm Menu :: Alarm Server',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Alarm_Alarmserver.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Alarm :: Alarm Server',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/Alarm_Server/">Alarm Server</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Alarm/Alarm_Server/',
            description: '1080p Weboberfläche - Senden Sie, im Falle eines Alarms, einen HTTP GET Befehl an einen Alarmserver (Hausautomatisierung, Raspberry Pi, usw.) um dort eine Funktion zu starten.',
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
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Alarm Menu :: Push Dienst',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Alarm_Push_Service.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Alarm :: Push Dienst',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/Push_Dienst/">Push Dienst</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Alarm/Push_Service/',
            description: '1080p Weboberfläche - Ihre Kamera kann Sie per Email informieren, jedes Mal wenn die Bewegungserkennung ausgelöst hat. Eine Push-Benachrichtigung erfüllt den selben Zweck, ist aber viel schneller! Aktivieren Sie die Push-Benachrichtigung, wenn Sie direkt über einen Alarm informiert werden möchten. Die Push-Benachrichtigung funktioniert nur mit der InstarVision App für IOS oder ANDROID Geräte.',
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
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Aufnahme Menu',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Tasks_Video_Recording.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Aufnahme',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Aufnahme_Aufgaben/">Aufnahme Aufgaben</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Recording/',
            description: '1080p Weboberfläche - Alle HD Kameras sind mit einer erweiterteren SD Karte ausgestattet (bis zu 32 GB), die genutzt werden kann um Fotoserien und Videoaufnahmen zu speichern.',
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
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Aufnahme Menu :: Video',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Tasks_Video_Recording.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Aufnahme :: Video',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Aufnahme_Aufgaben/">Aufnahme Aufgaben</a></li><li><a href="/Web_User_Interface/1080p_Series/Aufnahme_Aufgaben/Video">Video</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Recording/Video/',
            description: '1080p Weboberfläche - Aktivieren Sie hier die geplante Videoaufnahme. Der oben definierte Zeitplan bestimmt dabei zu welchen Zeiten die Kamera Aufnahmen durchführt. Legen Sie hier die Auflösung, Länge pro Datei und die maximale Länge einer manuellen Aufnahme fest.',
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
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Aufnahme Menu :: Fotoserie',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Tasks_Photoseries.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Aufnahme :: Fotoserie',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Aufnahme_Aufgaben/">Aufnahme Aufgaben</a></li><li><a href="/Web_User_Interface/1080p_Series/Aufnahme_Aufgaben/Fotoserie">Fotoserie</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Recording/Photoseries/',
            description: '1080p Weboberfläche - Nehmen Sie Schnappschüsse im Zeitintervall auf und setzen Sie die Bilder über einen Drittanbietersoftware zu einem Zeitraffervideo zusammen. Alternativ kann die Funktion auch Einzelbilder mit einem festgelegten Bildnamen auf einen FTP Server hochladen. Dies bietet Ihnen eine einfache Möglichkeit ein quasi-Livebild der Kamera auf Ihrer Webseite einzubinden.',
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
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Live Video',
            ampimg: '/images/Search/QI_SearchThumb_WebUI_1080p.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Live Video',
      			breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Live_Video/',
            description: '1080p Weboberfläche - Das Live Video Bild Ihrer Kamera.',
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
            title: 'INSTAR IP Kamera 1080p Weboberfläche - INSTAR Cloud',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Cloud_Login.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  INSTAR Cloud',
      			breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Cloud/',
            description: '1080p Weboberfläche - Die optionale INSTAR Cloud für Ihre Alarm Aufnahmen.',
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
