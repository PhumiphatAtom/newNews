<template>
  <div>
    <div class="container">
      <b-navbar toggleable="lg" type="light" variant="white" id="navbar">
        <img
          class="piclogo"
          src="https://cdn.discordapp.com/attachments/727144001215660095/898986945726783608/N_0.png"
        />
        <div>
          <b-tlogo href="#">NEW</b-tlogo>
          <b-tlogo1 href="#">NEWS</b-tlogo1>
        </div>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <div>
            <b-navbar-nav>
              <router-link to="/">
                <b-nav-items href="#"
                  ><i class="fas fa-newspaper"></i>ข่าว</b-nav-items
                ></router-link
              >
              <router-link to="/sport">
                <b-nav-items href="#"
                  ><i class="far fa-futbol"></i>กีฬา</b-nav-items
                ></router-link
              >
              <router-link to="/entertainment">
                <b-nav-items href="#"
                  ><i class="fas fa-film"></i>บันเทิง</b-nav-items
                ></router-link
              >
              <router-link to="/business">
                <b-nav-items href="#"
                  ><i class="fas fa-chart-line"></i>ธุรกิจ</b-nav-items
                ></router-link
              >

              <router-link to="/technology">
                <b-nav-items href="#"
                  ><i class="fas fa-globe"></i>เทคโนโลยี</b-nav-items
                ></router-link
              >
            </b-navbar-nav>

            <b-nav-input>
              <b-form-input
                size="sm"
                class="inputs"
                placeholder="Search"
                id="__BVID__12"
              ></b-form-input>
            </b-nav-input>
            <b-button
              size="sm"
              class="my-2 my-sm-0"
              type="submit"
              id="__BVID__14"
              >Search</b-button
            >
          </div>
          <!-- Right aligned nav items -->
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Prompt:wght@100;200;300;400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Varela+Round&display=swap");
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@700&family=Nanum+Myeongjo:wght@800&display=swap");
body {
  padding: 0;
  margin: 0;
}

.piclogo {
  width: 50px;
}
b-tlogo {
  color: #008e97;
  font-family: "DM Sans", sans-serif;
  font-size: 30px;
  margin-right: 5px;
  margin-left: 10px;
}
b-tlogo1 {
  color: #f58220;
  font-family: "DM Sans", sans-serif;
  font-size: 30px;
}
b-nav-input {
  text-decoration: none;
  list-style: none;
  margin-right: 5px;
}
#__BVID__12 {
  width: 150px;
  border-radius: 50px;
  border-color: #f58220;
}
#__BVID__14 {
  background: #f58220;
  border-radius: 50px;
  border: none;
}
div {
  font-family: "Prompt", sans-serif;
  text-align: center;
  align-items: center;
  display: inherit;
  justify-content: flex-end;
}
div a {
  text-decoration: none;
}

b-nav-item-dropdown {
  /* padding: 0 15px 0 15px;
  font-size: 18px;
  color: #008e97;
  align-items: center;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-right: 10px;
  margin-left: 10px; */
}

b-nav-items {
  padding: 0 15px 0 15px;
  font-size: 18px;
  color: #008e97;
  align-items: center;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-right: 10px;
  margin-left: 10px;
}
i.fas,
i.far {
  margin-right: 7px;
}

@media (max-width: 991.2px) {
  div {
    display: inline-block;
  }
  div a {
    margin: 10px 0 10px 0;
  }
  #__BVID__12 {
    margin: 10px 0 10px 0;
  }
  #__BVID__14 {
    margin: 10px 0 10px 0;
  }
}
</style>
