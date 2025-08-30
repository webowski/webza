<header class="Header">

	<a href="/" class="SiteBrand do-scrollTop justify-self-start">
		<svg class="SiteLogo" width="64" height="64" viewBox="0 0 64 64">
			<rect x="0" y="0" width="64" height="64" rx="8" ry="8" fill="#444"/>
		</svg>
	</a>

	<nav id="site-navigation" class="NavMain do-spy" aria-label="<?php pll_e("Main menu") ?>">
		<?php
		wp_nav_menu([
			'theme_location' => 'menu-front-page',
			'menu_id' => 'primary-menu',
			'container' => 'ul',
			'container_class' => false,
			'menu_class' => false,
		]);
		?>
	</nav>

	<div class="flex items-center gap-8	">
		<div class="max-md:hidden justify-self-end flex items-center gap-8">
			<a href="&#104;&#116;&#116;ps:&#47;&#47;t.&#109;e&#47;<?= get_option('contact-telegram') ?>" target="_blank" title="Telegram" class="IconLink text-(--major) hover:text-primary">
				<svg class="Icon rect-7/7">
					<use href="#icon-telegram">
				</svg>
			</a>
		</div>

		<ul class="LangSwitch max-md:hidden">
			<?php pll_the_languages(['hide_if_empty' => 0]); ?>
		</ul>

		<label class="ThemeSwitch max-md:hidden">
			<input type="checkbox" name="themeDark">
			<span></span>
		</label>
	</div>

	<button class="NavOpener" aria-controls="primary-menu-mobile" aria-label="<?php pll_e("Open the mobile navigation") ?>" aria-expanded="false">
		<span></span>
		<span></span>
		<span></span>
		<span></span>
	</button>

</header>

<nav class="NavMobile" aria-label="<?php pll_e("Mobile navigation") ?>">

	<div class="flex gap-8 items-center grow-1">
		<a class="IconLink text-(--major) hover:text-primary do-notCloseNav" href="&#104;&#116;&#116;ps:&#47;&#47;t.&#109;e&#47;<?= get_option('contact-telegram') ?>" target="_blank" title="Telegram">
			<svg class="Icon rect-7/7">
				<use href="#icon-telegram">
			</svg>
		</a>
	</div>

	<div class="NavMain do-spy -mobile">
		<?php
		wp_nav_menu([
			'theme_location' => 'menu-front-page',
			'menu_id' => 'primary-menu-mobile',
			'container' => 'ul',
			'container_class' => false,
			'menu_class' => false,
		]);
		?>
	</div>

	<div class="flex gap-8 items-center">
		<ul class="LangSwitch do-notCloseNav">
			<?php pll_the_languages(['hide_if_empty' => 0]); ?>
		</ul>
		<label class="ThemeSwitch is-switched">
			<input type="checkbox" checked name="themeDark">
			<span></span>
		</label>
	</div>

</nav>
