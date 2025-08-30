<?php get_header(); ?>

<main id="main-content">

	<div class="Section -beforeFooter">
		<div class="container">

			<h1 class="text-center"><?php pll_e( "404. Page Not Found" ); ?></h1>
			<div class="flex justify-center">
				<a href="<?= esc_url( pll_home_url() ); ?>" class="Button -alt"><?php pll_e( "Back to the homepage" ); ?></a>
			</div>

		</div>
	</div>

</main>

<?php
get_footer();
