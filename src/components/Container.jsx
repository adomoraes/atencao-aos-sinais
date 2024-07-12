import React from "react"

export default function Container() {
	return (
		<>
			<div className='bg-primary gap-5 p-4 lg:px-28 grid-cols-1 sm:grid-cols-2 grid-rows-3 grid'>
				<div className='md:shrink-0'>
					<img
						className='h-full w-full object-cover md:h-full md:w-full'
						src='https://webapp347768.ip-96-126-123-7.cloudezapp.io/ipsen/atencaoaossinais/assets/contentImageOquee.png'
						alt='Modern building architecture'
					/>
				</div>
				<div className='order-2 text-primary'>
					<div className='p-2 mb-3 w-max text-2xl tracking-wide text-white bg-pink-700 font-semibold'>
						Conheça o Câncer Renal
					</div>
					<h3 className='block mt-1 text-lg leading-tight font-medium'>
						O que é?
					</h3>
					<p className='mt-2'>
						Doença silenciosa, o câncer renal é um dos principais tipos de tumor
						entre os homens entre 50 e 70 anos de idade. A doença está
						relacionada principalmente ao tabagismo, à obesidade e à hipertensão
						arterial. <span className='referrer'>[3]</span>
					</p>
					<p className='mt-2'>
						No Brasil, dados do Instituto Nacional de Câncer (INCA) mostram que
						a incidência estimada de câncer renal é de 7 a 10 casos para cada
						100 mil habitantes. [4]
					</p>
					<a
						href='#'
						title='Saiba Mais'
						className='p-2 mt-3 block w-max uppercase text-md tracking-wide text-white bg-pink-700 font-semibold hover:underline'>
						Saiba Mais
					</a>
				</div>
				<div className='sm:order-3 order-4 text-primary'>
					<h3 className='block mt-1 text-lg leading-tight font-medium'>
						Sintomas
					</h3>
					<p className='mt-2'>
						É fundamental estar atento aos sintomas que, embora inespecíficos e
						muitas vezes confundidos com sinais de outras doença, são alertas
						muito importantes. [7]
					</p>
					<p className='mt-2'>
						A dor na região lombar apenas em um dos lados, a presença de sangue
						na urina, dor ao urinar, massa (caroço) na lateral ou na parte
						inferior das costas, fadiga, perda de apetite, perda de peso sem
						dieta, febre e anemia são sinais de câncer renal. Por essa razão,
						não podem ser ignorados e um médico deve ser procurado. [7]
					</p>
					<a
						href='#'
						title='Saiba Mais'
						className='p-2 mt-3 block w-max uppercase text-md tracking-wide text-white bg-pink-700 font-semibold hover:underline'>
						Saiba Mais
					</a>
				</div>
				<div className='sm:order-4 order-3 md:shrink-0'>
					<img
						className='h-full w-full object-cover md:h-full md:w-full'
						src='https://webapp347768.ip-96-126-123-7.cloudezapp.io/ipsen/atencaoaossinais/assets/contentImageSintomas.png'
					/>
				</div>
				<div className='sm:order-5 order-6 md:shrink-0'>
					<img
						className='h-full w-full object-cover md:h-full md:w-full'
						src='https://webapp347768.ip-96-126-123-7.cloudezapp.io/ipsen/atencaoaossinais/assets/contentImageDiagnostico.png'
					/>
				</div>
				<div className='sm:order-5 order-6 text-primary'>
					<h3 className='block mt-1 text-lg leading-tight font-medium'>
						Diagnóstico
					</h3>
					<p className='mt-2'>
						Exames de sangue e urina, como ureia e creatinina, são fundamentais
						para avaliar a saúde dos rins e no diagnóstico do câncer renal.
						Alterações nos índices dessas substâncias podem indicar algum
						problema renal. Em caso de suspeita, outros exames devem ser
						solicitados pelo médico.[8]
					</p>
					<p className='mt-2'>
						Entre os principais exames para avaliar as suspeitas de câncer renal
						estão a ultrassonografia, a tomografia computadorizada e a
						ressonância magnética. [8]
					</p>
					<a
						href='#'
						title='Saiba Mais'
						className='p-2 mt-3 block w-max uppercase text-md tracking-wide text-white bg-pink-700 font-semibold hover:underline'>
						Saiba Mais
					</a>
				</div>
				<div className='sm:order-7 order-8 text-primary'>
					<h3 className='block mt-1 text-lg leading-tight font-medium'>
						Tratamento
					</h3>
					<p className='mt-2'>
						Em casos iniciais, o tratamento do câncer renal costuma ser a
						remoção do órgão por cirurgia. No entanto, se o tumor se espalhou
						para além do rim, tratamentos adicionais podem ser recomendados,
						incluindo radioterapia, terapias-alvo e imunoterapia.[10],[11],[12]
					</p>
					<p className='mt-2'>
						A jornada do paciente dependerá de quando o câncer for descoberto. O
						paciente com câncer de rim tem grandes chances de sobrevida alta se
						diagnosticado no estágio inicial. Quando o carcinoma de células
						renais está em metástase ou em estágio avançado, a taxa de sobrevida
						fica em torno de 12%.[2],[9],[10],[11]
					</p>
					<a
						href='#'
						title='Saiba Mais'
						className='p-2 mt-3 block w-max uppercase text-md tracking-wide text-white bg-pink-700 font-semibold hover:underline'>
						Saiba Mais
					</a>
				</div>
				<div className='sm:order-8 order-7 md:shrink-0'>
					<img
						className='h-full w-full object-cover md:h-full md:w-full'
						src='https://webapp347768.ip-96-126-123-7.cloudezapp.io/ipsen/atencaoaossinais/assets/contentImageTratamento.png'
					/>
				</div>
			</div>
		</>
	)
}
