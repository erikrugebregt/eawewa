/**
 * Accepts html for content of modal.
 */
async function openModal(htmlModalContent)
{
    $("#leftBar").show();
    $("#rightBar").show();
    $("#topBar").show();
    $("#bottomBar").show();

    $("#modalContent").html(htmlModalContent);

    $("#leftBar").animate(
        {
            "height": "50%"
        },
        500,
        function ()
        {
            $("#bottomBar").animate({"width": "50%"}, 500, function () {});
        }
    );
    $("#topBar").animate(
        {
            "width": "50%"
        },
        500,
        function ()
        {
            $("#rightBar").animate(
                {
                    "height": "50%"
                },
                500,
                function ()
                {
                    $("#myModal").fadeIn(1000, function ()
                    {
                        $("#leftBar").fadeOut("slow",   function () { $("#leftBar").css("height", "0px"); });
                        $("#rightBar").fadeOut("slow",  function () { $("#rightBar").css("height", "0px"); });
                        $("#topBar").fadeOut("slow",    function () { $("#topBar").css("width", "0px"); });
                        $("#bottomBar").fadeOut("slow", function () { $("#bottomBar").css("width", "0px"); });
                    });
                }
            );
        }
    );
}


$("#contactBtn").click(function ()
{
    openModal(`
        <div style="text-align: center;">
            E-mail: info@ezweb.com <br>
            Telefoonnummer: +31 6 16284091
        </div>
    `);
});


/* ------------------------------------------------- MODAL ------------------------------------------------- */
document.getElementsByClassName("close")[0].onclick = function ()
{
    $("#myModal").fadeOut("slow");
};
window.onclick = function (event)
{
    if (event.target == document.getElementById("myModal"))
    {
        $("#myModal").fadeOut("slow");
    }
}