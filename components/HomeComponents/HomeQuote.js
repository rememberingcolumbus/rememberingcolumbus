import styled from 'styled-components'
import { withRouter } from 'next/router'

const HomeQuoteWrapper = styled.div`
  border-top: 0.1rem solid;
  border-bottom: 0.1rem solid;
  border-color: #FFFFFF;
`

export default function HomeQuote() {
  return (
    <HomeQuoteWrapper>
      <p className="quote_text">
        Every life is sacred. At Remembering Columbus we seek to uplift and honor the deceased during these times of heartache, grief, and solace. 
        Through <a href="http://cantstopcolumbus.com" target="_blank">Can't Stop Columbus</a> we provide assistance and support throughout this process. 
        This website provides: information for funeral planning and logistics, resources for grieving and emotional support, 
        and a virtual memorial to shared stories of your loved ones.
      </p>
    </HomeQuoteWrapper>

  )
}