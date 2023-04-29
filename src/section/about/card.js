

export default function Card() {

    let cardContents = [
        {
            icon:'stats-chart-outline',
            title:'Excellent Design',
            text:'Vivamus at vehicula justo hendrerit euismod ante. Suspendisse egestas efficitur euismod.',
        },
        {
            icon:'pencil-outline',
            title:'Brand manual',
            text:'Vivamus at vehicula justo hendrerit euismod ante. Suspendisse egestas efficitur euismod.',
        },
        {
            icon:'people-circle-outline',
            title:'SEO',
            text:'Vivamus at vehicula justo hendrerit euismod ante. Suspendisse egestas efficitur euismod.',
        },
        {
            icon:'globe-outline',
            title:'Social Media',
            text:'Vivamus at vehicula justo hendrerit euismod ante. Suspendisse egestas efficitur euismod.',
        },
        {
            icon:'triangle-outline',
            title:'Website',
            text:'Vivamus at vehicula justo hendrerit euismod ante. Suspendisse egestas efficitur euismod.',
        },
        {
            icon:'stats-chart-outline',
            title:'Mobile Apps',
            text:'Vivamus at vehicula justo hendrerit euismod ante. Suspendisse egestas efficitur euismod.',
        }
      ];

    return(
        <>
        <section className="mt-16 md:mt-32 px-6 h-full w-full lg:px-20">
            <div class="grid grid-cols-12 gap-6 drop-shadow-md">
                { cardContents.map((cardContent) =>
                    <div className="col-span-12 md:col-span-6 lg:col-span-4 px-12 py-6">
                        <div className="text-[#66FCF1] text-4xl mb-8 md:text-4xl">
                            <ion-icon name={cardContent.icon}></ion-icon>
                        </div>
                        <h1 className="font-bold text-2xl pb-4 text-white">{cardContent.title}</h1>
                        <p className="font-medium text-white">{cardContent.text}</p>
                    </div>
                )}
            </div>
        </section>
        </>
    )
}