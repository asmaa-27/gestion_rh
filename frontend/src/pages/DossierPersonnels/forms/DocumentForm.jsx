import  { useState } from 'react';

const SubFoldersManager = () => {
  const [subFolders, setSubFolders] = useState([
    { id: 1, name: 'Dossier familial' },
    { id: 2, name: 'Dossier administratif' },
    { id: 3, name: 'Dossier de la prévoyance sociale' },
    { id: 4, name: 'Dossier notations' },
    { id: 5, name: 'Dossier affectations' },
    { id: 6, name: 'Dossier autorisations d’absences' },
    { id: 7, name: 'Dossier Divers' },
  ]);

  const [newSubFolder, setNewSubFolder] = useState('');

  const handleAddSubFolder = () => {
    if (newSubFolder.trim()!== '') {
      setSubFolders([...subFolders, { id: subFolders.length + 1, name: newSubFolder }]);
      setNewSubFolder('');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Gestion des Sous-Dossiers</h2>
      <div className="mb-4">
        <input
          type="text"
          value={newSubFolder}
          onChange={(e) => setNewSubFolder(e.target.value)}
          placeholder="Ajouter un nouveau sous-dossier"
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <button
          onClick={handleAddSubFolder}
          className="ml-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Ajouter
        </button>
      </div>
      <ul className="list-disc list-inside">
        {subFolders.map((folder) => (
          <li key={folder.id} className="mb-2">
            {folder.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubFoldersManager;
