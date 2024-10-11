import React from 'react';

interface FilterButtonsProps {
  setFilter: (filter: string) => void;
  currentFilter: string;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ setFilter, currentFilter }) => {
  return (
    <div>
      <button
        onClick={() => setFilter('all')}
        disabled={currentFilter === 'all'}
      >
        Все
      </button>
      <button
        onClick={() => setFilter('completed')}
        disabled={currentFilter === 'completed'}
      >
        Завершенные
      </button>
      <button
        onClick={() => setFilter('incomplete')}
        disabled={currentFilter === 'incomplete'}
      >
        Незавершенные
      </button>
    </div>
  );
};

export default FilterButtons;