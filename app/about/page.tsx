import AboutComponent from '@/components/AboutPage/AboutComponent';

export default function Home() {
	return (
		<main className='w-screen lg:w-full flex flex-col justify-center items-center gap-10'>
			<section className='w-full h-screen flex justify-center items-center'>
				<div className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-900 text-6xl h-48 grid place-items-center'>
					O Projeto
				</div>
			</section>
			<AboutComponent
				title='Teste'
				body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eveniet at praesentium deserunt suscipit cupiditate, aliquid alias voluptatum aspernatur ut, quaerat, minus obcaecati vel nobis voluptatibus ipsa facere possimus libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolor ab corporis odio aperiam veritatis est eaque, architecto magni ipsa culpa esse eius libero labore! Nulla sapiente dolor mollitia eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eveniet at praesentium deserunt suscipit cupiditate, aliquid alias voluptatum aspernatur ut, quaerat, minus obcaecati vel nobis voluptatibus ipsa facere possimus libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolor ab corporis odio aperiam veritatis est eaque, architecto magni ipsa culpa esse eius libero labore! Nulla sapiente dolor mollitia eveniet!'
				// add image props later
			/>
			<AboutComponent
				title='Teste'
				body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eveniet at praesentium deserunt suscipit cupiditate, aliquid alias voluptatum aspernatur ut, quaerat, minus obcaecati vel nobis voluptatibus ipsa facere possimus libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolor ab corporis odio aperiam veritatis est eaque, architecto magni ipsa culpa esse eius libero labore! Nulla sapiente dolor mollitia eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eveniet at praesentium deserunt suscipit cupiditate, aliquid alias voluptatum aspernatur ut, quaerat, minus obcaecati vel nobis voluptatibus ipsa facere possimus libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolor ab corporis odio aperiam veritatis est eaque, architecto magni ipsa culpa esse eius libero labore! Nulla sapiente dolor mollitia eveniet!'
				// add image props later
				reversed
			/>
			<AboutComponent
				title='Teste'
				body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eveniet at praesentium deserunt suscipit cupiditate, aliquid alias voluptatum aspernatur ut, quaerat, minus obcaecati vel nobis voluptatibus ipsa facere possimus libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolor ab corporis odio aperiam veritatis est eaque, architecto magni ipsa culpa esse eius libero labore! Nulla sapiente dolor mollitia eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eveniet at praesentium deserunt suscipit cupiditate, aliquid alias voluptatum aspernatur ut, quaerat, minus obcaecati vel nobis voluptatibus ipsa facere possimus libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolor ab corporis odio aperiam veritatis est eaque, architecto magni ipsa culpa esse eius libero labore! Nulla sapiente dolor mollitia eveniet!'
				// add image props later
			/>
		</main>
	);
}
