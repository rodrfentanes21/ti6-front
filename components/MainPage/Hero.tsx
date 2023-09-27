import Link from 'next/link';

function Hero() {
	return (
		<main className='w-screen lg:w-full h-screen flex flex-col justify-center items-center gap-10'>
			<div className='flex flex-col justify-center items-center gap-2'>
				<div className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-900 text-6xl'>
					BrainTech
				</div>
				<div className='text-emerald-700 text-center'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
					distinctio fuga necessitatibus! Accusantium voluptatibus
				</div>
			</div>
			<div className=' flex flex-col gap-5 xl:flex-row xl:justify-around xl:w-2/4'>
				<Link
					href='/authors'
					className='bg-gradient-to-r from-emerald-500 via-emerald-700 to-emerald-900 transition-all bg-size-200 bg-pos-0 duration-500 hover:bg-pos-100 text-black text-lg font-light rounded-lg px-5 py-1 select-none'>
					Sobre os Autores
				</Link>
				<Link
					href='/scanner'
					className='bg-gradient-to-r from-emerald-500 via-emerald-700 to-emerald-900 transition-all bg-size-200 bg-pos-0 duration-500 hover:bg-pos-100 text-black text-lg font-light rounded-lg px-5 py-1 select-none'>
					Brain Scanner
				</Link>
			</div>
		</main>
	);
}

export default Hero;
