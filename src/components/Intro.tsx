import Image from 'next/image';

export default function Intro() {
    return (
        <main>
            <div>
                <h1>WELCOME TO DA CHEF'S WORLD</h1>
                <p>Here you can find the best recipes for your meals.</p>
                <Image src="/buldak.jpg" alt="Buldak" width={500} height={300} />
            </div>
        </main>
    )
}