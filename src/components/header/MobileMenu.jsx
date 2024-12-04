import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';

function MobileMenu({ isOpen, setIsOpen, links, onLinkClick }) {
  const handleLinkClick = (e, to) => {
    setIsOpen(false); // Close menu first
    onLinkClick(e, to); // Then handle navigation
  };

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 md:hidden"
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="transform transition ease-in-out duration-300"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-in-out duration-300"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <Dialog.Title className="text-lg font-medium text-gray-900">
                Menu
              </Dialog.Title>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="mt-8">
              <div className="flex flex-col space-y-4">
                {links.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={(e) => handleLinkClick(e, link.to)}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300 py-2"
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}

export default MobileMenu;