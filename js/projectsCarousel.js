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


$("#openGEFModal").click(function ()
{
    openModal(`
        <iframe src="https://globalearthfood.eu" title="GEF" style="width: 100%; height: 100%;"></iframe>
    `);
});