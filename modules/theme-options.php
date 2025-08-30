<?php

/**
 * Theme Options Page
 */

function webowski_theme_options_menu() {
	add_menu_page(
        'Основные данные',                // Title (h1)
        'Основные данные',                // Menu item
        'edit_theme_options',             // Permission
        'webowski-theme-options',         // slug
        'webowski_theme_options_page',    // callback
        'dashicons-admin-generic',        // icon
        61                                // position
	);
}
add_action('admin_menu', 'webowski_theme_options_menu');

function webowski_theme_options_init() {

    add_settings_section(
        'webowski_contacts_section',
        'Контакты',
        '__return_false',
        'webowski-theme-options'
    );

    register_setting('webowski_theme_options', 'webowski_contact_email');
    add_settings_field(
        'webowski_contact_email',
        'Почта',
        function () {
            $value = get_option('webowski_contact_email');
            echo '<input type="email" name="webowski_contact_email" value="' . esc_attr($value) . '" class="regular-text">';
        },
        'webowski-theme-options',
        'webowski_contacts_section'
    );

    register_setting('webowski_theme_options', 'contact-telegram');
    add_settings_field(
        'contact-telegram',
        'Телеграм',
        function () {
            $value = get_option('contact-telegram');
            echo '<input type="text" name="contact-telegram" value="' . esc_attr($value) . '" class="regular-text">';
        },
        'webowski-theme-options',
        'webowski_contacts_section'
    );

    register_setting('webowski_theme_options', 'webowski_contact_address');
    add_settings_field(
        'webowski_contact_address',
        'Адрес',
        function () {
            $value = get_option('webowski_contact_address');
            echo '<input type="text" name="webowski_contact_address" value="' . esc_attr($value) . '" class="regular-text large-text">';
        },
        'webowski-theme-options',
        'webowski_contacts_section'
    );


    add_settings_section(
        'webowski_scripts',
        'Технические данные',
        '__return_false',
        'webowski-theme-options'
    );

    register_setting('webowski_theme_options', 'webowski-head-inline-scripts');
    add_settings_field(
        'webowski-head-inline-scripts',
        'Код для вставки внутри тега &lt;head&gt;',
        function () {
            $value = get_option('webowski-head-inline-scripts', '');
            echo '<textarea name="webowski-head-inline-scripts" rows="10" class="large-text code">' . esc_textarea($value) . '</textarea>';
        },
        'webowski-theme-options',
        'webowski_scripts'
    );

    add_settings_section(
        'webowski_body_class_section',
        'Оптимизация',
        '__return_false',
        'webowski-theme-options'
    );

    register_setting('webowski_theme_options', 'webowski_remove_id_classes');
    add_settings_field(
        'webowski_remove_id_classes',
        'Удалить классы из &lt;body&gt;, такие как "page-id", "archive" итп.',
        function () {
            $value = get_option('webowski_remove_id_classes');
            echo '<label><input type="checkbox" name="webowski_remove_id_classes" value="1"' . checked(1, $value, false) . '> Удалить</label>';
        },
        'webowski-theme-options',
        'webowski_body_class_section'
    );
}
add_action('admin_init', 'webowski_theme_options_init');

function webowski_theme_options_page() {
    ?>
    <div class="wrap">
        <h1>Основные данные</h1>
        <form method="post" action="options.php">
            <?php
            settings_fields('webowski_theme_options');
            do_settings_sections('webowski-theme-options');
            submit_button();
            ?>
        </form>
    </div>
    <?php
}
