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
  docsRepositoryBase: 'https://github.com/smmalik3/justDaNotes/blob/main/',
  footer: {
    text:  <span>
    Copyright {new Date().getFullYear()} © <a href="https://www.salmanmalik.co" target="_blank">Salman Malik</a>.
  </span>
  },
  editLink: {
    text: 'Edit this page'
  },
  feedback: {
    content: 'Questions? Give me feedback →',
    labels: 'feedback'
  },
}

export default config