<template>
  <section>
    <h1 class="page-title page-title--arrow">Three different approaches, one goal: Your organization’s success.</h1>

    <h2 class="page-intro">
      With our strong track record, in-depth industry knowledge and international M&amp;A
      experience, we are able to form flexible teams made up of the best experts in their field.
      We can either support your business as consultants or take on active roles as board members or
      as an interim CEO.
    </h2>

    <collapse :is-open="true" title="Business Consulting and Coaching" >
      As an advisor to your organization, Kammaco not only offers a fresh, outside perspective, but also
      provides strategic advice based on a successful track record in a highly competitive and international business
      environment. Kammaco supports your organization by acting as a consultant and coach for top management and the board of
      directors, allowing you to benefit from a network of experts and specialists with the necessary skills and experience.
    </collapse>

    <collapse title="Active Participation on Boards of Directors">
      Our experts can also assume formal responsibility of your company’s future success by
      becoming board members. By taking this step we prove our commitment to your organization,
      especially following an advisory mandate. While we are independent, we seek this role in cases where our advisory
      services are compensated by a stake in the company.
    </collapse>

    <collapse title="Interim Management Services (Interim CEO)">
      Based on our experience and background, we are not solely advisors to
      management and investors, but are also able to assume management responsibility on an interim basis.
      In this way, we demonstrate our commitment beyond our consulting services and help, for example, to
      successfully implement new strategic directions within your organization.
    </collapse>

  </section>
</template>

<script>
import collapse from '~/components/collapse'

export default {
  components: {
    collapse
  },
  head () {
    return {
      title: 'Three different approaches',
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
</style>
