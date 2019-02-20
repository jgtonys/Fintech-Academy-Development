$('#trans').click(function(){
    var ceo_code = 0;
    $.ajax({
        url: "/payment_server_side.js",
        type: "POST",
        datatype: 'json',
        data: {
             zipcode: ceo_code
         }
    }).done(function(result){
        $('account').val = result.account;
        $('money').val = result.money;
    })
    }
)
