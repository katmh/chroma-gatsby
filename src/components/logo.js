/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const Logo = ({ width }) => (
  <Link
    to="/"
    sx={{
      stroke: theme => `${theme.colors.primary}`,
      strokeWidth: "2",
      display: "inline-block",
    }}
  >
    <svg
      viewBox="0 0 887.59 141.4"
      sx={{
        width: width ? width : 650,
        maxWidth: '95%'
      }}
    >
      <g>
        <path
          d="M134.6,60.2v.4l-8,6-3.4,4.6-10,5.2c0,.2,0,.2-.2.2l-6,4.8h-.2v-.2L100.2,74H100L80.8,65.2l-10.2,2h-.2l-11,5.4-9.4,7-5,25L51.4,120l3.4,10,11.8,5.2L82,138l16-5.4,9.6-11.4.2.2,16.6,5.8h.2l10,14.4a.2.2,0,0,1-.2.2l-17.2,19.4H117l-14.4,7.4L97,171.2h-.2L84,172l-24-1.4-26.4-8.8s-.2,0,0-.2l-2.8-6-8.6-4.4L22,151v-.4l-9.4-19.2s-.2-.2,0-.2c-.2,0-.2-.2,0-.2L8.4,117.8,8,89.8l2.8-10v-.2l10-22v-.2L42.2,42.2l.2-.2,9.2-7.8V34h.2s0-.2.2,0l13-.6L73.6,32l13.2.6L107,37.2l19.4,11.4c.2.2.2.2.2.4l-.6,3.2,8.4,7.8ZM14.8,96.4,13,88.6l-2-7.8-2.6,9Zm.2,1-6.6-7,.4,26,2.6-8.2Zm-2.4,32.4,2.2-30.6-6,18.6ZM15.2,96l5.4-36.6L11.2,79.8ZM13,130.4l13.2-19.6-10.8-13-1,14Zm11.4-1.6,1.8-17L13,131.2l9.2,18.6Zm2-18.8,4.2-31.4-15,18.6,8.4,10ZM15.8,95l10-27.6-4.6-8.8Zm.2,1,2-2.6L30.6,77.6l-4.4-9.2-.2-.6L22.2,78.2Zm5.4-38.2L26.2,67,48,52.4Zm.6-.6,27-5.6-6.6-9Zm8.6,98L28,136.4l-5.4,14.4,7.4,4ZM22.8,149l5-13.8-1.2-21.6L23,146.2ZM31,77.2l7.6-10.4L48.4,53l-22,14.4,4.2,9.2ZM26.8,110l8-5L31,79.4,30,86Zm1.6,25L46,133.4l-19.2-22L28,130.2ZM35,105.4,31,108l-4,2.6,18.8,21.8Zm9.4,56.8-7.8-13-8-12.8,2.2,15.8.4,3.2Zm8-18.6-23.2-7.8L51,156Zm-.2-.6-5.8-9.2-17,1.6Zm-7,19.4,5.6-5.8L35.6,142.4l-6-5.4L42,157.2ZM40,78.8,31.2,78l4,25.8L37.4,92Zm8.8-25.4-17.2,24,8.6.8,4.2-12ZM34,161.4l9.8,1-5.8-3-6.4-3.2,1.2,2.8Zm6.6-79.6-.2-2-1.6,7.6-3.4,17.4,9-.4Zm4,23-9,.6,10.6,26.2-1.4-23.4Zm6.6,61.4L45,163l-9.2-.8,21.4,7Zm7.6-94L49.4,52.8,45.2,65.4,40.8,78l12-3.8Zm-9.2,7.4-8.8-.8,4,24.6,2.4-11.6Zm3.8-5L41.8,78.4l7.8.8,8.2-6ZM49.2,51l2.4-16.2-8.8,7.4Zm-4,55.2.6,11.6.8,14.2L51,120.2Zm32,41.6-31.4,15L60.2,170l4.2-5.6Zm-3.2,1-22.6,8-4.8,5Zm-22.8-28L47,133.2l2.8-1.2,4.4-2Zm14.2,14.8L47,133.8l5.8,9.2Zm-6.2-3.2-4.6-2-7,3,6.4.6,11,1ZM49.8,51.8v.4l8.8,18.2-2.8-14-4-20.8Zm1.8,104.4,25.2-8.8L53,143.6Zm22-103.8L52.2,34.8l7.2,36.8,9.4-12.8Zm-21.2-18L73,51.4,64.8,33.8ZM66.6,135.8l-8,4.4-5.2,3L77,146.8,66.8,136.2Zm3.6-69L72,59l1.2-5.2L60.4,71.2l-.4.6ZM78,162.4v-2.8L77.6,148,61,169.8Zm5.6,9L78.2,163l-17,7.2ZM65.4,33.8,73.6,51l-.2-18.4Zm2,102.2,10.4,10.8,4-8.4-5.8-1ZM80.6,64.8l-.8-1.6L74,53,70.6,66.8ZM73.8,33,74,47.4l.2,4.8,16.6-.8L82,41.8ZM91,50.8,86.6,33.2l-12.4-.6ZM81,64.4l9.8-12.6-16.4.8Zm23.6,90-17.4-4.6-9-2.2.2,9.8v5Zm-26.2-7.6,21.8-7.2-17.8-1.2L80.2,143Zm27,7-4-14.2-22.6,7.6Zm-8.6,16.8,8.6-16-26.6,8Zm-18-7.4,5.4,8.2,11.6-.6Zm21-90L91.4,52l-5,6.6-5,6.4Zm1.4,65.8L98,133l-14.6,5ZM87.2,33.6l4.4,17.6,13.2-5.6ZM101,42.2l4.4,3,.6-3.8.6-3.8L88,33.4Zm-1,30.6,2.8-13.2L105.2,46,91.8,51.8l3.6,9Zm2.2,95.4,1.8-7.4,1.2-4.6-7.8,14.4Zm-3.8-35.4,3,5.8,5.4-15.4.2-.6Zm13.2-79.4L105.8,46l-5.2,26.8,14-15.8Zm3,4.6L101.8,72.2l-1.2,1.4,12,2.6,1.2-10.6ZM100.8,74.2l6.2,6.6,5.4-4.2Zm1,65,12.4,2.2L110,129l-2.4-6.8-3,8.6Zm2.2,7.6,2,6.8,8.4-11.6L102,139.6Zm2,7.8-1,4.4-2,9,13.4-7Zm-.2-109.2,8.4,10.2-.8-2-6.4-15Zm11,115.2,1-6.2,1-6.4-12.4,6.2,5.2,3.2Zm2-13.2-2-2.6-2-2.6-8.2,11.4Zm-11.2-109,7.6,18.2,8.4-3.6,1.6-.8Zm.6,84.2,1.2,3.2,5.6,15.8,10.4,1.2-5.6-6.8Zm17.6,19.6-1.6-14.6L108.6,122Zm-.2-90.4.6-2.6-16.4-9.8ZM115,58l-1.8,18,9.4-5Zm10.4,85.4-10-1.4,3.8,5.2Zm-9.6-86.6,8.8,1.6,8.8,1.4-7.8-7.2-7,3Zm0,.6L126.4,66l7.2-5.6Zm10.2,9-10-8.2,5.2,9.2,1.8,3.2Zm-3,79-3.6,2.4-1,6.2-1,5.6,8-15.6Zm10.6-3.4-5.4,1-1.8.4L119.6,156l-1.6,3.4Zm-8.8-13.4,1.4,11.8.2,2.4,7.6-1.6Z"
          transform="translate(-8 -30.6)"
        />
        <path
          d="M278.6,66.8v.4l-3.4,15.4L278,97.2l-.8,11.4v25.8l-2.6,19.8,2,13.4v.2a.2.2,0,0,0-.2.2l-14,1.2H262L246.2,168l-8,1.2H238l-.2-.2,1.4-9.4-1.4-21.4,2-21.2-17.6,2-27.6-2.8-3.2,2.6,2.6,42.6v.4l-2.6,6.6-.2.2H153.4l-.2-.2-1.2-4v-.2l3.4-34.2-1.4-7v-.2l-3.4-23.4v-.2l2.6-20.6-1.2-4v-.4l1.2-30.6-2-9.4V34h.2c0-.2,0,0,.2,0l10.6-2.8h.2l8.4,2.8c.2-.2.2,0,.2,0l5.2-1.4h.4L191,34c.2-.2.2,0,.2,0,.2,0,.2,0,.2.2L194,57v.2l-2,7.2a.2.2,0,0,1-.2.2L190,67.8l3.4,17.6L197,83c0-.2.2-.2.2,0l20,2,8-1.4h.2l12.4,2,2.8-23.8-4-8c-.2-.2-.2-.2,0-.4l2.6-18.6c0-.2,0-.2.2-.2L250,32c0-.2,0-.2.2-.2l.2.2,7.2,2.6L277,31.8l.2.2v.4l-1.4,6.4c.2,0,.2.2,0,.2Zm-127.4,32,1-.8,2.4-1.6-1.2-15.6Zm12.8,8-10.8-6-2-1.2,3.2,22.4Zm-1.2-1.4-1.6-1.6L154.8,97l-3.4,2.2Zm-8-68,2.6,2.8,4.4-8.4L152,34.2Zm.6,4.6,1.8-1.2L152,35l1.6,8.2Zm-1.8,36,3-3.8,7.2-8.8-11.4,9.2Zm12.8,80.6-3.8,1.6-10.2,4.4,1.2,3.4ZM152.6,73.2l4.8-8.6,11.8-21-5.8-1.2-5.6-1.2Zm4.6-31.8L155,42.8l-1.2.8-1.2,26.8Zm10.6,94.8-12-5.6-3.2,32.6Zm.2,21.2V137l-15.2,26.8ZM153.2,73.2l12.2-9.8,3.6-18-11.4,20ZM155,96l14-14.6L161.4,80l-7.6-1.2.4,6.8Zm-.8-18,20.4-5-9-9-2.8,3.6Zm16.2,85.2-2.2-5.2-14,10.2h18.4ZM154.6,78.4l14.8,2.4,1.8-2.4,3.2-5ZM166,123.2l-.6-4.2-10.8,3.8,13.2,12.8ZM155.8,130l7,3.4,4,1.8-5.4-5.2-6.8-6.4Zm9.6-11.6-.2-2-1.2-9-9.2,14.8L161,120ZM168.2,87l1-5.2-14,14.8,9,9.4Zm-8-50.8-2,4,12.2-6-8-2.4Zm9.2,7,1.2-8.6-12.4,6.2,3,.6Zm-4.8,63.4L172,114l-2.4-31Zm1.2,11.8,6.2-3.8-7.4-7.2Zm2.4,16,3.6-19.2-2.4,1.6-3.6,2.2,1.4,9.2Zm6.6-61.8,3.8-13.8-6.2,2.4L166,63.8ZM166.2,62,177,40.2l-7.2,3.6Zm12.6-4-1.2-17.4-7.6,15-3.8,7.6,3-1.2Zm1.4,66.6-11.6,11.6,17.8,11.4Zm6.4,23.6-18-11.6v20.6Zm-11.2,11-6.8-1.2,4.4,9.6.6-2.4Zm-6.6-24L180,124l-7.4-8.6Zm7,23.6,10-9.6-16.6,8.4Zm-1-85-5,7.4,2.6,5,4.8,9.4-1.4-13Zm-3.6-39.2L170,43.2l7.2-3.8-3-2.4ZM170,82.4,171.2,99l1.2,14,5-15.6Zm1.4-48.2,2,1.6,3.8,3.2-.8-4.4-.2-1.6Zm1.4,80.2h10l4.2-12.2,5.2-14.4-10.2,14Zm9.8.6h-9.8l3.8,4.4,3.6,4.2,1.4-4.2ZM178,97.4l-5,16L191.8,87Zm-.4,65-1.8-2.6-2,6.2-.6,2.2h8Zm-2.4-88.8,2.6,23,14.8-10.8-5.8-4Zm1-4.4-.8,3,8.8-7.4,8.6-7.6-13.6,1.4ZM189.6,68l-4.8,1.8-9.2,3.4,11.8,8.2,5.4,3.8Zm-8,99.6,5-18.6L176,159l1.8,3Zm-5-134.4.8,4,.4,2,8.2-3.6-2.8-.8Zm.4,38.4,14.6-7.4,1.8-6.4Zm9.6-35.4L181,38.4l-3,1.4.2,2.8,1,14.4Zm-4,33.2-4.2,2.2.6-.4,10.6-3.8,1.6-2.4Zm4.4-33L181.2,53l-1.8,5,14-1.2-6-19.2Zm-7.2-3,7.2,1.8,3-1Zm10.8,85.8-10,5,1.8,6.8,4.6,16Zm-.2-.6-7.2-3.6-2.4,8.4Zm3,43-2-4.2-4.2-8.2-5,18.4,7.4-4Zm-10.8,6.6H191l2.4-6Zm9.4-61-5.8,5-2.8,2.4,7.4,3.6Zm.2-.8.4-18.8-2,6.2-7,20Zm-4.8-70.8L193,54l-2-19.6Zm3.6,86-3.6,26.6,4.2,8.4,1.8,3.8Zm1.4-13.2-.8,6.8-.2,3,2.8-2.2Zm.6-12.2-.4,10,19-11.6-18.2-8.4Zm1.6,19.4,21.4-8.8H192.8Zm22.2-9.2-1-2.4-4-9-18.6,11.4Zm-6.8-13-13-10-3.4,2.4Zm11.8,25-1.2-5L220,111l-24,5Zm-2-8-2.6-3.4-14.4,5.8-5.6,2.4ZM212,94.2l4.8-8.8-18.8-2Zm.4.2,5.8,3.8,10.2,6L217.2,85.6l-.6,1Zm5,12,11-1.2-15.6-9.8,2.8,6.6Zm.2-21,2.8,4.6,8.4,13.8L225,84Zm2.6,25,8-4.6-7.6.6-3,.4Zm18.6,6.2L220.6,111l1.8,7.4Zm.4-.4-9.8-10.4-.2-.2-8.4,5ZM232,85.4,225.6,84l3.8,20.4,3.6-7.8L237.6,86h-.2Zm-2.2,19.8,8.6,4,.8.4L238,87l-5.2,11.4Zm9.4,6.2v-1.2l-3.4-1.6-5.2-2.4,9,9.6Zm1.6-50.2,6.6-7.4,4.4-5-14.8,5Zm1.4-16.6,7.4-12.2-10,2.6-2.4,17.4Zm-4.8,8.6L252.6,48l-.6-3.8-2-11.4Zm8,36.6,1.6,1-3.4-15.6L240.8,63l-2.4,22.6Zm-7-3.6.4,6.6.8,16L247,91.2Zm18,45.2-16.2-14.2-1.8,20.6Zm-.2.6-17.8,6.4,1.2,20.4Zm-7,26.8-7.6.8-2,.2-1.2,8.6Zm-3.2,8.6,2.6-6.4.8-1.8-6,5.4-4.6,4Zm8.4-38.6L239.8,111l.6,5.6ZM240,109.6l12.6-1.2,1.8-6.6,5.6-21-18.8,27Zm12.6-.8L240,110.2l16.4,20.2ZM250,158l2.4-13.6-12.4,15,7.4-1Zm-9.2-50.4,12-17,6.8-10-12,10.8Zm11.8-37.2V48.8L241.2,61.6Zm-5.2,19.4,2.8-10.2,2.4-8.4-8.2-6.4-3.2-2.6,1.6,7.4Zm5.2,53.6,3.4-10.2-14,23Zm5.6,11.4-11.6,12.8,15.2,1.2ZM247,166.4,257.2,155l-6.8,3.6ZM260.6,79,253,71.6,248.4,89l-.4,1.4Zm-7-38,1.8-3,1.8-3-6.6-2.4Zm4.2,113.2-4.8-9.8-1.2,6.6-1.2,6.6Zm-5-108,.4-4.6-2.4-7,.2,2ZM258,57.8,254.8,52,253,49.2V69.8Zm-4.2-16-.6,6,8.4-4.8-4.6-.8Zm8,1.6-8.6,5,5,8.6,1.8-6.8ZM253.2,71l7.2,7.2-1-8.6L258,58.8l-1.8,4.6Zm0,37.6,8.8,5L260.6,81l-.2.8Zm3.8,21.6,5-16-7-4.2-1.8-1,3.4,19ZM253.2,143l15.6-9.4,3.4-2H257Zm0,.6,5,10.2,14-21.6Zm4.4-108.2L254,41.2l7.8,1.4Zm4.8,78.8-5,16.2,8.2-9.2,10.4-12Zm14.2-4.8-19.2,21.8h15.4ZM258,35l4.4,7.4,11-8,2.8-2Zm.6,21.8,15.8-17.2-12,3.4Zm0,.8,7.6,12.8L275,40ZM266,71l-7.4-12.2.8,7L261,78.2Zm0,79.6-7.4,3.8,3.6,13.6.4-2.2Zm5.8-16.8-8.4,13-4.4,6.8,7-3.6,2.8-7.8ZM274.2,82l-8-10.6-2.6,3.8-2.4,3.6,9.6,2.4Zm-13-2.2.4,10,.8,22.4,5-23.6Zm13.2,2.8L268,81l-6.4-1.4,4,5.6,2.2,3,2.2-1.8Zm-.4,71.8-7.6-3.8-3.2,14.8-.6,2.6,8.6-10.2Zm-6.4-65-1,4-3.8,19,8.4-14Zm4,9.6-8.8,14.6,13.8-5Zm2.6,55.8-5.6,7-5.8,7,13.2-1.4ZM263.6,42.2l11.8-3.6,1.2-5.8Zm12-2.2-9,30.6,11.6-3.8Zm-9,31.2,2.8,3.6,5.4,7.2L278,67.4Zm0,79,7.6,3.8,2.4-18.8Zm6.6-18.4L269,143.4l-1.8,5,9.4-14.2ZM274.8,83l-3,2.4L268,88.6l9.4,8Zm-6.6,6.4,3.6,9,5.4-1.2Zm3.8,9.4,1.6,3,3.2,6,.6-10.2Zm4.8,12.6-3.6,19.8,3.6,2.6Z"
          transform="translate(-8 -30.6)"
        />
        <path
          d="M420.59,169.2H417l-11.4.8-28.19-.8h-.2l-2.6-7.4-22.2-33.4-16.4-2-1.4,25.2,4.6,16.2.2.6a.2.2,0,0,1-.2.2l-13,1.4-18.8-1.4h-9.8c-.2,0-.2,0-.4-.2l-2.6-7.2v-.4l4.8-21.2c-.2,0-.2,0,0-.2l-3.4-7.8v-.4l3.8-31.2c0-.2,0-.2.2-.2l-3.4-9.4,3-13.4-3-34.6V42l2.8-7.2c-.2,0,0,0,.2-.2l10.6-1.4L326.4,36c0-.2.2,0,.2,0l11.6-2h.2c0-.2.2,0,.2,0h23.8s.2-.2.2,0h.2l21.4,2.6,21.39,12c.21,0,.21,0,.21.2l11.39,23-4,28.8v.2L397.8,117.4a.2.2,0,0,1-.2.2l-9.2,4.6,14.79,16.4,10.61,14.2,1.59,3.4ZM319.2,159.4,299.6,140l-4.4,20.8Zm-24,2.2,2.4,6.6h9Zm12.4,6.4,11.2-8.2-23.2,1.4,2.2,1.4Zm-2.4-43.4-1.6-7.4-3.4-16L296.4,131Zm-5.6,14.2,1.2-3.2,4-10-8.4,6ZM304,54l-4.6-18.4-2.2,6.6Zm-4.2,21.6,4.6-19.8-7.2-12.4Zm10.6,3L300,77.4l-2.8,12.4,8-6.8ZM300.2,99.4l10-20-13,11.2Zm-.2-64L304.6,55l9.2-11.4-4.6-2.8ZM300,139l5-1.8,1.6-.6L305.2,126l-3.4,8.6Zm7-2-7,2.6,18.8,18.6-1.6-3Zm6.6-94-1-2.4L310,33.8,300.2,35ZM300.2,75.8l12-16L304.8,56,302,67.4Zm10.6,2.4L312,60.6l-8.8,12.2-3,4ZM305.6,124l4.2-4.4,4.8-5.6-12.4-12-1.6-1.4,1,4.4Zm-4.8-24.6,17.8-10.2L314.8,84,311,79Zm.2.4,10,1.8,3-5,4.2-6.8Zm9.8,2.2-1.6-.4-8-1.2,13.2,12.8ZM305,55.6l7.4,3.6.4-5,1-9.6Zm.8,69.2,1.4,10.6,7.2-20.4Zm1.8,11.4,15-11.6-2.6-3.4-4.8-6.8-7.4,21Zm15.2-11-15.2,11.6,13.6,6.2.4-4.4Zm-3.2,33.6,1.2-12.2.4-3-7.6-3.6-6-2.6,6,10.6Zm6.4,10.6-6.2-9.4-11.6,8.2ZM311.6,36.2l2.6,7,11.6-7-15.2-2.4Zm-.4,41.6,7.6-5.6,7.6-5.8L312.8,60l-.8,9Zm7.6,10.8,7.6-21.4-15,11.2,4.6,6.4Zm.2,1-7.6,12,22.8-3.2Zm-3.8,24,19-14.6-22.8,3Zm11-47.8-6-10.8-5.8-10.6-1.6,15,6.4,3.2Zm.2-29.4-11.6,7L325.2,46l10.4,2.4-6.2-8Zm9.2,28.8.4-10.8.2-5.2L314.8,44Zm-20.2-20,11.6,21,8.2-.8Zm7.6,79,11.2-24.8L315.4,114ZM328.2,79l-9,10.2L334.6,98l-.2-.2Zm0-.6-1.4-10.8-3.6,10.2L319.6,88l6.8-7.6Zm1.8,69.2-1-.4-7.4-3.4-1.4,15,7.4-8.4Zm.4.4-5,5.6-5,5.8,18.2,8.6-7.2-17.6Zm7.8,20.2-17.6-8,6,9.2Zm-3-41.8-12-1.4-1.4,17.6L332,130.4Zm-.2.8-10.6,13-2.6,3.2,8.4,3.8Zm.6-12.2L335,99.8l-11.2,24Zm-11.8,9.4,11.8,1.4v-10Zm3-88,9.4,12,1.2-9.4.6-4.6Zm1.8,41.2L335.4,66l-8.2.6Zm7.6-4-7.4,5,4.2,13,2,5.6Zm-.6-7.2-4.6,8-1.8,3.2,3.4-2.2,3.6-2.4ZM334.2,151l1.2-22.4-4.8,18.8Zm-3-2.2,6.4,14.8-3.4-11.8Zm43.2-54.4,6.2-7.4-4.2-17.8-23.2-4.6L336,66l.6,6.8v.4l-1.2,25.2,22.6-.8h9.2Zm-31,7.6-4-1.6-4-1.4.2,6.2.4,9.4,2.6-4.4ZM336,65l23.6-17.6-23,1.8-.2,5.4Zm0,50.8v10l15.8,2Zm.2-17,.8.2,6.8,2.6,9.4-2.6,2.6-.8Zm16.2,28.8,2-11.6,3-17.6-21.2,17,2.4,2Zm.6-63.4L359.8,48,336.6,65.4Zm3.6,34.4-8.8,2.4-3.8,1.2-7.4,12.2Zm-19.8-50,23-1.8L338.6,34.6Zm23.4-2,2.2-12.2h-23Zm-7,79.8L367,98.2h-8.8l-1.4,8.4Zm.2.6,7.2-6,12.8-10.8-6-11.8Zm.2-63,19.2-6.4L360.6,47.4,355,60.8Zm20,46.6-20,17,33.8-5.8Zm6,35.2-1.8-9.6-.6-3.2-23.6-4.4Zm-1,13,1.2-12.4-26-17.2Zm-24.4-30.6,23,4.4,10.2-10.2Zm22.2-59.4-1.6-5.4L373.2,58l-12.8,4.2-6,2Zm2,90.4L363,140.8l-8-9.4,20,30ZM362.8,35l-2,12,11.8,9.6Zm10.6,22,5.2-10.2,5-9.8L363,34.4Zm-5.8,41,5.8,11.4.4-9.6L374,95Zm15.6-58.8-9.6,18.6,3,10Zm1,65.4-3.6-16.4-3.4,11.4L374,110.2l13.6,11Zm-9.4-10-.8,13.6,3.8-12,2.4-8Zm3.2,68.2.6-3-.6.4-2.8,1.6,2,6.2ZM377,69l15.4,16.6-2-19.2-1.2-9.6Zm7-31-6.8,30.2,5.8-5.8,6.2-6.2Zm-3,49,11.19-.8-15-16.4Zm-2.6,50.2,1.8,8.4,8-12.4-10.6-.2Zm-.8,31.4L395,162l-16-2.4Zm10.2-45.8-9.8,9.8,10.4.2Zm8.2,39.4-17.4,6.6,26.39.6Zm-.81-.6L380.6,147.2l-.4-.4-.2,1.6-.8,10.6,10.6,1.8Zm-6.79-28-1.4,2.2-6.6,10.4,15.2,15-.2-.8Zm8.79-16.4L381.4,88.8l7,33Zm3.61-18.4-8-12-11.2.6Zm.6,1L381.6,88l15.8,28.6Zm-6.6-56.6-10.2-5.6,3.8,13.8,1.2,4.6,15.2-7.2Zm-6,89.6,13.39,5.4L388.4,122.8ZM396,161l2.8-9.2,4-12.8L389,133.4ZM389.8,56.4,395.19,68l.41.6.2-.4L405,49.6Zm0,1.2,2,18.6,1,8.6,1.39-8.8,1-6.8-5-10.6Zm3.39,28.2,8.61-5.4-2.61-4.6L395.6,70l-1.2,7.8Zm8.81-5-2.6,1.8-6.21,4L401.4,99l.4-12.2ZM395.8,69,402,79.8l3.19-29.6Zm7.39,70.4-6.79,22,16.79-8.6Zm11.4,17.4-18,5.2,9,7.4,7.8-11ZM402,100l-3.81,15.6-.19,1,14.39-15.8Zm-3.2,60.8,5-1.4,11-3.4-1.21-2.8Zm8.39-79-4.79-1-.21,5.2L402,98.4l5.4-10,3.19-5.8Zm5.4,18.6-1.79-17-4,7-4.8,9Zm-7-49.6L402.4,80.2l2.79.6,5.4,1.4Zm5.6,31,5.61-10.2L406,50.2Zm5.4,87-1.79-11.6-1.61,2.4-7,9.8Zm-5.4-86.2,1.8,16,3.6-25.6Zm4.61,75.8,1,7.6.39,2.8H420Z"
          transform="translate(-8 -30.6)"
        />
        <path
          d="M570.59,110v.2l-5.2,19.4v.2l-3.4,4.8.6,2.8a.62.62,0,0,1-.2.4l-26.2,24-15.59,5.6h-.2l-14.8,3.8h-.4l-15.2-.4L474,165l-12.4-3.2h-.2l-17.2-18-7.8-4-.2-.2L428.6,113l.8-24.2s-.2,0,0-.2L437,70.8l7-16c.2,0,.2-.2.4,0l3.8-.8,17.2-17.8c0-.2,0-.2.2-.2h.2l7.2-.8,23-4.6h.4l1.8,2.8,11.2-1.6.2.2.2.2,28.6,11h.2l5,2.2h.19l24,26.2c.2,0,.2,0,.2.2v4.6l2.6,33.4ZM444,86l-10.6,2.2-3.6.8-.8,23.2Zm-5.8,27.2,5.6-25.8-14.6,25.4Zm12.6,27.4-12.6-27-8.8-.2Zm-3.8.6,4.4.8-22-27.8,7.2,25Zm-2.8-55.8-3.6-7.2-3.2-6.6L430,88.4ZM461.8,68,444.4,55.4l-6.8,15.2Zm4,24.4-3.6-24L438,71.2Zm-21-7,19.8,6.8L438.2,72Zm5.6,57-4.8-.8-7.4-1.4,6,3Zm-11.6-29.2,10.2,3.6-4.6-29.6Zm12.6,27.4-2-20.2-.2-3L439,113.8l4.2,9Zm8.2-74.8L448,54.4l-3.2.6Zm-7.8,76.8-7,1.2,15.8,16.4Zm5-32.2.6-1,8.4-16.2L445.2,86Zm-7.2,6.2,7-5.8L445.2,87.4,447,99.2Zm24.6-61.8-8.6-18.2L448.6,54Zm-25.4-.2,13.6,13.2L474,55.2Zm12.6,63.6-4.6-7-7,6,20.8,15.2Zm-.2,15-11.4-15,2.4,24,16.8,1.2Zm8.2,9.8,1.6-7,.6-2.4-20.8-15,6.8,9Zm0,.8-17-1.2L473.6,164Zm-16.4,0,8.8,17.6,11.4,2.8ZM464,109l-4.4,1.4-2.4.6,17.4,15.2-4.2-7Zm-6.6,1.4,6.6-2,1.6-14Zm.6,1.8L471.8,133l3.6-5.6L458.8,113Zm5-44,13.2,3.4-1.8-16L473,57.2Zm0,.4,7.4,12.2,5.6-8.4-10.8-3.2Zm3.2,23.2L470,81.2l-7-11.8,1,7.2Zm.2,1.2-1.8,15.8L476,127.2l16.2,9.4,11.2,1.4,12.4-5.6v-.2L529,122.8l6.2-14.2L534.4,95v-.2L525,75.8,510.19,66,492.6,63.2,476.8,72v.2l-6.2,9-4.2,11.4Zm8.2-38.6L480,40.6l-13.8-4Zm4.2-14.8L476.4,38,473,35.8l-6,.4ZM472,134l-1.2,4.6-1,4.8,27.6,4.2Zm-1,11.8-1-1.2,4.2,20,15,5.2Zm17,13.8.2-.2,10.4-11-28-4.4,16,14.4Zm-.2.4-16.2-14.2,18.2,23.8Zm-15.6-26.6L497.4,147l-21.6-19.2Zm2.6-97.8,20.4,6L496,39l1.6-5-14.8,1Zm5.8,4.6,12.2,1.2-18-5,2.4,1.6ZM475,55l17,7.6L480.6,41l-1.4,3.2Zm1.8,16.8L492,63l-17-7.6Zm20.8-38.4L496,31l-18.2,3.8ZM491.8,137v-.2l-13.6-7.6L498,146.8ZM481,40.8,492.4,62l2.2-16,.6-3.8Zm7.4,119.6,2,10,14,.4Zm.8-1.6,21.4-10.6-11.4.2-6,6.2Zm16,12,13.6-7-29.6-3.4Zm6.4-22.6-22,11.4,29.8-1.6Zm8,15.2v-4.8l-28,1.4Zm-16.6-25-10.6-1.2,1.4,2.2,5.2,8.2ZM492.8,62.6l16.6-6.8L495.6,42.4l-1.8,12.2Zm17.39,3L510,62.4l-.4-6.2-16,6.6Zm-12-31.8-2.4,7.4.8-.6,11.6-8-8.4,1Zm-2,8.4,13.6,13.2,8-14.8.2-.6Zm13-9.6-12.4,8.6,3.6-1L511,37Zm2.2,5L498,41.4l19.19-1.8-3.59-1.2ZM514.19,138l1.41-4.8-16,14.6,11.8-.2Zm-10.59.4-3.8,8.8,14.8-14ZM517,167.8l3.19-.8-.59-3L508,170.2ZM510,33l1.6,4,5.8,2-.4-.4Zm.19,23v1.8l.41,7.2,3.8-6.4,7.79-13-1.39,1.2ZM535.6,42.6l-25-9.8,8,6.6ZM511,54.4l9.4-8,2.4-2-4.2-4.2L516,44.8Zm14.19-.4-2-9-12,19.8Zm.21.8L511.19,65.6,527,67.4ZM526.8,68l-15.4-1.8,13.4,9.2Zm-10.61,64.6L512,147.4l19.8-14.8ZM512,148l7.8,9.8,12-24.6Zm20-15.8-1.39-4.4L529,123.4l-12.19,8.8Zm-12.59-92,1.79,1.8,2.21,2.2L536,43.4Zm10.2,98.4L520,158.4v.8l.19,3Zm-1.41,24.2-8,1.2v.8l.41,2L534,162.2Zm4.21-29.2-5.21,12.6-6.79,17.2,15.39-2Zm-6.8-79.8,10.19-6.4L523.6,44.8l1,4.6Zm12.19-10-12.8.8,11.2,2.4Zm-4,48.8L533,89.4l-5.8-20.8-1.79,7.2Zm-7-29.4.6,4.2,6-4,6-4.2-13.6-4.6Zm9.39-15.6L526,54.2l13.61,4.4-1-3.6Zm3.8,12L527.6,67.8,553,85.4ZM527.6,68.4l7.2,26L553,86.2ZM543,111,529.4,123l.79,2.2,2.41,6.4L538,121Zm-7.39-2.2L529.8,122l13.6-12Zm7.59,34.4L532.8,133,534,143.4l2.2,17.2.6-1.6Zm.8-33-11,21.6,24-14.6-6.4-3.4Zm13,7.8-24,14.6,10.41,9.8.2.4Zm-21.2-9.6,2.61.4,5.2.8-3-4.6-5.8-9.4Zm1.61-9.8L544,109.4l10.6-7.4-19.4-6.8Zm26.39-4.2-10.2-8-17.6,8ZM536,95l19,6.8,8.4-6.8Zm7.8,48.4-7.19,17.4,24.59-22.6Zm-5.6-99-1.4,3,2.81,8.8Zm.41-.6,1.59,13.8,2-8,1.21-4Zm2.8,10.8-1,4.4,26.39,12-23-25Zm-.61,5.4.2.6,12.6,25.2,13.6-9.4Zm26.8,16V72l-24-11Zm-10,42-13.4,24.6,17.4-8.2ZM555,102.4l-5.2,3.8-5.39,3.6,12.79,7-1.2-8.6Zm6.6,32.6-14.4,6.8,15-4.6ZM554,86.2l10.2,8,3.2-17.2-9,6.2Zm8,17-6.59-1,2.19,14L559,112Zm1.8-7.8-8,6.4,4.8.6,1.6.2Zm-1.2,8L558,116.6l10.2-5.6,1.8-1-.6-.4Zm.8,10.8-5.4,3.2,5,8.2,2,3.4,5-18.4Zm1.4,15.4-6.6-10.8L562,134Zm-.4-34.2-.4,2-1.2,5.4,4.4,4,2.6,2.2Zm.2-.8,5.4,13.6-2.4-29.8Z"
          transform="translate(-8 -30.6)"
        />
        <path
          d="M733.39,140v.2L732,167c0,.2,0,.2-.2.2L721,170l-10-2.8-16.6,1.4H694V163l-1.4-33.6,2.8-27.4c-.2,0,0,0,0-.2l-2.6-7.4-9,13.4a.2.2,0,0,1-.2.2v.2l-4.6,12-13.4,15.4-.2.2h-6c-.2,0-.2-.2-.4-.2v-.2l-9.2-8.4-.2-.2-11.8-13.2-.2-.2-8.2-15.8-3.6-5.8-.4,2.8,2,3.4L626,112v.2l-1.4,18.6,6.8,25.4.6,12.2a.2.2,0,0,1-.2.2h-5.4l-16.6,1.4h-.39l-6.61-2.8L589.6,170h-.2l-.21-.2.21-24.2-1.41-8-1.39-16.2,4-16.2-4-40.2L588,38.2V38l10.61-4h.59l9.8,2.6,16.6-2.6h.4l6.6,6.6.2.2-.2.2,6.8,13v.2l8,8.6L660.59,86l4.6-7a.2.2,0,0,1,.2-.2l2.4-1.8,6.8-15.6,2.6-1.2,8-18a.2.2,0,0,1,.2-.2l8.2-9.4,16.8,1.4h.2l6.4,2.6,13.2-2.6c.2,0,.2-.2.2,0,.2-.2.2,0,.2,0,.2.2.2.2,0,.2V48.8l1.4,9.4V70.6l-2.6,15.8,5.4,25.6-5.4,20ZM598.4,34.8l-10,3.6-1.21,25ZM600,74,598.6,35.8,587.19,65Zm-9,30,9-29.4L595,71l-7.8-5.4Zm14,27.6-7-12.8L591,106l-3.8,15.2Zm-12.39,4.2L605,132l-17.8-10.2,1.21,15.4Zm7,1.2,4.8-4.2-16,5,1.4,7.2Zm-1,16.6-8.8-7.4v22.6Zm-8.61-8,8.8,7.6,4.61-15,1.79-5.2-6.4,5.2Zm8.8,8.8-8.8,15,12.61-2.6Zm6.61-23.2V92.4l-14.21,13Zm0-39.6-3-9.4-2.21-7-8.79,29.4,2.4-2.2Zm-5-19.4,1-5.8L604.79,49l-5.6-13.2.41,12.6Zm-1.21,81.2,10-1.4-3.59-19-2.81,8.8Zm10-.8-10,1.2,3.8,12.6ZM605,48.2,608.6,37l-9.2-2.6Zm.61,42.6,7.39-39L600.6,74.4Zm-4.81-18.2,12.4-22.2-8-1.2Zm8.61,96.8v-16l-2.21,4.6-4,9Zm-4-120.8,8,1.4-4.21-11.8-.2-.6-1.8,5.4Zm5.39,66-3.19-13.4-1.81-7.4v36.8Zm1.8-8,2.2-8.6L606,92.4l5,21.2ZM606,132.4l3,14.8.8,3.8,4.2-12.2,2-6.4Zm8-82-5.2,26-2.6,13.8,25.6-48.8Zm11.6,15.4-19.4,25.8,19.4-.6ZM611.19,115l-5,16.2L625,112.4l-3.2.6Zm13.6-1.6-18.6,18.4h10ZM606.4,92,615,97.6l10-6.2Zm25.19-49-24.4,46.4,18.4-24.6Zm-22.4-6,1.41,4.2,3.19,8.6L619.4,42l5.79-7.6Zm5.6,118.4,2.61-6.6L610,152.4v2l-.2,14Zm1.4-22-6,18.2,7.21-3.6Zm10,34.8-.4-4.6-1.6-13.2-7,9.4-7,9.6Zm-2.4-18.4-6-1.2-7.39,19.6,3-4Zm1.4-38-10-13.4-3.79,16,7-1.4ZM614.4,49.6,632,40.8l-6.2-6.4Zm1.19,48.6,10.2,13,1-13Zm1,34.2,1.2,14.6,6.2-16-5,1Zm.2-35.4,8-2.6.6-2.8Zm8.2-2.2-8.2,2.8h9.8Zm-6,32.4-2.2,4.6,5-.8,2.4-.4,1.2-17.2Zm-.8,20.8,6,1.2V132l-1.4,4Zm6.4,1.4,6,6.2-6-23Zm.2,1.8,1.8,17h4.8Zm6.2,5.2-5.8-5.6,6.2,15.8Zm-5-66.6L638.59,55,626,65.2Zm6.6-48.4-6.4,22.8,12.6-10Zm7.6,48.2-14,1.8,3.4,5.6ZM638.79,56l-9.2,25.4-3.2,8.6,11.8-13.6ZM641,89l-2.6-12-6.6,7.8-5.2,6Zm-2,13.8,1.8-13-11,7.8,7.8,14.8Zm2.4-12.4-3,22,7.8-7.8Zm7.4,17.8-2.2-3.2-8.2,8.2,15,1.2Zm1,18.2,3.6-11.4-15-1.4Zm-10.6-62.6-.4,11.8L647,63l-7.6-8.2ZM639,76.4l21,9.4-12.8-22.4Zm7.8,13.2-4-6.4L639,77.6l1.2,6,1.2,5.4,1.8.2ZM639.39,77l8.2,12.6,12.2-3.2Zm7,26.4L647,92l.2-2-5.6-.4Zm1.2-13-.6,10.4-.2,3.6,19.6,2Zm-.4,14.4,7,9.4,12.4-7.4Zm13.2-18-4,1L648,90l19,15.8ZM654,115.6l-2,5.4-1.8,5.6,8.6,8.2Zm13-8.4-12.8,7.6,4.4,17.2.6,2.2,6.6-23Zm-1.8,28L667,109l-2.6,9.4-4.6,16.8ZM661,86.6l4.2,12.8,1.8,5.2-1.8-24.8Zm4.6-7.2.6,7.4,1.4,18.8,1.2-3.4,7.6-20.2-7.2-1.8Zm2,27.8-1,11.8-1,15.8,12.8-14.8Zm7-26.2.6.2-.6-.4L668,77.4,666,79ZM668,105.6l7.8-7.8.6-14.4Zm0,1.2,10.6,12.6.4-9.8.2-6.6Zm.4-29.8,8,4.4-1.8-18.8ZM676,98.2l-7.6,7.8,10.4-3.6L678,101Zm-1-36.4,1.6,16,.6-16.2v-1Zm17.2,24.8L677,82.2l-.2,3.6-.4,11.6,8-5.4ZM676.39,98l1.6,2,1.4,2.2,12.2-14.6Zm.6-18,7.4-21.2-6.8,1.8Zm0,1.6,5.2,1.6,10.2,2.8-7.6-27-.6,1.6Zm.8-21.8,6.8-1.8.4-14.4Zm5.2,48.4-3.4-4.8-.2,4.4-.4,10.6Zm9-13.4-12.2,7.8,1.8,2.4,1.8,2.6Zm.6-7.6-12,14.4,12-7.8Zm-6.8-43.8L685,57.8l4.8-2.8,1.2-.8-2.8-5.6Zm.8,17.2,4.6,6.2V54.6l-6,3.8Zm-1.2-1,7,24.6V82.6l-1.2-14.8v-.2Zm.4-17.4,10.6,8.8L695,42.2l-1.6-8.8Zm5.8,11.6,4.8-2.2-10.2-8.4,2.6,5.2Zm.2.6V66.2l4.6-14-2.2,1ZM693,84.2l3.6-17.4-4.8,1.2ZM697,52l-4.8,14.6,9.6-12.2Zm-4.6,15.2,4.2-1,4.6-10Zm3.2,34,2.8-4,8.6-13-6,1-7.8,1.6Zm-1.2-5.2-1.2-6.2v4l1.6,5.2Zm6.2,38.2-2.2-12.8-2.8-17.6-2.4,25.6Zm-5.6,25,5.6-24.2-4.8-3.4-2.6-1.8,1.2,31.6Zm17.4-92.6h-15.2l-3.8,19ZM693.79,33l1,6L697,51l6.4-8.4,6.4-8.2Zm13.6,50.6,2-6,3-10.2L693.79,86l10.8-1.8Zm-7.2,80.6,4.8-3.4-10.6,2.4V168ZM706,160l3.6-28.6-15,31.2,4.6-1Zm-10.8.4,7.8-16,6.8-14.4-8.6,5Zm15.4,6.4-1.4-2.2-2.8-4-11,7.4Zm-9.4-32.4,8.8-5-14-26.2,1.6,9.6Zm-4.8-33.2,20.2-12-8.8-5Zm28.4,5.6-28.4-4.4,23.2,23.8Zm4-19.8-32.2,14.8,28.2,4.6Zm-18.4,42.2,2.8-.8,6-1.8-22.6-23.4,4.8,9Zm-13.2-77.6,4.8,2.2,3.4-8,3.8-9.8-8.6,11.2Zm.4,14.4L718,60.8l-3-4-4.8-6.2L707,54.4Zm.2-1,11.6-14-7,3.6Zm1,1.2h14l4.8-4.8Zm18.4,23.2-17.4,10.2,26.6-12.2L721,88.6ZM710,35.6l-7.4,18.2L710,50Zm-3.2,123.8,12.6-13.8-8.8-15.2Zm4.2,7.2,1.8-2.4,1.8-2.4-3.2-.4-4.6-.8,2.8,4Zm4-5.2,1.6-6,2.6-8.8L717,149l-10,11Zm-2-94-5,16.2,7,4.2,1.8,1Zm-2.4-33V49l3-5.8,3-6.2Zm10.2,12.2-10.2,3.8,2.6,3.4,5,6.6,1.6-8.2Zm-1.6,80.6-5.8,1.6-2.8.8,8.6,14.8ZM717,37.4l-6,12.4,9.8-3.8Zm-.2,127L715,162l-3.6,4.8,9,2.6Zm-3.4-97,3.8,21.4,5.8-1.2,5.6-1.4L725,81.6Zm.2-.6,6,7.6L729,86l2.6-15.4Zm.4-.6,17.6,3.8V58.6Zm4.6-5-4.2,4.2,7.4-3,9.8-4.4-1.4-8.6Zm2.2,107.8-1.4-21.6-.8,2.6-3.4,11.6Zm-.6-125,.8,1.8,3-3.8,5.8-7.6L717.39,37Zm1,2.6-2.4,13.6L730,49l-3.2-.8Zm7.4,85L725,108l-5,18.6Zm.2.6-8.8-5v17.6Zm4,8.4L720,145.8l.2,3.8,1,19,2.4-5.8Zm-3.8-8-8.6,12.4,12.4-5ZM721.39,46l5.8,1.8,3,.8V34.8l-3.4,4Zm6.8,106.6-6.8,16.8,10.2-2.6,1.2-25.2Zm1-65-3.8,19,8.8,5Zm-2,20.4-1.8-1,3.8,23.8,5-18.6Z"
          transform="translate(-8 -30.6)"
        />
        <path
          d="M895.59,168.4v.2h-.2l-8,1.4h-.2l-12.6-2.8-10.8,1.4H853a.2.2,0,0,1-.2-.2l-2.6-14.6v-.2l-4-9.2-18.6,1.4h-.2l-16-1.4-15.8,1.4-9.4,20a.2.2,0,0,0-.2.2l-3.8,1.2H782l-12,1.4h-.39l-11.8-.6-10.6.6h-.4V168l5.39-19.8c0-.2,0-.2.21-.2l11.79-18.6,5.41-18.8a.2.2,0,0,1,.2-.2l10.6-16,5.39-19.8c0-.2-.19-.2,0-.4l8-13.4,5.4-29.4v-.2h.4l12,2.8,10.6-1.4h.2l11.8,2.6L845,32.6h.2v.2l1.4,20,7.8,9.2a.2.2,0,0,1,.2.2l2.8,18.8,5.2,12s.2.2,0,.2c.2,0,0,0,0,.2l12.2,26.4v.2l6.6,12,.2.2,8,13.2,6,22.8ZM763.6,146l-11,2.4-5,18.8Zm-16,22,10-2.6,3.2-9.8,2.8-8.6L753,161Zm10.2-2-8.2,2,8.2-.6,9.19.6Zm6.39-20.6V130.2L753,147.8ZM769.6,168l-5-21.4-6.41,18.8,5.61,1.4Zm3.8-26.2L769.8,112l-5,17.4Zm-8.6,3.4,3.19-.8,5.41-1.6-8.6-12.4Zm8.6-2-8.6,2.6,2.8,12,2.2,9.4Zm-3.21-32.6,3.41,2.6,6.8,5V95.4Zm3.8,30.8,6.41-22.6-10.21-7.6,2.8,22.4Zm5,17.8-5-15-1,6.6-2.8,17.4,11.41-1.4Zm-4.8-16.4,8.6,5-.6-7-1.79-20.6Zm8.8,5.6-8.59-4.8,7.39,22.2,1-15Zm5.41-54L788,91.8l-2.2-16.2-5,18.8Zm-2.61,16.2-2.39-7.2L780.79,96v22Zm-5,8,8.8,8.8-3.8-16Zm8.8,9.6-8.8-8.8,2.61,27.4ZM781,94.8l2.41,7.4,2.39,7.2L788,97.2l.41-2.4Zm13.6,51.2-11,2.4L782.19,166Zm-5.4,9.8-6.59,10.8,3.19-1.2,7.8-16.4Zm.8-27L783.6,148l5.59-1.2,5.8-1.4-4.59-15Zm-3.8-54.4L799,83.2,796.4,72.4,794,61.6Zm2.6,19.6,10-10.2-4.2-3-8.4-5.8,1.21,9.6Zm-2.6,16.4,8.6,8.8-3-11.8-3.2-11.8Zm3.8,17,5-7.4-8.59-8.6.39,2.2Zm-1-32.8,11.4,12.8-.6-11.4-.6-11.6Zm5,19.2,1.6,5.6,4.8-11.4-.6-.8L789.4,95.8Zm16.4,19.2-15-12.6-2.61,3.8L790.4,128Zm-20-4.2,5.19,16.6,15.2-1.4Zm21,15,1.2-4.8-6.2-3-13.6-6.2Zm-.2-10.2L793,129.2l19.4,9.2ZM798,61.6l7.6,1.6-5.8-28.8-.39-1.8-5.21,28.2Zm-3.59-.4L799,81.6l.41,1.4,3-9.2,3.4-10L802,63Zm1.39,58.4,9.8-3.6-3.4-5.4-1.4-2.2Zm.2.6,15,12.4-5-16.2Zm3.6-88.4L806,62l1-5.4,4-22.2Zm1.2,74.6,5-13.2-6.2-8.6Zm-1-22.4,6.2,8.6,6.2-11.2L806,82.8ZM816,61.4l-9.6,2.4L800,82.4ZM804,82.6l8.6-1.8,3.8-18.8L800,83.4Zm11,16-8.8-5-5,13.8Zm-13.8,9.4,5,7.6,8.6-16.2Zm21-30.4-6.4,21-.2.2-.2.2-9,16.8,14.6,2.6,15.8-2.6L830,90.6ZM815,98.2l-.8-6.6-1.6-9.8L810,86.6l-3.6,6.6Zm6.4-63.6-14.8,28.6,7.4-1.8,2.6-.6Zm-14.8,82.2,5,16.2,7.6-6.2Zm5-82.4-1.4,8.4-3.4,19,15-28.8Zm-4.6,82,12.2,10,1.4-7.6Zm5.8,21.8,4-6.8,1.8-3.4-6.8,5.6.8,3.6Zm15.6,2L813,139l-1.2,5,6.4-1.4ZM813,81.2l2.6,16.2,6.2-19.8-1.8.8Zm14.4,64.2,2.4-4.8L813,144.2Zm-10.6-83.6-1,4.8-2.6,14.2,1.4-.6L822,77l-2.6-7.6Zm-3.4,76.6,21.4-6.2-15.2-5.2Zm.8.4L830,140l5-7.4Zm8-104.6-5,26.4,3.2-.8L826,58l-2.4-14.8Zm-5,27,5,15,3.6-17.6-2.8.8Zm2.6,65,16-9.8L821,119l-.4,1.8Zm15.6,5.6,1.2-15.4-16.4,10.2Zm-13-98.6,1.2,8,2.6,16,7.6-21.6Zm3.8,26.6L824,69.4l-1.6,7.6,7.4,12.4L828,74.6Zm4.2,29.4,2.8-10.2,3.4-12.6-10-7.6ZM837,66l8.8-12.6-19,5Zm-1.2-20.2-8.8,12,14.4-3.6,4.8-1.4-1.4-19.2Zm-1.2-10.2-5,14.4-2.4,6.6,17.2-23.4ZM844.79,144l-14.4-3.6-2.4,4.8Zm-14.2-53.6,7.4,4.2,1.4.8-.8-9.2-1.8-18.4L835,74.6Zm5,42.2-2.6,3.8-2.4,3.6,15,3.8Zm-4.8-40.8,5.8,22L836,100Zm5.6,7.8,1.4-1.8,1.4-1.8-7-4-1.2-.8Zm.8,17-1,11.6-.4,3.6,20.6,4Zm19.4,19.8-20.2-3.8,10,11.2Zm-17.4-39.6-2.6,3.2.4,12.8,1.4-9Zm-2-30.6,9,9V53.6Zm0,.8,1,10.4,1.6,17.2,2-6L846,75.8Zm.2,47.8,2.2-4.2,12.6-24.4-12.4,10Zm.2.8,11.2-2.4,3.8-26.8-2.2,4.4Zm18.8,19.4-5-14.6-2.6-6.8-3.8.8-7.4,1.8,9.6,9.6Zm-10-58.8-2,6.4-4.2,12.6,9.4-7.4,3.2-2.6Zm.2-1.2,7.6-12.6-7.6-8.8ZM854,63.2l-7.4,12.4,5.4,7.6.8,1.2.6-10.6Zm-2.4,86.6,4.8-12.8-9.8,7.4,3.8,8.6ZM853,87.4l-1.8,12.2-1.8,13.6,8.6,5-3-19.8Zm5.2,31.4-8.8-5,7.4,20.8Zm-2.4,44.2,3.6-6.6-3.2-.8-5.6-1.6,2.6,13.6ZM851,152.6l11.2-11-5-5L852,149.8Zm8.6,3.4.6-2.8,1.8-10.8-5.4,5.4-5.6,5.6,5.8,1.8Zm-6-75.6-.2,4.2,3.4-3.6-2.2-16.4Zm-.2,4.8,8.4,7L857,81.6Zm7.6,75.4-1.2-3.8-6.4,11.4h10Zm-7.4-74.8,4,26.4.8,5,3.8-24-2.8-2.4Zm4.6,37.4-.8,12.4L874,120.2l-15.4-1.2ZM873,136l1.2-15.2L857.59,136Zm-10.4,5.2,9.6-4.8h-14.6Zm0-47.2-3.8,24.4,15.4,1.4ZM860,155.8l10-3.6-2.4-3.4-5.2-6.6-1.2,6.8Zm10.2-3.2-2.8,1-7.4,2.8,3.8,11.2,3.2-7.4Zm0-1.2,2.6-14.8-10,5Zm.8,3.8-.6-2-5.2,12.2-1,2.6,10-1.2Zm3.6,10.8,3.6-17.4-7.4,3.8,1.6,6Zm3.6-17.8-3.4-8-1.4-3.2-1.4,8.4-1,6.4Zm-3.6-26.6-1.2,14.2,4.8-1.2Zm-1,14.8,4.8,10.8v-12Zm13.4,33-1.4-7.2-1.8-10.6L875,166.8Zm-11.8-4,8.4-14.4-4.8-2.4-1.8,8Zm3.6-31L881,132l-5.6-10Zm0,1.8V148l4.8,2.4Zm2.4-3.6-2.2,2.2,9.2,9.2Zm-2,3.2,3.2,9.6,1.6,5,5-4.8Zm5,15.2,10.6,16-5.6-21Zm.2,1,3.2,17.4,7.4-1.2Z"
          transform="translate(-8 -30.6)"
        />
      </g>
    </svg>
  </Link>
)

export default Logo
