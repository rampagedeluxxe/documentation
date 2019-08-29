(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{153:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("Pterodactyl now ships with the option to use a "),s("a",{attrs:{href:"https://github.com/pterodactyl/sftp-server",target:"_blank",rel:"noopener noreferrer"}},[t._v("standalone SFTP server"),s("OutboundLink")],1),t._v("\nrather than using the one that was built into the Daemon. This provides better compatibility with SFTP clients, improved\ntransfer speeds, and a more native approach to file handling and server operation.")]),t._v(" "),s("p",[t._v("Because this functionality is new, we've decided to make it an opt-in process, rather than an opt-out process. This page\nwill cover how to setup your standalone SFTP server.")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),s("p",[t._v("Once you've done that, restarting the Daemon will apply the change and not boot the built-in server.")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),s("p",[t._v("Excellent, now you've got the server binary. Because we've written this server using "),s("a",{attrs:{href:"https://golang.org",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("go")]),s("OutboundLink")],1),t._v(" there\nare no additional dependencies you need to install.")]),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("Finally, start the SFTP server so that you can then use it to access your files.")]),t._v(" "),t._m(9),s("p",[t._v("By default, this will start the SFTP server on the old port of "),s("code",[t._v("2022")]),t._v(". If you want to use a different port it can be\nspecified by passing the "),s("code",[t._v("--port")]),t._v(" flag. For more advanced usage, please refer to the "),s("a",{attrs:{href:"https://github.com/pterodactyl/sftp-server#running",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github README"),s("OutboundLink")],1),t._v("\nwhich includes all of the flags and their default values.")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),s("p",[t._v("Then, run the command below to enable it in systemd and start the SFTP server.")]),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"standalone-sftp-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#standalone-sftp-server","aria-hidden":"true"}},[this._v("#")]),this._v(" Standalone SFTP Server")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),e("p",[this._v("Standalone SFTP support was introduced in "),e("code",[this._v("Panel@v0.7.11")]),this._v(" and "),e("code",[this._v("Daemon@v0.6.8")]),this._v(" and will not work with prior versions.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"disable-daemon-s-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#disable-daemon-s-server","aria-hidden":"true"}},[this._v("#")]),this._v(" Disable Daemon's Server")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To disable the Daemon SFTP server, you only need to add "),e("code",[this._v("sftp.enabled=false")]),this._v(" to your Daemon's "),e("code",[this._v("core.json")]),this._v(" file.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ...\n  "),s("span",{attrs:{class:"token property"}},[t._v('"sftp"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ...\n    "),s("span",{attrs:{class:"token property"}},[t._v('"ip"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"0.0.0.0"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"enabled"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"port"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("2022")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ...\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ...\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"run-the-standalone-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run-the-standalone-server","aria-hidden":"true"}},[this._v("#")]),this._v(" Run the Standalone Server")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To download the standalone server, execute the command below in your Daemon's base directory (generally "),e("code",[this._v("/srv/daemon")]),this._v(").")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("curl -Lo sftp-server https://github.com/pterodactyl/sftp-server/releases/download/v1.0.4/sftp-server\nchmod +x sftp-server\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"start-the-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start-the-server","aria-hidden":"true"}},[this._v("#")]),this._v(" Start the Server")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("./sftp-server\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"daemonize-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#daemonize-server","aria-hidden":"true"}},[this._v("#")]),this._v(" Daemonize Server")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Chances are you'll want to daemonize the SFTP server using something like "),e("code",[this._v("systemd")]),this._v(" so that it will run in the\nbackground. Place the contents below in a file called "),e("code",[this._v("pterosftp.service")]),this._v(" in the "),e("code",[this._v("/etc/systemd/system")]),this._v(" directory.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("[Unit]\nDescription=Pterodactyl Standalone SFTP Server\nAfter=wings.service\n\n[Service]\nUser=root\nWorkingDirectory=/srv/daemon\nLimitNOFILE=4096\nPIDFile=/var/run/wings/sftp.pid\nExecStart=/srv/daemon/sftp-server\nRestart=on-failure\nStartLimitInterval=600\n\n[Install]\nWantedBy=multi-user.target\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("systemctl "),e("span",{attrs:{class:"token function"}},[this._v("enable")]),this._v(" --now pterosftp\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"customizing-startup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#customizing-startup","aria-hidden":"true"}},[this._v("#")]),this._v(" Customizing Startup")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If you're trying to pass additional arguments to the server when starting it using SystemD you'll want to modify\nthe "),e("code",[this._v("ExecStart")]),this._v(" line. Something like "),e("code",[this._v("ExecStart=/srv/daemon/sftp-server --port 2022")]),this._v(" for example.")])}],!1,null,null,null);e.default=r.exports}}]);