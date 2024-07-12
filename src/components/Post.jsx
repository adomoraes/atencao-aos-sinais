import React from "react"
import References from "./References"

export default function Post() {
	return (
		<>
			<div className='bg-primary gap-5 p-4 lg:px-28 grid-cols-1 grid'>
				<div className='order-2 text-primary'>
					<div className='p-2 mb-3 w-max text-2xl tracking-wide text-white bg-pink-700 font-semibold'>
						O que é?
					</div>
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
				</div>
			</div>
			<References />
		</>
	)
}
