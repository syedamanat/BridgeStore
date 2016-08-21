$(document).ready(function () {
    document.getElementById('dot1').style.color='white';
    $('#eventLaunch').hide();
    $('#appLaunch').hide();
    $('.fillContent').hide();
    $('.preview').hide();

     $('.createWebsite').click(function(){
           $('.mainDashboard').hide();
           $('#stepOne').show();
     });

     $('#appLaunchClick').click(function(){
           $('#eventLaunch').hide();
           $('#appLaunch').show();
     });

     $('#eventLaunchClick').click(function(){
           $('#appLaunch').hide();
           $('#eventLaunch').show();
     });

     $('#selectTemplate1').click(function(){
           $('#progressStep2').removeClass('disabled');
           $('#progressStep2').addClass('complete');
           $('#eventLaunch').hide();
           $('#appLaunch').hide();
           $('.dropdown').hide();
           $('.fillContent').show();
     });
     $('#selectTemplate2').click(function(){
           $('#progressStep2').removeClass('disabled');
           $('#progressStep2').addClass('complete');
           $('#eventLaunch').hide();
           $('#appLaunch').hide();
           $('.dropdown').hide();
           $('.fillContent').show();
     });

     $('#confirmContent').click(function(){
           $('#progressStep3').removeClass('disabled');
           $('#progressStep3').addClass('complete');
           $('.fillContent').hide();
           $('.preview').show();
     });

});

    function triggerInfo(id){
    document.getElementById("imgDisp").src="images/"+id+".png";
    }
