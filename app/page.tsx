import { Fragment } from 'react'
import HomeScreen from './components/screens/HomeScreen'
import Script from 'next/script'

function Analytics() {
  return (
    <div className="container">
      <Script id="google-analytics">
        {`
          window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'G-6SDDWEZ7WN', 'auto');
          ga('send', 'pageview');
        `}
      </Script>
      <Script src="https://www.google-analytics.com/analytics.js" />
    </div>
  )
}

export default function Home(props: any) {
  return (
    <Fragment>
      <Analytics />
      <HomeScreen />
    </Fragment>
  )
}
