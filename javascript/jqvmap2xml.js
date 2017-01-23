jQuery(document).ready(function (){
	var ref_width = jQuery('#rendu_carte').width();
	var ref_height = jQuery('#rendu_carte').width();

	jQuery('div[id^="map_"]').each(function (){
		jQuery(this).css({
			height: ref_height+'px',
			width: ref_width+'px'
		});
	});

	resize_map_height();
	jQuery(window).on('resize', function (){
		resize_map_height();
	});

	function resize_map_height() {
		jQuery('.map').each(function (){
			var ref_width = jQuery(this).width();
			jQuery(this).css({
				'height': ref_width+'px'
			});
		});
	}

});