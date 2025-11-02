export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-8">
            <div className="max-w-4xl w-full text-center space-y-8">
                <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100">
                    Welcome to Your Next Project
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    A modern web application built with Next.js, TypeScript, and Tailwind CSS
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                            Next.js 14
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            React framework with App Router
                        </p>
                    </div>
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                            TypeScript
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            Type-safe development
                        </p>
                    </div>
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                            Tailwind CSS
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            Utility-first CSS framework
                        </p>
                    </div>
                    <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline-solid outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                        <div className="size-12 shrink-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                            <span className="text-white font-bold text-xl">C</span>
                        </div>
                        <div>
                            <div className="text-xl font-medium text-black dark:text-white">ChitChat</div>
                            <p className="text-gray-500 dark:text-gray-400">You have a new message!</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
                        <img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="/img/erin-lindford.jpg" alt="" />
                        <div className="space-y-2 text-center sm:text-left">
                            <div className="space-y-0.5">
                                <p className="text-lg font-semibold text-black">Erin Lindford</p>
                                <p className="font-medium text-gray-500">Product Engineer</p>
                            </div>
                            <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
                                Message
                            </button>
                        </div>
                    </div>
                </div>
                <button className="bg-sky-500 hover:bg-sky-700 rounded-xl">Save changes</button>
                <button className="bg-violet-500 hover:bg-violet-600 focus:outline 2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 ...">Save changes</button>
                <input
                    type="text"
                    value="tbone"
                    disabled
                    className="invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20 ..."
                />
                <label
                    className="has-checked:bg-indigo-50 has-checked:text-indigo-900 has-checked:ring-indigo-200 dark:has-checked:bg-indigo-950 dark:has-checked:text-indigo-200 dark:has-checked:ring-indigo-900 ..."
                >
                    <svg fill="currentColor">

                    </svg>
                    Google Pay
                    <input type="radio" className="checked:border-indigo-500 ..." />
                </label>
                <fieldset>
                    <legend>Published status</legend>
                    <input id="draft" className="peer/draft" type="radio" name="status" checked />
                    <label className="peer-checked/draft:text-sky-500">Draft</label>
                    <input id="published" className="peer/published" type="radio" name="status" />
                    <label className="peer-checked/published:text-sky-500">Published</label>
                    <div className="hidden peer-checked/draft:block">Drafts are only visible to administrators.</div>
                    <div className="hidden peer-checked/published:block">Your post will be publicly visible on your site.</div>
                </fieldset>
                <input
                    className="placeholder:text-gray-500 placeholder:italic ..."
                    placeholder="Search for anything..."
                    type="text"
                    name="search"
                />
                <input
                    type="file"
                    className="file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100 dark:file:bg-violet-600 dark:file:text-violet-100 dark:hover:file:bg-violet-500 ..."
                />
                <button type="button" className="bg-indigo-500 ..." disabled>
                    <svg className="animate-spin motion-reduce:hidden ..." viewBox="0 0 24 24"></svg>
                    Processing...
                </button>

                <label className="block">
                    <span className="block text-sm font-medium text-gray-700">Social Security Number</span>
                    <input
                        className="border-gray-200 placeholder-gray-400 contrast-more:border-gray-400 contrast-more:placeholder-gray-500 ..."
                    />
                    <p className="text-gray-600 opacity-10 contrast-more:opacity-100 ...">We need this to steal your identity.</p>
                </label>

                <div>
                    <button popoverTarget="my-popover">Check for updates</button>
                    <div popover="auto" id="my-popover" className="opacity-0 starting:open:opacity-0 ...">
                        {/* ... */}
                    </div>
                </div>
            </div>
        </main>
    );
}

