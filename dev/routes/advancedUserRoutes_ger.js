var express = require('express');
var advancedUserGerRouter = express.Router();

/* GET Internet_Access page. */
advancedUserGerRouter.get('/', function(req, res) {
    res.render('./Advanced_User/Advanced_User', {
        title: 'Erweitert',
        ampimg: '/images/Search/AU_SearchThumb_ForDeveloper.jpg',
        headline: 'Für Entwickler',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Erweitert/">Erweitert</a></li>',
        canonical: '/Advanced_User/',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: '',
		mdtab: 'hidden',
		iaacc: '',
		iatab: 'hidden',
		auacc: 'expanded',
		autab: '',
		hdacc: 'hidden',
		hdtab: 'hidden',
		fhdacc: 'hidden',
		fhdtab: 'hidden',
		sacc: 'hidden',
		dlacc: 'hidden',
		dltab: 'hidden',
      });
  });

advancedUserGerRouter.get('/Webseiten_Einbindung/', function(req, res) {
    res.render('./Advanced_User/Website_Integration', {
        title: 'Webseiten Einbindung',
        ampimg: '/images/Search/AU_SearchThumb_WebsiteIntegration.jpg',
        headline: 'IP Kamera Einbindung in die Webseite',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Erweitert/">Erweitert</a></li><li><a href="/Erweitert/Webseiten_Einbindung/">Webseiten Einbindung</a></li>',
        canonical: '/Advanced_User/Website_Integration/',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: '',
		mdtab: 'hidden',
		iaacc: '',
		iatab: 'hidden',
		auacc: 'expanded',
		autab: '',
		hdacc: 'hidden',
		hdtab: 'hidden',
		fhdacc: 'hidden',
		fhdtab: 'hidden',
		sacc: 'hidden',
		dlacc: 'hidden',
		dltab: 'hidden',
      });
  });

advancedUserGerRouter.get('/Webseiten_Einbindung/Cambozola', function(req, res) {
    res.render('./Advanced_User/Cambozola', {
        title: 'Cambozola (JAVA Plugin)',
        ampimg: '/images/Search/AU_SearchThumb_WebsiteIntegration_Cambozola.jpg',
        headline: 'Webseiten Einbindung mit Cambozola',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Erweitert/">Erweitert</a></li><li><a href="/Erweitert/Webseiten_Einbindung/">Webseiten Einbindung</a></li><li><a href="/Erweitert/Webseiten_Einbindung/Cambozola/">Cambozola</a></li>',
        canonical: '/Advanced_User/Website_Integration/Cambozola/',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: '',
		mdtab: 'hidden',
		iaacc: '',
		iatab: 'hidden',
		auacc: 'expanded',
		autab: '',
		hdacc: 'hidden',
		hdtab: 'hidden',
		fhdacc: 'hidden',
		fhdtab: 'hidden',
		sacc: 'hidden',
		dlacc: 'hidden',
		dltab: 'hidden',
      });
  });

advancedUserGerRouter.get('/Webseiten_Einbindung/Open_IP_Camera_Manager', function(req, res) {
    res.render('./Advanced_User/Open_IP_Camera_Manager', {
        title: 'Open IP Camera Manager (PHP)',
        ampimg: '/images/Search/AU_SearchThumb_WebsiteIntegration_OIPCM.jpg',
        headline: 'IP Camera Webseiten Einbindung with OICM',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Erweitert/">Erweitert</a></li><li><a href="/Erweitert/Webseiten_Einbindung/">Webseiten Einbindung</a></li><li><a href="/Erweitert/Webseiten_Einbindung/Open_IP_Camera_Manager/">OIPCM</a></li>',
        canonical: '/Advanced_User/Website_Integration/Open_IP_Camera_Manager/',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: '',
		mdtab: 'hidden',
		iaacc: '',
		iatab: 'hidden',
		auacc: 'expanded',
		autab: '',
		hdacc: 'hidden',
		hdtab: 'hidden',
		fhdacc: 'hidden',
		fhdtab: 'hidden',
		sacc: 'hidden',
		dlacc: 'hidden',
		dltab: 'hidden',
      });
  });

advancedUserGerRouter.get('/Webseiten_Einbindung/HD_Kamera_Einbindung', function(req, res) {
    res.render('./Advanced_User/HD_Camera_Integration', {
        title: 'HD Camera Webseiten Einbindung',
        ampimg: '/images/Search/AU_SearchThumb_WebsiteIntegration_HD_Cams.jpg',
        headline: 'H.264 IP Camera Webseiten Einbindung',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Erweitert/">Erweitert</a></li><li><a href="/Erweitert/Webseiten_Einbindung/">Webseiten Einbindung</a></li><li><a href="/Erweitert/Webseiten_Einbindung/HD_Kamera_Einbindung/">HD Kameras</a></li>',
        canonical: '/Advanced_User/Website_Integration/HD_Camera_Integration/',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: '',
		mdtab: 'hidden',
		iaacc: '',
		iatab: 'hidden',
		auacc: 'expanded',
		autab: '',
		hdacc: 'hidden',
		hdtab: 'hidden',
		fhdacc: 'hidden',
		fhdtab: 'hidden',
		sacc: 'hidden',
		dlacc: 'hidden',
		dltab: 'hidden',
      });
  });

advancedUserGerRouter.get('/CGI_Befehle/', function(req, res) {
    res.render('./Advanced_User/CGI_Commands', {
        title: 'CGI Befehle',
        ampimg: '/images/Search/AU_SearchThumb_CGICommands.jpg',
        headline: 'CGI Commands',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Erweitert/">Erweitert</a></li><li class="breadcrumb-item"><a href="/Erweitert/CGI_Befehle/">CGI Befehle</a></li>',
        canonical: '/Advanced_User/CGI_Commands/',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: '',
		mdtab: 'hidden',
		iaacc: '',
		iatab: 'hidden',
		auacc: 'expanded',
		autab: '',
		hdacc: 'hidden',
		hdtab: 'hidden',
		fhdacc: 'hidden',
		fhdtab: 'hidden',
		sacc: 'hidden',
		dlacc: 'hidden',
		dltab: 'hidden',
      });
  });

advancedUserGerRouter.get('/CGI_Befehle/VGA_Serie_CGI_Befehle', function(req, res) {
    res.render('./Advanced_User/VGA_Series_CGI_List', {
        title: 'VGA Serie CGI Befehle',
        ampimg: '/images/Search/AU_SearchThumb_CGICommands_VGA.jpg',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Erweitert/">Erweitert</a></li><li class="breadcrumb-item"><a href="/Erweitert/CGI_Befehle/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/Erweitert/CGI_Befehle/VGA_Serie_CGI_Befehle/">VGA Serie</a></li>',
        canonical: '/Advanced_User/CGI_Commands/VGA_Series_CGI_List/',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: '',
		mdtab: 'hidden',
		iaacc: '',
		iatab: 'hidden',
		auacc: 'expanded',
		autab: '',
		hdacc: 'hidden',
		hdtab: 'hidden',
		fhdacc: 'hidden',
		fhdtab: 'hidden',
		sacc: 'hidden',
		dlacc: 'hidden',
		dltab: 'hidden',
      });
  });

advancedUserGerRouter.get('/WebUI_Wiederherstellen/', function(req, res) {
    res.render('./Advanced_User/Restore_WebUI', {
        title: 'Wiederherstellen der WebUI nach einem fehlerhaften Update',
        ampimg: '/images/Search/AU_SearchThumb_ResetAfterWebUIError.jpg',
        headline: 'Wiederherstellen der WebUI nach einem fehlerhaften Update',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Erweitert/">Erweitert</a></li><li><a href="/Erweitert/WebUI_Wiederherstellen/">WebUI Wiederherstellen</a></li>',
        canonical: '/Advanced_User/Restore_WebUI/',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: '',
		mdtab: 'hidden',
		iaacc: '',
		iatab: 'hidden',
		auacc: 'expanded',
		autab: '',
		hdacc: 'hidden',
		hdtab: 'hidden',
		fhdacc: 'hidden',
		fhdtab: 'hidden',
		sacc: 'hidden',
		dlacc: 'hidden',
		dltab: 'hidden',
      });
  });

advancedUserGerRouter.get('/Firmware_Wiederherstellen/', function(req, res) {
    res.render('./Advanced_User/Restore_Firmware', {
        title: 'Wiederherstellen der Firmware nach einem fehlerhaften Update',
        ampimg: '/images/Search/AU_SearchThumb_ResetAfterFirmwareError.jpg',
        headline: 'Wiederherstellen der Firmware nach einem fehlerhaften Update',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Erweitert/">Erweitert</a></li><li><a href="/Erweitert/Firmware_Wiederherstellen/">Firmware Wiederherstellen</a></li>',
        canonical: '/Advanced_User/Restore_Firmware/',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: '',
		mdtab: 'hidden',
		iaacc: '',
		iatab: 'hidden',
		auacc: 'expanded',
		autab: '',
		hdacc: 'hidden',
		hdtab: 'hidden',
		fhdacc: 'hidden',
		fhdtab: 'hidden',
		sacc: 'hidden',
		dlacc: 'hidden',
		dltab: 'hidden',
      });
  });

advancedUserGerRouter.get('/CCTV_vs_IP/', function(req, res) {
    res.render('./Advanced_User/CCTV_vs_IP', {
        title: 'Unterschied zwischen Analog und IP Kameras',
        ampimg: '/images/Search/AU_SearchThumb_IPvsCCTV.jpg',
        headline: 'Unterschied zwischen Analog und IP Kameras',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Erweitert/">Erweitert</a></li><li><a href="/Erweitert/CCTV_vs_IP/">CCTV vs IP</a></li>',
        canonical: '/Advanced_User/CCTV_vs_IP/',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: '',
		mdtab: 'hidden',
		iaacc: '',
		iatab: 'hidden',
		auacc: 'expanded',
		autab: '',
		hdacc: 'hidden',
		hdtab: 'hidden',
		fhdacc: 'hidden',
		fhdtab: 'hidden',
		sacc: 'hidden',
		dlacc: 'hidden',
		dltab: 'hidden',
      });
  });

advancedUserGerRouter.get('/VPN_AVM_Fritzbox/', function(req, res) {
    res.render('./Advanced_User/VPN_AVM_Fritzbox_Windows', {
        title: 'VPN in AVM Fritzbox',
        ampimg: '/images/Search/AU_SearchThumb_VPN.jpg',
        headline: 'IP Camera Webseiten Einbindung',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Erweitert/">Erweitert</a></li><li><a href="/Erweitert/VPN_AVM_Fritzbox/">VPN AVM Fritzbox</a></li>',
        canonical: '/Advanced_User/VPN_AVM_Fritzbox/',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: '',
		mdtab: 'hidden',
		iaacc: '',
		iatab: 'hidden',
		auacc: 'expanded',
		autab: '',
		hdacc: 'hidden',
		hdtab: 'hidden',
		fhdacc: 'hidden',
		fhdtab: 'hidden',
		sacc: 'hidden',
		dlacc: 'hidden',
		dltab: 'hidden',
      });
  });

module.exports = advancedUserGerRouter;
