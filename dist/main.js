
$(document).ready(function() {
var walrusO = {  albumName : "walruses",
		picture1 : "https://cbsseattle.files.wordpress.com/2014/09/animal-walrus.jpg?w=1500",
		picture2 : "http://wikybrew.com/wp-content/uploads/2015/01/walrus2.jpg",
		picture3 : "http://www.thisplaceisazoo.com/files/505480/uploaded/WR11041%20Plush%20Cuddlekin%20Walrus.JPG",
		picture4 : "http://theinspirationroom.com/daily/commercials/2012/7/skittles_walrus.jpg",
		picture5 : "http://animal-backgrounds.com/files/Walrus/Under_water_Walrus_wallpaper.jpg",
		picture6 : "http://www.freakingnews.com/pictures/60500/Camel-Walrus-Moose-Animal--60662.jpg",
		};
var catO = {  albumName : "cats",
		picture1 : "http://th03.deviantart.net/fs11/PRE/i/2006/211/b/b/Evil_Cat_by_usernom.jpg",
		picture2 : "http://i.imgur.com/RIMjpT5.jpg?1",
		picture3 : "https://c4.staticflickr.com/4/3057/2925997252_cf1f912e57_b.jpg",
		picture4 : "http://images2.fanpop.com/image/photos/12900000/Cute-kittens-12929201-1600-1200.jpg",
		picture5 : "http://topwalls.net/wp-content/uploads/2012/04/Cute-Kitten.jpg",
		picture6 : "http://i.imgur.com/5ISoSD5.jpg",
		};
var dogsO = {  albumName : "dogs",
		picture1 : "http://i.huffpost.com/gen/1138139/images/o-ATTACKING-DOG-facebook.jpg",
		picture2 : "http://flagstaff-lawyer.com/wp/wp-content/uploads/2012/07/flagstaff-dog-bite-lawyer.jpeg",
		picture3 : "http://www.castellilaw.com/sites/www.castellilaw.com/files/Vicious%20dog.jpg",
		picture4 : "http://www.sasha.lunarcandles.com/images/IMG00064-20110303-2200.jpg",
		picture5 : "http://images4.fanpop.com/image/photos/15800000/Cute-Puppy-puppies-15813366-1600-1200.jpg",
		picture2 : "http://images2.fanpop.com/image/photos/13300000/Cute-Puppy-puppies-13379771-1280-800.jpg",
		};
var elephantsO = {  albumName : "elephants",
		picture1 : "http://funnystack.com/wp-content/uploads/2014/04/Funny-Elephants-6.jpg",
		picture2 : "http://i01.i.aliimg.com/wsphoto/v1/536023787/Cartoon-Mascot-Cute-Funny-Elephant-Costumes-Mascot-Performance-Elephant-Mascot-Free-shpping-by-EMS.jpg",
		picture3 : "http://th06.deviantart.net/fs70/PRE/i/2012/187/f/3/elephant_funny_face_by_elleardenimages-d566nz3.jpg",
		picture4 : "http://www.funnypictures24.com/wp-content/uploads/2014/11/Elephant-Painter.jpg",
		picture5 : "http://i.imgur.com/G76mqM1.jpg",
		picture6 : "http://cdn4.thrivingnow.com/wp/wp-content/uploads/2015/02/elephant-play.jpg",
		};
var apesO = {  albumName : "apes",
		picture1 : "http://i.huffpost.com/gen/784312/images/o-APE-HUMOR-facebook.jpg",
		picture2 : "http://www.lpzoo.org/pimages/LPZ130506_007.jpg",
		picture3 : "https://scottseyephotos.files.wordpress.com/2011/11/dsc_4056wm.jpg",
		picture4 : "http://upload.wikimedia.org/wikipedia/commons/f/f2/2006-12-09_Chipanzees_D_Bruyere.JPG",
		picture5 : "http://www.lpzoo.org/sites/default/files/images/multimedia/nayembi5-13_1200.jpg",
		picture6 : "http://i.huffpost.com/gen/1407083/images/o-APES-EMPATHY-facebook.jpg",
		};
var bunniesO = {  albumName : "bunnies",
		picture1 : "http://newbeetle.org/forums/attachments/miscellaneous-hoo-ha/76920d1288450441-lulz-thread-how-i-learned-stop-worrying-laugh-bit-1288447830713.jpg",
		picture2 : "http://newbeetle.org/forums/attachments/miscellaneous-hoo-ha/76920d1288450441-lulz-thread-how-i-learned-stop-worrying-laugh-bit-1288447830713.jpg",
		picture3 : "http://fc06.deviantart.net/fs70/i/2011/030/5/d/cute_bunny_at_seaview_by_deadbydefault-d38dzmw.jpg",
		picture4 : "http://www.mrwallpaper.com/wallpapers/Cute-Bunnies-1680x1050.jpg",
		picture5 : "http://myfunnymemes.com/wp-content/uploads/2015/04/The-Cutest-Tiny-Cat-Bunny-Posing-For-a-Picture.jpg",
		picture6 : "http://4.bp.blogspot.com/-amqCaz7l5QM/VR9MAwOn1qI/AAAAAAAAFOI/LAAMjDbwpqk/s1600/IMG_4422.JPG",
		};




//album();
function catsone(){function album(){var name = {  albumName : "cats",
		picture1 : "http://th03.deviantart.net/fs11/PRE/i/2006/211/b/b/Evil_Cat_by_usernom.jpg",
		picture2 : "http://i.imgur.com/RIMjpT5.jpg?1",
		picture3 : "https://c4.staticflickr.com/4/3057/2925997252_cf1f912e57_b.jpg",
		picture4 : "http://images2.fanpop.com/image/photos/12900000/Cute-kittens-12929201-1600-1200.jpg",
		picture5 : "http://topwalls.net/wp-content/uploads/2012/04/Cute-Kitten.jpg",
		picture6 : "http://i.imgur.com/5ISoSD5.jpg",
		picture1Name : "photo 1",
		picture2Name : "photo 2",
		picture3Name : "photo 3",
		picture4Name : "photo 4",
		picture5Name : "photo 5",
		picture6Name : "photo 6",
		};var poop = "<div class='container-fluid'><div class='row-fluid'><div class='col-md-3'>" + 
	
	"<ul><li class = 'cats'>cats</li><li class = 'dogs'>dogs</li><li class = 'elephants'>elephants</li><li class = 'apes'>apes</li><li class = 'bunnies'>bunnies</li><li class = 'walruses'>walruses</li></ul>"+
        "</div><div class='col-md-9'><section class='albumHeader'>" + 
	name.albumName +
	"</section><div class='row'><div class='col-md-1'></div><div class='col-md-2' id='cats'><img src="+
	name.picture1 +
	" class='img-responsive'><br/>photo 1</div><div class='col-md-2'></div><div class='col-md-2' id='dogs'><img src="+
	name.picture2 + 
	" class='img-responsive'><br/>photo 2</div><div class='col-md-2'></div><div class='col-md-2' id='dogs'><img src="+
	name.picture3 + 
	" class='img-responsive'><br/>photo 3</div><div class='col-md-1'></div></div><div class='row'><div style='height:60px' class='col-md-9'></div></div><div class='row'><div class='col-md-1'></div><div class='col-md-2' id='apes'><img src="+
	name.picture4 + 
	" class='img-responsive'><br/>photo 4</div><div class='col-md-2'></div><div class='col-md-2' id='bunnies'><img src="+
	name.picture5 + 
	" class='img-responsive'><br/>photo 5</div><div class='col-md-2'></div><div class='col-md-2' id='walruses'><img src="+
	name.picture6 +
 	" class='img-responsive'><br/>photo 6</div><div class='col-md-1'></div></div></div></div></div>";console.log(name);$(".mainWrapper").html(poop);}album();$(".cats").css({"background": "red"});
$(".dogs").on("click",dogsone);$(".cats").on("click",catsone);$(".apes").on("click",apesone);$(".elephants").on("click",elephantsone);$(".bunnies").on("click",bunniesone);$(".walruses").on("click",walrusesone);
$('.col-md-2').on("click", function(e){$(".mainWrapper").html("<strong><div class='cathop'>back to cats album</div></strong>");$('.cathop').on("click", catsone); $(".mainWrapper").append(this);$(".col-md-2").css({"width": "100%"});})}

$( "#cats" ).on( "click", catsone );
function dogsone(){function album(){var name={  albumName : "dogs",
		picture1 : "http://i.huffpost.com/gen/1138139/images/o-ATTACKING-DOG-facebook.jpg",
		picture2 : "http://flagstaff-lawyer.com/wp/wp-content/uploads/2012/07/flagstaff-dog-bite-lawyer.jpeg",
		picture3 : "http://www.funchap.com/wp-content/uploads/2014/05/cute-dog-baby-wallpaper.jpg",
		picture4 : "http://www.sasha.lunarcandles.com/images/IMG00064-20110303-2200.jpg",
		picture5 : "http://images4.fanpop.com/image/photos/15800000/Cute-Puppy-puppies-15813366-1600-1200.jpg",
		picture6 : "http://images2.fanpop.com/image/photos/13300000/Cute-Puppy-puppies-13379771-1280-800.jpg",
		picture1Name : "photo 1",
		picture2Name : "photo 2",
		picture3Name : "photo 3",
		picture4Name : "photo 4",
		picture5Name : "photo 5",
		picture6Name : "photo 6",
		};var poop = "<div class='container-fluid'><div class='row-fluid'><div class='col-md-3' style='background:blue height:100%'>" + 
	
	"<ul><li class = 'cats'>cats</li><li class = 'dogs'>dogs</li><li class = 'elephants'>elephants</li><li class = 'apes'>apes</li><li class = 'bunnies'>bunnies</li><li class = 'walruses'>walruses</li></ul>"+
        "</div><div class='col-md-9'><section class='albumHeader'>" + 
	name.albumName +
	"</section><div class='row'><div class='col-md-1'></div><div class='col-md-2' id='cats'><img src="+
	name.picture1 +
	" class='img-responsive'><br/>photo 1</div><div class='col-md-2'></div><div class='col-md-2' id='dogs'><img src="+
	name.picture2 + 
	" class='img-responsive'><br/>photo 2</div><div class='col-md-2'></div><div class='col-md-2' id='dogs'><img src="+
	name.picture3 + 
	" class='img-responsive'><br/>photo 3</div><div class='col-md-1'></div></div><div class='row'><div style='height:60px' class='col-md-9'></div></div><div class='row'><div class='col-md-1'></div><div class='col-md-2' id='apes'><img src="+
	name.picture4 + 
	" class='img-responsive'><br/>photo 4</div><div class='col-md-2'></div><div class='col-md-2' id='bunnies'><img src="+
	name.picture5 + 
	" class='img-responsive'><br/>photo 5</div><div class='col-md-2'></div><div class='col-md-2' id='walruses'><img src="+
	name.picture6 +
 	" class='img-responsive'><br/>photo 6</div><div class='col-md-1'></div></div></div></div></div>";$(".mainWrapper").html(poop);}album();$(".dogs").css({"background": "red"});
$(".dogs").on("click",dogsone);$(".cats").on("click",catsone);$(".apes").on("click",apesone);$(".elephants").on("click",elephantsone);$(".bunnies").on("click",bunniesone);$(".walruses").on("click",walrusesone);
$('.col-md-2').on("click", function(e){$(".mainWrapper").html("<strong><div class='doghop'>back to dogs album</div></strong>");$('.doghop').on("click", dogsone); $(".mainWrapper").append(this);$(".col-md-2").css({"width": "100%"});})}

$( "#dogs" ).on( "click", dogsone );
function elephantsone(){function album(){var name={ albumName : "elephants",
		picture1 : "http://funnystack.com/wp-content/uploads/2014/04/Funny-Elephants-6.jpg",
		picture2 : "http://i01.i.aliimg.com/wsphoto/v1/536023787/Cartoon-Mascot-Cute-Funny-Elephant-Costumes-Mascot-Performance-Elephant-Mascot-Free-shpping-by-EMS.jpg",
		picture3 : "http://th06.deviantart.net/fs70/PRE/i/2012/187/f/3/elephant_funny_face_by_elleardenimages-d566nz3.jpg",
		picture4 : "http://www.funnypictures24.com/wp-content/uploads/2014/11/Elephant-Painter.jpg",
		picture5 : "http://i.imgur.com/G76mqM1.jpg",
		picture6 : "http://cdn4.thrivingnow.com/wp/wp-content/uploads/2015/02/elephant-play.jpg",
		picture1Name : "photo 1",
		picture2Name : "photo 2",
		picture3Name : "photo 3",
		picture4Name : "photo 4",
		picture5Name : "photo 5",
		picture6Name : "photo 6",
		};var poop = "<div class='container-fluid'><div class='row-fluid'><div class='col-md-3' style='background:blue'>" + 
	
	"<ul><li class = 'cats'>cats</li><li class = 'dogs'>dogs</li><li class = 'elephants'>elephants</li><li class = 'apes'>apes</li><li class = 'bunnies'>bunnies</li><li class = 'walruses'>walruses</li></ul>"+
        "</div><div class='col-md-9'><section class='albumHeader'>" + 
	name.albumName +
	"</section><div class='row'><div class='col-md-1'></div><div class='col-md-2' id='cats'><img src="+
	name.picture1 +
	" class='img-responsive'><br/>photo 1</div><div class='col-md-2'></div><div class='col-md-2' id='dogs'><img src="+
	name.picture2 + 
	" class='img-responsive'><br/>photo 2</div><div class='col-md-2'></div><div class='col-md-2' id='dogs'><img src="+
	name.picture3 + 
	" class='img-responsive'><br/>photo 3</div><div class='col-md-1'></div></div><div class='row'><div style='height:60px' class='col-md-9'></div></div><div class='row'><div class='col-md-1'></div><div class='col-md-2' id='apes'><img src="+
	name.picture4 + 
	" class='img-responsive'><br/>photo 4</div><div class='col-md-2'></div><div class='col-md-2' id='bunnies'><img src="+
	name.picture5 + 
	" class='img-responsive'><br/>photo 5</div><div class='col-md-2'></div><div class='col-md-2' id='walruses'><img src="+
	name.picture6 +
 	" class='img-responsive'><br/>photo 6</div><div class='col-md-1'></div></div></div></div></div>";$(".mainWrapper").html(poop);}album();$(".elephants").css({"background": "red"});
$(".dogs").on("click",dogsone);$(".cats").on("click",catsone);$(".apes").on("click",apesone);$(".elephants").on("click",elephantsone);$(".bunnies").on("click",bunniesone);$(".walruses").on("click",walrusesone);
$('.col-md-2').on("click", function(e){$(".mainWrapper").html("<strong><div class='elephanthop'>back to elephants album</div></strong>");$('.elephanthop').on("click", elephantsone); $(".mainWrapper").append(this);$(".col-md-2").css({"width": "100%"});})}


$( "#elephants" ).on( "click", elephantsone );
function apesone(){function album(){var name={  albumName : "apes",
		picture1 : "http://i.huffpost.com/gen/784312/images/o-APE-HUMOR-facebook.jpg",
		picture2 : "http://www.lpzoo.org/pimages/LPZ130506_007.jpg",
		picture3 : "https://scottseyephotos.files.wordpress.com/2011/11/dsc_4056wm.jpg",
		picture4 : "http://upload.wikimedia.org/wikipedia/commons/f/f2/2006-12-09_Chipanzees_D_Bruyere.JPG",
		picture5 : "http://www.lpzoo.org/sites/default/files/images/multimedia/nayembi5-13_1200.jpg",
		picture6 : "http://i.huffpost.com/gen/1407083/images/o-APES-EMPATHY-facebook.jpg",
		picture1Name : "photo 1",
		picture2Name : "photo 2",
		picture3Name : "photo 3",
		picture4Name : "photo 4",
		picture5Name : "photo 5",
		picture6Name : "photo 6",
		};var poop = "<div class='container-fluid'><div class='row-fluid'><div class='col-md-3' style='background:blue'>" + 
	
	"<ul><li class = 'cats'>cats</li><li class = 'dogs'>dogs</li><li class = 'elephants'>elephants</li><li class = 'apes'>apes</li><li class = 'bunnies'>bunnies</li><li class = 'walruses'>walruses</li></ul>"+
        "</div><div class='col-md-9'><section class='albumHeader'>" + 
	name.albumName +
	"</section><div class='row'><div class='col-md-1'></div><div class='col-md-2' id='cats'><img src="+
	name.picture1 +
	" class='img-responsive'><br/>photo 1</div><div class='col-md-2'></div><div class='col-md-2' id='dogs'><img src="+
	name.picture2 + 
	" class='img-responsive'><br/>photo 2</div><div class='col-md-2'></div><div class='col-md-2' id='dogs'><img src="+
	name.picture3 + 
	" class='img-responsive'><br/>photo 3</div><div class='col-md-1'></div></div><div class='row'><div style='height:60px' class='col-md-9'></div></div><div class='row'><div class='col-md-1'></div><div class='col-md-2' id='apes'><img src="+
	name.picture4 + 
	" class='img-responsive'><br/>photo 4</div><div class='col-md-2'></div><div class='col-md-2' id='bunnies'><img src="+
	name.picture5 + 
	" class='img-responsive'><br/>photo 5</div><div class='col-md-2'></div><div class='col-md-2' id='walruses'><img src="+
	name.picture6 +
 	" class='img-responsive'><br/>photo 6</div><div class='col-md-1'></div></div></div></div></div>";$(".mainWrapper").html(poop);}album();$(".apes").css({"background": "red"});
$(".dogs").on("click",dogsone);$(".cats").on("click",catsone);$(".apes").on("click",apesone);$(".elephants").on("click",elephantsone);$(".bunnies").on("click",bunniesone);$(".walruses").on("click",walrusesone);
$('.col-md-2').on("click", function(e){$(".mainWrapper").html("<strong><div class='apehop'>back to apes album</div></strong>");$('.apehop').on("click", apesone); $(".mainWrapper").append(this);$(".col-md-2").css({"width": "100%"});})}

$( "#apes" ).on( "click", apesone );
function walrusesone(){function album(){var name={  albumName : "walruses",
		picture1 : "https://cbsseattle.files.wordpress.com/2014/09/animal-walrus.jpg?w=1500",
		picture2 : "http://wikybrew.com/wp-content/uploads/2015/01/walrus2.jpg",
		picture3 : "http://www.thisplaceisazoo.com/files/505480/uploaded/WR11041%20Plush%20Cuddlekin%20Walrus.JPG",
		picture4 : "http://theinspirationroom.com/daily/commercials/2012/7/skittles_walrus.jpg",
		picture5 : "http://animal-backgrounds.com/files/Walrus/Under_water_Walrus_wallpaper.jpg",
		picture6 : "http://www.freakingnews.com/pictures/60500/Camel-Walrus-Moose-Animal--60662.jpg",
		picture1Name : "photo 1",
		picture2Name : "photo 2",
		picture3Name : "photo 3",
		picture4Name : "photo 4",
		picture5Name : "photo 5",
		picture6Name : "photo 6",
		};var poop = "<div class='container-fluid'><div class='row-fluid'><div class='col-md-3' style='background:blue'>" + 
	
	"<ul><li class = 'cats'>cats</li><li class = 'dogs'>dogs</li><li class = 'elephants'>elephants</li><li class = 'apes'>apes</li><li class = 'bunnies'>bunnies</li><li class = 'walruses'>walruses</li></ul>"+
        "</div><div class='col-md-9'><section class='albumHeader'>" + 
	name.albumName +
	"</section><div class='row'><div class='col-md-1'></div><div class='col-md-2' id='cats'><img src="+
	name.picture1 +
	" class='img-responsive'><br/>photo 1</div><div class='col-md-2'></div><div class='col-md-2' id='dogs'><img src="+
	name.picture2 + 
	" class='img-responsive'><br/>photo 2</div><div class='col-md-2'></div><div class='col-md-2' id='dogs'><img src="+
	name.picture3 + 
	" class='img-responsive'><br/>photo 3</div><div class='col-md-1'></div></div><div class='row'><div style='height:60px' class='col-md-9'></div></div><div class='row'><div class='col-md-1'></div><div class='col-md-2' id='apes'><img src="+
	name.picture4 + 
	" class='img-responsive'><br/>photo 4</div><div class='col-md-2'></div><div class='col-md-2' id='bunnies'><img src="+
	name.picture5 + 
	" class='img-responsive'><br/>photo 5</div><div class='col-md-2'></div><div class='col-md-2' id='walruses'><img src="+
	name.picture6 +
 	" class='img-responsive'><br/>photo 6</div><div class='col-md-1'></div></div></div></div></div>";$(".mainWrapper").html(poop);}album();$(".walruses").css({"background": "red"});
$(".dogs").on("click",dogsone);$(".cats").on("click",catsone);$(".apes").on("click",apesone);$(".elephants").on("click",elephantsone);$(".bunnies").on("click",bunniesone);$(".walruses").on("click",walrusesone);
$('.col-md-2').on("click", function(e){$(".mainWrapper").html("<strong><div class='walrushop'>back to walruses album</div></strong>");$('.walrushop').on("click", walrusesone); $(".mainWrapper").append(this);$(".col-md-2").css({"width": "100%"});})}
$( "#walruses" ).on( "click", walrusesone );
function bunniesone(){function album(){var name={  albumName : "bunnies",
		picture1 : "http://newbeetle.org/forums/attachments/miscellaneous-hoo-ha/76920d1288450441-lulz-thread-how-i-learned-stop-worrying-laugh-bit-1288447830713.jpg",
		picture2 : "http://blog.golfnow.com.s3.amazonaws.com/wp-content/uploads/2013/03/Giant-Rabbit.jpg",
		picture3 : "http://fc06.deviantart.net/fs70/i/2011/030/5/d/cute_bunny_at_seaview_by_deadbydefault-d38dzmw.jpg",
		picture4 : "http://www.mrwallpaper.com/wallpapers/Cute-Bunnies-1680x1050.jpg",
		picture5 : "http://myfunnymemes.com/wp-content/uploads/2015/04/The-Cutest-Tiny-Cat-Bunny-Posing-For-a-Picture.jpg",
		picture6 : "http://4.bp.blogspot.com/-amqCaz7l5QM/VR9MAwOn1qI/AAAAAAAAFOI/LAAMjDbwpqk/s1600/IMG_4422.JPG",
		picture1Name : "photo 1",
		picture2Name : "photo 2",
		picture3Name : "photo 3",
		picture4Name : "photo 4",
		picture5Name : "photo 5",
		picture6Name : "photo 6",
		};var poop = "<div class='container-fluid'><div class='row-fluid'><div class='col-md-3' style='background:blue'>" + 
	
	"<ul><li class = 'cats'>cats</li><li class = 'dogs'>dogs</li><li class = 'elephants'>elephants</li><li class = 'apes'>apes</li><li class = 'bunnies'>bunnies</li><li class = 'walruses'>walruses</li></ul>"+
        "</div><div class='col-md-9'><section class='albumHeader'>" + 
	name.albumName +
	"</section><div class='row'><div class='col-md-1'></div><div class='col-md-2' id='cats'><img src="+
	name.picture1 +
	" class='img-responsive'>photo 1<br/></div><div class='col-md-2'></div><div class='col-md-2' id='dogs'><img src="+
	name.picture2 + 
	" class='img-responsive'>photo 2<br/></div><div class='col-md-2'></div><div class='col-md-2' id='dogs'><img src="+
	name.picture3 + 
	" class='img-responsive'>photo 3<br/></div><div class='col-md-1'></div></div><div class='row'><div style='height:60px' class='col-md-9'></div></div><div class='row'><div class='col-md-1'></div><div class='col-md-2' id='apes'><img src="+
	name.picture4 + 
	" class='img-responsive'>photo 4<br/></div><div class='col-md-2'></div><div class='col-md-2' id='bunnies'><img src="+
	name.picture5 + 
	" class='img-responsive'>photo 5<br/></div><div class='col-md-2'></div><div class='col-md-2' id='walruses'><img src="+
	name.picture6 +
 	" class='img-responsive'>photo 6<br/></div><div class='col-md-1'></div></div></div></div></div>";$(".mainWrapper").html(poop);}album();$(".bunnies").css({"background": "red"});
	$(".dogs").on("click",dogsone);$(".cats").on("click",catsone);$(".apes").on("click",apesone);$(".elephants").on("click",elephantsone);$(".bunnies").on("click",bunniesone);$(".walruses").on("click",walrusesone);
	$('.col-md-2').on("click", function(e){$(".mainWrapper").html("<strong><div class='bunnyhop'>back to bunnies album</div></strong>");$('.bunnyhop').on("click", bunniesone);$(".mainWrapper").append(this);$(".col-md-2").css({"width":"100%"});})}
$( "#bunnies" ).on( "click", bunniesone );

});

