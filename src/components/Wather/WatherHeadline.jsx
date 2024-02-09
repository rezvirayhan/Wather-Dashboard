import locationicon from '../../assets/icons/location.svg';
const WatherHeadline = () => {
    return (
        <div>
            <div className="max-md:flex items-center justify-between md:-mt-10">
                <img src='dff' alt="cloud" />
                <div className="max-md:flex items-center max-md:space-x-4">
                    <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">16°</h1>
                    <div className="flex items-center space-x-4 md:mb-4">
                        <img className='w-7' src={locationicon} />
                        <h2 className="text-2xl lg:text-[50px]">Dhaka</h2>
                    </div>
                </div>
            </div>
            <p className="text-sm lg:text-lg">06:09 - Sunday, 9 Dec ‘23</p>
        </div>
    );
};

export default WatherHeadline;