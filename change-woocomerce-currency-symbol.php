// Copiar y pegar este código en el archivo functions.php del tema, que está en la carpeta wp-content/themes/tema/


add_filter('woocommerce_currency_symbol', 'change_existing_currency_symbol', 10, 2);

function change_existing_currency_symbol( $currency_symbol, $currency ) {
     switch( $currency ) {
          case 'USD': $currency_symbol = 'U$'; break;
     }
     return $currency_symbol;
}