import React from 'react';

import { useSelector } from 'react-redux';
import Note from '../components/Note';

export default function ViewNotes() {
    
    const state = useSelector(state => state);
    return (
        <div>
            {state.notes.map(note => {
                return <Note note={note} />
            })}
        </div>
    )
}