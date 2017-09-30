$(document).ready(function(){
$("#clockLabel").text("Session");
$("#clockTimeMin").text($("#getSession").text());
$("#clockTimeSec").text("00");
$("#clock").on("click", function(){
    startClockSession();
});
    
});
function showClock(){
    $("#clockTimeMin").text($("#getSession").text());
}

function subtractSession(){
var time = parseInt($("#getSession").text());
if(time > 1){
    $("#getSession").text(parseInt(time)-1);
    if(time <= 10){
        $("#clockTimeMin").text('0' + $("#getSession").text());
    }else{
        $("#clockTimeMin").text($("#getSession").text());
    }
    
}
}

function addSession(){
    var time = parseInt($("#getSession").text());
    if(time > 1){
        $("#getSession").text(parseInt(time)+1);
        if(parseInt($("#clockTimeMin").text()) <= 9){
            $("#clockTimeMin").text('0' + $("#getSession").text());
        }else{
            $("#clockTimeMin").text($("#getSession").text());
        }
}
}

function subtractBreak(){
    var breakTime = parseInt($("#getBreak").text());
    if(breakTime > 1){
        $("#getBreak").text(parseInt(breakTime)-1);
    }
    
}

function addBreak(){
    var breakTime = parseInt($("#getBreak").text());
        $("#getBreak").text(parseInt(breakTime)+1);
}

function startBreakClock(){
    $("#clockTimeMin").text($("#getBreak").text());
    $("#clockTimeSec").text("00");
    $("#clockLabel").text("BREAK");
    var time = parseInt( $("#clockTimeSec").text());
    var timeMin = parseInt( $("#clockTimeMin").text());
    startClock();
}

function startClockSession(){
    $("#clockTimeMin").text($("#getSession").text());
    $("#clockTimeSec").text("00");
    $("#clockLabel").text("SESSION");
    var time = parseInt( $("#clockTimeSec").text());
    var timeMin = parseInt( $("#clockTimeMin").text());
    startClock();
}

function startClock(){
    var time = parseInt( $("#clockTimeSec").text());
    var timeMin = parseInt( $("#clockTimeMin").text());
    if(time == 0 && timeMin == 00){
        if(($("#clockLabel").text()) === "BREAK"){
            startClockSession();
        }else if(($("#clockLabel").text()) === "SESSION"){
            
            startBreakClock();
        }
    }else{
        setTimeout(function(){
            
            if(time == 0){
                if($("#clockTimeMin").text() == "01"){
                    $("#clockTimeMin").text('00');    
                }else{
                    $("#clockTimeMin").text('0' + parseInt($("#clockTimeMin").text())-1);
                }
                $("#clockTimeSec").text("59");
            }else{
                $("#clockTimeSec").text(time-1);
            }
            var cal = ((((timeMin * 60) + time)/(parseInt($("#getSession").text())*60)) * 100);
            cal = 100-cal;
            cal = Math.ceil(cal);

            if(($("#clockLabel").text()) === "SESSION"){
                $(".clock").css('background','linear-gradient(to bottom, grey 0% , grey '+parseInt(100-cal)+'% , green '+parseInt(cal)+'% , green 100%)');
            }
            else if(($("#clockLabel").text()) === "BREAK"){
                $(".clock").css('background','linear-gradient(to bottom, grey 0% , grey '+parseInt(100-cal)+'% , red '+parseInt(cal)+'% , red 100%)');
            }
                
            startClock();
        },1000);
    }
}
