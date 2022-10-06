jQuery(document).ready(function(){
	
	otw_pctp_init_sliders();
	
	//Socail shares
	otw_pctp_social_shares();
	
	// Responsive Videos
	otw_pctp_responsive_videos();
	
	jQuery(window).resize(function(){
		otw_pctp_responsive_videos();
	});
	
	setTimeout( function(){
		otw_pctp_responsive_videos();
	}, 2000 );
	
	//Tabs
	try {
		jQuery('.otw_post_content-tabs').tabs();
	} catch(err) { }

} );

function otw_pctp_init_sliders(){
//Slider
  jQuery('.otw_post_content-slider').each(function(){
    var $this = jQuery(this);
  
    var flexNav = true; // Show Navigation
    var flexAuto = true;  // Auto play 

    if( $this.data('nav') === 0 ) {
      flexNav = false;
    }

    if( $this.data('auto-slide') === 0 ) {
      flexAuto = false;
    }

    var slider_animation = jQuery(this).data('animation');

    if($this.find('.slides').length > 0 ) {
      
      if( $this.hasClass('otw_post_content-carousel') ){
        var item_margin = $this.data('item-margin');
        var item_per_page = $this.data('item-per-page');
        var item_width = ( ($this.width() - ( item_margin * (item_per_page - 1) )) / item_per_page );

        var prev_text = "";
        var next_text = "";

        if($this.data('type') == "widget"){
          prev_text = '<i class="icon-angle-left"></i>';
          next_text = '<i class="icon-angle-right"></i>';
        }

        $this.flexslider({
          namespace: "otw-flex-",
          animation: slider_animation,
          animationLoop: false,
          prevText: prev_text,
          nextText: next_text,
          itemWidth: item_width,
          itemMargin: item_margin,
          controlNav: flexNav,
          slideshow: flexAuto
        });
      } else {

        $this.flexslider({
          namespace: "otw-flex-",
          controlNav: flexNav,
          animation: slider_animation,
          slideshow: flexAuto
        });
      }
    }
    // Hide bullets if paginations is not enabled
    if( $this.data('nav') === 0 ) {
      $this.find( jQuery('.otw-flex-control-nav') ).hide();
    }
  });

};

//Social shares
function otw_pctp_social_shares(){  

  jQuery('.otw_post_content-social-share-buttons-wrapper').each(function(){

    var $this = jQuery(this);
        title = jQuery(this).data('title'),
        description = jQuery(this).data('description'),
        image = jQuery(this).data('image'),
        postUrl = jQuery(this).data('url');

    jQuery.ajax({
      type: 'POST',
      url: socialShareURL,
      dataType: 'json',
      cache: false,
      data: { url: postUrl },
      success: function(data) {
     
        if(data.info !== 'error'){
          $this.find('.otw_post_content-social-share').each(function(){
            if(jQuery(this).hasClass('otw-facebook')){
              jQuery(this).append('<span class="data-shares">'+ data.facebook +'</span>');
              // jQuery(this).attr({'href': 'http://www.facebook.com/sharer.php?u='+ postUrl});
            } else if(jQuery(this).hasClass('otw-twitter')){
              jQuery(this).append('<span class="data-shares">'+ data.twitter +'</span>');
              // jQuery(this).attr({'href': 'https://twitter.com/intent/tweet?source=tweetbutton&text='+ escape(title) +'&url='+ encodeURIComponent(postUrl)});
            } else if(jQuery(this).hasClass('otw-google_plus')){
              jQuery(this).append('<span class="data-shares">'+ data.google_plus +'</span>');
              // jQuery(this).attr({'href': 'https://plus.google.com/share?url='+ postUrl});
            } else if(jQuery(this).hasClass('otw-linkedin')){
              jQuery(this).append('<span class="data-shares">'+ data.linkedin +'</span>');
              // jQuery(this).attr({'href': 'http://www.linkedin.com/shareArticle?mini=true&url='+ encodeURIComponent(postUrl) +'&title='+ escape(title) +'&summary='+ escape(description)});
            } else if(jQuery(this).hasClass('otw-pinterest')){
              jQuery(this).append('<span class="data-shares">'+ data.pinterest +'</span>');
              // jQuery(this).attr({'href': 'http://pinterest.com/pin/create/button/?url='+ encodeURIComponent(postUrl) +'&media='+ encodeURIComponent(image) +'&description='+ escape(description)});
            }
          });
        }
      }
    });

  });

  jQuery('.otw_post_content-social-wrapper').each(function(){
    var $this = jQuery(this);
        title = jQuery(this).data('title'),
        description = jQuery(this).data('description'),
        image = jQuery(this).data('image'),
        url = jQuery(this).data('url');

        

    jQuery(this).children('.otw_post_content-social-item').each(function(){
      if(jQuery(this).hasClass('otw-facebook')){
        jQuery(this).attr({'href': 'http://www.facebook.com/sharer.php?u='+ url});
      } else if(jQuery(this).hasClass('otw-twitter')){
        jQuery(this).attr({'href': 'https://twitter.com/intent/tweet?source=tweetbutton&url='+ encodeURIComponent(url) +'&text='+ escape(title)});
      } else if(jQuery(this).hasClass('otw-google_plus')){
        jQuery(this).attr({'href': 'https://plus.google.com/share?url='+ url});
      } else if(jQuery(this).hasClass('otw-linkedin')){
        jQuery(this).attr({'href': 'http://www.linkedin.com/shareArticle?mini=true&url='+ encodeURIComponent(url) +'&title='+ escape(title) +'&summary='+ escape(description)});
      } else if(jQuery(this).hasClass('otw-pinterest')){
        jQuery(this).attr({'href': 'http://pinterest.com/pin/create/button/?url='+ encodeURIComponent(url) +'&media='+ encodeURIComponent(image) +'&description='+ escape(description)});
      }
    });
  });

  otw_pctp_update_social_stuff();

}
function otw_pctp_update_social_stuff() {
  //Twitter
  
  jQuery.getScript("//platform.twitter.com/widgets.js");  
  
  // G+
  (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/platform.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();
}

function otw_pctp_responsive_videos() {
	
	jQuery('.otw_post_content-media .otw_ier').each( function(){
		
		var propoption = jQuery( this ).attr( 'data-width' ) / jQuery( this ).attr( 'data-height' );
		
		var parent = jQuery( this ).parents( '.otw_post_content-blog-full' ).first();
		
		jQuery( this ).css( 'max-width', '100%' );
		
		if( parent.size() && ( parent.hasClass('with-border') || parent.hasClass('with-bg') ) ){
			
			var new_width = parent.outerWidth();
			
			//parent.css( 'max-width', jQuery( this ).attr( 'data-width' ) + 'px' );
			parent.css( 'max-width', '100%' );
			
			if( parent.outerWidth() < jQuery( this ).attr( 'data-width' ) ){
				jQuery( this ).css( 'width', '' );
			}else{
				jQuery( this ).css( 'width', jQuery( this ).attr( 'data-width' ) + 'px' );
			}
		}else{
			jQuery( this ).parents( '.otw_post_content-media' ).first().css( 'max-width', '100%' );
		}
		jQuery( this ).parents( '.otw_post_content_related_posts_hover' ).first().css( 'max-width', '100%' );
		
		var new_height = parseInt( Number( jQuery( this ).width() / propoption ) );
		
		jQuery( this ).css( 'height', new_height );
		
		jQuery( this ).find( '> iframe' ).attr( 'height', new_height );
	} )
}