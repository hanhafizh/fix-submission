(()=>{"use strict";var n,r={948:(n,r,t)=>{t.d(r,{Z:()=>f});var A=t(537),e=t.n(A),a=t(645),i=t.n(a),o=t(667),p=t.n(o),C=new URL(t(610),t.b),d=new URL(t(66),t.b),s=i()(e()),l=p()(C),c=p()(d);s.push([n.id,"@media screen and (min-width: 750px) {\r\n\t.app-bar {\r\n\t  grid-template-columns: 1fr auto;\r\n\t  padding: 8px 32px;\r\n\t}\r\n   \r\n\t.app-bar .app-bar__brand h1 {\r\n\t  font-size: 1.5em;\r\n\t}\r\n   \r\n\t.app-bar .app-bar__menu {\r\n\t  display: none;\r\n\t}\r\n   \r\n\t.app-bar .app-bar__navigation {\r\n\t  position: static;\r\n\t  width: 100%;\r\n\t}\r\n   \r\n\t.app-bar .app-bar__navigation ul li {\r\n\t  display: inline-block;\r\n\t}\r\n   \r\n\t.app-bar .app-bar__navigation ul li a {\r\n\t  display: inline-block;\r\n\t  width: 120px;\r\n\t  text-align: center;\r\n\t  margin: 0;\r\n\t}\r\n\r\n\t.hero {\r\n    width: 100%;\r\n\t\tbackground-image: url("+l+");\r\n\t}\r\n\r\n\r\n   \r\n  }\r\n   \r\n  @media screen and (max-width: 800px) {\r\n\t.app-bar .app-bar__brand h1 {\r\n\t  font-size: 2em;\r\n\t}\r\n\r\n\timg.img1, .img2, .img3, .img4{\r\n\t\twidth: 70vw;\r\n\t  }\r\n  \r\n\t  h2.restaurant_name {\r\n\t\tfont-size: 26px;\r\n\t  }\r\n  \r\n\t  .restaurant_info #menu{\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tgap: 10px;\r\n\t  }\r\n  \r\n\t  .restaurant_info #menu h4{\r\n\t\tfont-size: 24px;\r\n\t  }\r\n  \r\n\t  .restaurant_info .review-list{\r\n\t\tdisplay: grid;\r\n\t\tgrid-template-columns: repeat(1, 1fr);\r\n\t\tgap: 10px;\r\n\t  }\r\n\r\n\t\t.hero {\r\n\t\t\twidth: 100%;\r\n\t\t\tbackground-image: url("+c+");\r\n\t\t}\r\n\r\n  }\r\n   \r\n","",{version:3,sources:["webpack://./src/styles/responsive.css"],names:[],mappings:"AAAA;CACC;GACE,+BAA+B;GAC/B,iBAAiB;CACnB;;CAEA;GACE,gBAAgB;CAClB;;CAEA;GACE,aAAa;CACf;;CAEA;GACE,gBAAgB;GAChB,WAAW;CACb;;CAEA;GACE,qBAAqB;CACvB;;CAEA;GACE,qBAAqB;GACrB,YAAY;GACZ,kBAAkB;GAClB,SAAS;CACX;;CAEA;IACG,WAAW;EACb,yDAA0E;CAC3E;;;;EAIC;;EAEA;CACD;GACE,cAAc;CAChB;;CAEA;EACC,WAAW;GACV;;GAEA;EACD,eAAe;GACd;;GAEA;EACD,aAAa;EACb,sBAAsB;EACtB,SAAS;GACR;;GAEA;EACD,eAAe;GACd;;GAEA;EACD,aAAa;EACb,qCAAqC;EACrC,SAAS;GACR;;EAED;GACC,WAAW;GACX,yDAA0E;EAC3E;;EAEA",sourcesContent:["@media screen and (min-width: 750px) {\r\n\t.app-bar {\r\n\t  grid-template-columns: 1fr auto;\r\n\t  padding: 8px 32px;\r\n\t}\r\n   \r\n\t.app-bar .app-bar__brand h1 {\r\n\t  font-size: 1.5em;\r\n\t}\r\n   \r\n\t.app-bar .app-bar__menu {\r\n\t  display: none;\r\n\t}\r\n   \r\n\t.app-bar .app-bar__navigation {\r\n\t  position: static;\r\n\t  width: 100%;\r\n\t}\r\n   \r\n\t.app-bar .app-bar__navigation ul li {\r\n\t  display: inline-block;\r\n\t}\r\n   \r\n\t.app-bar .app-bar__navigation ul li a {\r\n\t  display: inline-block;\r\n\t  width: 120px;\r\n\t  text-align: center;\r\n\t  margin: 0;\r\n\t}\r\n\r\n\t.hero {\r\n    width: 100%;\r\n\t\tbackground-image: url('../public/images/herosHasil/hero-image_2large.jpg');\r\n\t}\r\n\r\n\r\n   \r\n  }\r\n   \r\n  @media screen and (max-width: 800px) {\r\n\t.app-bar .app-bar__brand h1 {\r\n\t  font-size: 2em;\r\n\t}\r\n\r\n\timg.img1, .img2, .img3, .img4{\r\n\t\twidth: 70vw;\r\n\t  }\r\n  \r\n\t  h2.restaurant_name {\r\n\t\tfont-size: 26px;\r\n\t  }\r\n  \r\n\t  .restaurant_info #menu{\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tgap: 10px;\r\n\t  }\r\n  \r\n\t  .restaurant_info #menu h4{\r\n\t\tfont-size: 24px;\r\n\t  }\r\n  \r\n\t  .restaurant_info .review-list{\r\n\t\tdisplay: grid;\r\n\t\tgrid-template-columns: repeat(1, 1fr);\r\n\t\tgap: 10px;\r\n\t  }\r\n\r\n\t\t.hero {\r\n\t\t\twidth: 100%;\r\n\t\t\tbackground-image: url('../public/images/herosHasil/hero-image_2small.jpg');\r\n\t\t}\r\n\r\n  }\r\n   \r\n"],sourceRoot:""}]);const f=s},890:(n,r,t)=>{t.d(r,{Z:()=>l});var A=t(537),e=t.n(A),a=t(645),i=t.n(a),o=t(667),p=t.n(o),C=new URL(t(541),t.b),d=i()(e()),s=p()(C);d.push([n.id,"* {\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n  }\r\n   \r\n  body {\r\n\tfont-family: 'Poppins', sans-serif;\r\n\tbackground-color: white;\r\n\tmin-height: 100vh;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n  }\r\n\r\n  .skip-link {\r\n    position: absolute;\r\n    top: -40px;\r\n    left: 0;\r\n    padding: 8px;\r\n    background-color: #2c9330;\r\n    color: white;\r\n    z-index: 100;\r\n  }\r\n\r\n  .skip-link:focus {\r\n    top: 0;\r\n  }\r\n   \r\n   \r\n  /*\r\n\tAppBar\r\n  */\r\n   \r\n  .app-bar {\r\n\tpadding: 8px 16px;\r\n\tbackground-color: white;\r\n\tdisplay: grid;\r\n\tgrid-template-columns: auto 1fr auto;\r\n\tgap: 10px;\r\n\tposition: sticky;\r\n\ttop: 0;\r\n\tz-index: 99;\r\n\tbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\r\n  }\r\n   \r\n  .app-bar .app-bar__menu {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n  }\r\n   \r\n  .app-bar .app-bar__menu button {\r\n\tbackground-color: transparent;\r\n\tborder: none;\r\n\tfont-size: 18px;\r\n\tpadding: 8px;\r\n\tcursor: pointer;\r\n  min-width: 45px;\r\n  min-height: 45px;\r\n  }\r\n   \r\n  .app-bar .app-bar__brand {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n  }\r\n   \r\n  .app-bar .app-bar__brand h1 {\r\n\tcolor: #db0000;\r\n\ttext-transform: uppercase;\r\n\tfont-size: 28px;\r\n\tuser-select: none;\r\n  min-width: 50px;\r\n  min-height: 50px;\r\n  }\r\n   \r\n  .app-bar .app-bar__navigation {\r\n\tposition: absolute;\r\n\ttop: 50px;\r\n\tleft: -180px;\r\n\twidth: 150px;\r\n\ttransition: all 0.3s;\r\n\tpadding: 8px;\r\n\tbackground-color: white;\r\n\toverflow: hidden;\r\n  }\r\n   \r\n  .app-bar .app-bar__navigation.open {\r\n\tleft: 0;\r\n  }\r\n   \r\n  .app-bar .app-bar__navigation ul li a {\r\n\tdisplay: inline-block;\r\n\ttext-decoration: none;\r\n\tcolor: black;\r\n\tpadding: 15px;\r\n\tmargin-bottom: 5px;\r\n\twidth: 100%;\r\n  font-size: medium;\r\n  }\r\n\r\n   \r\n  /*\r\n\tMain Content\r\n  */\r\n   \r\n  main {\r\n\tflex: 1;\r\n  }\r\n\r\n  .hero {\r\n    display: grid;\r\n    align-items: center;\r\n    justify-items: center;\r\n    width: 100%;\r\n    min-height: 1000px;\r\n    background: #000000;\r\n    background-image: url("+s+");\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    position: relative;\r\n    \r\n    \r\n}\r\n\r\n.hero-overlay {\r\n    background-color: rgba(255, 0, 0, 0.315);\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-content: center;\r\n    \r\n}\r\n\r\n\r\n.hero-inner {\r\n    align-self: center;\r\n    text-align: center;\r\n    max-width: 60%;\r\n    position: absolute;\r\n    color: #ffffff;\r\n    z-index: 2;\r\n}\r\n\r\n.hero-title {\r\n    color: #ffffff;\r\n    font-weight: 1000;\r\n    font-size: 30px;\r\n    text-shadow: 2px 2px 8px #000000;\r\n}\r\n\r\n.hero-tag {\r\n    color: #ffffff;\r\n    font-weight: 500;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    text-shadow: 2px 2px 8px #000000;\r\n}\r\n   \r\n  .content {\r\n\tmargin: 0 auto;\r\n\tmin-height: 100%;\r\n  }\r\n   \r\n  .content .content__heading {\r\n\tfont-weight: normal;\r\n  }\r\n   \r\n /* Restaurant List */\r\n  \r\n #restaurants{\r\n\tmargin: 32px auto auto;\r\n\ttext-align: left;\r\n  }\r\n  \r\n  #restaurant-item{\r\n\tborder-radius: 10px;\r\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n\tgap: 30px;\r\n\tmargin: 30px 25px 20px 25px;\r\n\tbackground-color: #db0000;\r\n\tz-index: 1;\r\n\tcolor: #ffffff;\r\n\tdisplay: block;\r\n\tposition: relative;\r\n  }\r\n  \r\n  .restaurant-list_headerimage{\r\n\tborder-radius: 10px;\r\n\twidth: 100%;\r\n\theight: 20vw;\r\n\tobject-fit: cover;\r\n\tposition: relative;\r\n\tz-index: -1;\r\n  }\r\n  \r\n  .restaurant-item h2, h3, p{\r\n\tpadding: 10px 32px 0 32px;\r\n\tfont-size: 16px;\r\n\ttext-align: justify;\r\n  }\r\n  \r\n  .restaurant-list_content a h3{\r\n\tfont-size: 30px;\r\n\ttext-decoration: none;\r\n\tcolor: #ffffff;\r\n\tcursor: pointer;\r\n\tz-index: 99;\r\n\tposition: relative;\r\n  }\r\n  \r\n  .restaurant-list_content p{\r\n\tpadding-left: 32px;\r\n  }\r\n  \r\n  a:-webkit-any-link {\r\n\ttext-decoration: none;\r\n  }\r\n  \r\n  .restaurant-list_headerrating h2{\r\n\tcolor: #dde414;\r\n\tpadding: 10px 32px 0 32px;\r\n  }\r\n  \r\n  .restaurant-list_content p{\r\n\tpadding-bottom: 32px;\r\n  }\r\n\r\n  /* Detail */\r\n\r\n  #restaurant.restaurant{\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 10px 32px 0 32px;\r\n  }\r\n\r\n  h2.restaurant_name{\r\n    font-size: 32px;\r\n    color: #db0000;\r\n    justify-content: center;\r\n    display: flex;\r\n    margin: 20px 20px;\r\n  }\r\n\r\n  #restaurant img.restaurant_image{\r\n    width: 100%;\r\n    border-radius: 10px;\r\n  }\r\n\r\n  .restaurant_info h3{\r\n    font-size: 36px;\r\n    padding: 15px 0;\r\n    color: #db0000;\r\n  }\r\n\r\n  .restaurant_info h4, p {\r\n    font-size: 18px;\r\n    padding-left: 0;\r\n  }\r\n\r\n  .restaurant_info h4 {\r\n    padding-top: 20px;\r\n    color: #db0000;\r\n  }\r\n\r\n  .restaurant_info #menu{\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    gap: 10px;\r\n    padding-top: 20px;\r\n  }\r\n\r\n  .restaurant_info #menu .food{\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: #db0000;\r\n    border-radius: 10px;\r\n    color:#fff;\r\n  }\r\n\r\n  .restaurant_info #menu h4{\r\n    font-size: 28px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    display: flex;\r\n    color: #ffffff;\r\n  }\r\n\r\n  .restaurant_info #menu p{\r\n    padding: 32px 32px;\r\n  }\r\n\r\n  .restaurant_info #menu .drink{\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: #db0000;\r\n    border-radius: 10px;\r\n    color:#fff;\r\n  }\r\n\r\n  .restaurant_info .review-list{\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    gap: 10px;\r\n  }\r\n\r\n  .restaurant_info .review-item{\r\n    padding: 20px 32px;\r\n    background-color: #db0000;\r\n    border-radius: 10px;\r\n    color:#fff;\r\n  }\r\n\r\n  .restaurant_info .review-item_bold{\r\n    font-weight: bold;\r\n  }\r\n\r\n  .restaurant_info .review h4{\r\n    margin-top: 32px;\r\n  }\r\n\r\n  .address{\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n\r\n\r\n/* Like */\r\n\r\n  .like {\r\n    width: 55px;\r\n    height: 55px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: #db0000;\r\n    \r\n    position: fixed;\r\n    bottom: 16px;\r\n    right: 16px;\r\n    border-radius: 50%;\r\n    border: 0;\r\n    \r\n    font-size: 18px;\r\n    color: white;\r\n    cursor: pointer;\r\n  }\r\n\r\n  /*\r\n\tFooter\r\n  */\r\n   \r\n  footer {\r\n\tpadding: 16px;\r\n  min-height: 44px;\r\n  min-width: 44px;\r\n  }\r\n   \r\n  footer p {\r\n\ttext-align: center;\r\n\tcolor: #aaaaaa;\r\n  min-height: 44px;\r\n  min-width: 44px;\r\n  }\r\n   \r\n  footer p a {\r\n\tcolor: #db0000;\r\n\ttext-decoration: none;\r\n  min-height: 44px;\r\n  min-width: 44px;\r\n  }","",{version:3,sources:["webpack://./src/styles/style.css"],names:[],mappings:"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",sourcesContent:["* {\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n  }\r\n   \r\n  body {\r\n\tfont-family: 'Poppins', sans-serif;\r\n\tbackground-color: white;\r\n\tmin-height: 100vh;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n  }\r\n\r\n  .skip-link {\r\n    position: absolute;\r\n    top: -40px;\r\n    left: 0;\r\n    padding: 8px;\r\n    background-color: #2c9330;\r\n    color: white;\r\n    z-index: 100;\r\n  }\r\n\r\n  .skip-link:focus {\r\n    top: 0;\r\n  }\r\n   \r\n   \r\n  /*\r\n\tAppBar\r\n  */\r\n   \r\n  .app-bar {\r\n\tpadding: 8px 16px;\r\n\tbackground-color: white;\r\n\tdisplay: grid;\r\n\tgrid-template-columns: auto 1fr auto;\r\n\tgap: 10px;\r\n\tposition: sticky;\r\n\ttop: 0;\r\n\tz-index: 99;\r\n\tbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\r\n  }\r\n   \r\n  .app-bar .app-bar__menu {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n  }\r\n   \r\n  .app-bar .app-bar__menu button {\r\n\tbackground-color: transparent;\r\n\tborder: none;\r\n\tfont-size: 18px;\r\n\tpadding: 8px;\r\n\tcursor: pointer;\r\n  min-width: 45px;\r\n  min-height: 45px;\r\n  }\r\n   \r\n  .app-bar .app-bar__brand {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n  }\r\n   \r\n  .app-bar .app-bar__brand h1 {\r\n\tcolor: #db0000;\r\n\ttext-transform: uppercase;\r\n\tfont-size: 28px;\r\n\tuser-select: none;\r\n  min-width: 50px;\r\n  min-height: 50px;\r\n  }\r\n   \r\n  .app-bar .app-bar__navigation {\r\n\tposition: absolute;\r\n\ttop: 50px;\r\n\tleft: -180px;\r\n\twidth: 150px;\r\n\ttransition: all 0.3s;\r\n\tpadding: 8px;\r\n\tbackground-color: white;\r\n\toverflow: hidden;\r\n  }\r\n   \r\n  .app-bar .app-bar__navigation.open {\r\n\tleft: 0;\r\n  }\r\n   \r\n  .app-bar .app-bar__navigation ul li a {\r\n\tdisplay: inline-block;\r\n\ttext-decoration: none;\r\n\tcolor: black;\r\n\tpadding: 15px;\r\n\tmargin-bottom: 5px;\r\n\twidth: 100%;\r\n  font-size: medium;\r\n  }\r\n\r\n   \r\n  /*\r\n\tMain Content\r\n  */\r\n   \r\n  main {\r\n\tflex: 1;\r\n  }\r\n\r\n  .hero {\r\n    display: grid;\r\n    align-items: center;\r\n    justify-items: center;\r\n    width: 100%;\r\n    min-height: 1000px;\r\n    background: #000000;\r\n    background-image: url('../public/images/heros/hero-image_2.jpg');\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    position: relative;\r\n    \r\n    \r\n}\r\n\r\n.hero-overlay {\r\n    background-color: rgba(255, 0, 0, 0.315);\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-content: center;\r\n    \r\n}\r\n\r\n\r\n.hero-inner {\r\n    align-self: center;\r\n    text-align: center;\r\n    max-width: 60%;\r\n    position: absolute;\r\n    color: #ffffff;\r\n    z-index: 2;\r\n}\r\n\r\n.hero-title {\r\n    color: #ffffff;\r\n    font-weight: 1000;\r\n    font-size: 30px;\r\n    text-shadow: 2px 2px 8px #000000;\r\n}\r\n\r\n.hero-tag {\r\n    color: #ffffff;\r\n    font-weight: 500;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    text-shadow: 2px 2px 8px #000000;\r\n}\r\n   \r\n  .content {\r\n\tmargin: 0 auto;\r\n\tmin-height: 100%;\r\n  }\r\n   \r\n  .content .content__heading {\r\n\tfont-weight: normal;\r\n  }\r\n   \r\n /* Restaurant List */\r\n  \r\n #restaurants{\r\n\tmargin: 32px auto auto;\r\n\ttext-align: left;\r\n  }\r\n  \r\n  #restaurant-item{\r\n\tborder-radius: 10px;\r\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n\tgap: 30px;\r\n\tmargin: 30px 25px 20px 25px;\r\n\tbackground-color: #db0000;\r\n\tz-index: 1;\r\n\tcolor: #ffffff;\r\n\tdisplay: block;\r\n\tposition: relative;\r\n  }\r\n  \r\n  .restaurant-list_headerimage{\r\n\tborder-radius: 10px;\r\n\twidth: 100%;\r\n\theight: 20vw;\r\n\tobject-fit: cover;\r\n\tposition: relative;\r\n\tz-index: -1;\r\n  }\r\n  \r\n  .restaurant-item h2, h3, p{\r\n\tpadding: 10px 32px 0 32px;\r\n\tfont-size: 16px;\r\n\ttext-align: justify;\r\n  }\r\n  \r\n  .restaurant-list_content a h3{\r\n\tfont-size: 30px;\r\n\ttext-decoration: none;\r\n\tcolor: #ffffff;\r\n\tcursor: pointer;\r\n\tz-index: 99;\r\n\tposition: relative;\r\n  }\r\n  \r\n  .restaurant-list_content p{\r\n\tpadding-left: 32px;\r\n  }\r\n  \r\n  a:-webkit-any-link {\r\n\ttext-decoration: none;\r\n  }\r\n  \r\n  .restaurant-list_headerrating h2{\r\n\tcolor: #dde414;\r\n\tpadding: 10px 32px 0 32px;\r\n  }\r\n  \r\n  .restaurant-list_content p{\r\n\tpadding-bottom: 32px;\r\n  }\r\n\r\n  /* Detail */\r\n\r\n  #restaurant.restaurant{\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 10px 32px 0 32px;\r\n  }\r\n\r\n  h2.restaurant_name{\r\n    font-size: 32px;\r\n    color: #db0000;\r\n    justify-content: center;\r\n    display: flex;\r\n    margin: 20px 20px;\r\n  }\r\n\r\n  #restaurant img.restaurant_image{\r\n    width: 100%;\r\n    border-radius: 10px;\r\n  }\r\n\r\n  .restaurant_info h3{\r\n    font-size: 36px;\r\n    padding: 15px 0;\r\n    color: #db0000;\r\n  }\r\n\r\n  .restaurant_info h4, p {\r\n    font-size: 18px;\r\n    padding-left: 0;\r\n  }\r\n\r\n  .restaurant_info h4 {\r\n    padding-top: 20px;\r\n    color: #db0000;\r\n  }\r\n\r\n  .restaurant_info #menu{\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    gap: 10px;\r\n    padding-top: 20px;\r\n  }\r\n\r\n  .restaurant_info #menu .food{\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: #db0000;\r\n    border-radius: 10px;\r\n    color:#fff;\r\n  }\r\n\r\n  .restaurant_info #menu h4{\r\n    font-size: 28px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    display: flex;\r\n    color: #ffffff;\r\n  }\r\n\r\n  .restaurant_info #menu p{\r\n    padding: 32px 32px;\r\n  }\r\n\r\n  .restaurant_info #menu .drink{\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: #db0000;\r\n    border-radius: 10px;\r\n    color:#fff;\r\n  }\r\n\r\n  .restaurant_info .review-list{\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    gap: 10px;\r\n  }\r\n\r\n  .restaurant_info .review-item{\r\n    padding: 20px 32px;\r\n    background-color: #db0000;\r\n    border-radius: 10px;\r\n    color:#fff;\r\n  }\r\n\r\n  .restaurant_info .review-item_bold{\r\n    font-weight: bold;\r\n  }\r\n\r\n  .restaurant_info .review h4{\r\n    margin-top: 32px;\r\n  }\r\n\r\n  .address{\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n\r\n\r\n/* Like */\r\n\r\n  .like {\r\n    width: 55px;\r\n    height: 55px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: #db0000;\r\n    \r\n    position: fixed;\r\n    bottom: 16px;\r\n    right: 16px;\r\n    border-radius: 50%;\r\n    border: 0;\r\n    \r\n    font-size: 18px;\r\n    color: white;\r\n    cursor: pointer;\r\n  }\r\n\r\n  /*\r\n\tFooter\r\n  */\r\n   \r\n  footer {\r\n\tpadding: 16px;\r\n  min-height: 44px;\r\n  min-width: 44px;\r\n  }\r\n   \r\n  footer p {\r\n\ttext-align: center;\r\n\tcolor: #aaaaaa;\r\n  min-height: 44px;\r\n  min-width: 44px;\r\n  }\r\n   \r\n  footer p a {\r\n\tcolor: #db0000;\r\n\ttext-decoration: none;\r\n  min-height: 44px;\r\n  min-width: 44px;\r\n  }"],sourceRoot:""}]);const l=d},362:(n,r,t)=>{var A=t(379),e=t.n(A),a=t(795),i=t.n(a),o=t(569),p=t.n(o),C=t(565),d=t.n(C),s=t(216),l=t.n(s),c=t(589),f=t.n(c),B=t(948),g={};g.styleTagTransform=f(),g.setAttributes=d(),g.insert=p().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=l(),e()(B.Z,g),B.Z&&B.Z.locals&&B.Z.locals},915:(n,r,t)=>{var A=t(379),e=t.n(A),a=t(795),i=t.n(a),o=t(569),p=t.n(o),C=t(565),d=t.n(C),s=t(216),l=t.n(s),c=t(589),f=t.n(c),B=t(890),g={};g.styleTagTransform=f(),g.setAttributes=d(),g.insert=p().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=l(),e()(B.Z,g),B.Z&&B.Z.locals&&B.Z.locals}},t={};function A(n){var e=t[n];if(void 0!==e)return e.exports;var a=t[n]={id:n,exports:{}};return r[n](a,a.exports,A),a.exports}A.m=r,n=[],A.O=(r,t,e,a)=>{if(!t){var i=1/0;for(d=0;d<n.length;d++){for(var[t,e,a]=n[d],o=!0,p=0;p<t.length;p++)(!1&a||i>=a)&&Object.keys(A.O).every((n=>A.O[n](t[p])))?t.splice(p--,1):(o=!1,a<i&&(i=a));if(o){n.splice(d--,1);var C=e();void 0!==C&&(r=C)}}return r}a=a||0;for(var d=n.length;d>0&&n[d-1][2]>a;d--)n[d]=n[d-1];n[d]=[t,e,a]},A.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return A.d(r,{a:r}),r},A.d=(n,r)=>{for(var t in r)A.o(r,t)&&!A.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},A.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),A.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;A.g.importScripts&&(n=A.g.location+"");var r=A.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var t=r.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),A.p=n})(),(()=>{A.b=document.baseURI||self.location.href;var n={400:0};A.O.j=r=>0===n[r];var r=(r,t)=>{var e,a,[i,o,p]=t,C=0;if(i.some((r=>0!==n[r]))){for(e in o)A.o(o,e)&&(A.m[e]=o[e]);if(p)var d=p(A)}for(r&&r(t);C<i.length;C++)a=i[C],A.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return A.O(d)},t=self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),A.nc=void 0;var e=A.O(void 0,[666,576,193,337,268,924],(()=>A(253)));e=A.O(e)})();
//# sourceMappingURL=app~4e5ec22b.bundle.js.map