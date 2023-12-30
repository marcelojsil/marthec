<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'marthec' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'PPi:L88#(ake|Fg.a#+mbDVRR!:.Kt6N>XSakV*xhXgR$2zS{H$$#uvpV,XL`Uv8' );
define( 'SECURE_AUTH_KEY',  'F@n-GWbn<5W{VAk8XTp9(fa+8mtyEz-oinmOUHE-m8^C|3nR9h%R$ev2^d$a$ |.' );
define( 'LOGGED_IN_KEY',    '!|Qwi2|2F|w^<>]X!vpgV};+P*8f+33rLPNb;1KgbsI@K2Y|43JWt7@c2KC;yztJ' );
define( 'NONCE_KEY',        'u!>2b,v MB*-@|eatSU_I.$6p5k)Sze{[{7Y3G^xJ4z6%vygQ=*q@;^}3(pGzTQx' );
define( 'AUTH_SALT',        '(wyHaj`w1N>rdhGo~_Rl6d{W;b`ZU-0kdufX#KG8dA;/fQhqT4VhGC:2-Q7YBobp' );
define( 'SECURE_AUTH_SALT', 'imG<q/WZ^K8yr@01e6M$=+Xo8kL;@o-?b).B>iFA}hH)lEjW({9%E(Ns*(+bqIyx' );
define( 'LOGGED_IN_SALT',   '/j#<wWj9lJSbL2iV@<WC0 D]gCJo4%]J5A$=uE~|AIfH6/LeE1gl6jI*azbPB5^Y' );
define( 'NONCE_SALT',       'OB$5n!SE)gW1.7 o[}sT4.Z{s3QT8Ot$LAyzW%1B<`slC#;5([>1e!7)@L}N!Z+j' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
