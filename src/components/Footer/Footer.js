import React from 'react';

const Footer = () => {
  return(
    <div>
      <footer>
          <div className="container-fluid">
              <div className="row">
                  <div className="container padding-def" style={{'padding': '20px 0',}}>
                      <div className="col-lg-2  col-sm-1 col-xs-12 footer-logo">
                          <a className="navbar-brand" href="index.html"><img src="images/logo.svg" alt="Project name" className="logo" /></a>-->
                          <a className="navbar-brand" href="index__.html">
                              <img src="http://www.auto-construccion.com/images/logo.svg" alt="Project name" className="logo" />
                              <span>IMCYC</span>
                          </a>
                          <a className="navbar-brand" href="index__.html">
                              <img src="http://www.auto-construccion.com/images/icono-habitat.png" alt="Project name" className="logo" style={{'width':'59px','height':'59px','marginTop':'-10px'}} />
                              <span>HÁBITAT</span>
                          </a>
                      </div>
                      <div className="col-lg-6 col-sm-7 col-xs-12">
                          <div className="f-links">
                              <ul className="list-inline">
                                  <li><a href="/"><ion-icon name="arrow-forward"></ion-icon> Quiénes Somos</a></li>
                                  <li><a href="/"><ion-icon name="arrow-forward"></ion-icon> Noticias</a></li>
                                  <li><a href="/"><ion-icon name="arrow-forward"></ion-icon> Publicidad</a></li>
                                  <li className="hidden-xs"><a href="/"><ion-icon name="arrow-forward"></ion-icon> Ayuda</a></li>
                                  
                              </ul>
                          </div>
                          <div className="delimiter"></div>
                      </div>
                      <div className="col-lg-7 col-sm-6 col-xs-12">
                          <div className="f-copy">
                              <ul className="list-inline">
                                  <li>© 2019 Todo Los Derechos Reservados. Instituto Mexicano del Cemento y del Concreto A.C.<br/><a href="www.imcyc.com" className="hidden-xs">www.imcyc.com</a> | <a href="/">Términos y Condiciones</a></li>
                              </ul>
                          </div>
                      </div>
                      <div className="col-lg-offset-2 col-lg-3 col-sm-4 col-xs-12">
                          <div className="f-last-line">
                              <div className="f-icon pull-left">
                                  <a href="/"><i className="fa fa-facebook-square"></i></a>
                                  <a href="/"><i className="fa fa-twitter"></i></a>
                                  <a href="/"><i className="fa fa-google-plus"></i></a>
                              </div>
                              <div className="f-lang pull-right">
                                  <div className="btn-group dropup pull-right">
                                      <button className="btn btn-default btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                          Idioma <span className="caret"></span>
                                      </button>
                                      <ul className="dropdown-menu">
                                          <li><a href="/"><i className="cv cvicon-cv-relevant"></i> Español</a></li>
                                          <li><a href="/"><i className="cv cvicon-cv-calender"></i> English</a></li>
                                          <li><a href="/"><i className="cv cvicon-cv-view-stats"></i> Francais</a></li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="clearfix"></div>
                          </div>
                          <div className="delimiter visible-xs"></div>
                      </div>
                  </div>
              </div>
          </div>
      </footer>
    </div>
  )
}

export default Footer;