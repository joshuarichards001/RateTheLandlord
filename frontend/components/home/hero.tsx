import {useTranslation} from 'react-i18next'
import LinkButtonLG from '../ui/link-button-lg'
import LinkButtonLightLG from '../ui/link-button-light-lg'

function Hero(): JSX.Element {
	const {t} = useTranslation('home')
	return (
		<div data-testid="home-hero-1" className="relative min-w-full">
			<div className="relative pt-6">
				<main className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24">
					<div className="text-center">
						<h1 className="block text-4xl font-extrabold  tracking-tight text-teal-600 sm:text-5xl md:text-6xl">
							{t('home.hero.title')}
						</h1>
						<p className="mx-auto mt-3 max-w-md text-base  sm:text-lg md:mt-5 md:max-w-full md:text-xl">
							{t('home.hero.body')}
						</p>

						<div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
							<LinkButtonLG
								href="/create-review"
								data-umami-event="Home Link to Create Review"
							>
								{t('home.hero.submit')}
							</LinkButtonLG>
							<LinkButtonLightLG
								href="/reviews"
								data-umami-event="Home Link to Reviews Page"
							>
								{t('home.hero.read')}
							</LinkButtonLightLG>
						</div>
					</div>
				</main>
			</div>
		</div>
	)
}

export default Hero
