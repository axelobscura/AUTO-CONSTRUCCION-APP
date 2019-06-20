import React, { Component } from 'react';

class Header extends Component{
  render(){
    return(
      <div>
        <div className="container-fluid logoxxx">
          <div className="row">
              <div className="btn-color-toggle">
                  <img src="http://www.auto-construccion.com/images/icon_bulb_light.png" alt="" />
              </div>
              <div className="navbar-container single">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-3 visible-xs">
                            <a href="/" className="btn-menu-toggle"><i className="cv cvicon-cv-menu"></i></a>
                        </div>
                        <div className="col-lg-1 col-sm-1 col-xs-6">
                            <a className="navbar-brand" href="/">
                                <img src="http://www.auto-construccion.com/images/logo.svg" alt="Project name" className="logo" />
                                <span>IMCYC</span>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-4 hidden-xs">
                            <ul className="list-inline menu">
                              <li className="color-active"></li>
                            </ul>
                        </div>
                        <div className="col-lg-5 col-sm-4 col-xs-3">
                            <form action="/" method="post">
                                <div className="topsearch">
                                    <i className="cv cvicon-cv-cancel topsearch-close"></i>
                                    <div className="input-group">
                                        <span className="input-group-addon" id="sizing-addon2"><i className="fa fa-search"></i></span>
                                        <input type="text" className="form-control" placeholder="Buscar Contenidos" aria-describedby="sizing-addon2" />
                                        <div className="input-group-btn">
                                            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="cv cvicon-cv-video-file"></i>&nbsp;&nbsp;&nbsp;<span className="caret"></span></button>/
                                            <ul className="dropdown-menu">
                                                <li><a href="/"><i className="cv cvicon-cv-relevant"></i> Relevantes</a></li>
                                                <li><a href="/"><i className="cv cvicon-cv-calender"></i> Recientes</a></li>
                                                <li><a href="/"><i className="cv cvicon-cv-view-stats"></i> Más Vistos</a></li>
                                                <li><a href="/"><i className="cv cvicon-cv-star"></i> Mejor Valorados</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-3 col-sm-3 hidden-xs">
                            <div className="loginsignup pull-right">
                                <a href="/">INGRESAR</a> . <a href="/">REGISTRARSE</a>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;