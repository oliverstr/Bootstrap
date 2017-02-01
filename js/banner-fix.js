$("#menu").on("show.bs.collapse",function(){
  $(".top-banner").addClass("top-banner-collpased");
})

$("#menu").on("hide.bs.collapse",function(){
  $(".top-banner").removeClass("top-banner-collpased");
})
