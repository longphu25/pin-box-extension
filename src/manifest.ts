import { defineManifest } from '@crxjs/vite-plugin';
import packageData from '../package.json';

// @ts-ignore
const isDev = process.env.NODE_ENV == 'development';

export default defineManifest({
  name: `${packageData.displayName || packageData.name}${isDev ? ` ➡️ Dev` : ''}`,
  description: packageData.description,
  version: packageData.version,
  manifest_version: 3,
  icons: {
    16: 'logo-16.png',
    32: 'logo-32.png',
    48: 'logo-48.png',
    128: 'logo-128.png',
  },
  action: {
    default_popup: 'src/popup/popup.html',
    default_icon: 'logo-48.png',
  },
  background: {
    service_worker: 'src/background.ts',
    type: 'module',
  },
  content_scripts: [
    {
      matches: [
        'https://twitter.com/*',
        'https://x.com/*',
        'https://pro.x.com/*',
      ],
      js: ['src/contentScript/twitter.tsx'],
      run_at: 'document_idle',
    },
    {
      matches: ['<all_urls>'],
      js: ['src/contentScript/all.tsx'],
      run_at: 'document_idle',
    },
  ],
  web_accessible_resources: [
    {
      resources: ['logo-16.png', 'logo-32.png', 'logo-48.png', 'logo-128.png'],
      matches: [],
    },
  ],
  permissions: ['storage', 'activeTab', 'scripting', 'tabs'],
  content_security_policy: {
    extension_pages: "script-src 'self'; object-src 'self';",
    sandbox:
      "sandbox allow-scripts allow-forms allow-popups allow-modals; script-src 'self' 'unsafe-inline' 'unsafe-eval'; child-src 'self';",
  },
  //   host_permissions: ['https://twitter.com/*', 'https://x.com/*'],
});
