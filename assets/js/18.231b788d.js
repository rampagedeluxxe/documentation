(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{179:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("These are community manages tutorials on how to generate an ssl cert.")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("This tutorial briefly covers creating new SSL certificates for your panel and daemon using Cloudflare")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("This is for advanced users, of which their server systems do not have access to port 80. The command below is for Ubuntu distributions and CloudFlare API (you may google for other APIs for other DNS providers), but you can always check "),a("a",{attrs:{href:"https://github.com/Neilpang/acme.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("acme.sh's official site"),a("OutboundLink")],1),t._v(" for installation instructions.")]),t._v(" "),t._m(3),t._m(4),t._v(" "),a("p",[t._v('After installing acme.sh, we need to fetch a CloudFlare API key. Please make sure that a DNS record (A or CNAME record) is pointing to your target node, and set the cloud to grey (bypassing CloudFlare proxy). Then go to My Profile > API keys and on Glocal API Key subtab, click on "view", enter your CloudFlare password, and copy the API key to clipboard.')]),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("Since the configuration file is based on Certbot, we need to create the folder manually.")]),t._v(" "),t._m(6),a("p",[t._v("After installing certbot and obtaining CloudFlare API key, we need to then generate a certificate. First input the CloudFlare API credentials.")]),t._v(" "),t._m(7),a("p",[t._v("Then create the certificate.")]),t._v(" "),t._m(8),t._m(9),t._v(" "),a("p",[t._v("After running the script for the first time, it will be added to the crontab automatically. You may edit the auto renewal interval by editing the crontab.")]),t._v(" "),t._m(10)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"creating-ssl-certificates"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-ssl-certificates","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating SSL Certificates")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"cloudflare"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cloudflare","aria-hidden":"true"}},[this._v("#")]),this._v(" Cloudflare")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"using-acme-sh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-acme-sh","aria-hidden":"true"}},[this._v("#")]),this._v(" Using acme.sh")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[this._v("curl")]),this._v(" https://get.acme.sh "),e("span",{attrs:{class:"token operator"}},[this._v("|")]),this._v(" sh\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"obtaining-cloudflare-api-key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#obtaining-cloudflare-api-key","aria-hidden":"true"}},[this._v("#")]),this._v(" Obtaining CloudFlare API Key")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"creating-a-certificate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-certificate","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating a Certificate")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[this._v("sudo")]),this._v(" "),e("span",{attrs:{class:"token function"}},[this._v("mkdir")]),this._v(" /etc/letsencrypt/live/example.com\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("export")]),t._v(" CF_Key"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Your_CloudFlare_API_Key"')]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("export")]),t._v(" CF_Email"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Your_CloudFlare_Account@example.com"')]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("acme.sh --issue --standalone -d "),e("span",{attrs:{class:"token string"}},[this._v('"example.com"')]),this._v(" --dns dns_cf \\\n--key-file /etc/letsencrypt/live/example.com/privkey.pem \\\n--fullchain-file /etc/letsencrypt/live/example.com/fullchain.pem \n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"auto-renewal"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#auto-renewal","aria-hidden":"true"}},[this._v("#")]),this._v(" Auto Renewal")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[this._v("sudo")]),this._v(" "),e("span",{attrs:{class:"token function"}},[this._v("crontab")]),this._v(" -e\n")])])])}],!1,null,null,null);e.default=r.exports}}]);