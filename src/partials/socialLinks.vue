<template>
  <div class="social-links">
    <a v-for="link in links" :key="link.href" :href="link.href" target="_blank">
      <img :src="link.iconPath" alt="" />
      {{ link.name }}
    </a>
  </div>
</template>

<script>
import githubBlack from '../assets/github.svg'
import redditBlack from '../assets/reddit.svg'
import mediumBlack from '../assets/medium.svg'
import slackBlack from '../assets/slack.svg'
import telegramBlack from '../assets/telegram.svg'
import facebookBlack from '../assets/facebook.svg'
import twitterBlack from '../assets/twitter.svg'
import linkedinBlack from '../assets/linkedin.svg'
import githubLight from '../assets/light/github-light.svg'
import redditLight from '../assets/light/reddit-light.svg'
import mediumLight from '../assets/light/medium-light.svg'
import slackLight from '../assets/light/slack-light.svg'
import telegramLight from '../assets/light/telegram-light.svg'
import facebookLight from '../assets/light/facebook-light.svg'
import twitterLight from '../assets/light/twitter-light.svg'
import linkedinLight from '../assets/light/linkedin-light.svg'

export default {
  props: {
    light: Boolean,
    hideNames: Boolean
  },
  computed: {
    links () {
      return [{
        href: 'https://github.com/aeternity',
        iconPath: this.light ? githubLight : githubBlack,
        name: 'Github'
      }, {
        href: 'https://www.reddit.com/r/Aeternity/',
        iconPath: this.light ? redditLight : redditBlack,
        name: 'Reddit'
      }, {
        href: 'https://blog.aeternity.com/',
        iconPath: this.light ? mediumLight : mediumBlack,
        name: 'Medium'
      }, {
        href: 'https://docs.google.com/forms/d/e/1FAIpQLSc61kY-707G616uFq96Nt3pGc1n7XDaUgEsvzANsot7x3fC2w/viewform',
        iconPath: this.light ? slackLight : slackBlack,
        name: 'Slack'
      }, {
        href: 'https://telegram.me/aeternity',
        iconPath: this.light ? telegramLight : telegramBlack,
        name: 'Telegram'
      }, {
        href: 'https://www.facebook.com/aeternityproject/',
        iconPath: this.light ? facebookLight : facebookBlack,
        name: 'Facebook'
      }, {
        href: 'https://twitter.com/aetrnty',
        iconPath: this.light ? twitterLight : twitterBlack,
        name: 'Twitter'
      }, {
        href: 'https://www.linkedin.com/company/aeternity',
        iconPath: this.light ? linkedinLight : linkedinBlack,
        name: 'Linkedin'
      }].map(link => ({
        ...link,
        ...this.hideNames && { name: '' }
      }))
    }
  }
}
</script>
