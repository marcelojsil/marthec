<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
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
define( 'AUTH_KEY',         'sn%zf$AUor;(+]ZVMe@<bu$)BS;)7P3z8qN5]uAq@20kvHb/H/=UqjQDTB8cO3Jr' );
define( 'SECURE_AUTH_KEY',  '*+m#b1[{!=x{3LrM_jpg<!/[_$9:4G^p.=Z?3;{KuRBdy.pP89wiI$8x7keeQ7_3' );
define( 'LOGGED_IN_KEY',    'F_x9?j5hQH9l3Ju1#~c$-]xod1- m0]QWZrA$ERb^(fY==_rzC#/#Vm>`va4A`/;' );
define( 'NONCE_KEY',        '&YPbd4L_&@.f^GAk8%cdqRC5ZrO.S=uAiZ$*kNvJ<9@<r_*xW[+ECtd/<9]1VE,D' );
define( 'AUTH_SALT',        'PJfUgo9/fySl^ OQ$[wAQW|=v`d%uDq+;U2SW/#/rN(r]>7cKUA5gxU;2l[ gte.' );
define( 'SECURE_AUTH_SALT', '_5Yj.Iu8<$NBy-&meT5V2:[Y`V^M{co,c{tAk6x>6,y4Sb,!?]( ai{WowbXb{rf' );
define( 'LOGGED_IN_SALT',   '.R1Vrj? K}~T2sieQn$Mudq_OZ?YfHYEH,Hz=>7Z Nr(khdnq2?-|R;Mvz33QuyW' );
define( 'NONCE_SALT',       ']:q=Veb_P]D@U@QC1s;b_0aS8:;Xvf!D-U ~=GCq=Io}ifTY~]INNLm`mGDQ#3R>' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'mt_';

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
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
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
