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
define( 'AUTH_KEY',         'SYBdjkDRO|c0XFVh_v(]IcUp#a0ohSb?>~Y#8-~N3xtq`bc;tdAZ*{zK{@VXI@rG' );
define( 'SECURE_AUTH_KEY',  '-/C3ToFa?,O,I^m%G6!X(|e$?,9dn/ yS-IA~+:2{9?lr O}c(_Zzeqr0{9+ZMUf' );
define( 'LOGGED_IN_KEY',    '}1VU=D]n+E)45xwA/S[yMpP#iWfS)%H/Y8z%3~SDX~@_:tXp2k*)#,|wq`/*&sA^' );
define( 'NONCE_KEY',        'iOu~5(D$:WB6aNf&sUv^[GvF`]=I}LmL+=@+&,x.&AxvIUvQd53DvU=!5=n[[376' );
define( 'AUTH_SALT',        '|q`c7l?(S6D (crUgl<{CmH:E1BF$0mJu}QvF67Sr`b%j:mA(3HQK;1OEY/ejKAm' );
define( 'SECURE_AUTH_SALT', '8G/SADckY<vb`Sc_4~L%JW)WN0:>frFD<;@`!qAsP)z+_&`U=WnaUl6#W8&I#n/a' );
define( 'LOGGED_IN_SALT',   'B5ji/UK]VJQ>BxV$dbrCyIff%?BqH@GWDa(V0S$`Lo;+Cg~peog^d9INgcFG=?K4' );
define( 'NONCE_SALT',       '[7*m>yWaz>#M7`.]v=(M~93zzLyOl5`EQowGX=)}[Eqh1u`ABv$K$OvXyW,>A*.S' );

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
