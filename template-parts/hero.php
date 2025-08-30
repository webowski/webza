<div class="Hero">

	<div class="Hero__bg">
		<?php the_post_thumbnail('full') ?>
	</div>

	<div class="Hero__container grid grid-rows-[auto_1fr_auto]">
		<div class="grid grid-cols-[1fr_auto_1fr] items-start">

			<div class="flex items-center gap-8 grow-1">
				<label class="ThemeSwitch is-switched max-md:hidden">
					<input type="checkbox" checked name="themeDark">
					<span></span>
				</label>

				<ul class="LangSwitch max-md:hidden">
					<?php pll_the_languages(['hide_if_empty' => 0]); ?>
				</ul>
			</div>

			<div class="flex gap-8 items-center justify-end grow-1">
				<a href="&#104;&#116;&#116;ps:&#47;&#47;t.&#109;e&#47;<?= get_option('contact-telegram') ?>" target="_blank" title="Telegram" class="max-md:hidden IconLink text-(--major) hover:text-primary">
					<svg class="Icon rect-7/7">
						<use href="#icon-telegram">
					</svg>
				</a>

				<button class="NavOpener">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</button>
			</div>

		</div>
		<div class="py-8 lg:pt-20 lg:pb-8 grid grid-cols-[1fr] lg:grid-cols-[1.15fr_.85fr] xl:grid-cols-[1.05fr_.95fr] items-end place-content-center gap-4 max-md:self-end">

			<div class="flex gap-3 lg:gap-4 flex-col">

				<?php
				$typingArray = [
					__('text1', 'webowski'),
					__('text2', 'webowski'),
					__('text3', 'webowski'),
				];
				$heroTypingJSON = '["' . implode('","', $typingArray) . '"]';?>

				<h1 class="my-0">Here the <span class="text-accent do-typing" data-typing='<?= $heroTypingJSON ?>'>text1</span></h1>
				<p class="my-0 leading-lg"><?php pll_e('Subheader') ?></p>

			</div>
			<div class="flex gap-4 lg:gap-4 flex-col items-end pt-17 sm:pt-15 md:pt-10">
				<div class="w-full flex gap-4 lg:gap-5 max-sm:flex-wrap justify-end">

					<a href="<?= esc_url( pll_home_url() ); ?>brief/" class="Button max-w-50 w-full">
						<?php pll_e("Request a quote") ?>
					</a>

				</div>
			</div>

		</div>

	</div>
</div>
