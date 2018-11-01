<template>
  <section>
    <h1 class="page-title">
      Delivering a Sustainable Impact
    </h1>
    <h2 class="page-intro">
      With its proven track record, access to a network of senior professionals covering a variety of tools and a hands-on approach, Kammaco
      can deliver results that will have an immediate and long-lasting impact on your company.
    </h2>

    <collapse :is-open="true" title="Strategy Development and Implementation" >
      With access to a wide range of tools and a network of experienced industry experts, Kammaco is able to develop a winning strategy for your company and lead it on a growth path. We can take over interim management
      responsibilities to ensure the successful implementation and sustainable impact of a strategy shift.
    </collapse>

    <collapse title="Business and Brand Development">
      Kammaco's ambition is to help your company grow using a toolbox that is not limited
      to the Ansoff Matrix but entails new and state-of-the-art approaches. The experts in our network have
      each acquired a wealth of experience – both positive and negative – from a range of industries across different parts of the
      world. Moreover, your company can benefit from Kammaco's extensive knowledge and experience in successfully building brands as a
      substantial growth driver.
    </collapse>

    <collapse title="Turnaround, Restructuring and Crisis Management">
      Our experts can support you in turning around underperforming businesses or divisions,
      and they can be instrumental in recovering failing projects and programs.
    </collapse>

    <collapse title="Pre- and Post-M&amp;A Support">
      M&amp;As often play a major role within a growth strategy. However, making them successful is
      an extremely complex task and requires a lot of experience. Kammaco can support you during both the pre- and post-M&amp;A phases and help you to successfully integrate a newly acquired company into your organization.
    </collapse>

    <collapse title="Succession Planning in Family Businesses">
      One of the most critical issues in family businesses is succession planning. Kammaco
      can support and coach the next generation team and create a consensus between the generations
      through providing unbiased, emotion-free and objective advice.
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
      title: 'Delivering a Sustainable Impact',
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
