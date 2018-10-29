<template>
  <div id="footer" class="custom-footer centered padder">
    <footer>
      <green-icon class="green-icon" />
      <div class="touch">
        <h3>Get in touch</h3>
      </div>

      <div class="address">
        <p><strong>Kammaco AG</strong><br>
          Bäumleingasse 22 /&nbsp;4051 Basel<br>
          Switzerland<br>
        </p>
      </div>
      <div class="phone">
        <br>
        <p>T <a href="tel:+41615353030">+41 61 535 30 30</a><br>
        <a class="footer__email" href="mailto:hello@kammaco.com">Send an email</a></p>
      </div>
      <div class="linkedin-icon">
        <a href="https://linkedin.com/in/rené-kamm-96a58a8" target="_blank"><img src="~assets/images/linkedin_icon.svg" title="linkedin"></a>
      </div>
    </footer>
  </div>
</template>

<script>
import greenIcon from '~/components/svg/icon_shape_green'

export default {
  components: {greenIcon},
  data () {
    return {
    }
  },
}
</script>

<style scoped lang='scss'>
.custom-footer {
  height: 1019px;
  width: 100%;

  display: grid;
  grid-template:
    'footer' min-content /
    1fr;

  @include bp-small {
    grid-template:
      '. footer' min-content /
      60px 1fr;
  }

  @include bp-large {
    grid-gap: 50px;
    grid-template:
      '. . footer footer footer footer footer .' min-content /
      150px 1fr 150px 150px 150px 150px 150px 1fr;
  }
}
footer {
  grid-area: footer;

  display: grid;
  grid-template:
    '. green-icon .' min-content
    ' . . . ' 100px
    '. touch .' min-content
    ' . . . ' 40px
    '. address .' min-content
    '. . . ' 30px
    '. phone .' min-content
    ' . . . ' 30px
    '. linkedin .' min-content /
    1fr 300px 1fr;

  @include bp-small {
    grid-column-gap: 28px;
    grid-template:
      '. . . green-icon .' min-content
      '. . . . . ' 60px
      'touch touch touch   . .' min-content
      '. . .   . .' 80px
      'address address phone phone .' min-content
      '. . . . .' 20px
      'linkedin . . . .' min-content /
      100px 100px 100px 100px 100px;
  }

  @include bp-medium {
    grid-column-gap: 50px;
    grid-template:
      '. . . green-icon' min-content
      '. . . .' 60px
      'touch touch  touch .' min-content
      '. . . .' 80px
      'address address phone linkedin' min-content/
      150px 150px 150px 150px;
  }

  @include bp-large {
    grid-column-gap: 50px;
    grid-template:
      '. . . green-icon green-icon' min-content
      '. . . . . ' 76px
      'touch touch touch . .' min-content
      ' . . . . .' 100px
      'address address phone phone linkedin' min-content/
      150px 150px 150px 150px 150px;
  }
}

.green-icon {
  grid-area: green-icon;
  margin-top: -100px;

  display: flex;
  justify-content: center;

  @include bp-small {
    display: block;
  }

  @include bp-medium {
    margin-left: -70px;
  }

  @include bp-large {
    margin-left: 0;
  }
}

.touch {
  grid-area: touch;

  @extend .font-averta-semibold;
  font-size: 8rem;
}

.address {
  grid-area: address;
}

.phone {
  grid-area: phone;
}

.linkedin-icon {
  grid-area: linkedin;

  width: 40px;
  height: auto;

  @include bp-medium {
    display: flex;
    align-items: start;
    justify-self: end;
  }

  @include bp-large {
    width: 48px;
    height: auto;
    justify-self: start;
  }

  &:hover {
    cursor: pointer;
  }
}

.footer__email {
  border-bottom: 2px solid $color-green;
}
</style>