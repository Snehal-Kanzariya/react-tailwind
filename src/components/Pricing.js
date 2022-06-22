import { CheckIcon } from '@heroicons/react/outline'
import React from 'react'

const Pricing = () => {
    return (
        <div name='pricing' className="w-full text-white my-24">
            <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"></div>
            <div className="max-w-[1240px] mx-auto py-12">
                <div className="text-center py-8 text-slate-300">
                    <h2 className="text-3xl uppercase">Pricing</h2>
                    <h2 className="text-5xl font-semibold capitalize text-white py-8">The right price for your research</h2>
                    <p className="text-3xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore dolore totam dolorum. Voluptatibus nisi amet enim, nemo exercitationem ipsam sapiente!</p>
                </div>
                <div className="grid md:grid-cols-2">
                    <div className="bg-white text-slate-300 m-3 p-8 rounded-xl shadow-2xl relative">
                        <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">Standard</span>
                        <div>
                            <p className="text-6xl font-bold py-8 flex text-black">$49 <span className="text-xl text-slate-500 flex flex-col justify-end">/mo</span></p>
                        </div>
                        <p className="text-2xl py-8 text-slate-500">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                        <div className="text-2xl relative">
                            <p className="flex py-4 text-black"><CheckIcon className="w-8 mr-5 text-green-600" />Lorem, ipsum dolor.</p>
                            <p className="flex py-4 text-black"><CheckIcon className="w-8 mr-5 text-green-600" />Lorem, ipsum dolor.</p>
                            <p className="flex py-4 text-black"><CheckIcon className="w-8 mr-5 text-green-600" />Lorem, ipsum dolor.</p>
                            <p className="flex py-4 text-black"><CheckIcon className="w-8 mr-5 text-green-600" />Lorem, ipsum dolor.</p>
                            <p className="flex py-4 text-black"><CheckIcon className="w-8 mr-5 text-green-600" />Lorem, ipsum dolor.</p>
                            <button className="w-full py-4 my-4">Get Started</button>
                        </div>
                    </div>
                    <div className="bg-white text-slate-300 m-3 p-8 rounded-xl shadow-2xl relative">
                        <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">Premium</span>
                        <div>
                            <p className="text-6xl font-bold py-8 flex text-black">$99 <span className="text-xl text-slate-500 flex flex-col justify-end">/mo</span></p>
                        </div>
                        <p className="text-2xl py-8 text-slate-500">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                        <div className="text-2xl relative">
                            <p className="flex py-4 text-black"><CheckIcon className="w-8 mr-5 text-green-600" />Lorem, ipsum dolor.</p>
                            <p className="flex py-4 text-black"><CheckIcon className="w-8 mr-5 text-green-600" />Lorem, ipsum dolor.</p>
                            <p className="flex py-4 text-black"><CheckIcon className="w-8 mr-5 text-green-600" />Lorem, ipsum dolor.</p>
                            <p className="flex py-4 text-black"><CheckIcon className="w-8 mr-5 text-green-600" />Lorem, ipsum dolor.</p>
                            <p className="flex py-4 text-black"><CheckIcon className="w-8 mr-5 text-green-600" />Lorem, ipsum dolor.</p>
                            <button className="w-full py-4 my-4">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Pricing