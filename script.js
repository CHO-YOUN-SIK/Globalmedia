var bol1 = 1;
var bol2 = 1;

function popsend1() {
    var iframe = $("#sendpop1");
    if(bol1 == 1){
        iframe.attr("src", iframe.data("src"));
        document.getElementById("sendpop1").style="width: 80%; height: 500px;"
        document.getElementById("sendpop2").style="width:0;height:0;";
        document.getElementById("title1").style.top="780px"
        document.getElementById("description1").style.top="810px"
        document.getElementById("send2").style.top="780px"
        document.getElementById("send1").value="취소";
        document.getElementById("send2").value="신청하기";
        bol1 = 0;
        bol2 = 1;
    }
    else{
        document.getElementById("sendpop1").style="width:0;height:0;";
        document.getElementById("title1").style.top="280px"
        document.getElementById("description1").style.top="310px"
        document.getElementById("send2").style.top="280px"
        document.getElementById("send1").value="신청하기";
        bol1 = 1;
    }
}

function popsend2() {
    var iframe = $("#sendpop2");
    if(bol2 == 1){
        iframe.attr("src", iframe.data("src"));
        document.getElementById("sendpop2").style="width: 80%; height: 500px;"
        document.getElementById("sendpop1").style="width:0;height:0;";
        document.getElementById("title1").style.top="280px"
        document.getElementById("description1").style.top="310px"
        document.getElementById("send2").style.top="280px"   
        document.getElementById("send2").value="취소";
        document.getElementById("send1").value="신청하기";
        bol2 = 0;
        bol1 = 1;
    }
    else{
        document.getElementById("sendpop2").style="width:0;height:0;";
        document.getElementById("send2").value="신청하기";
        bol2 = 1;
    }
}

