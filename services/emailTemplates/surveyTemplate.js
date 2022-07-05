const keys = require("../../config/keys");

module.exports = (survey) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="format-detection" content="telephone=no">
      <meta name="x-apple-disable-message-reformatting">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title></title>
      <style type="text/css">
        @media screen {
          @font-face {
            font-family: 'Fira Sans';
            font-style: normal;
            font-weight: 400;
            src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvl4jLazX3dA.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          @font-face {
            font-family: 'Fira Sans';
            font-style: normal;
            font-weight: 400;
            src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvk4jLazX3dGTP.woff2) format('woff2');
            unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
          }
          @font-face {
            font-family: 'Fira Sans';
            font-style: normal;
            font-weight: 500;
            src: local('Fira Sans Medium'), local('FiraSans-Medium'), url(https://fonts.gstatic.com/s/firasans/v8/va9B4kDNxMZdWfMOD5VnZKveRhf6Xl7Glw.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          @font-face {
            font-family: 'Fira Sans';
            font-style: normal;
            font-weight: 500;
            src: local('Fira Sans Medium'), local('FiraSans-Medium'), url(https://fonts.gstatic.com/s/firasans/v8/va9B4kDNxMZdWfMOD5VnZKveQhf6Xl7Gl3LX.woff2) format('woff2');
            unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
          }
          @font-face {
            font-family: 'Fira Sans';
            font-style: normal;
            font-weight: 700;
            src: local('Fira Sans Bold'), local('FiraSans-Bold'), url(https://fonts.gstatic.com/s/firasans/v8/va9B4kDNxMZdWfMOD5VnLK3eRhf6Xl7Glw.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          @font-face {
            font-family: 'Fira Sans';
            font-style: normal;
            font-weight: 700;
            src: local('Fira Sans Bold'), local('FiraSans-Bold'), url(https://fonts.gstatic.com/s/firasans/v8/va9B4kDNxMZdWfMOD5VnLK3eQhf6Xl7Gl3LX.woff2) format('woff2');
            unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
          }
          @font-face {
            font-family: 'Fira Sans';
            font-style: normal;
            font-weight: 800;
            src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v8/va9B4kDNxMZdWfMOD5VnMK7eRhf6Xl7Glw.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          @font-face {
            font-family: 'Fira Sans';
            font-style: normal;
            font-weight: 800;
            src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v8/va9B4kDNxMZdWfMOD5VnMK7eQhf6Xl7Gl3LX.woff2) format('woff2');
            unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
          }
        }
    
        #outlook a {
          padding: 0;
        }
    
        .ExternalClass,
        .ReadMsgBody {
          width: 100%;
        }
    
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass td,
        .ExternalClass div,
        .ExternalClass span,
        .ExternalClass font {
          line-height: 100%;
        }
    
        div[style*="margin: 14px 0;"],
        div[style*="margin: 16px 0;"] {
          margin: 0 !important;
        }
    
        @media only screen and (min-width:621px) {
          .pc-container {
            width: 620px !important;
          }
        }
    
        @media only screen and (max-width:620px) {
          .pc-menu-logo-s2,
          .pc-menu-nav-s1 {
            padding-left: 30px !important;
            padding-right: 30px !important
          }
          .pc-cta-box-s4 .pc-cta-box-in {
            padding: 35px 30px 30px !important
          }
          .pc-footer-box-s1,
          .pc-products-box-s3 {
            padding-left: 10px !important;
            padding-right: 10px !important
          }
          .pc-footer-row-s1 .pc-footer-row-col,
          .pc-product-s3 .pc-product-col {
            max-width: 100% !important
          }
          .pc-product-s3.pc-m-invert {
            direction: ltr !important
          }
          .pc-cta-box-s2 {
            padding: 35px 30px !important
          }
          .pc-spacing.pc-m-footer-h-46 td,
          .pc-spacing.pc-m-footer-h-57 td {
            font-size: 20px !important;
            height: 20px !important;
            line-height: 20px !important
          }
        }
    
        @media only screen and (max-width:525px) {
          .pc-menu-logo-s2 {
            padding-bottom: 25px !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
            padding-top: 25px !important
          }
          .pc-menu-nav-s1 {
            padding-left: 20px !important;
            padding-right: 20px !important
          }
          .pc-menu-nav-s1 .pc-menu-nav-divider {
            padding: 0 !important
          }
          .pc-cta-box-s4 .pc-cta-box-in {
            padding: 25px 20px 20px !important
          }
          .pc-cta-s1 .pc-cta-title {
            font-size: 24px !important;
            line-height: 1.42 !important
          }
          .pc-cta-text br,
          .pc-cta-title br,
          .pc-footer-text-s1 br {
            display: none !important
          }
          .pc-products-box-s3 {
            padding: 15px 0 !important
          }
          .pc-cta-box-s2 {
            padding: 25px 20px !important
          }
          .pc-footer-box-s1 {
            padding: 5px 0 !important
          }
        }
      </style>
    
    </head>
    <body class="pc-fb-font" bgcolor="#e5e5e5" style="background-color: #e5e5e5; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 16px; width: 100% !important; Margin: 0 !important; padding: 0; line-height: 1.5; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%">
      <table style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%" border="0" cellpadding="0" cellspacing="0">
        <tbody>
          <tr>
            <td style="padding: 0; vertical-align: top;" align="center" valign="top">
    
              <table class="pc-container" align="center" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; Margin: 0 auto; max-width: 620px;" width="100%" border="0" cellpadding="0" cellspacing="0">
                <tbody>
                  <tr>
                    <td align="left" style="vertical-align: top; padding: 0 10px;" valign="top"> <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">Template created by Emaily</span>
                      <table border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                        <tbody>
                          <tr>
                            <td style="vertical-align: top; padding: 0; height: 20px; font-size: 20px; line-height: 20px;" valign="top">&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
    
                      <table border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                        <tbody>
                          <tr>
                            <td style="vertical-align: top; background-color: #1B1B1B; border-radius: 8px; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1)" valign="top" bgcolor="#1B1B1B">
                              <table border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                                <tbody>
                                  <tr>
                                    <td class="pc-menu-logo-s2" align="center" style="vertical-align: top; padding: 30px 40px 31px;" valign="top">
                                      <table border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 130px;" width="130">
                                        <tbody>
                                          <tr>
                                            <td style="vertical-align: top;" valign="top"> <a href="" style="text-decoration: none;">
                                            <img src="http://cdn.mcauto-images-production.sendgrid.net/3d0a26085647a2c2/b4cb2329-d43d-42b3-a518-8792039a7e70/290x81.png" width="150" height="35" alt="" style="border: 0; line-height: 100%; outline: 0; -ms-interpolation-mode: bicubic; display: block; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 20px; font-weight: 500; color: #ffffff;">
                                        </a> </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="vertical-align: top; height: 1px; font-size: 1px; line-height: 1px; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;" valign="top" bgcolor="#4B4B4B">&nbsp;</td>
                                  </tr>
                                  <tr>
                                    <td class="pc-menu-nav-s1 pc-fb-font" style="vertical-align: top; padding: 18px 40px; text-align: center; line-height: 1.4; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 500;" valign="top" align="center"> <a href="https://gentle-gorge-88215.herokuapp.com/" style="text-decoration: none; color: #ffffff;">Dashboard</a> <span class="pc-menu-nav-divider" style="padding: 0 23px;">&nbsp;&nbsp;</span> <a href="https://gentle-gorge-88215.herokuapp.com/" style="text-decoration: none; color: #ffffff;">Surveys</a> <span class="pc-menu-nav-divider" style="padding: 0 23px;">&nbsp;&nbsp;</span> <a href="https://gentle-gorge-88215.herokuapp.com/" style="text-decoration: none; color: #ffffff;">New Surveys</a> <span class="pc-menu-nav-divider" style="padding: 0 23px;">&nbsp;&nbsp;</span> <a href="https://gentle-gorge-88215.herokuapp.com/" style="text-decoration: none; color: #ffffff;">Review</a> </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
    
                      <table border="0" cellspacing="0" cellpadding="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                        <tbody>
                          <tr>
                            <td style="vertical-align: top; padding: 0; height: 8px; -webkit-text-size-adjust: 100%; font-size: 8px; line-height: 8px;" valign="top">&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
                      <table border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                        <tbody>
                          <tr>
                            <td class="pc-cta-box-s4" style="vertical-align: top; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1)" valign="top" bgcolor="#ffffff">
                              <table border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                                <tbody>
                                  <tr>
                                    <td class="pc-cta-box-in" style="vertical-align: top; padding: 42px 40px 35px;" valign="top">
                                      <table class="pc-cta-s1" border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                                        <tbody>
                                          <tr>
                                            <td class="pc-fb-font" style="vertical-align: top; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 500; line-height: 1.43; color: #40BE65; text-align: center;" valign="top" align="center">Introducing</td>
                                          </tr>
                                          <tr>
                                            <td style="vertical-align: top; height: 12px; font-size: 12px; line-height: 12px;" valign="top">&nbsp;</td>
                                          </tr>
                                          <tr>
                                            <td class="pc-cta-title pc-fb-font" style="vertical-align: top; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 36px; font-weight: 900; line-height: 1.28; letter-spacing: -0.6px; color: #151515; text-align: center;" valign="top" align="center"> Complete Marketing Guide <br>Collect feedback </td>
                                          </tr>
                                          <tr>
                                            <td style="vertical-align: top; height: 70px; line-height: 70px; font-size: 70px;" valign="top">&nbsp;</td>
                                          </tr>
                                          <tr>
                                            <td style="vertical-align: top; text-align: center;" valign="top" align="center"> <a href="#image" style="text-decoration: none;">
                                            <img src="http://cdn.mcauto-images-production.sendgrid.net/3d0a26085647a2c2/35c24dd9-e3e0-48e6-a1dc-92c0653fe800/1280x716.png" width="341" height="157" alt="" style="border: 0; line-height: 100%; outline: 0; -ms-interpolation-mode: bicubic; display: block; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 14px; color: #151515; max-width: 100%; height: auto; Margin: 0 auto;">
                                        </a> </td>
                                          </tr>
                                          <tr>
                                            <td style="vertical-align: top; height: 63px; line-height: 63px; font-size: 63px;" valign="top">&nbsp;</td>
                                          </tr>
                                          <tr>
                                            <td class="pc-cta-text pc-fb-font" style="vertical-align: top; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 300; line-height: 1.56; color: #9B9B9B; text-align: center;" valign="top" align="center"> Co-ordinate campaigns and product launches, <br>with improved overall communication. </td>
                                          </tr>
                                          <tr>
                                            <td style="vertical-align: top; height: 25px; line-height: 25px; font-size: 25px;" valign="top">&nbsp;</td>
                                          </tr>
                                          <tr>
                                            <td style="vertical-align: top; padding: 5px 0;" valign="top" align="center">
                                              <table border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto;">
                                                <tbody>
                                                  <tr>
                                                    <td style="vertical-align: top; border-radius: 8px; text-align: center; background-color: #1595E7;" valign="top" bgcolor="#1595E7" align="center"> <a href="https://gentle-gorge-88215.herokuapp.com/" style="line-height: 1.5; text-decoration: none; margin: 0; padding: 13px 17px; white-space: nowrap; border-radius: 8px; font-weight: 500; display: inline-block; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 16px; cursor: pointer; background-color: #1595E7; color: #ffffff; border: 1px solid #1595E7;">Visit Our Website Emaily</a> </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
    
                      <table border="0" cellspacing="0" cellpadding="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                        <tbody>
                          <tr>
                            <td style="vertical-align: top; padding: 0; height: 8px; -webkit-text-size-adjust: 100%; font-size: 8px; line-height: 8px;" valign="top">&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
                      <table border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                        <tbody>
                          <tr>
                            <td class="pc-products-box-s3" style="vertical-align: top; padding: 30px 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1)" valign="top" bgcolor="#ffffff">
                              <table class="pc-product-s3" border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; font-size: 0;" width="100%">
                                <tbody>
                                  <tr>
                                    <td style="vertical-align: top;" valign="top">
    
                                      <div class="pc-product-col" style="width: 100%; vertical-align: top; text-align: center;">
                                        <table border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                                          <tbody>
                                            <tr>
                                              <td style="vertical-align: top; padding: 10px 20px 0;" valign="top">
                                                <table border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                                                  <tbody>
                                                    <tr>
                                                      <td class="pc-fb-font" style=" padding-bottom: 20px; vertical-align: top; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 20px; font-weight: 500; color: #40BE65;" valign="top">${survey.title}</td>
                                                    </tr>
                                                    <tr>
                                                      <td class="card" style="padding: 10px 20px; box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5); transition: 0.3s; box-sizing: border-box; border-radius: 8px; font-size: 16px; font-weight: 500; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; line-height: 1.5; color: #9B9B9B; white-space:pre-line" align="left">
                                                        ${survey.body}
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td style="vertical-align: top; padding: 11px 0 0 0; font-size: 0;" valign="top">
    
                                                        <div style="display: inline-block; vertical-align: middle;">
                                                          <table border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                                                            <tbody>
                                                              <tr>
                                                                <td style="vertical-align: top; padding: 10px 20px 10px 0;" valign="top">
                                                                  <table border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                                                                    <tbody>
                                                                      <tr>
                                                                        <td align="left" style="vertical-align: top;" valign="top">
                                                                          <table border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                            <tbody>
                                                                              <tr>
                                                                                <td align="center"> <p class="pc-fb-font" style=" margin-top: 25px; line-height: 1.5; text-decoration: none; white-space: nowrap; font-weight: 500; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 16px; cursor: pointer; color:gray;">Please Give the Feedback.</p><p class="pc-fb-font" style="text-decoration: none; white-space: nowrap; font-weight: 500; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 16px; cursor: pointer; color:gray;">If you like my blog then click "yes" otherwise click "no".</p>  </td>
                                                                              </tr>
                                                                              <tr align="center">
                                                                                <td style=" display: inline; vertical-align: top; border-radius: 8px; text-align: center; background-color: #1595E7;" valign="top" bgcolor="#1595E7" align="center"> <a class="pc-fb-font" href="${keys.callbackURL}/api/surveys/${survey.id}/yes" style="line-height: 1.5; text-decoration: none; margin: 0; padding: 13px 17px; white-space: nowrap; border-radius: 8px; font-weight: 500; display: inline-block; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 20px; cursor: pointer; color:gold;">Yes</a> </td>
                                                                                <td style=" display: inline; vertical-align: top; border-radius: 8px; text-align: center; background-color: #1595E7;" valign="top" bgcolor="#1595E7" align="center"> <a class="pc-fb-font" href="${keys.callbackURL}/api/surveys/${survey.id}/no" style="line-height: 1.5; text-decoration: none; margin: 0; padding: 13px 17px; white-space: nowrap; border-radius: 8px; font-weight: 500; display: inline-block; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 20px; cursor: pointer; color:gold;">No</a> </td>
                                                                              </tr>
                                                                            </tbody>
                                                                          </table>
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </td>
                                                              </tr>
                                                            </tbody>
                                                          </table>
                                                        </div>
    
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
    
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table border="0" cellspacing="0" cellpadding="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                        <tbody>
                          <tr>
                            <td style="vertical-align: top; padding: 0; height: 8px; -webkit-text-size-adjust: 100%; font-size: 8px; line-height: 8px;" valign="top">&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
                      <table border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                        <tbody>
                          <tr>
                            <td class="pc-products-box-s3" style="vertical-align: top; padding: 30px 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1)" valign="top" bgcolor="#ffffff">
                              <table class="pc-product-s3" border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; font-size: 0;" width="100%">
                                <tbody>
                                  <tr>
                                    <td style="vertical-align: top;" valign="top">
    
                                      <div class="pc-product-col" style="display: inline-block; width: 100%; max-width: 280px; vertical-align: top;">
                                        <table border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                                          <tbody>
                                            <tr>
                                              <td style="vertical-align: middle; padding: 15px 20px;"> <img src="http://cdn.mcauto-images-production.sendgrid.net/3d0a26085647a2c2/63b55d0e-24aa-4636-b025-01c45d4e25f5/4460x2973.jpg" width="230" height="240" alt="" style="border: 0; line-height: 100%; outline: 0; -ms-interpolation-mode: bicubic; color: #151515; max-width: 100%; height: auto; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 14px;"> </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
    
                                      <div class="pc-product-col" style="display: inline-block; width: 100%; max-width: 280px; vertical-align: top;">
                                        <table border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                                          <tbody>
                                            <tr>
                                              <td style="vertical-align: top; padding: 10px 20px 0;" valign="top">
                                                <table border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                                                  <tbody>
                                                    <tr>
                                                      <td class="pc-fb-font" style="vertical-align: top; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 500; color: #40BE65;" valign="top">Common Projects</td>
                                                    </tr>
                                                    <tr>
                                                      <td class="pc-fb-font" style="vertical-align: top; padding: 9px 0 0 0; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 24px; font-weight: 700; line-height: 1.42; letter-spacing: -0.4px; color: #151515;" valign="top"> New Surveys </td>
                                                    </tr>
                                                    <tr>
                                                      <td class="pc-fb-font" style="vertical-align: top; padding: 7px 0 0 0; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 300; line-height: 1.5; color: #9B9B9B;" valign="top"> You can create new surveys on my website Emaily. And show overview of your surveys to Dashboard. </td>
                                                    </tr>
                                                    <tr>
                                                      <td style="vertical-align: top; padding: 11px 0 0 0; font-size: 0;" valign="top">
    
                                                        <div style="display: inline-block; vertical-align: middle;">
                                                          <table border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                                                            <tbody>
                                                              <tr>
                                                                <td style="vertical-align: top; padding: 10px 20px 10px 0;" valign="top">
                                                                  <table border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                                                                    <tbody>
                                                                      <tr>
                                                                        <td align="left" style="vertical-align: top;" valign="top">
                                                                          <table border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                            <tbody>
                                                                              <tr>
                                                                                <td style="vertical-align: top; border-radius: 8px; text-align: center; background-color: #1595E7;" valign="top" bgcolor="#1595E7" align="center"> <a class="pc-fb-font" href="https://gentle-gorge-88215.herokuapp.com/" style="line-height: 1.5; text-decoration: none; margin: 0; padding: 13px 17px; white-space: nowrap; border-radius: 8px; font-weight: 500; display: inline-block; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 16px; cursor: pointer; background-color: #1595E7; color: #ffffff; border: 1px solid #1595E7;"> New Surveys </a> </td>
                                                                              </tr>
                                                                            </tbody>
                                                                          </table>
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </td>
                                                              </tr>
                                                            </tbody>
                                                          </table>
                                                        </div>
    
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
    
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
    
                      <table border="0" cellspacing="0" cellpadding="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                        <tbody>
                          <tr>
                            <td style="vertical-align: top; padding: 0; height: 8px; -webkit-text-size-adjust: 100%; font-size: 8px; line-height: 8px;" valign="top">&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
                      <table border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                        <tbody>
                          <tr>
                            <td class="pc-products-box-s3" style="vertical-align: top; padding: 30px 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1)" valign="top" bgcolor="#ffffff">
                              <table class="pc-product-s3 pc-m-invert" dir="rtl" border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; font-size: 0; direction: rtl;" width="100%">
                                <tbody>
                                  <tr>
                                    <td style="vertical-align: top;" valign="top">
    
                                      <div class="pc-product-col" dir="ltr" style="display: inline-block; width: 100%; max-width: 280px; vertical-align: top;">
                                        <table border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                                          <tbody>
                                            <tr>
                                              <td style="vertical-align: top; padding: 10px 20px;" valign="top"> <img src="http://cdn.mcauto-images-production.sendgrid.net/3d0a26085647a2c2/516bfa94-7f40-483b-9f0c-d7d88d858121/4460x2973.jpg" width="230" height="240" alt="" style="border: 0; line-height: 100%; outline: 0; -ms-interpolation-mode: bicubic; color: #151515; max-width: 100%; height: auto; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 14px; display: block;"> </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
    
                                      <div class="pc-product-col" dir="ltr" style="display: inline-block; width: 100%; max-width: 280px; vertical-align: top;">
                                        <table border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                                          <tbody>
                                            <tr>
                                              <td style="vertical-align: top; padding: 10px 20px 0;" valign="top">
                                                <table border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                                                  <tbody>
                                                    <tr>
                                                      <td class="pc-fb-font" style="vertical-align: top; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 500; color: #40BE65;" valign="top">Survey Review</td>
                                                    </tr>
                                                    <tr>
                                                      <td class="pc-fb-font" style="vertical-align: top; padding: 9px 0 0 0; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 24px; font-weight: 700; line-height: 1.42; letter-spacing: -0.4px; color: #151515;" valign="top">Survey Review</td>
                                                    </tr>
                                                    <tr>
                                                      <td class="pc-fb-font" style="vertical-align: top; padding: 7px 0 0 0; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 300; line-height: 1.5; color: #9B9B9B;" valign="top"> You can create a new Survey on my Website Emaily and share your surveys to your friends and relatives to collect the feedback from users. </td>
                                                    </tr>
                                                    <tr>
                                                      <td style="vertical-align: top; padding: 11px 0 0 0; font-size: 0;" valign="top">
    
                                                        <div style="display: inline-block; vertical-align: middle;">
                                                          <table border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                                                            <tbody>
                                                              <tr>
                                                                <td style="vertical-align: top; padding: 10px 20px 10px 0;" valign="top">
                                                                  <table border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                                                                    <tbody>
                                                                      <tr>
                                                                        <td align="left" style="vertical-align: top;" valign="top">
                                                                          <table border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                            <tbody>
                                                                              <tr>
                                                                                <td style="vertical-align: top; border-radius: 8px; text-align: center; background-color: #1595E7;" valign="top" bgcolor="#1595E7" align="center"> <a class="pc-fb-font" href="https://gentle-gorge-88215.herokuapp.com/" style="line-height: 1.5; text-decoration: none; margin: 0; padding: 13px 17px; white-space: nowrap; border-radius: 8px; font-weight: 500; display: inline-block; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 16px; cursor: pointer; background-color: #1595E7; color: #ffffff; border: 1px solid #1595E7;"> Create Survey </a> </td>
                                                                              </tr>
                                                                            </tbody>
                                                                          </table>
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </td>
                                                              </tr>
                                                            </tbody>
                                                          </table>
                                                        </div>
    
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
    
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
    
                      <table border="0" cellspacing="0" cellpadding="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                        <tbody>
                          <tr>
                            <td style="vertical-align: top; padding: 0; height: 8px; -webkit-text-size-adjust: 100%; font-size: 8px; line-height: 8px;" valign="top">&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
                      <table border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                        <tbody>
                          <tr>
                            <td class="pc-cta-box-s2" style="vertical-align: top; padding: 40px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1)" valign="top" bgcolor="#ffffff">
                              <table class="pc-cta-s1" border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                                <tbody>
                                  <tr>
                                    <td class="pc-cta-title pc-fb-font" style="vertical-align: top; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 36px; font-weight: 900; line-height: 1.28; letter-spacing: -0.6px; color: #151515; text-align: center;" valign="top" align="center"> Available all time !</td>
                                  </tr>
                                  <tr>
                                    <td style="vertical-align: top; height: 10px; font-size: 10px; line-height: 10px;" valign="top">&nbsp;</td>
                                  </tr>
                                  <tr>
                                    <td style="vertical-align: top; height: 15px; font-size: 15px; line-height: 15px;" valign="top">&nbsp;</td>
                                  </tr>
                                  <tr>
                                    <td style="vertical-align: top; padding: 5px 0;" valign="top" align="center">
                                      <table border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto;">
                                        <tbody>
                                          <tr>
                                            <td style="vertical-align: top; border-radius: 8px; text-align: center; background-color: #1595E7;" valign="top" bgcolor="#1595E7" align="center"> <a href="https://gentle-gorge-88215.herokuapp.com/" style="line-height: 1.5; text-decoration: none; margin: 0; padding: 13px 25px; white-space: nowrap; border-radius: 8px; font-weight: 500; display: inline-block; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 18px; cursor: pointer; background-color: #1595E7; color: #ffffff; border: 1px solid #1595E7;"> Emaily </a> </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="vertical-align: top; height: 15px; font-size: 15px; line-height: 15px;" valign="top">&nbsp;</td>
                                  </tr>
                                  <tr>
                                    <td class="pc-cta-text pc-fb-font" style="vertical-align: top; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 300; line-height: 1.56; color: #9B9B9B; text-align: center;" valign="top" align="center"> No minimum order value </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
    
                      <table border="0" cellspacing="0" cellpadding="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                        <tbody>
                          <tr>
                            <td style="vertical-align: top; padding: 0; height: 8px; -webkit-text-size-adjust: 100%; font-size: 8px; line-height: 8px;" valign="top">&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
                      <table border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                        <tbody>
                          <tr>
                            <td class="pc-footer-box-s1" style="vertical-align: top; padding: 21px 20px 14px; background-color: #1B1B1B; border-radius: 8px; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1)" valign="top" bgcolor="#1B1B1B">
                              <table border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                                <tbody>
                                  <tr>
                                    <td class="pc-footer-row-s1" style="vertical-align: top; font-size: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;" valign="top">
    
                                      <div class="pc-footer-row-col" style="display: inline-block; width: 100%; max-width: 280px; vertical-align: top;">
                                        <table border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                                          <tbody>
                                            <tr>
                                              <td style="vertical-align: top; padding: 20px;" valign="top">
                                                <table border="0" cellpadding="0" cellspacing="0" class="pc-footer-text-s1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                                                  <tbody>
                                                    <tr>
                                                      <td class="pc-fb-font" style="vertical-align: top; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 500; line-height: 1.33; letter-spacing: -0.2px; color: #ffffff;" valign="top">Follow Us.</td>
                                                    </tr>
                                                    <tr>
                                                      <td class="pc-fb-font" style="vertical-align: top; padding: 11px 0 0; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.43; letter-spacing: -0.2px; color: #D8D8D8;" valign="top"> We are always looking for new exciting projects and collaborations. Feel free to contact us. </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                                <table class="pc-spacing pc-m-footer-h-57" border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                                                  <tbody>
                                                    <tr>
                                                      <td style="vertical-align: top; height: 57px; line-height: 57px; font-size: 57px;" valign="top">&nbsp;</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                                <table border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                                                  <tbody>
                                                    <tr>
                                                      <td style="vertical-align: top; line-height: 1.3; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 19px;" valign="top"> <a href="" style="text-decoration: none;">
                                                            <img src="http://cdn.mcauto-images-production.sendgrid.net/3d0a26085647a2c2/3b941021-cfa8-44f3-a166-92b32035082f/40x40.png" width="20" height="20" alt="" style="border: 0; line-height: 100%; outline: 0; -ms-interpolation-mode: bicubic; font-size: 14px; color: #ffffff;">
                                                        </a> <span>&nbsp;&nbsp;</span> <a href="" style="text-decoration: none;">
                                                            <img src="http://cdn.mcauto-images-production.sendgrid.net/3d0a26085647a2c2/865ddd4b-a215-4710-a16b-0182db081414/40x36.png" width="21" height="18" alt="" style="border: 0; line-height: 100%; outline: 0; -ms-interpolation-mode: bicubic; font-size: 14px; color: #ffffff;">
                                                        </a> <span>&nbsp;&nbsp;</span> <a href="" style="text-decoration: none;">
                                                            <img src="http://cdn.mcauto-images-production.sendgrid.net/3d0a26085647a2c2/63aa6a45-1ca7-4447-bc5b-41f1b90eef68/40x40.png" width="21" height="20" alt="" style="border: 0; line-height: 100%; outline: 0; -ms-interpolation-mode: bicubic; font-size: 14px; color: #ffffff;">
                                                        </a> <span>&nbsp;&nbsp;</span> <a href="" style="text-decoration: none;">
                                                            <img src="http://cdn.mcauto-images-production.sendgrid.net/3d0a26085647a2c2/f13aeb27-28b7-440b-8819-f2cb88c0fbcf/40x40.png" width="20" height="20" alt="" style="border: 0; line-height: 100%; outline: 0; -ms-interpolation-mode: bicubic; font-size: 14px; color: #ffffff;">
                                                        </a> </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
    
                                      <div class="pc-footer-row-col" style="display: inline-block; width: 100%; max-width: 280px; vertical-align: top;">
                                        <table border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                                          <tbody>
                                            <tr>
                                              <td style="vertical-align: top; padding: 20px;" valign="top">
                                                <table border="0" cellpadding="0" cellspacing="0" class="pc-footer-text-s1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                                                  <tbody>
                                                    <tr>
                                                      <td class="pc-fb-font" style="vertical-align: top; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 500; line-height: 1.33; letter-spacing: -0.2px; color: #ffffff;" valign="top">Contact us.</td>
                                                    </tr>
                                                    <tr>
                                                      <td class="pc-fb-font" style="vertical-align: top; padding: 11px 0 0; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.43; letter-spacing: -0.2px; color: #D8D8D8;" valign="top"> <a style="text-decoration: none; cursor: text; color: #D8D8D8;">King street, 2901 Marmara road, Newyork, WA 98122-1090</a> </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                                <table class="pc-spacing pc-m-footer-h-46" border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                                                  <tbody>
                                                    <tr>
                                                      <td style="vertical-align: top; height: 46px; line-height: 46px; font-size: 46px;" valign="top">&nbsp;</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                                <table border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                                                  <tbody>
                                                    <tr>
                                                      <td class="pc-fb-font" style="vertical-align: top; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 500; line-height: 1.33; letter-spacing: -0.2px;" valign="top"> <a href="" style="text-decoration: none; color: #ffffff;">749-977-3440</a> </td>
                                                    </tr>
                                                    <tr>
                                                      <td class="pc-fb-font" style="vertical-align: top; padding: 9px 0 0; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 500; line-height: 1.7;" valign="top"> <a href="" style="text-decoration: none; color: #1595E7;">srvavliya79@gmail.com</a> </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
    
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
    
                      <table border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                        <tbody>
                          <tr>
                            <td style="vertical-align: top; padding: 0; height: 20px; font-size: 20px; line-height: 20px;" valign="top">&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
    
            </td>
          </tr>
        </tbody>
      </table>
    </body>
    
    </html>
    `;
};
