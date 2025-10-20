import React from 'react';
import { Wrench } from 'lucide-react';
import { MAINTENANCE_SCHEDULE } from '../data/ecobinData';

const MaintenanceGuide = () => {
  const colorMap = {
    blue: 'border-blue-500',
    green: 'border-green-500',
    orange: 'border-orange-500',
    purple: 'border-purple-500'
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
      <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
        <Wrench className="w-5 h-5 text-purple-600" />
        Recomendaciones de Mantenimiento
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(MAINTENANCE_SCHEDULE).map(([component, info]) => (
          <div
            key={component}
            className={`border-l-4 ${colorMap[info.color]} pl-4 py-2 bg-slate-50 rounded`}
          >
            <div className="font-semibold text-slate-700">{component}</div>
            <div className="text-sm text-slate-600 mt-1">
              <span className="font-medium">Frecuencia:</span> {info.frequency}
            </div>
            <div className="text-xs text-slate-500 mt-1">{info.tasks}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaintenanceGuide;