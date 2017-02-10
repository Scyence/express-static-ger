var express = require('express');
var downloadsRouter = express.Router();

downloadsRouter.get('/', function(req, res) {
    res.render('./Downloads/Downloads', {
        title: 'Downloadbereich',
        ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
        uplink: '/Downloads',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li>',
      });
  });

downloadsRouter.get('/IndoorCams/', function(req, res) {
    res.render('./Downloads/IndoorCams', {
        title: 'Downloadbereich für Innenkameras',
        ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
        uplink: '/Downloads',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/IndoorCams/">Innenkameras</a></li>',
      });
  });
downloadsRouter.get('/OutdoorCams/', function(req, res) {
    res.render('./Downloads/OutdoorCams', {
        title: 'Downloadbereich für Außenkameras',
        ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
        uplink: '/Downloads',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/IndoorCams/">Außenkameras</a></li>',
      });
  });

downloadsRouter.get('/Accessories/', function(req, res) {
    res.render('./Downloads/Accessories', {
        title: 'Downloadbereich für Allgemeines Zubehör',
        ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
        uplink: '/Downloads',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/Accessories/">Allgemeines Zubehör</a></li>',
      });
  });

downloadsRouter.get('/Network_Accessories/', function(req, res) {
    res.render('./Downloads/Network_Accessories', {
        title: 'Downloadbereich für Netzwerkzubehör',
        ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
        uplink: '/Downloads',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/Network_Accessories/">Netzwerkzubehör</a></li>',
      });
  });

downloadsRouter.get('/Desktop_Software/', function(req, res) {
    res.render('./Downloads/Desktop_Software', {
        title: 'Downloadbereich unserer Desktop Software',
        ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
        uplink: '/Downloads',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/Desktop_Software/">Desktop-Software</a></li>',
      });
  });

downloadsRouter.get('/Apps/', function(req, res) {
    res.render('./Downloads/Apps', {
        title: 'Downloadbereich unserer Apps',
        ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
        uplink: '/Downloads',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/Apps/">Apps</a></li>',
      });
  });





module.exports = downloadsRouter;
