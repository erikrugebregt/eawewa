/* ------------------------------------------------- Load carousel ------------------------------------------------- */
let carouselItems = [
                        {"carouselImagePath": "Logo_Wit.png", "carouselLink": "https://globalearthfood.eu"},
                        {"carouselImagePath": "", "carouselLink": ""}
                    ];


function loadCarousel()
{
    for (let i = 0; i < carouselItems.length; i++)
    {
        $("#carouselContainer").append(`
            <div class="item" id="${"carouselItem" + i}" style="transform: rotateY(${i * (360 / carouselItems.length)}deg) translateZ(250px); transition-duration: 0.3s;">
                <img id="openCarouselModal${i}" style="max-height:100%; max-width:100%" src="${carouselItems[i].carouselImagePath}" />
            </div>
        `);
    }

    for (let i = 0; i < carouselItems.length; i++)
    {
        $("#openCarouselModal" + i).click(function ()
        {
            openModal(`
                <iframe src="${carouselItems[i].carouselLink}" title="Carousel Item" style="width: 100%; height: 100%;"></iframe>
            `);
        });
        $("#carouselItem" + i).hover(function ()
        {
            this.style.transform = `rotateY(${i * (360 / carouselItems.length)}deg) translateZ(260px)`;
        }, function ()
        {
            this.style.transform = `rotateY(${i * (360 / carouselItems.length)}deg) translateZ(250px)`;
        });
    }
}

loadCarousel();


/* Carousel turning. */
let carousel     = $(".carousel");
let currdeg      = 0;
let turnFunction = null;


$(".carouselContainer").hover(
function ()
{
    rotate(-1);
},
function ()
{
    clearInterval(turnFunction);
});
$(".carouselContainer").click(
function ()
{
    clearInterval(turnFunction);
});


function rotate(direction)
{
    turnFunction = setInterval(function ()
    {
        if (direction == -1)
        {
            currdeg -= 3;
        }
        if (direction == 1)
        {
            currdeg += 3;
        }
        carousel.css({
            "-webkit-transform": "rotateY(" + currdeg + "deg)",
            "-moz-transform": "rotateY(" + currdeg + "deg)",
            "-o-transform": "rotateY(" + currdeg + "deg)",
            transform: "rotateY(" + currdeg + "deg)"
        });
    }, 50);
}