var express = require('express');
var indexRouter = express.Router();

/* GET home page. */
indexRouter.route('/')
    .get(function(req, res) {
        res.render('Index', {
            title: 'INSTAR Wiki - IP Kamera und Computer Netzwerk Überwachungskameras, IP-Kameras, Netzwerkkameras, Überwachungskameras , IP-Cam, Nachtsichtkameras , spycams, ipcam, Cloud-Aufnahme, Video-Überwachung, NVR, Netzwerk-Videorecorder, Sicherheitstechnik Wissensdatenbank.',
            ampimg: '/images/Search/QI_SearchThumb_SetupWizard.jpg',
            headline: 'INSTAR IP Camera and Network Technology Knowledgebase',
            canonical: '/',
            description: 'INSTAR ist eine der bekanntesten Marken für hochwertige Sicherheitstechnik die in Deutschland entwickelt wird. INSTAR bietet IP Kameras für den Innen und Außenbereich, WLAN Netzwerkkameras, HD IP Kameras, steuerbare IP Kameras, IP Kameras mit Infrarot Nachtsicht sowie PoE Injektoren, Gigabit PoE Injectoren, Powerline Adapter, Router, Switches, Bewegungsmelder mit PIR und Mikrowellen, Mikrofone, Objektive, eine patentierte Heizung sowie weiteres Zubehör für IP Überwachungskameras.',
          });
      });

module.exports = indexRouter;
