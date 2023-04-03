import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
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
  head: (
    
    ),
  logo: <span>Just Da Notes</span>,
  project: {
    link: 'https://github.com/smmalik3/justDaNotes',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/smmalik3/justDaNotes/tree/main/pages',
  footer: {
    text:  <span>
    Copyright {new Date().getFullYear()} © <a href="https://salmanmalik.co" target="_blank">Salman Malik</a>.
  </span>
  },
  editLink: {
    text: ' '
  },
  feedback: {
    content: 'Question? Give me feedback →',
    labels: 'feedback'
  },
}

export default config