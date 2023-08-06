import IngredientsForm from '../ingredientsInput/IngredientsForm';
import Logo from '../Logo/Logo';
const Header = () => {
    //bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]
    //codigo para cargar un bg con url
    return (
        <>
            <section className="">
                  <Logo />
                <div className="py-8 pt-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative ">
                    <a
                        href="#"
                        className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-secondaryBg"
                    >
                        <span className="text-xs bg-pink-500 rounded-full text-white px-4 py-1.5 mr-3">
                            Como usar?
                        </span>{' '}
                        <p className="sm:text-sm text-xs font-medium">
                            Haz clic aquí para ver información sobre como usar
                            el sitio.
                        </p>
                        <svg
                            className="w-2.5 h-2.5 ml-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 9 4-4-4-4"
                            />
                        </svg>
                    </a>
                    <h1 className="mb-10 mt-2 text-4xl font-extrabold tracking-tight leading-none text-gray-100 md:text-5xl lg:text-6xl dark:text-white">
                      <span className='font-tilt neon'><span className='blink'>¿Q</span>ué Trago Hacer?</span>
                    </h1>
                    <div className="bg-secondaryBg py-8 container mx-auto px-4 rounded-2xl ">
                        <h2 className="mb-8 sm:text-lg text-sm font-medium text-gray-200 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
                            ¡Agrega los ingredientes que tengas a mano, y
                            obtendrás una lista de tragos que tú mismo puedes
                            hacer! 
                        </h2>
                        <IngredientsForm />
                        <h3 className="mb-4 sm:text-lg text-sm font-normal text-gray-200 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
                            Tragos faciles de hacer y economicos en casa
                        </h3>
                    </div>
                </div>
                {/* <div className="bg-gradient-to-br from-thirthBg to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div> */}
            </section>
        </>
    );
};
export default Header;
