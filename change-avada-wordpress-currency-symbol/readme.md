## Change $ (US dollar) currency symbol on Avada Wordpress Theme.

### Instructions:
Go to WP-Content > Plugins > Woocommerce > Includes > WC.Core.Functions.php 
It starts on line 662 (function get_woocommerce_currency_symbols).

This code changes the $ to U$S
```bash
'USD' => 'U&#36;S',
```