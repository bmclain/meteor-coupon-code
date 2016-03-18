Package.describe({
  name: 'bmclain:coupon-code',
  summary: 'An implementation of Perl\'s Algorithm::CouponCode for NodeJS.',
  version: '0.4.3',
  git: 'https://github.com/bmclain/meteor-coupon-code.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('bmclain:xtend');
  api.addFiles([
    'coupon-code.js'
  ], 'server');
  api.export('CouponCode', 'server');
});

Package.onTest(function(api) {
});
