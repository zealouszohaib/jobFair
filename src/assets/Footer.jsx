import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer aria-label="Site Footer" className=" dark:bg-gray-900  text-white font-medium">
                <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Bank Details Section */}
                        <div>
                            <p className="text-xl font-bold">Bank Details</p>
                            <ul className="mt-4 space-y-2 text-gray-300">
                                <li>Bank and Branch Name: Habib Bank Limited, Punjab University Old Campus Branch</li>
                                <li>Account Number: 01337900215401</li>
                                <li>Beneficiary: Principal PUCIT</li>
                            </ul>
                        </div>

                        {/* Event Details Section */}
                        <div>
                            <p className="text-xl font-bold">Event Details</p>
                            <ul className="mt-4 space-y-2 text-gray-300">
                                <li>Deadline: <span className="text-yellow-400">February 02, 2025</span></li>
                                <li>Event Date: <span className="text-yellow-400">February 20, 2025</span></li>
                                <li>Location: Faculty of Computing & Information Technology, Quaid-e-Azam Campus, Punjab University</li>
                            </ul>
                        </div>

                        {/* QR Code Section */}
                        <div className="flex flex-col items-center">
                            <p className="text-xl font-bold">Scan Here</p>
                            <div className="mt-4">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX///8AAABVwtN+AAADDklEQVR4nO3UUW6FQAxD0bL/Tfe71DYOSH2huvniwUzik0r9+qIoiqIoivpXdVyXOndqcDqiZrQ/HydFiBDhUmHuamMV77KrWMc86d17CFPotkEOhBCh/m9pI6jKkGInRatRUoQIEb5X2JbtZ2eoafYcQoQI/6FQfVUfWlLBHGVBiBDhO4Q3/Qqcoxbn8o2ZAyFChEuEuXKiv30qkiJEiHCfsC3bS4U53Sg655GPkreF8HdUhL8b2JGP0zf1XmFOforfviuS38xXJEWIEOE+oT1jo1qSTVScs52Lfs3GECJE+FGh7W+/5oY2Vm7Vfm0XjRAhwlVCmy0faVekztmAN0l5LkKECBcIrauYmcO0T3ljow8IESLcLLQudTg3HOHaBMUWfSqECBEuEbbjjp9l36kPeW1FoNGeECJEuE9o++d1tHuyantYbafRIESI8BXC0zvV2r4rGhT+bM1JESJEuFmoIvgr1/3Vh+O67LlRKoQIEe4TWrDqn8/la4U1n7NJESJE+CJhO0m1tj9V0yehVT6ECBGuF+bQWWPV+V3O285tcAgRIlwiVGDbRoXOh28+2ZHqhjqCECHCVUJ75nCVj9hYdrjCFcmtGiFChPuEuf98emEtQudrxe4QIkS4WZhxGWytRZciebFPXwjTJIQIL94VNy6ECpenK2HGqbXZPdlAo2UhRIhwlVANsT9zQ5uyaGDBMwNChAgXC+eJVI7MtK4R2I5EiBDhZmF7uQiTD1t6xlmwJyFEiHCdMCeaT8/92vh2WfkvgBAhwqVC2zCnHH0oBhULLNojRIhwqXCkHt3IOUYuO9L+RIgQ4Sqhin+4KiKoG9mQQ+csee8IESLcImwrJxqFUR/y4WIuQoQINwtzttPlnDe/a6cV1hwNIUKES4Xyy3XX3KXdU7GOPC0TECJEuEqoJhX+fK14GvnnIREiRPg2YQEpZhR3iyXYxSBEiPC9QpsjB1TnRqtscQgRInyHsPCr6XkJxbRiT8Xw2UyECBF+QJhLnbMBZ9OvSc9vIESI8PNCiqIoiqKo19Y3SmVQqzStPc4AAAAASUVORK5CYII=" alt="QR Code for 14th FCIT Career Fair 2025" className="w-40 h-40" />
                            </div>
                            <p className="mt-2 text-gray-300">14th FCIT Career Fair 2025</p>
                        </div>
                    </div>

                    <p className="font-bold text-gray-500 text-center bg-gradient-to-r from-indigo-500 to-indigo-800 bg-clip-text text-transparent italic">
                        &copy; 2025. Job Fair. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
