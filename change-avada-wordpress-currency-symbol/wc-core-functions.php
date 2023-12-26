<?php
function get_woocommerce_currency_symbols()
{
	$symbols = apply_filters(
		'woocommerce_currency_symbols',
		array(
			// Other array elements
			'USD' => 'U&#36;S',
		)
	);
	return $symbols;
}
