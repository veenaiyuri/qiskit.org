/**
 * @license
 *
 * Copyright (c) 2018, IBM.
 *
 * This source code is licensed under the Apache License, Version 2.0 found in
 * the LICENSE.txt file in the root directory of this source tree.
 */

module.exports = {
  staticFileGlobs: ['src/**/*', 'manifest.json'],
  runtimeCaching: [
    {
      urlPattern: /\/@webcomponents\/webcomponentsjs\//,
      handler: 'fastest',
    },
    {
      urlPattern: /^https:\/\/fonts.gstatic.com\//,
      handler: 'fastest',
    },
  ],
  navigateFallbackWhitelist: [/^(?!\/(documentation|modelq))/],
};
