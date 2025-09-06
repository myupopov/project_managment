import { useRef } from 'react';
import ConfirmModal from './ConfirmModal';

export default function Creating({ onProjectsUpdate, onProjectSelect, projects }) {

  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  const confirmModalRef = useRef();

  const handleCancel = () => {
    onProjectSelect(undefined);
  };

  const closeModal = () => {
  };

  const handleSave = () => {

    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const date = dateRef.current.value;

    if (title.trim() === '' || description.trim() === '' || date.trim() === '') {
      confirmModalRef.current.open();
      return;
    }

    const projectId = Date.now().toString() + '_' + title.toLowerCase().replace(/ /g, '_');


    const newProjects = {
      ...projects,
      [projectId]: {
        title: title,
        description: description,
        tasks: [],
        date: date,
      },
    };

    onProjectsUpdate(newProjects);
  };

  return (
    <div className="w-full p-16 flex flex-col flex-start">
      <menu className="flex items-center justify-end gap-4 my-4">
        <button onClick={handleCancel} className="text-stone-800 hover:text-stone-950">
          Cancel
        </button>
        <button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
          Save
        </button>
      </menu>
      
      <div>
        <p className="flex flex-col gap-1 my-4">
          <label className="text-sm font-bold uppercase text-stone-500">
            Title
          </label>
          <input
            ref={titleRef}
            type="text"
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          />
        </p>

        <p className="flex flex-col gap-1 my-4">
          <label className="text-sm font-bold uppercase text-stone-500">
            Description
          </label>
          <textarea
            ref={descriptionRef}
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            rows="3"
          />
        </p>

        <p className="flex flex-col gap-1 my-4">
          <label className="text-sm font-bold uppercase text-stone-500">
            Due Date
          </label>
          <input
            ref={dateRef}
            type="date"
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          />
        </p>
      </div>

      <ConfirmModal
        ref={confirmModalRef}
        cancelDelete={closeModal}
        title="Please fill in all fields"
        isNotification={true}
      />
    </div>
  );
}