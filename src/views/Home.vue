<template lang="html">

    <div class="main">

<div class="sliderAndText">


        <div class="slider">


            <transition-group name="fade" tag="div">
                <div v-for="i in [currentIndex]" :key="i">
                    <img :src="currentImg" />
                </div>
            </transition-group>

            <a class="prev" @click="prev" href="#">&#10094; Previous</a>
            <a class="next" @click="next" href="#">&#10095; Next</a>

        </div>

        <div class="text">
            <p> Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
        </div>
</div>
<hr>

                <div class="bottomText">
                    <p> Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>

                </div>
    </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      images: [
          "https://get.wallhere.com/photo/food-fruit-drink-orange-honey-breakfast-dessert-plant-sweetness-produce-land-plant-flowering-plant-flavor-107761.jpg",
        "https://cdn.pixabay.com/photo/2015/06/27/16/35/honey-823614_960_720.jpg",
        "https://cdn.pixabay.com/photo/2014/05/23/18/15/honey-352205_960_720.jpg",
        "https://cdn.pixabay.com/photo/2015/10/12/15/23/waffle-984499_960_720.jpg"
      ],
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 10000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>

<style lang="css" scoped>

.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

img {
  height:600px;
  width:80%;
  padding:auto;
  margin:3% 11.5%;
  border-radius: 10px;

}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 70%;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 4px;
  text-decoration: none;
  user-select: none;

  background-color: rgba(0,0,0,0.1);
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}

.sliderAndText
{
    display: flex;
    flex-direction: row;
    padding-bottom: 2%;
}

.slider
{
    width:74%;
}

.text
{
    height:85vh;
    width:26%;

    font-size: 1.9em;
    letter-spacing: 3px;

    padding:2%;
}

hr
{
    height: 10px;
    background: rgba(0,0,0,0.9);
}

.bottomText
{
    width:100%;
    padding: 2% 5%;

    font-size: 1.9em;
    letter-spacing: 3px;

    background: red;
}

</style>
