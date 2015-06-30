var oper="";
var res=0;
var a=0;
var b=0;
var v1=false;
var v2=false;
var fin=false;

function calc(v1,v2,oper) 
{ 
    var r=0; 
    var a1=parseInt(v1);
    var b1=parseInt(v2);
    
    if (oper=="+") {r=a1+b1;}
    else if (oper=="-") {r=a1-b1;}
    else if (oper=="*") {r=a1*b1;}
    else if ((oper=="/") && (b1!==0)) {r=a1/b1;}
    fin = true;
    return r;
}

function reset() {
        a=0;
        b=0;
        v1=false;
        v2=false;
        oper="";
        res=0;
}

$(document).ready(function(){
        
    $('#cls').click(function() {
        reset();
        $('.disp p').text("");
    });
    
    $('#add').click(function(){
        if (!v1) {
            a=$('.disp p').text();
            v1=true;
            $('.disp p').text("");
            oper="+";
        }
        else {
            if (v2) {
                b=$('.disp p').text();
                res=calc(a,b,oper);
                $('.disp p').text(res);
            }
        }
    });
    
    $('#min').click(function(){
        if (!v1) {
            a=$('.disp p').text();
            v1=true;
            $('.disp p').text("");
            oper="-";
        }
        else {
            if (v2) {
                b=$('.disp p').text();
                res=calc(a,b,oper);
                $('.disp p').val(res);
            }
        }
    });
    $('#mul').click(function(){
        if (!v1) {
            a=$('.disp p').text();
            v1=true;
            $('.disp p').text("");
            oper="*";
        }
        else {
            if (v2) {
                b=$('.disp p').text();
                res=calc(a,b,oper);
                $('.disp p').text(res);
            }
        }
    });
     $('#div').click(function(){
        if (!v1) {
            a=$('.disp p').text();
            v1=true;
            $('.disp p').text("");
            oper="/";
        }
        else {
            if (v2) {
                b=$('.disp p').text();
                res=calc(a,b,oper);
                $('.disp p').text(res);
            }
        }
    });
     $('#equal').click(function(){
        if ((!v1) || (!v2)) {
            reset();
            $('.disp p').text("");
        }
        else {
            if (v2) {
                b=$('.disp p').text();
                res=calc(a,b,oper);
                $('.disp p').text(res);
                reset();
            }
        }
    });
    
    
    $('#n1').click(function(){
        if (fin) {
            $('.disp p').text("");
            fin=false;
        }
        $('.disp p').append("1");
        if ((v1) && (!v2)) {v2=true;}
    });    
    $('#n2').click(function(){
        if (fin) {
            $('.disp p').text("");
            fin=false;
        }
        $('.disp p').append("2");
        if ((v1) && (!v2)) {v2=true;}
    });    
    $('#n3').click(function(){
        if (fin) {
            $('.disp p').text("");
            fin=false;
        }
        $('.disp p').append("3");
        if ((v1) && (!v2)) {v2=true;}
    });
    $('#n4').click(function(){
        if (fin) {
            $('.disp p').text("");
            fin=false;
        }
        $('.disp p').append("4");
        if ((v1) && (!v2)) {v2=true;}
    });
    $('#n5').click(function(){
        if (fin) {
            $('.disp p').text("");
            fin=false;
        }
        $('.disp p').append("5");
        if ((v1) && (!v2)) {v2=true;}
    });
    $('#n6').click(function(){
        if (fin) {
            $('.disp p').text("");
            fin=false;
        }
        $('.disp p').append("6");
        if ((v1) && (!v2)) {v2=true;}
    });
    $('#n7').click(function(){
        if (fin) {
            $('.disp p').text("");
            fin=false;
        }
        $('.disp p').append("7");
        if ((v1) && (!v2)) {v2=true;}
    });
    $('#n8').click(function(){
        if (fin) {
            $('.disp p').text("");
            fin=false;
        }
        $('.disp p').append("8");
        if ((v1) && (!v2)) {v2=true;}
    });
    $('#n9').click(function(){
        if (fin) {
            $('.disp p').text("");
            fin=false;
        }
        $('.disp p').append("9");
        if ((v1) && (!v2)) {v2=true;}
    });
    $('#n0').click(function(){
        if (fin) {
            $('.disp p').text("");
            fin=false;
        }
        $('.disp p').append("0");
        if ((v1) && (!v2)) {v2=true;}
    });
});