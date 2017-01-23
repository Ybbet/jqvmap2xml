jQuery(document).ready(function (){
	var ref_width = jQuery('#rendu_carte').width();
	var ref_height = jQuery('#rendu_carte').width();

	jQuery('div[id^="map_"]').each(function (){
		jQuery(this).css({
			height: ref_height+'px',
			width: ref_width+'px'
		});
	});

});