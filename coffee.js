// 
$(document).ready(function () {

      // ...................................................
      // start cards
      let cards = JSON.parse(localStorage.getItem("cards")) ||
            [
                  {
                        title: "Vienna",
                        im1: "img\\Vienna.jpg",
                        extraImg: ["img\\Vienna4.jpg"],
                        des: "There are a few variations on the Vienna but one of the most common is made with two ingredients espresso and whipped cream The whipped cream takes the place of milk and sugar to provide a creamy texture",
                        vid: "https://www.youtube.com/embed/GB8bimHI9Tg",
                        fav: false,
                  },
                  {
                        title: "Frappucino",
                        im1: "img\\Frappucino2.jpg ",
                        extraImg: ["img\\Frappucino1.jpg"],
                        des: "Frappuccino is a trademarked brand of the Starbucks Corporation for a line of highly-sweetened iced, blended coffee drinks. It consists of coffee or crème base, blended with ice and other various ingredients like flavored syrups, usually topped with whipped cream and or spices",
                        vid: "https://www.youtube.com/embed/fdQqDl_edFc",
                        fav: false,
                  },
                  {
                        title: "latte",
                        im1: `img\\latte2.jpeg`,
                        extraImg: ["img\\latte3.jpeg"],
                        des: "This classic drink is typically 1/3 espresso and 2/3 steamed milk, topped with a thin layer of foam, but coffee shops have come up with seemingly endless customizations. You can experiment with flavored syrups like vanilla and pumpkin spice or create a nondairy version by using oat milk. Skilled baristas often swirl the foam into latte art!",
                        vid: "https://www.youtube.com/embed/UxwscVIZ8Qg",
                        fav: false,
                  },
                  {
                        title: "Black Coffee",
                        im1: `img\\Black coffee3.jpeg`,
                        extraImg: ["img\\Black coffee2.jpg"],
                        des: "No frills here: Black coffee is made from plain ground coffee beans that are brewed hot. It's served without added sugar, milk, or flavorings.",
                        vid: "https://www.youtube.com/embed/QdqGDqXx5kI",
                        fav: false,
                  },
                  {
                        title: "Cappuccino",
                        im1: "img\\Cappuccino2.jpeg",
                        extraImg: ["img\\Cappuccino1.jpeg"],
                        des: "This espresso-based drink is similar to a latte, but the frothy top layer is thicker. The standard ratio is equal parts espresso, steamed milk, and foam. It's often served in a 6-ounce cup (smaller than a latte cup) and can be topped with a sprinkling of cinnamon.",
                        vid: "https://www.youtube.com/embed/gvPetTPFsZM",
                        fav: false,
                  },
                  {
                        title: "macchiato",
                        im1: "img\\macchiato2.jpeg",
                        extraImg: ["img\\macchiato1.jpeg"],
                        des: "A macchiato is a shot of espresso with just a touch of steamed milk or foam. In Italian, macchiato means stained or spotted, so a caffè macchiato refers to coffee that's been stained with milk.",
                        vid: "https://www.youtube.com/embed/cGzktwWnWmI",
                        fav: false,
                  },
                  {
                        title: "Americano",
                        im1: `img\\Americano4.jpeg`,
                        extraImg: ["img\\Americano3.jpeg"],
                        des: "Order this drink and you'll get a shot of espresso diluted with hot water.Americano is an Italian term for American coffee. It is believed that the name comes from the U.S. soldiers in Italy during the 2nd World War who used water to ration the scarce amounts of espresso available at the time.",
                        vid: "https://www.youtube.com/embed/QYdDqU7XsKg",
                        fav: false,
                  },
                  {
                        title: "Cortado",
                        im1: `img\\Cortado2.jpeg`,
                        extraImg: ["img\\Cortado1.jpg"],
                        des: "This drink, which hails from Spain, is half espresso, half steamed milk. Unlike many Italian coffee drinks, it contains little to no foam. It's typically served in a 4.5-ounce glass.",
                        vid: "https://www.youtube.com/embed/VPL9JkZkAR0",
                        fav: false,
                  },
                  {
                        title: "Flat White",
                        im1: `img\\Flat White1.jpeg`,
                        extraImg: ["img\\Flat White2.jpg"],
                        des: "Like the latte, this drink consists of espresso and steamed milk, but the ratio of espresso to milk is higher. Baristas also fold the milk as it steams, which creates a more velvety texture. The flat white has roots in Australia and New Zealand.",
                        vid: "https://www.youtube.com/embed/-50tS3d2Yao",
                        fav: false,
                  },
                  {
                        title: "Mocha",
                        im1: "img\\Mocha.png",
                        extraImg: ["img\\caffee-mocha.jpg"],
                        des: "The basis is that a shot of espresso is combined with chocolate powder or syrup, followed by milk or cream. It is a variant of a latte, in the sense that it is often 1/3 espresso and 2/3 steamed milk.",
                        vid: "https://www.youtube.com/embed/aEHBmi1927g",
                        fav: true,
                  },
            ];



      // ...................................................

      // cards Home page
      function homeCards() {
            cards.slice(-3).forEach((card, i) => {
                  $(".cards").append(`<div id="item${i}" class="containerCards">
                  <img  src=' ${card.im1}' /> 
                  <h2 class="tit">${card.title}</h2>
                  <button id="itembt${i}" class='btn'> more read </button>
                  </div> `)

                  // description
                  $(`#itembt${i}`).click(function () {
                        $("#pages").hide();
                        $('.descard').append(`<div class="descards">
                        <br/>
                        <button id="btBack"> back &#8592; </button>
                        <br/>
                        <h2 class="tit">${card.title}</h2>
                         <br/><br/>
                        <h5 class="des">${card.des}</h5>
                        <br/><br/>
                        <img src='${card.im1}'  />
                        <img src='${card.extraImg}'/>
                        <br/> <br/> <br/> <br/>
                        <p class="cup">_________________________________ <i class="fa-sharp fa-solid fa-mug-hot"
                        style="color: rgb(101, 24, 24);"></i> _________________________________</p>
                        <p class="cup22">____________ <i class="fa-sharp fa-solid fa-mug-hot"
                         style="color: rgb(101, 24, 24);"></i> ____________</p>
                        <br/>
                        <h3>How to make the ${card.title}</h3>
                        <br/>
                        <iframe src=${card.vid} width="80%" height="415"></iframe>
                        </div>`);

                        $(`#btBack`).click(function () {
                              location.reload(true)

                        })
                  })
            });
      }


      homeCards();


      // ...................................................

      // cards page (Coffee Time)..........
      const allCards = () => {
            cards.forEach((card, i) => {
                  $(".allcards").append(`<div id="item${i}" class="containerCards">
                  <br/>
                  <img  src=' ${card.im1}' /> 
                  <br>
                  <i id="fav${i}" class="far fa-heart"></i>  
                  <br>                
                  <h2 class="tit">${card.title}</h2>
                  <button id="itembt${i}" class='btn'> more read </button>
                  </div> `);

                  // change color of fav heart
                  if (card.fav === true) {
                        $(`#fav${i}`).removeClass("far")
                        $(`#fav${i}`).addClass("fas")
                  } 

               
                  $(function () {
                        $(`#fav${i}`).click(function () {
                              card.fav = !card.fav
                              localStorage.setItem("cards", JSON.stringify(cards));
                              
                        })
                  })

                  // 
                  $(`#itembt${i}`).click(function () {
                        $(".allcards").hide();
                        $('.alldescard').append(`<div class='descards'>
                        <br/>
                        <button id="btBack"> back &#8592; </button>
                        <br/>
                        <h2 class="tit">${card.title}</h2>
                        <br/><br/>
                        <h5 class="des">${card.des}</h5>
                        <br/><br/>
                        <img src='${card.im1}'  />
                        <img src='${card.extraImg}'/>
                        <br/> <br/> <br/> <br/>
                        <p class="cup">______ <i class="fa-sharp fa-solid fa-mug-hot"
                        style="color: rgb(101, 24, 24);"></i> ______</p>
                        <p class="cup22">______ <i class="fa-sharp fa-solid fa-mug-hot"
                        style="color: rgb(101, 24, 24);"></i> ______</p>
     
                        <br/>
                        <h3>How to make the ${card.title}</h3>
                        <br/>
                        <iframe src=${card.vid} width="80%" height="415"></iframe>
                        </div>`);

                        // go back...
                        $(`#btBack`).click(function () {
                              location.reload(true)

                        })
                  })
            });
      }


      allCards();

    
      // ...................................................
      // search
      $("#searchInput").on("keyup", function () {
            let value = $("#searchInput").val().toLowerCase();
            $(".containerCards").filter(function () {
                  $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
      });



   

      // ..........................................................
      // Favorite..........
      const myFav = cards.filter((item, i) => {
            return item.fav == true
      })

      function allCardsFav() {
            myFav.forEach((card, i) => {
                  $(".cardsFav").append(`<div id="item${i}" class="containerCards">
                  <img  src=' ${card.im1}' /> 
                  <br>
                  <i id="fav${i}" class="fas fa-heart"></i>                  
                  <h2 class="tit">${card.title}</h2>
                  <button id="itembt${i}" class='btn'> more read </button>
                  </div> `);

                  $(function () {
                        $(`#fav${i}`).click(function () {
                              card.fav = false;
                              JSON.parse(localStorage.getItem("cards"))

                        })
                  })

                  // 
                  $(`#itembt${i}`).click(function () {
                        $(".cardsFav").hide();
                        $('.alldescardFav').append(`<div class='descards'>
                        <br/>
                        <button id="btBack"> back &#8592; </button>
                        <br/>
                        <h2 class="tit">${card.title}</h2>
                        <br/><br/>
                        <h5 class="des">${card.des}</h5>
                        <br/><br/>
                        <img src='${card.im1}'  />
                        <img src='${card.extraImg}'/>
                        <br/> <br/> <br/> <br/>
                        <p class="cup">_________________________________ <i class="fa-sharp fa-solid fa-mug-hot"
                        style="color: rgb(101, 24, 24);"></i> _________________________________</p>
                        <br/>
                        <h3>How to make the ${card.title}</h3>
                        <br/>
                        <iframe src=${card.vid} width="80%" height="415"></iframe>
                        </div>`);

                        $(`#btBack`).click(function () {
                              location.reload(true)

                        })
                  })


            });
      }

      allCardsFav();




      // ..........................................................
      // footer
      $('.footer').css({
            backgroundColor: "#f1f1f1",
            bottom: "0",
            left: "0",
            padding: "20px",
            textAlign: "center",
            color: "brown",
            fontSize: "20px"
      })







})