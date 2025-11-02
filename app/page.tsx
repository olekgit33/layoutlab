export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-8">
            <div className="max-w-4xl w-full text-center space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline-solid outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                        <div className="size-12 shrink-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                            <span className="text-white font-bold text-xl">C</span>
                        </div>
                        <div>
                            <div className="text-xl font-medium text-black dark:text-white">ChitChat</div>
                            <p className="text-gray-500 dark:text-gray-400">You have a new message!</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4">
                        <img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="/img/erin-lindford.jpg" alt="Erin Lindford" />
                        <div className="space-y-2 text-center sm:text-left">
                            <div className="space-y-0.5">
                                <p className="text-lg font-semibold text-black">Erin Lindford</p>
                                <p className="font-medium text-gray-500">Product Engineer</p>
                            </div>
                            <button className="border border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 px-4 py-2 rounded-lg transition-colors">
                                Message
                            </button>
                        </div>
                    </div>
                </div>
                <button className="bg-sky-500 hover:bg-sky-700 outline-red-500 outline-2 outline-offset-2 rounded-xl px-4 py-2 text-white">Save changes</button>
                <button className="bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 rounded-xl px-4 py-2 text-white">Save changes</button>
                <input
                    type="text"
                    defaultValue="tbone"
                    disabled
                    className="border border-gray-300 rounded-lg px-4 py-2 invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20"
                />
                <label
                    className="flex items-center gap-2 cursor-pointer has-checked:bg-indigo-50 has-checked:text-indigo-900 has-checked:ring-indigo-200 dark:has-checked:bg-indigo-950 dark:has-checked:text-indigo-200 dark:has-checked:ring-indigo-900 px-4 py-2 rounded-lg"
                >
                    <input type="radio" name="payment" className="checked:border-indigo-500" />
                    Google Pay
                </label>
                <fieldset>
                    <legend>Published status</legend>
                    <input id="draft" className="peer/draft" type="radio" name="status" defaultChecked />
                    <label className="peer-checked/draft:text-sky-500">Draft</label>
                    <input id="published" className="peer/published" type="radio" name="status" />
                    <label className="peer-checked/published:text-sky-500">Published</label>
                    <div className="hidden peer-checked/draft:block">Drafts are only visible to administrators.</div>
                    <div className="hidden peer-checked/published:block">Your post will be publicly visible on your site.</div>
                </fieldset>
                <input
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full placeholder:text-gray-500 placeholder:italic focus:border-sky-500 focus:outline focus:outline-sky-500"
                    placeholder="Search for anything..."
                    type="text"
                    name="search"
                />
                <input
                    type="file"
                    className="file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100 dark:file:bg-violet-600 dark:file:text-violet-100 dark:hover:file:bg-violet-500 cursor-pointer"
                />
                <button type="button" className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2" disabled>
                    <svg className="animate-spin motion-reduce:hidden h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                </button>

                <label className="block">
                    <span className="block text-sm font-medium text-gray-700 mb-1">Social Security Number</span>
                    <input
                        type="text"
                        className="border border-gray-200 rounded-lg px-4 py-2 w-full placeholder-gray-400 contrast-more:border-gray-400 contrast-more:placeholder-gray-500 focus:border-sky-500 focus:outline focus:outline-sky-500"
                        placeholder="XXX-XX-XXXX"
                    />
                    <p className="text-gray-600 text-sm mt-1 opacity-70 contrast-more:opacity-100">Required for verification purposes.</p>
                </label>

                <div>
                    {/* @ts-ignore - popovertarget is a valid HTML attribute but not yet in React types */}
                    <button popovertarget="my-popover" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Check for updates</button>
                    <div popover="auto" id="my-popover" className="border border-gray-300 rounded-lg p-4 bg-white shadow-lg opacity-0 starting:open:opacity-0 mt-2">
                        <p className="text-gray-700">No updates available at this time.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

