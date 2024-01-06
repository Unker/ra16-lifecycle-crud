import React, { useState } from 'react';

interface NoteFormProps {
  onAdd: (content: string) => void;
}

const NoteForm: React.FC<NoteFormProps> = ({ onAdd }) => {
  const [content, setContent] = useState('');

  const handleAdd = () => {
    onAdd(content);
    setContent('');
  };

  return (
    <div>
      <h2>Notes</h2>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default NoteForm;
