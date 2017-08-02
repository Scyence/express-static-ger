var express = require('express');
var productRouter = express.Router();

/* ****************************************** GET /General Product Routes ****************************************** */

productRouter.route('/')
  .get(function(req, res) {
      res.render('./Products/Products', {
          title: 'INSTAR Products',
          ampimg: '/images/Search/P_SearchThumb_Products.jpg',
          headline: 'INSTAR Products',
          breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li>',
          canonical: '/Products/',
          description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
      		pacc: 'expanded',
      		ptab: '',
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
      		fhdacc: 'hidden',
      		fhdtab: 'hidden',
      		sacc: 'hidden',
      		dlacc: 'hidden',
      		dltab: 'hidden',
        });
    });

productRouter.route('/Usermanuals')
  .get(function(req, res) {
      res.render('./Products/Usermanuals', {
          title: 'INSTAR Products Usermanuals',
          ampimg: '/images/Search/P_SearchThumb_Products.jpg',
          headline: 'INSTAR Products',
          breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Produkte</a></li><li><a href="/Products/Usermanuals/">Usermanuals</a></li>',
          canonical: '/Products/Usermanuals/',
          description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
      		pacc: 'expanded',
      		ptab: '',
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
      		fhdacc: 'hidden',
      		fhdtab: 'hidden',
      		sacc: 'hidden',
      		dlacc: 'hidden',
      		dltab: 'hidden',
        });
    });

productRouter.route('/SMA_RP-SMA_Antenna_Connector')
.get(function(req, res) {
  res.render('./Products/SMA_RP-SMA_Antenna_Connector', {
      title: 'SMA or RP-SMA Antenna Connector',
      ampimg: '/images/Search/P_SearchThumb_SMA-RPSMA.jpg',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Produkte</a></li><li class="breadcrumb-item"><a href="/Products/SMA_RP-SMA_Antenna_Connector/">SMA and RP-SMA Antenna</a></li>',
      headline: 'INSTAR Products',
      canonical: '/Products/SMA_RP-SMA_Antenna_Connector/',
    });
});

/* ****************************************** GET Camera Lenses ****************************************** */
productRouter.route('/Lenses')
.get(function(req, res) {
  res.render('./Products/Lenses', {
      title: 'Camera Lenses',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/Lenses/">Lenses</a></li>',
      canonical: '/Products/Lenses/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

/* ****************************************** GET S-Mount Lenses ****************************************** */
productRouter.route('/Lenses/S-Mount/IN-0180')
.get(function(req, res) {
  res.render('./Products/Lense_IN-0180', {
      title: 'IN-0180 Wideangle',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/Lenses/">Lenses</a></li><li><a href="/Products/Lenses/S-Mount/IN-0180/">S-Mount :: IN-0180</a></li>',
      canonical: '/Products/Lenses/S-Mount/IN-0180/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/Lenses/S-Mount/IN-0220')
.get(function(req, res) {
  res.render('./Products/Lense_IN-0220', {
      title: 'IN-0220 Wideangle',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/Lenses/">Lenses</a></li><li><a href="/Products/Lenses/S-Mount/IN-0220/">S-Mount :: IN-0220</a></li>',
      canonical: '/Products/Lenses/S-Mount/IN-0220/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/Lenses/S-Mount/IN-0290')
.get(function(req, res) {
  res.render('./Products/Lense_IN-0290', {
      title: 'IN-0290 Wideangle',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/Lenses/">Lenses</a></li><li><a href="/Products/Lenses/S-Mount/IN-0290/">S-Mount :: IN-0290</a></li>',
      canonical: '/Products/Lenses/S-Mount/IN-0290/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/Lenses/S-Mount/IN-0360')
.get(function(req, res) {
  res.render('./Products/Lense_IN-0360', {
      title: 'IN-0360 Wideangle',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/Lenses/">Lenses</a></li><li><a href="/Products/Lenses/S-Mount/IN-0360/">S-Mount :: IN-0360</a></li>',
      canonical: '/Products/Lenses/S-Mount/IN-0360/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/Lenses/S-Mount/IN-0430')
.get(function(req, res) {
  res.render('./Products/Lense_IN-0430', {
      title: 'IN-0430 Standard',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/Lenses/">Lenses</a></li><li><a href="/Products/Lenses/S-Mount/IN-0430/">S-Mount :: IN-0430</a></li>',
      canonical: '/Products/Lenses/S-Mount/IN-0430/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/Lenses/S-Mount/IN-0600')
.get(function(req, res) {
  res.render('./Products/Lense_IN-0600', {
      title: 'IN-0600 Default',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/Lenses/">Lenses</a></li><li><a href="/Products/Lenses/S-Mount/IN-0600/">S-Mount :: IN-0600</a></li>',
      canonical: '/Products/Lenses/S-Mount/IN-0600/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/Lenses/S-Mount/IN-0800')
.get(function(req, res) {
  res.render('./Products/Lense_IN-0800', {
      title: 'IN-0800 Tele',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/Lenses/">Lenses</a></li><li><a href="/Products/Lenses/S-Mount/IN-0800/">S-Mount :: IN-0800</a></li>',
      canonical: '/Products/Lenses/S-Mount/IN-0800/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/Lenses/S-Mount/IN-1200')
.get(function(req, res) {
  res.render('./Products/Lense_IN-1200', {
      title: 'IN-1200 Tele',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/Lenses/">Lenses</a></li><li><a href="/Products/Lenses/S-Mount/IN-1200/">S-Mount :: IN-1200</a></li>',
      canonical: '/Products/Lenses/S-Mount/IN-1200/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/Lenses/S-Mount/IN-1600')
.get(function(req, res) {
  res.render('./Products/Lense_IN-1600', {
      title: 'IN-1600 Tele',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/Lenses/">Lenses</a></li><li><a href="/Products/Lenses/S-Mount/IN-1600/">S-Mount :: IN-1600</a></li>',
      canonical: '/Products/Lenses/S-Mount/IN-1600/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/Lenses/S-Mount/Lense_Comparison')
.get(function(req, res) {
  res.render('./Products/Lense_Comparison', {
      title: 'S-Mount Lense Comparison',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/Lenses/">Lenses</a></li><li><a href="/Products/Lenses/S-Mount/Lense_Comparison/">Lense Comparison</a></li>',
      canonical: '/Products/Lenses/S-Mount/Lense_Comparison/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

/* ****************************************** GET /IN-LAN ****************************************** */

productRouter.route('/IN-LAN')
.get(function(req, res) {
  res.render('./Products/IN-LAN_500', {
      title: 'IN-LAN 500 Powerline Communication',
      ampimg: '/images/Search/P_SearchThumb_Powerline.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/IN-LAN/">IN-LAN Powerline</a></li>',
      canonical: '/Products/IN-LAN/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

/* ****************************************** GET /IN-Lighting ****************************************** */

productRouter.route('/IR_Lighting')
.get(function(req, res) {
  res.render('./Products/IR-Lighting', {
      title: 'INSTAR Infrared Spotlights',
      ampimg: '/images/Search/P_SearchThumb_InfraredSpotlights.jpg',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Products/IR_Lighting/">IR Lighting</a></li>',
      canonical: '/Products/IR_Lighting/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

/* ****************************************** GET /IN-PoE ****************************************** */

productRouter.route('/Power_over_Ethernet')
.get(function(req, res) {
  res.render('./Products/IN-PoE_1000', {
      title: 'IN-PoE 1000 Power over Ethernet',
      ampimg: '/images/Search/P_SearchThumb_PowerOverEthernet.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/Power_over_Ethernet/">Power over Ethernet</a></li>',
      canonical: '/Products/Power_over_Ethernet/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

/* ****************************************** GET /IN-Mikro ****************************************** */

productRouter.route('/IN-Mikro')
.get(function(req, res) {
  res.render('./Products/IN-Mikro', {
      title: 'IN-Mikro IP Camera Microphones',
      ampimg: '/images/Search/P_SearchThumb_Microphones.jpg',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Products/IN-Mikro/">IN-Mikro</a></li>',
      canonical: '/Products/IN-Mikro/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

/* ****************************************** GET /IN-Route ****************************************** */

productRouter.route('/IN-Route')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52', {
      title: 'IN-Route P52 Travel Router',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li>',
      canonical: '/Products/IN-Route/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/First_Steps')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps', {
      title: 'IN-Route P52 Travel Router',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/First_Steps/">First Steps</a></li>',
      canonical: '/Products/IN-Route/First_Steps/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/First_Steps/Introduction')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps_Introduction', {
      title: 'IN-Route P52 Travel Router',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/First_Steps/">First Steps</a></li><li><a href="/Products/IN-Route/First_Steps/Introduction/">Introduction</a></li>',
      canonical: '/Products/IN-Route/First_Steps/Introduction/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/First_Steps/Charging')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps_Charging', {
      title: 'IN-Route P52 Travel Router',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/First_Steps/">First Steps</a></li><li><a href="/Products/IN-Route/First_Steps/Charging/">Charging</a></li>',
      canonical: '/Products/IN-Route/First_Steps/Charging/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/First_Steps/Login')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps_Login', {
      title: 'IN-Route P52 Travel Router',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/First_Steps/">First Steps</a></li><li><a href="/Products/IN-Route/First_Steps/Login/">Login</a></li>',
      canonical: '/Products/IN-Route/First_Steps/Login/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/First_Steps/Wizard')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps_Wizard', {
      title: 'IN-Route P52 Travel Router',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/First_Steps/">First Steps</a></li><li><a href="/Products/IN-Route/First_Steps/Wizard/">Wizard</a></li>',
      canonical: '/Products/IN-Route/First_Steps/Wizard/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/First_Steps/Quick_Access')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps_QA', {
      title: 'IN-Route P52 Travel Router',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/First_Steps/">First Steps</a></li><li><a href="/Products/IN-Route/First_Steps/Quick_Access/">Quick Access</a></li>',
      canonical: '/Products/IN-Route/First_Steps/Quick_Access/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/First_Steps/Quick_Access/Router_Modes')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps_QA_Router', {
      title: 'IN-Route P52 Travel Router',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/First_Steps/">First Steps</a></li><li><a href="/Products/IN-Route/First_Steps/Quick_Access/">Quick Access</a></li><li><a href="/Products/IN-Route/First_Steps/Quick_Access/Router_Modes/">Router Modes</a></li>',
      canonical: '/Products/IN-Route/First_Steps/Quick_Access/Router_Modes/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/First_Steps/Quick_Access/Repeater_Mode')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps_QA_Repeater', {
      title: 'IN-Route P52 Travel Router',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/First_Steps/">First Steps</a></li><li><a href="/Products/IN-Route/First_Steps/Quick_Access/">Quick Access</a></li><li><a href="/Products/IN-Route/First_Steps/Quick_Access/Repeater_Mode/">Repeater Mode</a></li>',
      canonical: '/Products/IN-Route/First_Steps/Quick_Access/Repeater_Mode/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/First_Steps/Quick_Access/3G_Mode')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps_QA_3G', {
      title: 'IN-Route P52 Travel Router',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/First_Steps/">First Steps</a></li><li><a href="/Products/IN-Route/First_Steps/Quick_Access/">Quick Access</a></li><li><a href="/Products/IN-Route/First_Steps/Quick_Access/3G_Mode/">3G Mode</a></li>',
      canonical: '/Products/IN-Route/First_Steps/Quick_Access/3G_Mode/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/Overview')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Overview', {
      title: 'IN-Route P52 Travel Router',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Overview/">Overview</a></li>',
      canonical: '/Products/IN-Route/Overview/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/Overview/Status')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_O_Status', {
      title: 'IN-Route P52 Travel Router',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Overview/">Overview</a></li><li><a href="/Products/IN-Route/Overview/Status/">Status</a></li>',
      canonical: '/Products/IN-Route/Overview/Status/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/Overview/WAN_Status')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_O_WAN', {
      title: 'IN-Route P52 Travel Router',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Overview/">Overview</a></li><li><a href="/Products/IN-Route/Overview/WAN_Status/">WAN Status</a></li>',
      canonical: '/Products/IN-Route/Overview/WAN_Status/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/Overview/Mode')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_O_Mode', {
      title: 'IN-Route P52 Travel Router',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Overview/">Overview</a></li><li><a href="/Products/IN-Route/Overview/Mode/">Mode</a></li>',
      canonical: '/Products/IN-Route/Overview/Mode/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/Overview/File_Explorer')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_O_File', {
      title: 'IN-Route P52 Travel Router',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Overview/">Overview</a></li><li><a href="/Products/IN-Route/Overview/File_Explorer/">File Explorer</a></li>',
      canonical: '/Products/IN-Route/Overview/File_Explorer/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/Network')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network', {
      title: 'IN-Route P52 Travel Router',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Network/">Network</a></li>',
      canonical: '/Products/IN-Route/Network/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/Network/LAN')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network_LAN', {
      title: 'IN-Route P52 Travel Router',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Network/">Network</a></li><li><a href="/Products/IN-Route/Network/LAN/">LAN</a></li>',
      canonical: '/Products/IN-Route/Network/LAN/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/Network/WiFi_Settings')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network_WiFi', {
      title: 'IN-Route P52 Travel Router',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Network/">Network</a></li><li><a href="/Products/IN-Route/Network/WiFi_Settings/">WiFi Settings</a></li>',
      canonical: '/Products/IN-Route/Network/WiFi_Settings/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/Network/Repeater_Settings')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network_Repeater', {
      title: 'IN-Route P52 Travel Router',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Network/">Network</a></li><li><a href="/Products/IN-Route/Network/Repeater_Settings/">Repeater Settings</a></li>',
      canonical: '/Products/IN-Route/Network/Repeater_Settings/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/Network/3G_Settings')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network_3G', {
      title: 'IN-Route P52 Travel Router',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Network/">Network</a></li><li><a href="/Products/IN-Route/Network/3G_Settings/">3G Settings</a></li>',
      canonical: '/Products/IN-Route/Network/3G_Settings/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/Network/Router_Mode')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network_Router', {
      title: 'IN-Route P52 Travel Router',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Network/">Network</a></li><li><a href="/Products/IN-Route/Network/Router_Mode/">Router Mode</a></li>',
      canonical: '/Products/IN-Route/Network/Router_Mode/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/Network/DHCP')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network_DHCP', {
      title: 'IN-Route P52 Travel Router',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Network/">Network</a></li><li><a href="/Products/IN-Route/Network/DHCP/">DHCP</a></li>',
      canonical: '/Products/IN-Route/Network/DHCP/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/Network/DDNS')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network_DDNS', {
      title: 'IN-Route P52 Travel Router',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Network/">Network</a></li><li><a href="/Products/IN-Route/Network/DDNS/">DDNS</a></li>',
      canonical: '/Products/IN-Route/Network/DDNS/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/Network/FTP')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network_FTP', {
      title: 'IN-Route P52 Travel Router',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Network/">Network</a></li><li><a href="/Products/IN-Route/Network/FTP/">FTP</a></li>',
      canonical: '/Products/IN-Route/Network/FTP/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/Firewall')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Firewall', {
      title: 'IN-Route P52 Travel Router',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Firewall/">Firewall</a></li>',
      canonical: '/Products/IN-Route/Firewall/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/Firewall/Port_Forwarding')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Firewall_Forwarding', {
      title: 'IN-Route P52 Travel Router',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Firewall/">Firewall</a></li><li><a href="/Products/IN-Route/Firewall/Port_Forwarding/">Port Forwarding</a></li>',
      canonical: '/Products/IN-Route/Firewall/Port_Forwarding/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/Firewall/Device_Filter')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Firewall_Filter', {
      title: 'IN-Route P52 Travel Router',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Firewall/">Firewall</a></li><li><a href="/Products/IN-Route/Firewall/Device_Filter/">Device Filter</a></li>',
      canonical: '/Products/IN-Route/Firewall/Device_Filter/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/Firewall/DMZ_Host')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Firewall_DMZ', {
      title: 'IN-Route P52 Travel Router',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Firewall/">Firewall</a></li><li><a href="/Products/IN-Route/Firewall/DMZ_Host/">DMZ Host</a></li>',
      canonical: '/Products/IN-Route/Firewall/DMZ_Host/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/Firewall/Webfilter')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Firewall_Webfilter', {
      title: 'IN-Route P52 Travel Router',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Firewall/">Firewall</a></li><li><a href="/Products/IN-Route/Firewall/Webfilter/">Webfilter</a></li>',
      canonical: '/Products/IN-Route/Firewall/Webfilter/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/System')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_System', {
      title: 'IN-Route P52 Travel Router',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/System/">System</a></li>',
      canonical: '/Products/IN-Route/System/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/System/Log')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_System_Log', {
      title: 'IN-Route P52 Travel Router',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/System/">System</a></li><li><a href="/Products/IN-Route/System/Log/">Log</a></li>',
      canonical: '/Products/IN-Route/System/Log/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/System/Login')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_System_Login', {
      title: 'IN-Route P52 Travel Router',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/System/">System</a></li><li><a href="/Products/IN-Route/System/Login/">Login</a></li>',
      canonical: '/Products/IN-Route/System/Login/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/System/NTP_Setup')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_System_NTP', {
      title: 'IN-Route P52 Travel Router',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/System/">System</a></li><li><a href="/Products/IN-Route/System/NTP_Setup/">NTP Setup</a></li>',
      canonical: '/Products/IN-Route/System/NTP_Setup/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/System/Statistics')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_System_Statistics', {
      title: 'IN-Route P52 Travel Router',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/System/">System</a></li><li><a href="/Products/IN-Route/System/Statistics/">Statistics</a></li>',
      canonical: '/Products/IN-Route/System/Statistics/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/System/Import')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_System_Import', {
      title: 'IN-Route P52 Travel Router',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/System/">System</a></li><li><a href="/Products/IN-Route/System/Import/">Import</a></li>',
      canonical: '/Products/IN-Route/System/Import/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/System/Reboot')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_System_Reboot', {
      title: 'IN-Route P52 Travel Router',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/System/">System</a></li><li><a href="/Products/IN-Route/System/Reboot/">Reboot</a></li>',
      canonical: '/Products/IN-Route/System/Reboot/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/System/Upgrade')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_System_Upgrade', {
      title: 'IN-Route P52 Travel Router',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/System/">System</a></li><li><a href="/Products/IN-Route/System/Upgrade/">Upgrade</a></li>',
      canonical: '/Products/IN-Route/System/Upgrade/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/Help')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Help', {
      title: 'IN-Route P52 Travel Router',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Help/">Help</a></li>',
      canonical: '/Products/IN-Route/Help/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/Help/Features')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Help_Features', {
      title: 'IN-Route P52 Travel Router',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Help/">Help</a></li><li><a href="/Products/IN-Route/Help/Features/">Features</a></li>',
      canonical: '/Products/IN-Route/Help/Features/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/Help/About_Us')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Help_About', {
      title: 'IN-Route P52 Travel Router',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Help/">Help</a></li><li><a href="/Products/IN-Route/Help/About_Us/">About Us</a></li>',
      canonical: '/Products/IN-Route/Help/About_Us/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

/* ****************************************** GET /IN-Motion ****************************************** */

productRouter.route('/IN-Motion')
.get(function(req, res) {
  res.render('./Products/IN-Motion', {
      title: 'IN-Motion',
      ampimg: '/images/Search/P_SearchThumb_MotionDetector.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Motion/">IN-Motion</a></li>',
      canonical: '/Products/IN-Motion/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Motion/300')
.get(function(req, res) {
  res.render('./Products/IN-Motion_300', {
      title: 'IN-Motion 300',
      ampimg: '/images/Search/P_SearchThumb_MotionDetector.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/">IN-Motion</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/300/">300</a></li>',
      canonical: '/Products/IN-Motion/300/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Motion/500')
.get(function(req, res) {
  res.render('./Products/IN-Motion_500', {
      title: 'IN-Motion 500',
      ampimg: '/images/Search/P_SearchThumb_MotionDetector.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/">IN-Motion</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/500/">500</a></li>',
      canonical: '/Products/IN-Motion/500/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Motion/500/Dual_Sensor')
.get(function(req, res) {
  res.render('./Products/IN-Motion_500_Dual_Sensor', {
      title: 'IN-Motion 500 - Dual Sensor',
      ampimg: '/images/Search/P_SearchThumb_MotionDetector.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/">IN-Motion</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/500/">500</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/500/Dual_Sensor/">Dual Sensor</a></li>',
      canonical: '/Products/IN-Motion/500/Dual_Sensor/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Motion/500/Setup')
.get(function(req, res) {
  res.render('./Products/IN-Motion_500_Setup', {
      title: 'IN-Motion 500 - Setup',
      ampimg: '/images/Search/P_SearchThumb_MotionDetector.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/">IN-Motion</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/500/">500</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/500/Setup/">Setup</a></li>',
      canonical: '/Products/IN-Motion/500/Setup/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Motion/500/Wiring')
.get(function(req, res) {
  res.render('./Products/IN-Motion_500_Wiring', {
      title: 'IN-Motion 500 - Wiring',
      ampimg: '/images/Search/P_SearchThumb_MotionDetector.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/">IN-Motion</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/500/">500</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/500/Wiring/">Wiring</a></li>',
      canonical: '/Products/IN-Motion/500/Wiring/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Motion/500/User_Interface')
.get(function(req, res) {
  res.render('./Products/IN-Motion_500_User_Interface', {
      title: 'IN-Motion 500 - User Interface',
      ampimg: '/images/Search/P_SearchThumb_MotionDetector.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/">IN-Motion</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/500/">500</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/500/User_Interface/">User Interface</a></li>',
      canonical: '/Products/IN-Motion/500/User_Interface/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Motion/500/Considerations')
.get(function(req, res) {
  res.render('./Products/IN-Motion_500_Considerations', {
      title: 'IN-Motion 500 - Considerations',
      ampimg: '/images/Search/P_SearchThumb_MotionDetector.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/">IN-Motion</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/500/">500</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/500/Considerations/">Considerations</a></li>',
      canonical: '/Products/IN-Motion/500/Considerations/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Motion/500/Recorder')
.get(function(req, res) {
  res.render('./Products/IN-Motion_500_Recorder', {
      title: 'IN-Motion 500 - Recorder',
      ampimg: '/images/Search/P_SearchThumb_MotionDetector.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/">IN-Motion</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/500/">500</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/500/Recorder/">Recorder</a></li>',
      canonical: '/Products/IN-Motion/500/Recorder/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

module.exports = productRouter;
