let ip = "125.217.34.8:8080";
let host = "http://" + ip;
$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};
$(function () {
    $.ajaxSetup({
        timeout: 10000
    });
});

function logout() {
    function register() {
        var o = $('#form1').serializeObject();
        localStorage.setItem("userkey", null);
        $.ajax({
            type: "DELETE",
            url: host + "/user/session",
            data: JSON.stringify(o),
            contentType: "application/json",
            success: function (msg) {
                location = 'main.html'
            },
            error: function (msg) {
                alert("无法连接到服务器，请重新尝试")
            }
        })
    }
}