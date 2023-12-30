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
define( 'AUTH_KEY',         'x+f:k8s-8{(Kus&uR0-I5/cIUdyP:!r>fd)[WR +fCQ/%0c@0&AT `n<ILpS|_Zv' );
define( 'SECURE_AUTH_KEY',  '2cp 2?|8;{kgD2Tq}cK9cxvJ)ezt2![iT/4{I@D9iw_=wr7F4&KcN|N:HT6NP`dk' );
define( 'LOGGED_IN_KEY',    'yZ%v$rDKyH|Z/}:3Mho-/}0-slEUR$:fOBV5]C7Q]QJ2GXJZ,Bn)T6W>hk6~<iK|' );
define( 'NONCE_KEY',        'w[mM~[RK[K_lx=svZQk3[5&#_qWpakjbTO9$w*$yx?bjdwx2r>8KkvPFX%^{,:Y,' );
define( 'AUTH_SALT',        'yX=&V7<}yT}@gWxw$myd(5%[pG._{+j*LV=%Tl9X; 8b5x@b:eMT1k#sIpr!F^c5' );
define( 'SECURE_AUTH_SALT', 'v1vYgALl~JJt@>*TCk{$s~Pj~i_p#}^hy|yV6/%Qon`qLRA++.zpCApDA5u8Ez!&' );
define( 'LOGGED_IN_SALT',   'HkjC&_O2<z&ozZ+c=b^&H*_LjL<cx<fQn}UQmwmVT=53vWivm,W-<pa}L6(K<ez ' );
define( 'NONCE_SALT',       '7yYD^GCPn~UT-0]njintzR!N #j/-geu|-%]94t2[4`FSt%9/d*s8b}^3B4@oe:y' );

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
