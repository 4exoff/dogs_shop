$('document').ready(function () {
 	var countClick=0;
    $(".categories-product li").click(function(){

    	if(countClick===0){
            //$(".subcategories-product",this).show();
        	$(".subcategories-product",this).css({"display":"block"});
            countClick=1;
        }
        else {
            //$(".subcategories-product",this).hide();
       		$(".subcategories-product",this).css({"display":"none"});
            countClick=0;
        }
    }); 

    var Click=0;
	var leftSpan;
	var rightSpan;

    $(".selected-cost-product").click(function(){
    	if(Click===0){
        	$(".drop-list",this).css({"display":"block"});
        		$("li",this).click(function () {
        			leftSpan = $(".left-list",this).text();
        			rightSpan = $(".right-list",this).text();
    			});
            Click=1;    
        }
        else {
       		$(".drop-list",this).css({"display":"none"});
            Click=0;
        }
         $(".left-placeholder",this).text(leftSpan);
         $(".right-placeholder",this).text(rightSpan);
    }); 

	var title ,cost;
	
	$("section").click(function(){
		title = $(".content-product-title a",this).text();
		cost = $(".left-placeholder",this).text();
		var innerCount=0;
		$(".cart-button").click(function() {
	   		$("#myModal").modal('show'); 
	   		$(".modal-body-title p").text(title);
	   		$(".modal-body-cost a").text(cost);
   		
	   		$(".up-count").click(function() {
	   			innerCount++;
	   			$(".count-show").text(innerCount);
	   			$(".modal-footer-total-cost span").text( cost.replace(/[^0-9]/gim,'') * innerCount);
	   		});

	   		$(".down-count").click(function() {
		   		if(innerCount>0 && innerCount!==0){
		   			innerCount--;
	   				$(".count-show").text(innerCount);
	   				$(".modal-footer-total-cost span").text( cost.replace(/[^0-9]/gim,'') * innerCount);
		   		}
	   		});

			$(".close").click(function() {
	   			innerCount=0;
	   			$(".count-show").text(innerCount);
	   			$(".modal-footer-total-cost span").text( cost.replace(/[^0-9]/gim,'') * innerCount);
	   		});
	   		$(".btn").click(function() {
	   			innerCount=0;
	   			$(".count-show").text(innerCount);
	   			$(".modal-footer-total-cost span").text( cost.replace(/[^0-9]/gim,'') * innerCount);
	   		});

		});
		
	});

});