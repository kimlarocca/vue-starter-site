<template>
  <footer>
    <div class="container">
      <div class="grid-x grid-padding-x">
        <div class="cell small-12 medium-6">
          <img class="logo" src="assets/images/logo-footer.png" :alt="logoAltText"/>
          <p class="address">{{address}}</p>
          <p class="phone-number">{{phoneNumber}}</p>
          <ul class="social-media-icons">
            <social-link
              v-for="network in socialMediaNetworks"
              :key="network.id"
              :icon="network.icon"
              :link="network.link"
              :altText="network.altText"
            >
            </social-link>
          </ul>
          <div class="copywrite show-for-medium">
            <p>{{copywrite}}</p>
            <a :href="privacyLink">{{privacy}}</a>
          </div>
        </div>
        <div class="cell small-12 medium-6">
          <div class="cols">
            <ul>
              <footer-links
                v-for="link in footerLinks"
                :key="link.id"
                :link="link.link"
                :name="link.name"
              >
              </footer-links>
            </ul>
          </div>
          <div class="donate">
            <p class="donate-copy">{{donateCopy}}</p>
            <a class="button" :href="donateButton">{{donateButtonText}}</a>
          </div>
          <div class="copywrite show-for-small-only">
            <p>{{copywrite}}</p>
            <a :href="privacyLink">{{privacy}}</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
    import SocialLink from './SocialLink'
    import FooterLinks from './FooterLink'

    export default {
        name: 'Footer',
        props: {
            logoImage: String,
            logoAltText: String,
            address: String,
            phoneNumber: String,
            socialMediaIcons: Array,
            copywrite: String,
            privacy: String,
            privacyLink: String,
            pageLinks: Array,
            donateCopy: String,
            donateButton: String,
            donateButtonText: String
        },
        data () {
            return {
                socialMediaNetworks: [
                    {
                        'id': 1,
                        'icon': 'fab fa-facebook-f',
                        'link': 'https://www.facebook.com/sfsymphony',
                        'altText': 'Facebook'
                    },
                    {
                        'id': 2,
                        'icon': 'fab fa-twitter',
                        'link': 'https://twitter.com/sfsymphony',
                        'altText': 'Twitter'
                    },
                    {
                        'id': 3,
                        'icon': 'fab fa-youtube',
                        'link': 'https://www.youtube.com/user/sfsymphony',
                        'altText': 'Youtube'
                    },
                    {
                        'id': 4,
                        'icon': 'fab fa-spotify',
                        'link': 'https://open.spotify.com/artist/1qHStDLIc8uV7hvTG6FGRJ',
                        'altText': 'Spotify'
                    },
                    {
                        'id': 5,
                        'icon': 'fab fa-instagram',
                        'link': 'https://www.instagram.com/sfsymphony/',
                        'altText': 'Instagram'
                    }
                ],
                footerLinks: [
                    {
                        'id': '1',
                        'link': '#',
                        'name': 'Event Calendar'
                    },
                    {
                        'id': '2',
                        'link': '#',
                        'name': 'Season Overview'
                    },
                    {
                        'id': '3',
                        'link': '#',
                        'name': 'Ticket Packages'
                    },
                    {
                        'id': '4',
                        'link': '#',
                        'name': 'Discount Tickets'
                    },
                    {
                        'id': '5',
                        'link': '#',
                        'name': 'Gift Certificates'
                    },
                    {
                        'id': '6',
                        'link': '#',
                        'name': 'Your Visit & Experience'
                    },
                    {
                        'id': '7',
                        'link': '#',
                        'name': 'Discover the Music'
                    },
                    {
                        'id': '8',
                        'link': '#',
                        'name': 'Education & Community'
                    },
                    {
                        'id': '9',
                        'link': '#',
                        'name': 'Support the Music'
                    },
                    {
                        'id': '10',
                        'link': '#',
                        'name': 'About SF Symphony'
                    },
                    {
                        'id': '11',
                        'link': '#',
                        'name': 'Meet the Symphony'
                    },
                    {
                        'id': '12',
                        'link': '#',
                        'name': 'Careers'
                    },
                    {
                        'id': '13',
                        'link': '#',
                        'name': 'Auditions'
                    },
                    {
                        'id': '14',
                        'link': '#',
                        'name': 'Press Room'
                    },
                    {
                        'id': '15',
                        'link': '#',
                        'name': 'Contact Us'
                    },
                    {
                        'id': '16',
                        'link': '#',
                        'name': 'Box Office Info'
                    },
                    {
                        'id': '17',
                        'link': '#',
                        'name': 'DSH Seat Map'
                    },
                    {
                        'id': '18',
                        'link': '#',
                        'name': 'Getting Here'
                    }
                ]
            }
        },
        components: {
            socialLink: SocialLink,
            footerLinks: FooterLinks
        }
    }
</script>
