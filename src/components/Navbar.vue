<template>
  <nav>
    <div
      class="custom-wrapper pure-g"
      id="menu"
      v-bind:class="{ open: isOpen }"
    >
      <div class="pure-u-1 pure-u-md-1-2">
        <div class="pure-menu">
          <a href="#" class="pure-menu-heading custom-brand">Ambrosia</a>
          <a
            href="#"
            class="custom-toggle"
            id="toggle"
            v-on:click="toggleMenuEvent"
            v-bind:class="{ x: isOpen }"
          >
            <s class="bar"></s><s class="bar"></s>
          </a>
        </div>
      </div>
      <div class="pure-u-1 pure-u-md-1-2">
        <div
          class="pure-menu nav-options"
          v-bind:class="{ 'pure-menu-horizontal': enableHorizontal }"
        >
          <ul class="pure-menu-list">
            <li class="pure-menu-item">
              <a href="#" class="pure-menu-link nav-link">About</a>
            </li>
            <li class="pure-menu-item">
              <a href="#" class="pure-menu-link nav-link">Cart</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data: function() {
    return {
      enableHorizontal: true,
      isOpen: false
    };
  },
  methods: {
    toggleMenuEvent: function(event) {
      this.toggleMenu();
      event.preventDefault();
    },
    toggleMenu: function() {
      // set timeout so that the panel has a chance to roll up
      // before the menu switches states
      if (this.isOpen) {
        setTimeout(this.toggleHorizontal, 500);
      } else {
        this.toggleHorizontal();
      }
      this.isOpen = !this.isOpen;
    },
    toggleHorizontal: function() {
      this.enableHorizontal = !this.enableHorizontal;
    },
    closeMenu: function() {
      if (this.isOpen) {
        this.toggleMenu();
      }
    }
  },
  mounted: function() {
    this.WINDOW_CHANGE_EVENT =
      "onorientationchange" in window ? "orientationchange" : "resize";
    window.addEventListener(this.WINDOW_CHANGE_EVENT, this.closeMenu);
  },
  beforeDestroy: function() {
    window.removeEventListener(this.WINDOW_CHANGE_EVENT, this.closeMenu);
  }
};
</script>

<style lang="scss" scoped>
$animationTime: 0.5s;
$nav-height: 3.2em;

.nav-link {
  padding: ($nav-height - 1.2em) / 2;
  color: $light;
  &:hover {
    color: $tertiary;
  }
}

.custom-brand {
  text-align: left;
  font-size: $nav-height / 2;
  color: $light;
}

.nav-options {
  text-align: right;
  @media (max-width: 47.999em) {
    & {
      text-align: left;
    }
  }
}

.custom-wrapper {
  background-color: $primary;
  margin-bottom: 1em;
  -webkit-font-smoothing: antialiased;
  height: $nav-height;
  overflow: hidden;
  transition: height $animationTime;
}

.custom-wrapper.open {
  height: $nav-height * 3.5;
}

.custom-toggle {
  width: $nav-height;
  height: $nav-height;
  position: absolute;
  top: 0;
  right: 0;
  display: none;
}

.custom-toggle .bar {
  background-color: $light;
  display: block;
  width: 20px;
  height: 2px;
  border-radius: 100px;
  position: absolute;
  top: calc(#{$nav-height}/ 2);
  right: calc((#{$nav-height} - 20px) / 2);
  transition: all $animationTime;

  &:first-child {
    transform: translateY(-6px);
  }
}

.custom-toggle.x .bar {
  transform: rotate(45deg);

  &:first-child {
    transform: rotate(-45deg);
  }
}

@media (max-width: 47.999em) {
  .nav-options {
    text-align: left;
  }

  .custom-toggle {
    display: block;
  }
}
</style>
