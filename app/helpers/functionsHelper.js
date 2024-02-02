//var http = require("https");
var http = require('http');

function Send_SMS(mobileNumber,message='') {

    //console.log('message',message)

    let username = "ShopeeTrans";
    let password = "xtIRT4d3";
    let sender_id = "OURSHOPEE";
    let mobile='+971'+ Number(mobileNumber);

    url = "http://api.rmlconnect.net/bulksms/bulksms";

    let parameters = 'username='+username+'&password='+password+'&type=0&dlr=1&destination='+mobile+'&source='+sender_id+'&message='+message;
    get_url = url + "?" + parameters;  
    http.get(get_url, function (result) {
            if(result.statusCode ==200){
                return 'success';
            }else{
            }
        }).on('error', function (err) {
            return 'error';
    });
}

module.exports = { Send_SMS } 