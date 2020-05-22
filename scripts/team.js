Vue.config.devtools = true;

Vue.component('Card', {
	template: `
    <div class="card-wrap"
      @mousemove="handleMouseMove"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      ref="Card">
      <div class="Card"
        :style="cardStyle">
        <div class="card-Bg" :style="[cardBgTransform, cardBgImage]"></div>
        <div class="card-info">
          <slot name="header"></slot>
          <slot name="content"></slot>
        </div>
      </div>
    </div>`,
	mounted() {
		this.width = this.$refs.Card.offsetWidth;
		this.height = this.$refs.Card.offsetHeight;
	},
	props: ['dataImage'],
	data: () => ({
		width: 0,
		height: 0,
		mouseX: 0,
		mouseY: 0,
		mouseLeaveDelay: null
	}),

	computed: {
		mousePX() {
			return this.mouseX / this.width;
		},
		mousePY() {
			return this.mouseY / this.height;
		},
		cardStyle() {
			const rX = this.mousePX * 30;
			const rY = this.mousePY * -30;
			return {
				transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
			};
		},
		cardBgTransform() {
			const tX = this.mousePX * -40;
			const tY = this.mousePY * -40;
			return {
				transform: `translateX(${tX}px) translateY(${tY}px)`
			};
		},
		cardBgImage() {
			return {
				backgroundImage: `url(${this.dataImage})`
			};
		}
	},

	methods: {
		handleMouseMove(e) {
			this.mouseX = e.pageX - this.$refs.Card.offsetLeft - this.width / 2;
			this.mouseY = e.pageY - this.$refs.Card.offsetTop - this.height / 2;
		},
		handleMouseEnter() {
			clearTimeout(this.mouseLeaveDelay);
		},
		handleMouseLeave() {
			this.mouseLeaveDelay = setTimeout(() => {
				this.mouseX = 0;
				this.mouseY = 0;
			}, 1000);
		}
	}
});

const board = new Vue({
	el: '#board'
});

const technical = new Vue({
	el: '#technical'
});

const creatives = new Vue({
	el: '#creatives'
});

const management = new Vue({
	el: '#management'
});
