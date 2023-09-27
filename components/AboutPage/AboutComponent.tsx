import Image from 'next/image';

interface AboutComponentProps {
	title: string;
	body: string;
	image: any;
	reversed?: boolean;
}

function AboutComponent({ title, body, image, reversed }: AboutComponentProps) {
	const flexDirection = reversed ? 'row-reverse' : 'row';
	return (
		<section
			className={`flex flex-col lg:flex-${flexDirection} justify-start h-screen w-[90%] items-start py-10`}>
			<div className='h-full w-full lg:w-1/2 flex flex-col gap-5'>
				<h2 className=' text-dodgerblue-100 text-2xl md:text-3xl lg:text-6xl font-semibold flex justify-start items-center'>
					{title}
				</h2>
				<p className='text-xs md:text-sm lg:text-base'>{body}</p>
			</div>
			<div className='h-full w-screen lg:w-1/2 grid place-items-center text-2x1'>
				<Image
					src={image}
					alt='Descrição da imagem'
					width={500}
					height={500}
				/>
			</div>
		</section>
	);
}

export default AboutComponent;
