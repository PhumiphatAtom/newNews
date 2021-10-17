<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        v-for="item in panorama"
        v-bind:key="item.id"
        v-bind:img-src="item.urlToImage"
      ></b-carousel-slide>
    </b-carousel>

    <div class="cards" v-for="item in newsData" v-bind:key="item.id">
      <div class="card-image">
        <img class="images" v-bind:src="item.urlToImage" />
      </div>
      <div class="card-text">
        <span class="date">{{ item.publishedAt }}</span>
        <h2>{{ item.title }}</h2>
      </div>
      <a class="card-stats" v-bind:href="item.url"> อ่านเพิ่มเติม </a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
export default {
  name: "News",
  data() {
    return {
      newsData: [],
    };
  },
  mounted() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=th&apiKey=135d7f537cfc409b9731b569ebd66529"
      )
      .then((res) => {
        (this.newsData = res.data.articles),
          (this.panorama = res.data.articles.slice(0, 10));
      });
  },
};
</script>
<style>
.images {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  width: 270px;
  height: 200px;
}
.cards {
  display: inline-block;
  grid-template-rows: 210px 210px 80px;
  grid-template-areas: "image" "text" "stats";

  width: 270px;
  height: 463px;
  margin: 20px 20px 20px 20px;
  border-radius: 18px;
  background: white;
  box-shadow: 5px 5px 10px rgba(199, 199, 199, 0.9);
  text-align: center;
  transition: 0.5s ease;
  cursor: pointer;
}
.card-image {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
}

.card-text .date {
  color: #f58220;
  font-size: 13px;
}

.card-text h2 {
  margin: 10px 10px 10px 10px;
  height: 150px;
  font-size: 19px;
}
.card-stats {
  display: block;
  align-items: center;
  text-align: center;
  color: white;
  height: 70px;
  padding: 20px 10px 10px 10px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  background: #008e97;
  font-size: 20px;
}
.card-stats:hover {
  color: white;
}

.cards:hover {
  transform: scale(1.2);
  box-shadow: 5px 5px 15px rgba(238, 238, 238, 0.6);
}
</style>
