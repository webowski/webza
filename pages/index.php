<?php set_layout('layouts/LayoutDefault'); ?>

<?php get_template_part('widgets/Header/Header'); ?>

<main id="main-content">
	<?php get_template_part( 'widgets/Hero' ) ?>
	<?php get_template_part( 'widgets/Section', 'SectionServices' ) ?>
	<?php get_template_part( 'widgets/Section', 'SectionFeatures' ) ?>
	<?php get_template_part( 'widgets/Section', 'SectionSequence' ) ?>
	<?php get_template_part( 'widgets/Section', 'SectionContacts' ) ?>
</main>

<?php get_template_part('widgets/Footer/Footer'); ?>
