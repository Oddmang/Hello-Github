// 新闻轮播
function moveList() {
    $(".n_list li:first").animate({
        "margin-top": -40
    }, 1500, function () {
        $(this).css("margin-top", 0).appendTo(".n_list")
    })
}

setInterval(moveList, 1500)