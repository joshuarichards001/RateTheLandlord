import React from 'react'
import {RadioGroup} from '@headlessui/react'
import {classNames} from '@/util/helper-functions'
import {useTranslation} from 'react-i18next'

const ratings = [1, 2, 3, 4, 5]

interface Props {
	title: string
	rating: number
	setRating: React.Dispatch<React.SetStateAction<number>>
	tooltip: string
}

function RatingsRadio({title, rating, setRating, tooltip}: Props) {
	const {t} = useTranslation('create')

	return (
		<div data-testid="ratings-radio-1">
			<h2 className="font-medium text-gray-900">
				{title} {t('create-review.review-radio.rating')}
			</h2>
			<p className="text-xs text-gray-500">{tooltip}</p>

			<RadioGroup value={rating} onChange={setRating} className="mt-2">
				<RadioGroup.Label className="sr-only">
					{t('create-review.review-radio.choose')}
				</RadioGroup.Label>
				<div className="grid gap-2 sm:gap-3 grid-cols-5">
					{ratings.map((option) => (
						<RadioGroup.Option
							key={option}
							value={option}
							className={({active, checked}) =>
								classNames(
									active ? 'ring-2 ring-offset-2 ring-teal-500' : '',
									checked
										? 'bg-teal-600 border-transparent text-white hover:bg-teal-700'
										: 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
									'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer',
								)
							}
						>
							<RadioGroup.Label as="span">{option}</RadioGroup.Label>
						</RadioGroup.Option>
					))}
				</div>
			</RadioGroup>
		</div>
	)
}

export default RatingsRadio
