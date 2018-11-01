<template>
  <section>
    <h1 class="page-title">Empowering for Growth</h1>
    <h2 class="page-intro">
      Founded by René Kamm, Kammaco is a boutique management advisory firm
      that helps companies develop and implement
      growth strategies for immediate results and a lasting impact.
    </h2>
    <div class="textbox">
      <p class="textbox__text">
        By drawing on a network of senior experts with profound management experience and in-depth
        industry knowledge, we are able to set up high-profile project teams to deliver fast and sustainable results for our clients.<br><br>

        Speed, flexibility, tailor-made services and, above all, visions for growth are
        guaranteed when clients choose Kammaco as their advisor.
      </p>
      <img class="textbox__image" src="~assets/images/pic_rene.jpg" title="rene">
    </div>

    <h1 class="page-title page-title--content">Defining Experience</h1>
    <p class="page-intro ">
      Prior to founding Kammaco, René has been with MCH Group, a Swiss-based, publicly listed
      and globally operating live marketing group, of which he was the CEO for nearly 16 years.</p>
    <br><br>
    <read-more :preview-count="200">
      <p class="page-content">
        During his tenure, he transformed the company from a national trade show organizer with 250 employees into a global live marketing group with over 1,000 employees, more than quadrupling revenues in the process. Among his many other accomplishments, René developed MCH‘s two most recognized brands, Baselworld and Art Basel, to become the world‘s leading events in their industries, attracting hundreds of thousands of visitors annually. As the group’s CEO, René successfully executed over 20 M&amp;A projects in Switzerland, Germany, China, India and the USA.<br><br>

        Before joining MCH Group, René held various senior management positions in marketing, sales and general management in the FMCG, durable consumer and luxury goods industries. He worked for companies and brands such as Unilever, Knorr, Revox, Sector no Limits and TAG Heuer (today part of LVMH).<br><br>

        Throughout his career, René launched businesses and set up companies in Germany, China, the Middle East and the USA. A gifted communicator and experienced public speaker, he is fluent in German, English, French and Italian. René holds a Masters of Arts in Economics from the University of Basel.<br><br>
      </p>
    </read-more>

    <h1 class="page-title page-title--content page-title--flower">In-Depth Industry Insights</h1>
    <h2 class="page-intro">
      Based on a long and successful track record, as well as a carefully selected network of partners,
      Kammaco can bring specific and relevant industry knowledge to the table.
    </h2>
    <collapse :is-open="true" title="Global Live Marketing Sector">
      As CEO of the MCH Group, one of the world's leading exhibition organizers,
      René managed a portfolio of more than 50 trade shows annually, spanning diverse industries and regions from
      regional B2C to global B2B exhibitions, from machinery to luxury product events, from low- to high-tech events.
      During his career, he was responsible of organizing more than 1,000 exhibitions and trade shows, managing exhibition halls,
      convention venues and music theaters encompassing over 240,000 square meters (2.5 milion square feet) of indoor space,
      hosting over 50 million visitors. He delivered a 430 million Swiss franc
      (approx. 430 million US dollar) transformation of Basel’s exhibition space between 2010 and 2013 that was completed
      on time and on budget. Under his leadership, the MCH group acquired and managed a portfolio of event service providers,
      ranging from live marketing consulting to event management, from pavilion and booth builders to multimedia companies,
      helping them to successfully realize over 50,000 projects for their clients.
    </collapse>

    <collapse title="Global Luxury Goods Industry">
      Prior to joining the MCH Group, René worked for many years in the global watch business and, as an organizer
      of the world's leading events in the watch, jewelry and art markets, he gained an insider's view of these
      and other collectors’ markets. His expertise of and network from the global luxury goods market
      also covers the retail and packaging industries.
    </collapse>

    <collapse title="Professional Sports Market">
      As an active board member and long-time shareholder of Switzerland's most successful football club,
      René understands the challenges of professional club management and knows what is required to
      deliver success, both in terms of titles and financial results.
    </collapse>



  </section>
</template>

<script>
import collapse from '~/components/collapse'
import readMore from '~/components/readMore'

export default {
  components: {
    collapse,
    readMore
  },
  head () {
    return {
      title: 'Empowering for Growth',
    }
  },
}
</script>

<style lang="scss">
section {
  min-height: 800px;
  height: 100%;
  width: 100%;
}

.textbox {
  margin-bottom: 180px;
  display: grid;
  grid-gap: 50px;
  grid-template:
    'image  ' min-content
    'text' min-content /
    1fr;

  @include bp-small {
    grid-gap: 50px;
    grid-template:
      'text image' min-content /
      3fr 2fr;
  }
}

.textbox__text {
  grid-area: text;
}

.textbox__image {
  margin: 0 auto;
  grid-area: image;
  width: 100%;
  height: auto;
  max-width: 352px;
}
</style>
