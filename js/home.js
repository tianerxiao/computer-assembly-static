// ContentDetail = {
//     'CPU': {
//         'name': 'CPU',
//         'cate': [
//             {
//                 'title': '推荐品牌',
//                 'detail': [
//                     'Intel', 'AMD'
//                 ]
//             },
//             {
//                 'title': '价格区间',
//                 'detail': [
//                     '213', '213213'
//                 ]
//             },
//         ]
//     },
//     'Board': {
//         'name': 'Board',
//         'cate': [
//             {
//                 'title': '推荐品牌',
//                 'detail': [
//                     'Intel', 'AMD'
//                 ]
//             },
//             {
//                 'title': '价格区间',
//                 'detail': [
//                     '123213', '213'
//                 ]
//             },
//         ]
//     }
// };
// item_detail = {
//     'name': 'null',
//     'id': 0
// };
//
// CategoryDetail = {
//     'title': null,
//     'choose_item': null
// };
//
// function appendChooseCategory(detail) {
//     $('#cate_group li').remove();
//     let c = $('#cate_group');
//     for (let index in detail.cate) {
//         html1 = "<li class=\"list-group-item\"><div class=\"row center-block\"><div class=\"col-md-2 \">" +
//             detail.cate[index].title +
//             "</div><div class=\"col-md-10\">";
//         html2 = "<a class='active cate_item'>不限</a>";
//         for (let index2 in detail.cate[index].detail) {
//             html2 += "<a class='cate_item' onclick='list(" + detail.name + ")'>" + detail.cate[index].detail[index2] + "</a>";
//         }
//         html3 = "</div></div></li>";
//         c.append(html1 + html2 + html3)
//     }
// }
//
// function go(name, id) {
//     $('#choose_title_div').text('请选择' + name);
//
//     switch (name) {
//         case 'CPU':
//             appendChooseCategory(ContentDetail.CPU);
//             showCpu()
//             break
//     }
// }

function get() {
    result = []
    $('.active').each(function () {
        result.push($(this).html())
    });
    console.log(result)
}

$(function () {
    $('.cate_item').click(function () {
        //清除所有项的选中效果
        $(this).parent().children().each(function () {
            $(this).removeClass("active")
        });
        //给当选中的项添加选中效果
        $(this).addClass("active");
        get()
    });

});
