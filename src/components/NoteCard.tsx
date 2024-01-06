import React from 'react';
import './Notes.css'

interface NoteCardProps {
  id: number;
  content: string;
  onDelete: (id: number) => void;
}

const NoteCard: React.FC<NoteCardProps> = ({ id, content, onDelete }) => {
  return (
    <div className='card'>
      <p>{content}</p>
      <button  className='close-btn' onClick={() => onDelete(id)}>⨯</button>
    </div>
  );
};

export default NoteCard;
