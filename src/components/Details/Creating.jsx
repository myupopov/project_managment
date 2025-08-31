export default function Creating() {
  return (
    <div className="w-full p-16 flex flex-col flex-start">
      <menu className="flex items-center justify-end gap-4 my-4">
        <button className="text-stone-800 hover:text-stone-950">
          Cancel
        </button>
        <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
          Save
        </button>
      </menu>
      
      <div>
        <p className="flex flex-col gap-1 my-4">
          <label className="text-sm font-bold uppercase text-stone-500">
            Title
          </label>
          <input
            type="text"
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          />
        </p>

        <p className="flex flex-col gap-1 my-4">
          <label className="text-sm font-bold uppercase text-stone-500">
            Description
          </label>
          <textarea
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            rows="3"
          />
        </p>

        <p className="flex flex-col gap-1 my-4">
          <label className="text-sm font-bold uppercase text-stone-500">
            Due Date
          </label>
          <input
            type="date"
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          />
        </p>
      </div>
    </div>
  );
}