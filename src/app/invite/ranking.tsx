import Image from 'next/image'
import cooper from '../../assets/medal-cooper.svg'
import gold from '../../assets/medal-gold.svg'
import silver from '../../assets/medal-silver.svg'

export function Ranking() {
	return (
		<div className="w-full max-w-[440px] space-y-5">
			<h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
				Ranking de indicações
			</h2>

			<div className="space-y-4">
				<div className=" relative rouded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
					<span className="text-sm text-gray-300 leading-none">
						<span>1º</span> | César Lima
					</span>

					<span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
						10050
					</span>

					<Image src={gold} alt="gold" className="absolute top-0 right-8" />
				</div>

				<div className=" relative rouded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
					<span className="text-sm text-gray-300 leading-none">
						<span>2º</span> | César Lima
					</span>

					<span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
						10050
					</span>

					<Image src={silver} alt="gold" className="absolute top-0 right-8" />
				</div>

				<div className=" relative rouded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
					<span className="text-sm text-gray-300 leading-none">
						<span>3º</span> | César Lima
					</span>

					<span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
						10050
					</span>

					<Image src={cooper} alt="gold" className="absolute top-0 right-8" />
				</div>
			</div>
		</div>
	)
}
