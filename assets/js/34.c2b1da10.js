(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{143:function(e,a,t){"use strict";t.r(a);var s=t(0),n=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"upgrading-0-6-to-0-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-0-6-to-0-7","aria-hidden":"true"}},[e._v("#")]),e._v(" Upgrading 0.6 to 0.7")]),e._v(" "),t("h2",{attrs:{id:"fetch-updated-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fetch-updated-files","aria-hidden":"true"}},[e._v("#")]),e._v(" Fetch Updated Files")]),e._v(" "),t("p",[e._v("The first step in the update process is to download the new panel files from Github. The command below will download\nthe release archive for the most recent version of Pterodactyl and save it in the current directory. Now is a good time\nto ensure that you're in the "),t("code",[e._v("/var/www/pterodactyl")]),e._v(" directory as the command below will automatically unpack in whatever\ndirectory you are currently in.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[e._v("curl")]),e._v(" -L https://github.com/pterodactyl/panel/releases/download/v0.7.15/panel.tar.gz "),t("span",{attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),t("span",{attrs:{class:"token function"}},[e._v("tar")]),e._v(" --strip-components"),t("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v("1 -xzv\n")])])]),t("p",[e._v("Once all of the files are downloaded we need to set the correct permissions on the cache and storage directories to avoid\nany webserver related errors.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[e._v("chmod")]),e._v(" -R 755 storage/* bootstrap/cache\n")])])]),t("h2",{attrs:{id:"clear-compiled-assets"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clear-compiled-assets","aria-hidden":"true"}},[e._v("#")]),e._v(" Clear Compiled Assets")]),e._v(" "),t("p",[e._v("Previous versions of Pterodactyl attempted to cache your configuration file for speed and performance enhancements. This\nended up just causing more headaches with minimal improvements in performance, so we decided to stop doing that. Running\nthe command below will clear the cached files for you so we can continue with upgrading.")]),e._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("You probably only need to run this command once when upgrading from "),t("code",[e._v("0.6.X")]),e._v(". Once you're upgraded we don't cache the configuration\nfile so there is no reason to remove anything.")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[e._v("rm")]),e._v(" -rf bootstrap/cache/*\n")])])]),t("p",[e._v("Once the configuration cache is removed, you'll need to clear the template cache to ensure users get the most recent\ntemplates.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("php artisan view:clear\n")])])]),t("h2",{attrs:{id:"update-dependencies"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-dependencies","aria-hidden":"true"}},[e._v("#")]),e._v(" Update Dependencies")]),e._v(" "),t("p",[e._v("After you've downloaded all of the new files you will need to upgrade the core components of the panel. To do this,\nsimply run the commands below and follow any prompts.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("composer "),t("span",{attrs:{class:"token function"}},[e._v("install")]),e._v(" --no-dev --optimize-autoloader\n")])])]),t("h2",{attrs:{id:"update-environment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-environment","aria-hidden":"true"}},[e._v("#")]),e._v(" Update Environment")]),e._v(" "),t("p",[e._v("These scripts will display your current values in brackets. To keep the current values simply press enter and it will\ncontinue without making any modifications.")]),e._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("We've changed our recommended cache driver to be Redis, rather than Memcached. If you're using Memcached you can\ncontinue doing so with no problems, however moving forward our installation documentation will only mention Redis.")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("php artisan p:environment:setup\nphp artisan p:environment:mail\nphp artisan p:environment:database\n")])])]),t("h2",{attrs:{id:"database-updates"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#database-updates","aria-hidden":"true"}},[e._v("#")]),e._v(" Database Updates")]),e._v(" "),t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[e._v("Backup your databases")]),e._v(" "),t("p",[e._v("The upgrade from "),t("code",[e._v("0.6")]),e._v(" to "),t("code",[e._v("v0.7")]),e._v(" includes some rather significant database changes. While the migration utility is\nable to handle everything for you, we still suggest taking a backup of your database before proceeding — just incase.")])]),e._v(" "),t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("Running "),t("code",[e._v("db:seed")]),e._v(" below will overwrite any changes you made to core Pterodactyl Nests, Eggs, or Egg Variables! This is\nunavoidable, and this seeder must be run. To avoid this in the future, please create custom nests, or create custom\neggs for game variations.")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("php artisan migrate --force\nphp artisan db:seed --force\n")])])]),t("h2",{attrs:{id:"cleanup-api-keys"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cleanup-api-keys","aria-hidden":"true"}},[e._v("#")]),e._v(" Cleanup API Keys")]),e._v(" "),t("p",[e._v("A significant change is introduced in 0.7.0 that changes how API keys are used, stored, and validated. Due to this\nchange, all previously created keys will no longer function. In order to keep things cleaned up you'll want to remove\nthese orphaned keys. To do so, run the command below.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("php artisan p:migration:clean-orphaned-keys\n")])])]),t("p",[e._v("Don't forget to create new keys for yourself, as well as let all of your users know they'll need to do so as well.")]),e._v(" "),t("h2",{attrs:{id:"set-permissions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-permissions","aria-hidden":"true"}},[e._v("#")]),e._v(" Set Permissions")]),e._v(" "),t("p",[e._v("The last step is to set the proper owner of the files to be the user that runs your webserver. In most cases this\nis "),t("code",[e._v("www-data")]),e._v(" but can vary from system to system — sometimes being "),t("code",[e._v("nginx")]),e._v(", "),t("code",[e._v("apache")]),e._v(", or even "),t("code",[e._v("nobody")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token comment"}},[e._v("# If using NGINX or Apache (not on CentOS):")]),e._v("\n"),t("span",{attrs:{class:"token function"}},[e._v("chown")]),e._v(" -R www-data:www-data * \n\n"),t("span",{attrs:{class:"token comment"}},[e._v("# If using NGINX on CentOS:")]),e._v("\n"),t("span",{attrs:{class:"token function"}},[e._v("chown")]),e._v(" -R nginx:nginx *\n\n"),t("span",{attrs:{class:"token comment"}},[e._v("# If using Apache on CentOS")]),e._v("\n"),t("span",{attrs:{class:"token function"}},[e._v("chown")]),e._v(" -R apache:apache *\n")])])])])}],!1,null,null,null);a.default=n.exports}}]);