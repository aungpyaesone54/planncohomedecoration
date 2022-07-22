
$(document).ready(function(){

    //  Start Back To Top 
    $('.btn-backtotops').hide();
    $(window).scroll(function(){
        let getscrolltop = $(this).scrollTop();
        console.log(getscrolltop);

        if(getscrolltop >= 370){
            $('.btn-backtotops').fadeIn(1000);
        }else{
            $('.btn-backtotops').fadeOut(1000);
        }
    });
    //  ENd Back To Top 


    // Start Header

        // Start nav

        // for bugger
        $('.navbuttons').click(function(){
            $('.navbuttons').toggleClass('crossxs');
        });

        //for scroll
        $(window).scroll(function(){

            let getscrolltop = $(this).scrollTop();
            console.log(getscrolltop);

            if(getscrolltop >= 200){
                $(".navbar").addClass("navmenus");
            }else{
                $(".navbar").removeClass("navmenus");
            }

        });

        // End nav


    // End Header


    // Start Properties



    $('.propertylists').click(function(){

        // for activeitems

        // $(this).addClass('activeitems');
        // $(this).siblings().removeClass('activeitems');

        $(this).addClass("activeitems").siblings().removeClass("activeitems");

        // for filter

        let getattrvalue = $(this).attr("data-filter");
        console.log(getattrvalue);

        if(getattrvalue === "all"){
            $(".filters").show("slide",1000);
        }else{

            $('.filters').hide();

            $(".filters").not("."+getattrvalue).hide("slide",1000);

            $(".filters").filter("."+getattrvalue).show("slide",1000);

        }


        // For image overlay (or) lightbox2
        lightbox.option({
            showImageNumberLabel:false
        });

    });

    // End Properties


    // Start Adv

    $(window).scroll(function(){

        let getscrolltop = $(this).scrollTop();

        // console.log(getscrolltop);

        if(getscrolltop >= 900){
            $('.advimages').addClass('fromlefts');
            $('.advtexts').addClass('fromrights');
        }else{
            $('.advimages').removeClass('fromlefts');
            $('.advtexts').removeClass('fromrights');
        }


    });



    // End Adv


    // Start Footer Section
    const getyear = $('#getyear');
    const getfullyear = new Date().getUTCFullYear();
    getyear.text(getfullyear);
    // End Footer Section



});




