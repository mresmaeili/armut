import React from 'react';

import SelectedMovie from './SelectedMovie';

export default function Detail() {
  return (
    <section className='section'>
      <div className='container'>
        <div className='block'>
          <SelectedMovie />
        </div>
      </div>
    </section>
  );
}
