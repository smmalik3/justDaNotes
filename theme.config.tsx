import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
//Google Tag Manager Library 
import Analytics from 'analytics'
import googleTagManager from '@analytics/google-tag-manager'

const analytics = Analytics({
  app: 'devsite',
  plugins: [
    googleTagManager({
      containerId: 'GTM-MFXFZ7V'
    })
  ]
})

/* Track a page view */
analytics.page()

const config: DocsThemeConfig = {
  logo: <span>Just Da Notes</span>,
  project: {
    link: 'https://github.com/smmalik3/justDaNotes',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/smmalik3/justDaNotes',
  footer: {
    text: 'Copyright © Salman Malik 2023',
  },
}

export default config