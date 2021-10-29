<template>
  <div>
    <div v-if="loading">
      <div class="page-loader">
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    </div>
    <div v-else>
      <b-container>
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          background="#eee"
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
      </b-container>

      <div class="container">
        <div class="headernews">
          <h1 class="textheader"><i class="fas fa-newspaper"></i>ข่าววันนี้</h1>
          <b-form-input
            size="sm"
            class="inputs"
            placeholder="พิมพ์คำค้นหา...."
            v-model="search"
            id="__BVID__12"
            style="margin-block: auto;"
          ></b-form-input>
        </div>
      </div>

      <div v-if="newsData.length > 0">
        <div class="cards" v-for="item in newsData" v-bind:key="item.id">
          <div class="card-image">
            <img class="images" v-bind:src="item.urlToImage" />
          </div>
          <div class="card-text">
            <span class="date">{{
              moment(item.publishedAt)
                .locale("th")
                .fromNow()
            }}</span>
            <h2>{{ item.title }}</h2>
          </div>
          <a class="card-stats" v-bind:href="item.url"> อ่านเพิ่มเติม </a>
        </div>
      </div>
      <div v-else>
        <h1 style="margin-top: 30px; color: gray;">
          Not Found
        </h1>
      </div>

      <div class="container">
        <div class="headernews2"></div>
      </div>

      <b-container id="containerComment">
        <b-container id="containerComment2">
          <h3>ADD COMMENT</h3>
          <h6 style="text-align: left;margin-bottom: 5px;font-weight: bold;">
            Name
          </h6>
          <b-input
            id="inputComment"
            placeholder="Enter your name"
            v-model="commentInfo.author"
          ></b-input>
          <h6 style="text-align: left;margin-bottom: 5px;font-weight: bold;">
            Comment
          </h6>
          <b-form-textarea
            id="areaBox"
            size="sm"
            class="inputs"
            placeholder="Write a comment..."
            v-model="commentInfo.comment"
          ></b-form-textarea>
          <br />
          <div id="buttonSave">
            <b-button type="button" v-on:click="save">
              Comment
            </b-button>
          </div>
          <b-container
            class="bv-example-row"
            v-for="Items in commentData"
            v-bind:key="Items"
          >
            <b-row>
              <b-col sm="1" align-self="start">
                <b-avatar
                  variant="info"
                  src="http://www.mcicon.com/wp-content/uploads/2021/01/People_User_1-copy-4.jpg"
                ></b-avatar>
              </b-col>
              <b-col id="containerComment3" sm="11">
                <p style="margin-bottom: 0px; font-weight: bold">
                  {{ Items.author }}
                </p>
                <p>{{ Items.comment }}</p>
              </b-col>
            </b-row>
          </b-container>
        </b-container>
      </b-container>
      <div class="container">
        <div class="headernews2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "Category",
  data() {
    return {
      // newsData: [],
      commentInfo: {
        author: null,
        comment: null,
      },
      commentData: [],
      search: null,
    };
  },
  mounted() {
    //   console.log("test",this.$route.params.test)
    this.fetchData(this.$route.params.category);
  },
  methods: {
    save() {
      this.commentData.push(this.commentInfo);
      this.commentInfo = {
        author: null,
        comment: null,
      };
    },
    fetchData(category) {
      this.$store.dispatch("fetchNewsData", category);
    },
    moment,
  },
  computed: {
    newsData() {
      if (this.search) {
        return this.$store.getters.getNewsData.filter((item) => {
          return item.title.match(this.search);
        });
      } else {
        return this.$store.getters.getNewsData;
      }
    },
    panorama() {
      return this.$store.getters.getPanoramaData;
    },
    loading() {
      return this.$store.getters.getLoading;
    },
  },
  watch: {
    "$route.params.category"(value) {
      this.fetchData(value);
    },
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
  background: rgb(255, 255, 255);
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

h3 {
  text-align: start;
  color: #008e97;
}

#containerComment {
  height: 100%;
  width: 75%;
  border-radius: 25px;
  background-color: rgb(241, 241, 241);
  padding-top: 20px;
  border-color: black;
  margin-top: 30px;
  margin-bottom: 30px;
}

#containerComment2 {
  width: 90%;
  border-top: 50px;
  padding: 20px;
}

#inputComment {
  width: 50%;
  margin-bottom: 10px;
}

#areaBox {
  height: 100px;
}

#buttonSave {
  text-align: start;
  color: #008e97;
  margin-bottom: 50px;
}

#containerComment3 {
  width: auto;
  text-align: start;
  border-top: 10px;
  border-color: black;
  border-radius: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #c7c7c7;
  padding-top: 10px;
  padding-right: 20px;
  padding-left: 20px;
  word-break: break-all;
  box-shadow: 8px 8px 5px #888888;
  justify-content: flex-start;
  counter-reset: none;
  display: initial;
}

div.row {
  justify-content: flex-start;
  flex-wrap: inherit;
}

#text-comment {
  text-align: start;
}

.col-sm-1 {
  height: 60px;
  text-align: left;
}

#bor {
  border-top: 2px solid #000;
}

#carousel-1 {
  margin-top: 75px;
}

.carousel-control-next-icon,
.carousel-control-prev-icon {
  background-color: black;
  padding: 16px;
  border-radius: 16px;
  background-size: 16px;
}

/* .carousel-inner > .carousel-item > img {
  height: 400px;
  width: auto !important;
  margin: auto !important;
  border-radius: 5px;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  color: black !important;
} */

.textheader {
  text-align: start;
  align-items: center;
  color: #008e97;
  font-size: 32px;
  font-weight: 800;
}
.headernews {
  width: 100%;
  background-color: white;
  border-bottom: 4px solid #f58220;
  padding: 8px;
  margin-top: 10px;
}

.headernews2 {
  width: 100%;
  background-color: white;
  border-bottom: 4px solid #f58220;
  padding: 8px;
  margin-top: 20px;
  margin-bottom: 40px;
}

#box-input {
  display: flex;
}

#__BVID__12 {
  margin: 16px 0 0 0;
  width: 300px;
  border-radius: 50px;
  border-color: #f58220;
  font-size: 16px;
}

@media (max-width: 991.2px) {
  #carousel-1 {
    margin-top: 75px;
  }
  .textheader {
    font-size: 22px;
    font-weight: 800;
  }
  #box-input {
    display: inherit;
  }

  #__BVID__12 {
    margin: 16px 0 0 0;
    width: 170px;
    border-radius: 50px;
    border-color: #f58220;
    font-size: 16px;
  }
}

.page-loader {
  display: flex;
  justify-items: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 50vh;

  flex-direction: column;
  z-index: 999;
  transform-origin: bottom center;
  animation: rotate 3s linear infinite;
}
.circle {
  display: inline-block;
  background-color: #f58220;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transform: scale(0);
  animation: grow 1.5s linear infinite;
  margin: -10px;
}
.circle:nth-child(2) {
  background-color: #008e97;
  animation-delay: 0.75s;
}
@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes grow {
  50% {
    transform: scale(1);
  }
}
</style>
