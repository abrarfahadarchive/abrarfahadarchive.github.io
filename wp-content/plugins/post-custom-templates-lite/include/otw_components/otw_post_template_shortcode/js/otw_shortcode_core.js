function otw_shortcode_tabs( selectors ){
	
	for( var cS = 0; cS < selectors.size(); cS++ ){
		
		var selector = jQuery( selectors[cS] );
		
		var links = selector.find( 'ul.ui-tabs-nav>li a' );
		
		var active_tab = 0;
		
		for( var cA = 0; cA < links.length; cA++ ){
		
			if( jQuery( links[cA] ).parent().hasClass( 'ui-tabs-active ui-state-active' ) ){
			
				active_tab = cA;
				break;
			}
		}
		for( var cA = 0; cA < links.length; cA++ ){
			
			if( active_tab == cA ){
				jQuery( links[cA] ).parent().addClass( 'ui-tabs-active ui-state-active' );
				selector.find( jQuery( links[cA] ).attr( 'href' ) ).show();
			}else{
				jQuery( links[cA] ).parent().removeClass( 'ui-tabs-active ui-state-active' );
				selector.find( jQuery( links[cA] ).attr( 'href' ) ).hide();
			};
		};
		selector.find( 'ul.ui-tabs-nav>li a' ).click( function( event ){
			event.preventDefault();
			jQuery(this).parents( 'li' ).siblings().removeClass("ui-tabs-active ui-state-active");
			jQuery( this ).parents( 'li' ).addClass("ui-tabs-active ui-state-active");
			var tab = jQuery(this).attr("href");
			jQuery( this ).parents( 'li' ).parent().parent().children(".ui-widget-content").not(tab).hide();
			jQuery( this ).parents( 'li' ).parent().parent().children(tab).show();
		} );
	};
	
	var preselected = window.location.hash;
	if( preselected.length ){
		
		preselected = preselected.replace( /^#/, '' );
		
		var tab_links = preselected.split( '&' );
		
		for( var cT = 0; cT < tab_links.length; cT++ ){
			
			var link = jQuery( '.otw-sc-tabs [href=#' + tab_links[ cT ] + ']' );
			
			if( link.length ){
				link.click();
			};
		};
	};
};
function otw_shortcode_content_toggle( selector, closed ){

	selector.unbind( 'click' ); 
	selector.click(function (){
		jQuery(this).toggleClass('closed').next('.toggle-content').slideToggle(350);
	});
	closed.next('.toggle-content').hide();
};

function otw_shortcode_accordions( accordions ){

	
	for( var cA = 0; cA < accordions.size(); cA++ ){
		
		var headers  = jQuery( accordions[ cA ] ).find( 'h3.accordion-title' );
		var contents = jQuery( accordions[ cA ] ).find( '.ui-accordion-content' );
		
		var has_open = false;
		
		for( var cH = 0; cH < headers.size(); cH++ ){
		
			if( jQuery( headers[cH] ).hasClass( 'closed' ) || has_open ){
				jQuery( contents[cH] ).hide();
			}else{
				has_open = true;
				jQuery( headers[cH] ).addClass( 'ui-accordion-header-active ui-state-active' );
			};
		};
		
		headers.unbind( 'click' );
		headers.click( function(){
			
			jQuery( this ).parent().find( 'h3.accordion-title' ).not( jQuery( this ) ).removeClass( 'ui-accordion-header-active ui-state-active' );
			jQuery( this ).parent().find( '.ui-accordion-content' ).not( jQuery( this ).next() ).slideUp();
			jQuery( this ).next().slideToggle();
			jQuery( this ).toggleClass( 'ui-accordion-header-active ui-state-active' );
		} );
	};
};

function otw_shortcode_faq( faqs ){
	
	faqs.find('dl > dt').unbind( 'click' );
	faqs.find('dl > dt').click(function() {
		jQuery(this).toggleClass('open-faq').next().slideToggle(350);
	});
};

function otw_shortcode_shadow_overlay( selectors ){
	
	selectors.hover(function() {
		jQuery(this).css({boxShadow: '0 0 20px 0 rgba(0,0,0,0.7) inset'} );
	}, function(){
		jQuery(this).css({boxShadow: '0 0 0 0'});
	});
};
function otw_shortcode_testimonials( selectors ){
	
	selectors.find(".testimonials-prev").click(function() {
		selectors.find(".testimonials-slide.active").hide().toggleClass('active').otwPrevOrLast().animate({"opacity": "toggle"}).toggleClass('active');
	});
	selectors.find(".testimonials-next").click(function() {
		selectors.find(".testimonials-slide.active").hide().toggleClass('active').otwNextOrFirst().animate({"opacity": "toggle"}).toggleClass('active');
	});
};

jQuery.fn.otwNextOrFirst = function(selector){
	var next = this.next(selector);
    return (next.length) ? next : this.prevAll(selector).last();
};

jQuery.fn.otwPrevOrLast = function(selector){
	var prev = this.prev(selector);
	return (prev.length) ? prev : this.nextAll(selector).last();
};