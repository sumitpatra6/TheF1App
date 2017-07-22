//jquery source file

var app = {};


$(document).ready(function () {
    var currYear = app.getCurrentYear();
    var url = "http://ergast.com/api/f1/"+currYear+".json"
    var data = app.homecall(url);
    app.renderCarousel(data);
});


app.renderCarousel = function(data){
    
    var MRdata = data;
};


app.getCurrentYear = function(){
    var d = new Date();
    return d.getFullYear();
}

app.homecall = function(url){
    $.ajax({
        url : url,
        success : function(data){
            return data;
        },
        error : function(data){
            return errorMessage;
        }
        
    });
}
