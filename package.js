Package.describe({
  summary: "Bootstrap styled version of login widgets with i18n",
  version: "1.1.8",
  git: "https://github.com/todi01/meteor-accounts-ui-bootstrap-3.git"
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR@0.9.0");
  api.use(['session', 'handlebars', 'stylus', 'accounts-base', 'underscore', 'templating', 'mrt:just-i18n'], 'client');

  api.add_files([
    'accounts_ui.js',

    'login_buttons.html',
    'login_buttons_single.html',
    'login_buttons_dropdown.html',
    'login_buttons_dialogs.html',

    'login_buttons_session.js',

    'login_buttons.js',
    'login_buttons_single.js',
    'login_buttons_dropdown.js',
    'login_buttons_dialogs.js',
    'accounts_ui.styl',
    'i18n/en_US.js',
    'i18n/de_DE.js',
    'i18n/da_DK.js',
    'i18n/nl_NL.js',
    'i18n/nb_NO.js'
    ], 'client');
});

Package.on_test(function (api) {
  //api.use('meteor-accounts-ui-bootstrap');
  //api.use('tinytest');
  //api.add_files('accounts_ui_tests.js', 'client');
});
