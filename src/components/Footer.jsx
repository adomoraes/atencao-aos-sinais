import { Fragment } from "react"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline"

import Logo from "../assets/logo_client.svg?react"

export default function Footer() {
	return (
		<>
			<footer className='bg-blue-100/80 font-sans dark:bg-gray-900'>
				<div className='container px-6 py-12 mx-auto'>
					<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4'>
						<div className='sm:col-span-2'>
							<div className='lg:w-1/2'>
								<Logo />
							</div>
							<div className='flex justify-between gap-4 mt-16 lg:w-1/2 hover:cursor-pointer'>
								<img
									src='https://www.svgrepo.com/show/303114/facebook-3-logo.svg'
									width='30'
									height='30'
									alt='fb'
								/>
								<img
									src='https://www.svgrepo.com/show/303115/twitter-3-logo.svg'
									width='30'
									height='30'
									alt='tw'
								/>
								<img
									src='https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg'
									width='30'
									height='30'
									alt='inst'
								/>
								<img
									src='https://www.svgrepo.com/show/28145/linkedin.svg'
									width='30'
									height='30'
									alt='in'
								/>
							</div>
						</div>

						<div>
							<p className='font-semibold text-gray-800 dark:text-white'>
								Quick Link
							</p>

							<div className='flex flex-col items-start mt-5 space-y-2'>
								<p className='text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500'>
									Sobre Nós
								</p>
								<p className='text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500'>
									Áreas Terapêuticas
								</p>
								<p className='text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500'>
									Trabalhar na Ipsen Brasil
								</p>
								<p className='text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500'>
									Notícias
								</p>
								<p className='text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500'>
									Farmacovigilância
								</p>
							</div>
						</div>

						<div>
							<p className='font-semibold text-gray-800 dark:text-white'>
								Industries
							</p>

							<div className='flex flex-col items-start mt-5 space-y-2'>
								<p className='text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500'>
									Termos e Condições
								</p>
								<p className='text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500'>
									Política de Privacidade
								</p>
								<p className='text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500'>
									Contato
								</p>
							</div>
						</div>
					</div>

					<hr className='my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2' />

					<p className='font-sans text-white p-8 text-start md:text-center md:text-sm md:p-4'>
						© 2023 You Company Inc. All rights reserved.
					</p>
				</div>
			</footer>
		</>
	)
}
