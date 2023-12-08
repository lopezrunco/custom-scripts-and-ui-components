## Change $ (US dollar) currency symbol on Avada Wordpress Theme.

### Instructions:
Go to WP-Content > Plugins > Woocommerce > Includes > WC.Core.Functions.php 
It starts on line 662.

This code changes the $ to U$S
```bash
'USD' => 'U&#36;S',
```