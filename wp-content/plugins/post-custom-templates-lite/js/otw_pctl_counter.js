var $ =  jQuery.noConflict();
jQuery(document).ready( function(){
	otw_count_post_previews();
} );
otw_count_post_previews = function(){
	
	jQuery.ajax({
		type: 'POST',
		url: otw_counter.url,
		cache: false,
		data: { post_id: otw_counter.post_id, action: 'otw_cpp' }
	});
};