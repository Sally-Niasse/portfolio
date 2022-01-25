$("document").ready(function(){
//Progress bars animation
function progress(){
    var percentageComplete = 0.8;
    var strokeDashOffsetValue = 100 - (percentageComplete * 100);
    var progressBar = $(".html .js-progress-bar");
    progressBar.css("stroke-dashoffset", strokeDashOffsetValue);

    var percentageComplete = 0.6;
    var strokeDashOffsetValue = 100 - (percentageComplete * 100);
    var progressBar = $(".css .js-progress-bar");
    progressBar.css("stroke-dashoffset", strokeDashOffsetValue);
    
    var percentageComplete = 0.5;
    var strokeDashOffsetValue = 100 - (percentageComplete * 100);
    var progressBar = $(".php .js-progress-bar");
    progressBar.css("stroke-dashoffset", strokeDashOffsetValue);

    var percentageComplete = 0.7;
    var strokeDashOffsetValue = 100 - (percentageComplete * 100);
    var progressBar = $(".abode .js-progress-bar");
    progressBar.css("stroke-dashoffset", strokeDashOffsetValue);
    }
    setTimeout(progress, 2000);
});
